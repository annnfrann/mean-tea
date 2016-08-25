app.controller('shoppingcartController', function($scope, CartFactory){
  $scope.view = {}
  $scope.view.teas = CartFactory.cartItems()
  console.log($scope.view.teas)
  // get cartItems from the CartFactory and then iterate through those to populate the page
  // add the functionality to edit the quantity of teas ordered
  //also, get all the totals and add those together for the subtotal
})
