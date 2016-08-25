app.factory("CartFactory", function(){

return {
  cartTeas : [],
  cartQuantity : {number: 0},
  cartTotals: function(){
    return this.cartQuantity
    return this.cartTeas
    // return the total number of items in the cart
  },
  cartItems: function(){
    // return json of all items in cart
    return this.cartTeas
  }
}
})
