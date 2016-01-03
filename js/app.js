// product constructor and prototypes
var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

var Product = function(desc, image, views, clicks) {
  this.desc = desc;
  this.image = image;
  this.views = views;
  this.clicks = clicks;
};

// populate allProducts
for (var i = 0; i < productNames.length; i += 1) {
  console.log(productNames[i]);
  var newProduct;
  newProduct = new Product(productNames[i], 'img/' + productNames[i] + '.jpg', 0, 0);
  allProducts.push([productNames[i], newProduct]);
}
