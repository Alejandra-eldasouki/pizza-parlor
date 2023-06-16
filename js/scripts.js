// Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Prototype
Pizza.prototype.calculateTotal = function () {
  var initialCost = 5;
  var toppingsCost = this.toppings.length * 1.5;
  var sizeCost = 0;
  if (this.size === 'small') {
    sizeCost = 0;
  } else if (this.size === 'medium') {
    sizeCost = 2;
  } else if (this.size === 'large') {
    sizeCost = 4;
  }
  return initialCost + toppingsCost + sizeCost;
};

function addPizza() {
  var toppings = [];
  var toppingsCheckboxes = document.getElementById('toppings');
  for (var i = 0; i < toppingsCheckboxes.length; i++) {
    if (toppingsCheckboxes[i]) {
      toppings.push(toppingsCheckboxes[i].value);
    }
  }
  var size = document.querySelector("select[name='size']"),
    value;

  var pizza = new Pizza(toppings, size);
  var cost = pizza.calculateTotal();

  var pizzaList = document.getElementById('pizzaList');
  var li = document.createElement('li');
  li.innerHTML =
    'Pizza with ' + toppings.join(', ') + ' - ' + size + ' ($' + cost + ')';
  pizzaList.appendChild(li);
}

function toggleDeliveryForm() {
  var deliveryForm = document.getElementById('deliveryForm');
  if (deliveryForm.style.display === 'none') {
    deliveryForm.style.display = 'block';
  } else {
    deliveryForm.style.display = 'none';
  }
}

function submitDelivery() {
  var addressInput = document.getElementById('addressInput');
  var address = addressInput.value;

  console.log('Delivery address:', address);
}
