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
  },
  {
    id: 18,
    title: "Women's Evening Dress",
    price: 1999,
    image: "assets/img18.jpg",
  },
  {
    id: 3,
    title: "Unisex Perfume Set",
    price: 2499,
    image: "assets/img3.jpg",
  },
  {
    id: 4,
    title: "Kids' Cartoon Backpack",
    price: 1099,
    image: "assets/img4.jpg",
  },
  {
    id: 32,
    title: "Women's Tote Handbag",
    price: 1899,
    image: "assets/img32.jpg",
  },

  {
    id: 6,
    title: "Women's Silk Saree",
    price: 2999,
    image: "assets/img6.jpg",
  },
  {
    id: 7,
    title: "Women's Flat Sandals",
    price: 999,
    image: "assets/img7.jpg",
  },
  {
    id: 8,
    title: "Kids' Printed Shorts",
    price: 399,
    image: "assets/img8.jpg",
  },
  {
    id: 9,
    title: "Men's Formal Shoes",
    price: 2999,
    image: "assets/img9.jpg",
  },
  {
    id: 10,
    title: "Men's Slim Fit Jeans",
    price: 1299,
    image: "assets/img10.jpg",
  },
  {
    id: 11,
    title: "Women's Casual T-Shirt",
    price: 699,
    image: "assets/img11.jpg",
  },
  {
    id: 12,
    title: "Men's Sports Sando",
    price: 599,
    image: "assets/img12.jpg",
  },
  {
    id: 13,
    title: "Women's High-Heel Sandals",
    price: 1499,
    image: "assets/img13.jpg",
  },
  {
    id: 14,
    title: "Kids' Denim Shorts",
    price: 499,
    image: "assets/img14.jpg",
  },
  {
    id: 15,
    title: "Men's Casual Shoes",
    price: 1999,
    image: "assets/img15.jpg",
  },
  {
    id: 16,
    title: "Women's Pleated Skirt",
    price: 899,
    image: "assets/img16.jpg",
  },
  {
    id: 17,
    title: "Kids' School Backpack",
    price: 999,
    image: "assets/img17.jpg",
  },
  {
    id: 2,
    title: "Women's Printed Kurti",
    price: 1299,
    image: "assets/img2.jpg",
  },
  {
    id: 19,
    title: "Women's Sling Bag",
    price: 1299,
    image: "assets/img19.jpg",
  },
  {
    id: 20,
    title: "Men's Distressed Jeans",
    price: 1499,
    image: "assets/img20.jpg",
  },
  {
    id: 21,
    title: "Kids' Sports Shoes",
    price: 1499,
    image: "assets/img21.jpg",
  },
  {
    id: 22,
    title: "Women's Maxi Dress",
    price: 1899,
    image: "assets/img22.jpg",
  },
  {
    id: 23,
    title: "Kids' Graphic T-Shirt",
    price: 599,
    image: "assets/img23.jpg",
  },
  {
    id: 24,
    title: "Men's Leather Shoes",
    price: 2499,
    image: "assets/img24.jpg",
  },
  {
    id: 25,
    title: "Kids' Sneakers",
    price: 1299,
    image: "assets/img25.jpg",
  },
  {
    id: 26,
    title: "Men's Sando",
    price: 499,
    image: "assets/img26.jpg",
  },
  {
    id: 27,
    title: "Women's Cotton Saree",
    price: 1499,
    image: "assets/img27.jpg",
  },
  {
    id: 28,
    title: "Women's Graphic T-Shirt",
    price: 799,
    image: "assets/img28.jpg",
  },
  {
    id: 29,
    title: "Men's Polo T-Shirt",
    price: 999,
    image: "assets/img29.jpg",
  },
  {
    id: 30,
    title: "Kids' Party Skirt",
    price: 699,
    image: "assets/img30.jpg",
  },
  {
    id: 31,
    title: "Women's A-Line Skirt",
    price: 999,
    image: "assets/img31.jpg",
  },
  {
    id: 5,
    title: "Men's Formal Shirt",
    price: 1199,
    image: "assets/img5.jpg",
  },
  {
    id: 33,
    title: "Kids' Pleated Skirt",
    price: 599,
    image: "assets/img33.jpg",
  },
  {
    id: 34,
    title: "Women's Anarkali Kurti",
    price: 1599,
    image: "assets/img34.jpg",
  },
  {
    id: 35,
    title: "Men's Solid T-Shirt",
    price: 1099,
    image: "assets/img35.jpg",
  },
  {
    id: 36,
    title: "Men's Sports Shoes",
    price: 2999,
    image: "assets/img36.jpg",
  },
  {
    id: 37,
    title: "Men's Printed T-Shirt",
    price: 699,
    image: "assets/img37.jpg",
  },
  {
    id: 38,
    title: "Women's Designer Handbag",
    price: 3499,
    image: "assets/img38.jpg",
  },
  {
    id: 39,
    title: "Men's Solid T-Shirt",
    price: 799,
    image: "assets/img39.jpg",
  },
  {
    id: 40,
    title: "Kids' Cotton T-Shirt",
    price: 499,
    image: "assets/img40.jpg",
  },
];

const $productList = $("#productList");
const $cartItemsElement = $("#cartItems");
const $cartTotalElement = $("#cartTotal");
const $cartIcon = $("#cart-icon");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const productHTML = products
    .map(
      (product) => `
          <div class="product" data-id="${product.id}">
            <img src="${product.image}" alt="${
        product.title
      }" class="product-img">
            <div class="product-info">
              <h2 class="product-title">${product.title}</h2>
              <p class="product-price">₹${product.price.toFixed(2)}</p>
              <a class="add-to-cart" data-id="${product.id}">Add to cart</a>
            </div>
          </div>
        `
    )
    .join("");
  $productList.html(productHTML);

  $(".add-to-cart").on("click", addToCart);
}

$(document).on("click", ".product", function () {
  const productId = $(this).data("id");
  const product = products.find((p) => p.id === productId);

  if (product) {
    $("#modalImage").attr("src", product.image);
    $("#modalTitle").text(product.title);
    $("#modalPrice").text(`₹${product.price.toFixed(2)}`);

    getRecommendations(product.id);

    $("#productModal").fadeIn();
  }
});

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
  }
}

function removeFromCart(event) {
  const productID = parseInt($(event.target).data("id"));
  cart = cart.filter((item) => item.id !== productID);
  saveToLocalStorage();
  renderCartItems();
  calculateCartTotal();
  updateCartIcon();
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
} else {
  renderProducts();
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
  }, 10000);
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
