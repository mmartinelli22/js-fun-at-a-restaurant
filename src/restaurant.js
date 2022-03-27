

module.exports = {
   createRestaurant,
  addMenuItem,
  // removeMenuItem
}
function createRestaurant(name) {
var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
}
return restaurant;
};

function addMenuItem(restaurant , menuItem) {
  if (menuItem.type === 'breakfast') {
    restaurant.menus.breakfast.push(menuItem)
  };
  if (menuItem.type === 'lunch'){
  restaurant.menus.lunch.push(menuItem)
};
  if (menuItem.type === 'dinner') {
    restaraunt.menus.dinner.push(menuItem)
  };
};
