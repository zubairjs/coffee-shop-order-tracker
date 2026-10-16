const cutomerName = document.getElementById('customerName');
const coffeeOrder = document.getElementById('coffeeOrder');
const orderMessage = document.getElementById('orderMessage');
const orderList = document.getElementById('orderList');
const orders = [];

function submitOrder() {
  const name = cutomerName.value.trim();
  const drink = coffeeOrder.value.trim() || 'Americano';
  const time = new Date().toLocaleTimeString();

  if (!name) {
    orderMessage.textContent = 'Please enter a customer name.';
    return;
  }
  orders.push({ name, drink, time });
  orderMessage.textContent = `Thanks, ${name}! Your ${drink} is being prepared.`;
  renderOrders();
}

function renderOrders() {
  const recentOrders = orders.slice(-3);
  orderList.innerHTML = recentOrders.map(
    ({ name, drink, time }) => `<li>${name} ordered ${drink} at ${time}</li>`
  );
}

window.submitOrder = submitOrder;
