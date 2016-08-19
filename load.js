var AcmeStore = (function () {

  var categories;
  var types;
  var products;

return {

loadFiles: function () {
  Promise.all ([
    $.getJSON('categories.json'),
    $.getJSON('productTypes.json'),
    $.getJSON('productDetails.json')
    ]).then(function(data) {
      console.log(data)
    AcmeStore.assignDataToVariables(data);
    })
      .catch(function(error){
      })
    },

assignDataToVariables: function (data) {
  console.log(data)
  categories = data[0].categories
  types = data[1].types
  products = data[2].products[0]
  console.log("all my prodeucts", products)
  AcmeStore.categorySelection(categories, types, products);
  }

}


})(AcmeStore || {})
AcmeStore.loadFiles();
