var app = angular.module("meanTea", ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/storefront.html',
      controller: 'storefrontController'
    })
    .when("/cart", {
      templateUrl: 'templates/shoppingcart.html',
      controller: 'shoppingcartController'
    })
})
