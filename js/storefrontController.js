app.controller('storefrontController', function($scope, $http, CartFactory){
  $scope.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  $scope.quantity = 1
  $scope.view = {}
  $scope.view.cartTotal = 0
  $scope.getAllTeas = $http.get('tea.json').then(function(data){
    $scope.view.allTeas = data.data
  })
  $scope.addToCart = function(teaName, teaImage, teaCaffeine, teaIngredients, teaRating, teaPrice, teaQuantity){
    if (CartFactory.cartTeas.length != 0) {
      // change this from hard coded as index position zero
      console.log(CartFactory.cartTeas);
      console.log($scope.teasInCart);
      if (CartFactory.cartTeas[0].name == $scope.teasInCart.name) {
        console.log("OMFG MATCHERS!");
        teaQuantity = Number(teaQuantity);
        CartFactory.cartTeas[0].quantity += teaQuantity
        console.log(CartFactory.cartTeas[0].quantity);
        // only increase quantity
      }else {
        $scope.teasInCart = {}
        $scope.teasInCart.name = teaName
        $scope.teasInCart.image = teaImage
        $scope.teasInCart.caffeine = teaCaffeine
        $scope.teasInCart.ingredients = teaIngredients
        $scope.teasInCart.rating = teaRating
        $scope.teasInCart.price = teaPrice
        $scope.teasInCart.quantity = teaQuantity
        CartFactory.cartTeas.push($scope.teasInCart)
      }
    }else {
      $scope.teasInCart = {}
      $scope.teasInCart.name = teaName
      $scope.teasInCart.image = teaImage
      $scope.teasInCart.caffeine = teaCaffeine
      $scope.teasInCart.ingredients = teaIngredients
      $scope.teasInCart.rating = teaRating
      $scope.teasInCart.price = teaPrice
      $scope.teasInCart.quantity = teaQuantity
      CartFactory.cartTeas.push($scope.teasInCart)
    }
    // for loop -> if CartFactory.cartTeas[i].name == $scope.teasInCart.name
    // add $scope.teasInCart.quantity to CartFactory.cartTeas[i].quantity


    // add these to an object, and then push the object into the array in the factory

    $scope.view.cartTotal = CartFactory.cartQuantity.number += Number(teaQuantity)


    console.log("LOOK: ", $scope.teasInCart.name);
    console.log("LOOK: ", $scope.teasInCart.quantity);
  }
})
