class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
 }
 greetCustomer(name, isMorning = false) {
   var greeting;
   if (isMorning) {
     greeting = "Good morning,";
   } else {
     greeting = "Hello,"
   }
   return `${greeting} ${name}!`
 }
 checkForFood(menuItem) {
   var isOnMenu = false;
   var onMenuMessage = `Yes, we're serving ${menuItem.name} today!`;
   var notOnMenuMessage = `Sorry, we aren't serving ${menuItem.name} today.`
   if (menuItem.type === 'breakfast') {
  isOnMenu = this.restaurant.menus.breakfast.includes(menuItem)
   };
   if (menuItem.type === 'lunch'){
   isOnMenu = this.restaurant.menus.lunch.includes(menuItem)
 };
   if (menuItem.type === 'dinner') {
    isOnMenu = this.restaraunt.menus.dinner.includes(menuItem)
   };
if(isOnMenu) {
  return onMenuMessage;
} else {
  return notOnMenuMessage;
}
 }
}
module.exports = Chef;
