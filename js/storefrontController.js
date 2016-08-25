app.controller('storefrontController', function($scope, $http, CartFactory){
  $scope.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  $scope.quantity = 1
  $scope.view = {}
  $scope.view.cartTotal = 0
  $scope.getAllTeas = $http.get('tea.json').then(function(data){
    $scope.view.allTeas = data.data
  })
  $scope.addToCart = function(tea){
    if (!tea.quantity) {
      tea.quantity = 1
    } else {
      tea.quantity = Number(tea.quantity)
    }
    if(!CartFactory.cartTeas.length){
      CartFactory.cartTeas.push(tea);
    } else {
      for (var i = 0; i < CartFactory.cartTeas.length; i++) {
        if (CartFactory.cartTeas.indexOf(tea) === -1) {
          CartFactory.cartTeas.push(tea);
          break
        } else {
          CartFactory.cartTeas[i].quantity += (Number(tea.quantity) + 1)
          // find out why you had to add one more?
          // but it works fine when you just hit the add button
          break
        }
      }
    }
    $scope.view.cartTotal = CartFactory.cartQuantity.number += Number(tea.quantity)
  }
})
