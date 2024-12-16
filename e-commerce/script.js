let cart = [];
let total = 0;

document.querySelectorAll('.addToCartButton').forEach(button => {
  button.addEventListener('click', function () {
    const productId = this.getAttribute('data-id');
    const productName = this.getAttribute('data-name');
    const productPrice = parseFloat(this.getAttribute('data-price'));

    
    cart.push({ id: productId, name: productName, price: productPrice });

    updateCartDisplay();
  });
});

document.getElementById('viewCartButton').addEventListener('click', function () {
  document.getElementById('cartModal').style.display = 'flex';
  updateCartDisplay();
});

document.getElementById('closeCartButton').addEventListener('click', function () {
  document.getElementById('cartModal').style.display = 'none';
});

document.getElementById('checkoutButton').addEventListener('click', function () {
  alert('Checkout successful!');
  cart = [];
  total = 0;
  updateCartDisplay();
  document.getElementById('cartModal').style.display = 'none';
});

function updateCartDisplay() {
  const cartItemsList = document.getElementById('cartItemsList');
  const totalAmount = document.getElementById('totalAmount');
  cartItemsList.innerHTML = '';

  total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalAmount.innerHTML = `Total: $${total.toFixed(2)}`;
  document.getElementById('viewCartButton').textContent = `View Cart (${cart.length})`;
}
