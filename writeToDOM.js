var AcmeStore = (function (acmeStore) {

acmeStore.addProductsToDOM = function (selectedCategory, matchingProductsArray, matchingTypesArray) {
console.log("selectedCategory", selectedCategory)
console.log("types", matchingTypesArray)
console.log("products", matchingProductsArray)

var countIndex = 0;
var output = ``
matchingProductsArray.forEach(function(thing, index){
  output += `<div class="productCards col-md-4">
        <h3>${selectedCategory.name}</h3>

        <h6>${matchingTypesArray[countIndex].name}</h6>

        <h6>${thing.name}</h6>
        <h6>${thing.description}</h6>
      </div>
    `
    if (index % 3 ===2){
      countIndex++
    }
})


  $("#productCards").html(output)
}

return acmeStore


})(AcmeStore || {})
