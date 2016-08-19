var AcmeStore = (function (acmeStore) {

  acmeStore.categorySelection = function (categories, types, products) {

    $("#categoryDropdown").change(function (evt) {
      var current = parseInt($("#categoryDropdown").val())

      var matchingProducts = [];
      var matchingTypes = [];
      var selectedCategory;
      console.log(categories)

      for (var i = types.length - 1; i >= 0; i--) {
        if (types[i].category === current) {
          matchingTypes.push(types[i])
        }
       }

      for(key in products){
        console.log(products[key]);

        if (products[key].type === current) {
          matchingProducts.push(products[key])
        }
      }

      for (var i = categories.length - 1; i >= 0; i--) {

        if (categories[i].id === current){
           selectedCategory = categories[i]
      }
      }

      console.log(matchingTypes)
      console.log(matchingProducts)

    AcmeStore.addProductsToDOM(selectedCategory, matchingProducts, matchingTypes)

      })
  }

return acmeStore

})(AcmeStore || {})

