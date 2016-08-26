app.controller('shoppingcartController', function($scope, CartFactory){
  $scope.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  $scope.view = {}
  $scope.view.teas = CartFactory.cartItems()
  function orderTotal(total, num) {
    return total + num;
  }
  var prices = []
  for (var i = 0; i < $scope.view.teas.length; i++) {
    prices.push(($scope.view.teas[i].quantity*$scope.view.teas[i].price)/100)
  }
  function getOrderTotal(item) {
    var total = prices.reduce(orderTotal);
    return total
  }
  $scope.view.orderTotal = getOrderTotal()

  $scope.removeFromCart = function(input){
    $scope.view.orderTotal = $scope.view.orderTotal - ($scope.view.teas[input].price / 100)
    $scope.view.teas.splice(input, 1)
  }
  $scope.updateQuantity = function(index, newQuantity){
    var oldPrice = $scope.view.teas[index].price/100 * $scope.view.teas[index].quantity
    console.log(oldPrice);
    $scope.view.teas[index].quantity = newQuantity
    $scope.view.orderTotal = $scope.view.orderTotal - oldPrice + (newQuantity * $scope.view.teas[index].price) /100
  }
})
