let header = $("header");
$(window).on("scroll", () => {
  header.toggleClass("shadow", $(window).scrollTop() > 0);
});
const products = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    price: 899,
    image: "assets/img1.jpg",
    description:
      "A versatile and stylish men's casual shirt made from soft cotton fabric. Perfect for everyday wear with a comfortable fit.",
  },
  {
    id: 18,
    title: "Women's Evening Dress",
    price: 1999,
    image: "assets/img18.jpg",
    description:
      "An elegant women's evening dress designed with a flattering silhouette. Ideal for formal occasions, this dress will make you stand out.",
  },
  {
    id: 3,
    title: "Unisex Perfume Set",
    price: 2499,
    image: "assets/img3.jpg",
    description:
      "A luxurious unisex perfume set featuring a blend of captivating scents for both men and women. Long-lasting fragrance for any occasion.",
  },
  {
    id: 4,
    title: "Kids' Cartoon Backpack",
    price: 1099,
    image: "assets/img4.jpg",
    description:
      "A fun and colorful kids' backpack featuring popular cartoon characters. Spacious and durable, perfect for school or travel.",
  },
  {
    id: 32,
    title: "Women's Tote Handbag",
    price: 1899,
    image: "assets/img32.jpg",
    description:
      "A chic women's tote handbag crafted from high-quality material. Spacious and stylish, ideal for carrying daily essentials.",
  },
  {
    id: 6,
    title: "Women's Silk Saree",
    price: 2999,
    image: "assets/img6.jpg",
    description:
      "A luxurious women's silk saree with intricate embroidery, perfect for weddings and festive occasions. Soft and comfortable to wear.",
  },
  {
    id: 7,
    title: "Women's Flat Sandals",
    price: 999,
    image: "assets/img7.jpg",
    description:
      "Stylish and comfortable women's flat sandals designed for everyday wear. Ideal for the summer, featuring a trendy design.",
  },
  {
    id: 8,
    title: "Kids' Printed Shorts",
    price: 399,
    image: "assets/img8.jpg",
    description:
      "Cute and comfortable kids' printed shorts made from soft cotton fabric. Perfect for casual outings or playtime.",
  },
  {
    id: 9,
    title: "Men's Formal Shoes",
    price: 2999,
    image: "assets/img9.jpg",
    description:
      "Elegant men's formal shoes crafted from premium leather, ideal for office wear or formal events. Durable and stylish.",
  },
  {
    id: 10,
    title: "Men's Slim Fit Jeans",
    price: 1299,
    image: "assets/img10.jpg",
    description:
      "Trendy men's slim fit jeans made from high-quality denim. Offers a modern, sleek look while providing maximum comfort.",
  },
  {
    id: 11,
    title: "Women's Casual T-Shirt",
    price: 699,
    image: "assets/img11.jpg",
    description:
      "A comfortable women's casual T-shirt made from soft cotton fabric. Versatile and perfect for casual outings or lounging.",
  },
  {
    id: 12,
    title: "Men's Sports Sando",
    price: 599,
    image: "assets/img12.jpg",
    description:
      "Men's sports sando designed for active wear. Breathable and lightweight, perfect for working out or outdoor activities.",
  },
  {
    id: 13,
    title: "Women's High-Heel Sandals",
    price: 1499,
    image: "assets/img13.jpg",
    description:
      "Elegant women's high-heel sandals, perfect for formal occasions or a night out. Designed for comfort and style.",
  },
  {
    id: 14,
    title: "Kids' Denim Shorts",
    price: 499,
    image: "assets/img14.jpg",
    description:
      "Durable kids' denim shorts with a classic look. Comfortable for all-day wear, perfect for both casual and semi-formal settings.",
  },
  {
    id: 15,
    title: "Men's Casual Shoes",
    price: 1999,
    image: "assets/img15.jpg",
    description:
      "Stylish men's casual shoes that offer comfort and durability. Perfect for everyday wear with a versatile design.",
  },
  {
    id: 16,
    title: "Women's Pleated Skirt",
    price: 899,
    image: "assets/img16.jpg",
    description:
      "A fashionable women's pleated skirt, ideal for both casual and formal occasions. Made with lightweight fabric for a comfortable fit.",
  },
  {
    id: 17,
    title: "Kids' School Backpack",
    price: 999,
    image: "assets/img17.jpg",
    description:
      "A sturdy and spacious kids' school backpack with multiple compartments. Designed for comfort and functionality for everyday school use.",
  },
  {
    id: 2,
    title: "Women's Printed Kurti",
    price: 1299,
    image: "assets/img2.jpg",
    description:
      "A beautiful women's printed kurti, perfect for casual outings or festive occasions. Made from soft cotton for comfort and breathability.",
  },
  {
    id: 19,
    title: "Women's Sling Bag",
    price: 1299,
    image: "assets/img19.jpg",
    description:
      "A stylish women's sling bag crafted from premium material. Perfect for carrying essentials on the go, with an adjustable strap for comfort.",
  },
  {
    id: 20,
    title: "Men's Distressed Jeans",
    price: 1499,
    image: "assets/img20.jpg",
    description:
      "Trendy men's distressed jeans with a modern, worn-in look. Ideal for casual outings, offering both style and comfort.",
  },
  {
    id: 21,
    title: "Kids' Sports Shoes",
    price: 1499,
    image: "assets/img21.jpg",
    description:
      "Durable and comfortable kids' sports shoes, designed for active play. Lightweight with a secure fit, perfect for outdoor activities.",
  },
  {
    id: 22,
    title: "Women's Maxi Dress",
    price: 1899,
    image: "assets/img22.jpg",
    description:
      "Elegant women's maxi dress featuring a flowing design. Ideal for special occasions or casual outings, offering both comfort and style.",
  },
  {
    id: 23,
    title: "Kids' Graphic T-Shirt",
    price: 599,
    image: "assets/img23.jpg",
    description:
      "Fun and colorful kids' graphic T-shirt made from soft cotton fabric. Perfect for playtime or casual outings.",
  },
  {
    id: 24,
    title: "Men's Leather Shoes",
    price: 2499,
    image: "assets/img24.jpg",
    description:
      "Premium men's leather shoes designed for formal occasions. Durable, stylish, and perfect for office wear or evening events.",
  },
  {
    id: 25,
    title: "Kids' Sneakers",
    price: 1299,
    image: "assets/img25.jpg",
    description:
      "Comfortable and durable kids' sneakers, ideal for active play. Features a secure fit and stylish design.",
  },
  {
    id: 26,
    title: "Men's Sando",
    price: 499,
    image: "assets/img26.jpg",
    description:
      "A comfortable men's sando designed for casual wear. Perfect for summer or as an inner layer for sports.",
  },
  {
    id: 27,
    title: "Women's Cotton Saree",
    price: 1499,
    image: "assets/img27.jpg",
    description:
      "A stylish and comfortable women's cotton saree, perfect for everyday wear or festive occasions. Lightweight and breathable.",
  },
  {
    id: 28,
    title: "Women's Graphic T-Shirt",
    price: 799,
    image: "assets/img28.jpg",
    description:
      "Trendy women's graphic T-shirt featuring a bold print. Soft cotton fabric makes it comfortable for casual wear.",
  },
  {
    id: 29,
    title: "Men's Polo T-Shirt",
    price: 999,
    image: "assets/img29.jpg",
    description:
      "Classic men's polo T-shirt made from high-quality cotton. A must-have wardrobe staple for a casual yet refined look.",
  },
  {
    id: 30,
    title: "Kids' Party Skirt",
    price: 699,
    image: "assets/img30.jpg",
    description:
      "A cute kids' party skirt designed for special occasions. Made with soft fabric for a comfortable and stylish look.",
  },
  {
    id: 31,
    title: "Women's A-Line Skirt",
    price: 999,
    image: "assets/img31.jpg",
    description:
      "A flattering women's A-line skirt, ideal for both casual and semi-formal occasions. Made with high-quality fabric for comfort and style.",
  },
  {
    id: 5,
    title: "Men's Formal Shirt",
    price: 1199,
    image: "assets/img5.jpg",
    description:
      "A smart men's formal shirt designed for office wear or formal events. Made from breathable fabric for all-day comfort.",
  },
  {
    id: 33,
    title: "Kids' Pleated Skirt",
    price: 599,
    image: "assets/img33.jpg",
    description:
      "A stylish and comfortable kids' pleated skirt, perfect for school or casual outings. Soft fabric for all-day wear.",
  },
  {
    id: 34,
    title: "Women's Anarkali Kurti",
    price: 1599,
    image: "assets/img34.jpg",
    description:
      "A beautiful women's Anarkali kurti with intricate designs, ideal for festive occasions. Made from luxurious fabric for a regal look.",
  },
  {
    id: 35,
    title: "Men's Solid T-Shirt",
    price: 1099,
    image: "assets/img35.jpg",
    description:
      "A classic men's solid T-shirt that can be dressed up or down. Comfortable and versatile, perfect for any casual outing.",
  },
  {
    id: 36,
    title: "Men's Sports Shoes",
    price: 2999,
    image: "assets/img36.jpg",
    description:
      "High-performance men's sports shoes designed for comfort and durability. Ideal for running, workouts, and outdoor activities.",
  },
  {
    id: 37,
    title: "Men's Printed T-Shirt",
    price: 699,
    image: "assets/img37.jpg",
    description:
      "A trendy men's printed T-shirt featuring a unique design. Soft and breathable fabric perfect for everyday casual wear.",
  },
  {
    id: 38,
    title: "Women's Designer Handbag",
    price: 3499,
    image: "assets/img38.jpg",
    description:
      "A luxurious women's designer handbag crafted with premium materials. Spacious and stylish, perfect for any occasion.",
  },
  {
    id: 39,
    title: "Men's Solid T-Shirt",
    price: 799,
    image: "assets/img39.jpg",
    description:
      "A versatile men's solid T-shirt made from comfortable fabric. Ideal for layering or as a standalone piece for casual wear.",
  },
  {
    id: 40,
    title: "Kids' Cotton T-Shirt",
    price: 499,
    image: "assets/img40.jpg",
    description:
      "A soft and breathable kids' cotton T-shirt, perfect for daily wear or casual outings. Comfortable and stylish.",
  },
];

const $productList = $("#productList");
const $cartItemsElement = $("#cartItems");
const $cartTotalElement = $("#cartTotal");
const $cartIcon = $("#cart-icon");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  fetch("/products")
    .then((response) => response.json())
    .then((products) => {
      const productHTML = products
        .map(
          (product) => `
      <div class="product-catalog">
          <div class="product" data-id="${product.id}">
            <img src="${product.image}" alt="${
            product.title
          }" class="product-img">
            <div class="product-info">
              <h2 class="product-title">${product.title}</h2>
              <p class="product-price">₹${Number(product.price).toFixed(2)}</p>
            </div>
          </div>
          <a class="add-to-cart" data-id="${product.id}">Add to cart</a>
          </div>
        `
        )
        .join("");
      $productList.html(productHTML);

      $(".add-to-cart").on("click", function (event) {
        const productID = parseInt($(event.target).data("id"));
        const product = products.find((product) => product.id === productID);

        if (product) {
          const existingItem = cart.find((item) => item.id === productID);

          if (existingItem) {
            existingItem.quantity++;
          } else {
            const cartItem = {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            };
            cart.push(cartItem);
          }
          $(event.target).text("Added");
          saveToLocalStorage();
          renderCartItems();
          calculateCartTotal();
          updateCartIcon(); // Ensure cart icon is updated after adding
          getFrequently();
        }
      });

      // Attach product array to modal click event handler
      $(".product").on("click", function () {
        const productId = $(this).data("id");
        const product = products.find((p) => p.id === productId); // Now products is passed to the event handler

        if (product) {
          $("#modalImage").attr("src", "");
          $("#modalTitle").text("");
          $("#modalPrice").text("");
          $("#modalDescription").text("");
          $("#recommendedProducts").html("");
          // Show the clicked product's details in the modal
          $("#modalImage").attr("src", product.image);
          $("#modalTitle").text(product.title);
          $("#modalPrice").text(`₹${Number(product.price).toFixed(2)}`);
          $("#modalDescription").text(product.description);
          $("#recommendedProducts").html(
            '<div class="d-flex justify-content-center align-items-center w-100" style="grid-column: span 3; height: 100px;">' +
              '<div class="spinner-border text-dark" role="status"></div>' +
              "</div>"
          );

          // Fetch recommendations for the clicked product (using its image URL)
          getRecommendations(product.id);
          // Show modal
          $("#productModal").fadeIn();
        }
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
}

// Event listener to close modal
$("#closeModal").on("click", function () {
  $("#productModal").fadeOut();
});

function addToCart(event) {
  const productID = parseInt($(event.target).data("id"));
  const product = products.find((product) => product.id === productID);

  if (product) {
    const existingItem = cart.find((item) => item.id === productID);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      cart.push(cartItem);
    }
    $(event.target).text("Added");
    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
    getFrequently();
  }
}

function removeFromCart(event) {
  const productID = parseInt($(event.target).data("id"));
  cart = cart.filter((item) => item.id !== productID);
  saveToLocalStorage();
  renderCartItems();
  calculateCartTotal();
  updateCartIcon();
  getFrequently();
}

function changeQuantity(event) {
  const productID = parseInt($(event.target).data("id"));
  const quantity = parseInt($(event.target).val());

  if (quantity > 0) {
    const cartItem = cart.find((item) => item.id === productID);
    if (cartItem) {
      cartItem.quantity = quantity;
      saveToLocalStorage();
      calculateCartTotal();
      updateCartIcon();
      getFrequently();
    }
  }
}

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCartItems() {
  if (cart.length === 0) {
    $cartItemsElement.html("<p>Your cart is empty</p>");
    return;
  }

  const cartItemsHTML = cart
    .map(
      (item) => `
          <div class="cart-item">
            <img src="/${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
              <h2 class="cart-item-title">${item.title}</h2>
              <input
                class="cart-item-quantity"
                type="number"
                min="1"
                value="${item.quantity}"
                data-id="${item.id}"
              />
            </div>
            <h2 class="cart-item-price">₹${item.price.toFixed(2)}</h2>
            <button class="remove-from-cart" data-id="${
              item.id
            }">Remove</button>
          </div>
        `
    )
    .join("");
  $cartItemsElement.html(cartItemsHTML);

  $(".remove-from-cart").on("click", removeFromCart);

  $(".cart-item-quantity").on("change", changeQuantity);
}

function calculateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $cartTotalElement.text(`Total: ₹${total.toFixed(2)}`);
}

function updateCartIcon() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  $cartIcon.attr("data-quantity", totalQuantity === 0 ? 0 : totalQuantity);
}

if (window.location.pathname.includes("cart.html")) {
  renderCartItems();
  calculateCartTotal();
  getFrequently();
} else {
  renderProducts();
  updateCartIcon();
}

$(window).on("storage", updateCartIcon);

updateCartIcon();
$("#productModal").hide();

function getRecommendations(productId) {
  setTimeout(() => {
    fetch(`/recommendations/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          showRecommendedProducts(data);
        } else {
          $("#recommendedProducts").html(
            "<p>No recommendations available.</p>"
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
      });
  }, 5000);
}

function showRecommendedProducts(recommendedProducts) {
  let recommendedHTML = "";

  recommendedProducts.forEach((file) => {
    const imagePath = `/${file}`;
    recommendedHTML += `
      <div class="recommended-product">
        <img src="${imagePath}" alt="Recommended Product" class="recommended-img"/>
      </div>
    `;
  });

  $("#recommendedProducts").html(recommendedHTML);
}

function getFrequently() {
  // Check if the cart is empty
  if (cart.length === 0) {
    // Clear recommendations if the cart is empty
    $("#recommendedfrequently").hide();
    $("#frequent").hide();
    return;
  }
  const cartItemIds = cart.map((item) => item.id); // Assuming `cart` is an array of cart items
  fetch("/recommend-frequently", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartData: cartItemIds, // Send the cart item IDs to the server
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Recommendations received:", data); // Log the data received
      if (data.length > 0) {
        showRecommendations(data); // Assuming the response contains an array of recommendations
      } else {
        $("#recommendedfrequently").html();
      }
    })
    .catch((error) => {
      console.error("Error fetching recommendations:", error);
    });
}

function showRecommendations(recommendations) {
  let recommendedHTML = "";

  // Group recommendations by antecedent
  const groupedRecommendations = recommendations.reduce((group, rec) => {
    rec.antecedent.forEach((antecedent) => {
      if (!group[antecedent]) {
        group[antecedent] = [];
      }
      group[antecedent].push(rec.consequent);
    });
    return group;
  }, {});

  // Render HTML for each antecedent and its associated consequents
  for (const antecedent in groupedRecommendations) {
    const antecedentProduct = products.find(
      (p) => p.id === parseInt(antecedent)
    );
    const consequents = groupedRecommendations[antecedent];

    recommendedHTML += `
      <div class="recommended-frequently">
        <img src="/${antecedentProduct.image}" alt="${antecedentProduct.title}" class="frequently-img" />
        <i class='bx bx-plus-medical'></i>
    `;

    // Check if there's more than one consequent to add the + icon
    consequents.forEach((consequentList, index) => {
      consequentList.forEach((consequent, consequentIndex) => {
        const consequentProduct = products.find(
          (p) => p.id === parseInt(consequent)
        );

        // If it's the last item, do not append the + icon
        recommendedHTML += `
          <li>
            <img src="/${consequentProduct.image}" alt="${consequentProduct.title}" class="frequently-img" />
          </li>`;

        // Only add the + icon if this is not the last consequent
        if (
          index < consequents.length - 1 ||
          consequentIndex < consequentList.length - 1
        ) {
          recommendedHTML += `<i class='bx bx-plus-medical'></i>`;
        }
      });
    });

    recommendedHTML += `</div>`; // Closing the div for the antecedent
  }

  // Inject recommended products HTML into the page
  $("#recommendedfrequently").html(recommendedHTML);
}
