let header = $("header");
$(window).on("scroll", () => {
  header.toggleClass("shadow", $(window).scrollTop() > 0);
});

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
              <p class="product-price">₹${product.price.toFixed(2)}</p>
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
          $("#modalPrice").text(`₹${product.price.toFixed(2)}`);
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
