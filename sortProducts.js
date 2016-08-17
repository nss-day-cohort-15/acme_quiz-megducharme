var AcmeStore = (function (acmeStore) {

acmeStore.categorySelection = function (categories, types, products) {

  $("#categoryDropdown").change(function (evt) {
    var current = parseInt($("#categoryDropdown").val())

    var matchingProducts = [];
    var matchingTypes = [];
    console.log(matchingTypes)
    console.log(matchingProducts)

  for (var i = types.length - 1; i >= 0; i--) {
    if (types[i].category === current) {
      matchingTypes.push(types[i])
    }
   }

  for(key in products){
    (products[key].type);

    if (products[key].type === current) {
      matchingProducts.push(products[key])
    }
  }
})

return acmeStore

}(AcmeStore || {})

