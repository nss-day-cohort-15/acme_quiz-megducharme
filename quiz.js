console.log("things are connected")

var categories;
var types;
var products;

function readFiles () {

Promise.all ([
  $.getJSON('categories.json'),
  $.getJSON('productTypes.json'),
  $.getJSON('productDetails.json')
  ]).then(function(data) {
    showData(data);
  })
  .catch(function(error){
    console.log(error)
  })
}
readFiles()

function showData(data) {
    console.log(data)
  categories = data[0].categories
  types = data[1].types
  products = data[2].products[0]
    console.log(products)
  }

  //event listner for the dropdown listening to which dropdown selection is selected

  $("#categoryDropdown").change(function (evt) {
    var current = parseInt($("#categoryDropdown").val())
      console.log("change event is heard")
      console.log(current)
      console.log(products)

    var matchingProducts = [];
    var matchingTypes = [];

  for (var i = types.length - 1; i >= 0; i--) {
    console.log(current, types[i].category)
    if (types[i].category === current) {
      matchingTypes.push(types[i])
        console.log(matchingTypes)
    }
   }

  for(key in products){
    (products[key].type);

    if (products[key].type === current) {
      matchingProducts.push(products[key])
        console.log(matchingProducts)
    }
  }

function writeProductsToPage () {
  if
}


})


