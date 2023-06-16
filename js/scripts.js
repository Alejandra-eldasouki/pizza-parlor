// Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Prototype
Pizza.prototype.calculateTotal = function () {
  return (
    5 +
    this.toppings.length * 0.5 +
    (this.size === 'personal' ? 0 : this.size === 'medium' ? 2 : 4)
  );
};

function addPizza() {
  var toppings = [];
  var checkboxes = document.querySelector(
    '.toppings input[type="checkbox"]:checked'
  );
  checkboxes.forEach(function (checkbox) {
    toppings.push(checkbox.value);
  });

  var size = document.querySelector('size input[type="radio"]:checked').value;

  var pizza = new Pizza(toppings, size);

  var cost = pizza;
}
