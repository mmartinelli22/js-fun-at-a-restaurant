
module.exports = {
  takeOrder,
   refundOrder,
   listItems,
  searchOrder
}
function takeOrder(menuItem,orderList) {
  if(orderList.length < 3){
    orderList.push(menuItem)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  var newDeliveryOrder = deliveryOrders.find(function (deliveryOrder) {
    return orderNumber === deliveryOrder.orderNumber
  });

  var index = deliveryOrders.indexOf(newDeliveryOrder);

  if (index > -1) {
    deliveryOrders.splice(index, 1);
  }
};
function listItems(deliveryOrders) {
  var items = deliveryOrders.map(function (order) {
    return order.item;
  });

  var stringItems = "";

  for (var i = 0; i < items.length; i++) {
    if (i === (items.length - 1)) {
      stringItems = stringItems + items[i]
    } else {
      stringItems = stringItems + items[i] + ", ";
    }
  }

  return stringItems;

};
function searchOrder(deliveryOrders, item) {
  var orderToFind = deliveryOrders.find(function (deliveryOrder) {
    return item === deliveryOrder.item
  });

  return deliveryOrders.includes(orderToFind);
};
