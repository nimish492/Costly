import sys
import json
import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

def apriori_algorithm(transaction_data, cart_data, min_support=0.01, min_confidence=0.5):
    # Convert transaction data into a DataFrame for the Apriori algorithm
    df = pd.DataFrame(transaction_data)
    
    # Replace applymap with map for element-wise transformation
    df = df.apply(lambda x: list(set(x)) if isinstance(x, list) else x) 
    
    # Perform one-hot encoding of the DataFrame
    df_encoded = pd.get_dummies(df.stack()).groupby(level=0).sum().astype(bool)  # Fix sum error
    
    # Find frequent itemsets using Apriori algorithm
    frequent_itemsets = apriori(df_encoded, min_support=min_support, use_colnames=True)
    
    if frequent_itemsets.empty:
        return []
    
    # Generate association rules
    rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=min_confidence, num_itemsets=10)
    
    recommendations = []
    seen_combinations = set()  # Set to keep track of seen antecedent-consequent pairs

    # Loop through each product in the cart
    for product in cart_data:
        # Find the rules that have the product in the antecedent
        for index, row in rules.iterrows():
            antecedent_items = list(row['antecedents'])
            consequent_items = list(row['consequents'])

            # Ensure the antecedent contains ONLY the cart item (i.e., product)
            if product in antecedent_items:
                for item in consequent_items:
                    # Only recommend if the item is NOT already in the cart and the combination is unique
                    if item not in cart_data:
                        combination_key = (tuple(antecedent_items), tuple([item]))  # Create a unique key for the combination
                        if combination_key not in seen_combinations:
                            recommendations.append({
                                "antecedent": antecedent_items,
                                "consequent": [item],
                                "confidence": row['confidence']
                            })
                            seen_combinations.add(combination_key)  # Mark this combination as seen
    
    return recommendations


# Read transaction data and cart data from stdin (from Node.js server)
if __name__ == "__main__":
    input_data = json.loads(sys.stdin.read())
    transaction_data = input_data['transaction_data']
    cart_data = input_data['cart_data']
    
    # Get recommendations from the Apriori algorithm
    recommendations = apriori_algorithm(transaction_data, cart_data)
    
    # Print recommendations as a JSON string
    print(json.dumps(recommendations))
