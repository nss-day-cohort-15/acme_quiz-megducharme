var AcmeStore = (function (acemeStore) {

  var categories;
  var types;
  var products;


acemeStore.loadFiles = function () {
  Promise.all ([
    $.getJSON('categories.json'),
    $.getJSON('productTypes.json'),
    $.getJSON('productDetails.json')
    ]).then(function(data) {
      showData(data);
    })
      .catch(function(error){
      })
    }


acemeStore.assignDataToVariables = function (data) {
  categories = data[0].categories
  types = data[1].types
  products = data[2].products[0]
  }


return acemeStore


})(AcmeStore || {})
AcmeStore.loadFiles();
