var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

var itemNP = generateCartItem(item)

getCart().push(item)

return `${item.itemName} has been added to your cart.`
}

function generateCartItem(itemName) {
  return itemName = itemName,
  itemPrice = getRandomInt(1, 100)
  }

function getRandomInt(min, max) {
  return math.floor(math.random() * (max-min + 1) + min)
}

function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
