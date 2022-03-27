function nameMenuItem() {

}


module.exports = {
  nameMenuItem,
  createMenuItem,
   addIngredients,
  formatPrice,
   decreasePrice,
  createRecipe
}
function nameMenuItem(item) {
  var itemName = "Delicious " + item;
  return itemName;
};
function createMenuItem(name, price, type) {
  menuItem ={
    name: name,
    price: price,
    type: type
  }
return menuItem;
};
function addIngredients(ingName , lisIngredients){
  if(lisIngredients.includes(ingName)) {
    return;
  }
  lisIngredients.push(ingName);
}

function formatPrice(price){

  menuItem ={
  price: price
};


return "$" + menuItem.price;
};
function decreasePrice(price) {
   menuItem = {
     price: price

  }
return menuItem.price*0.90
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  };
  return recipe;
}
