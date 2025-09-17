
//wishlist.js
document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".fc-product-card");

  productCards.forEach((card) => {
    // Quantity logic
    const plusBtn = card.querySelector(".fc-qty-plus");
    const minusBtn = card.querySelector(".fc-qty-minus");
    const qtyValue = card.querySelector(".fc-qty-value");
    let quantity = 1;

    if (plusBtn && minusBtn && qtyValue) {
      plusBtn.addEventListener("click", () => {
        quantity++;
        qtyValue.textContent = quantity;
      });

      minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          qtyValue.textContent = quantity;
        }
      });
    }

    // Wishlist toggle
    const wishlistBtn = card.querySelector(".fc-wishlist-btn i");
    if (wishlistBtn) {
      wishlistBtn.addEventListener("click", () => {
        wishlistBtn.classList.toggle("fas");
        wishlistBtn.classList.toggle("far");
        wishlistBtn.style.color = wishlistBtn.classList.contains("fas")
          ? "#ef4444"
          : "#374151";
      });
    }

    // Color & Size options
    const optionButtons = card.querySelectorAll(".fc-option-btn");
    optionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.querySelectorAll(".fc-option-btn").forEach((b) => {
          b.classList.remove("selected");
          b.style.backgroundColor = "#fff";
          b.style.color = "#000";
        });
        btn.classList.add("selected");
        btn.style.backgroundColor = "#1f2937";
        btn.style.color = "#fff";
      });
    });
  });
});

//checkout.js
// Payment Method Toggle
const codBox = document.getElementById("codBox");
const qrBox = document.getElementById("qrBox");
const cod = document.getElementById("cod");
const qr = document.getElementById("qr");

codBox.onclick = () => {
  codBox.classList.add("selected");
  qrBox.classList.remove("selected");
  cod.checked = true;
};

qrBox.onclick = () => {
  qrBox.classList.add("selected");
  codBox.classList.remove("selected");
  qr.checked = true;
};

// Form Validation
const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let addr = document.getElementById("addr").value.trim();
  let loc = document.getElementById("loc").value.trim();

  if (!name || !email || !phone || !addr || !loc) {
    msg.style.display = "block";
    msg.style.color = "red";
    msg.textContent = "Please fill all required fields.";
  } else {
    msg.style.display = "block";
    msg.style.color = "green";
    msg.textContent = "Your order has been placed!";
  }
});

// Load Order from LocalStorage
document.addEventListener("DOMContentLoaded", function () {
  const order = JSON.parse(localStorage.getItem("orderDetails"));
  if (!order) return;
  document.getElementById("oImg").src = order.productImg;
  document.getElementById("oName").textContent = order.productName;
  document.getElementById("oColor").textContent = order.selectedColor;
  document.getElementById("oSize").textContent = order.selectedSize;
  document.getElementById("oQty").textContent = order.quantity;
  document.getElementById("oPrice").textContent = `Rs. ${order.price}`;
  document.getElementById("oSub").textContent = `Rs. ${order.price}`;
  document.getElementById("oTotal").textContent = `Rs. ${order.total}`;
});
