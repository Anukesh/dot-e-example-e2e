var minPrice;
var maxPrice;
var searchText = '';
var currentPage = 1;
var paginationText = '';
var totalPage = 1;
var dataLength = 0;

const anArray = [ { color: "white", collection: "living room", imgSrc: './assets/sofa-white.jpg', name: "Coombes", category: "sofa", price: 2600 },
{ color: "grey", collection: "living room", imgSrc: './assets/sofa-grey.jpg', name: "Grey Sofa", category: "sofa", price: 3200 },
{ color: "yellow", collection: "living room", imgSrc: './assets/beige_shoe_rack.jpg', name: "Beige Shoe Rack", category: "wardrobe", price: 600 },
{ color: "black", collection: "bed room", imgSrc: './assets/black_chair.jpg', name: "Black Chair", category: "Table & Chair", price: 200 },
{ color: "blue", collection: "bed room", imgSrc: './assets/blue_wardrobe.webp', name: "Blue Almirah", category: "wardrobe", price: 2200 },
{ color: "brown", collection: "living room", imgSrc: './assets/brown_dinning_set.jpeg', name: "Wooden Dinning Table", category: "Dinning Set", price: 4200 },
{ color: "brown", collection: "kids room", imgSrc: './assets/brown_rocking_chair.jpg', name: "Brown Rocking Chair", category: "Table & Chair", price: 600 },
{ color: "green", collection: "living room", imgSrc: './assets/green_table.jpg', name: "Green Vintage Table", category: "Tables & Chair", price: 200 },
{ color: "brown", collection: "living room", imgSrc: './assets/brown_dinning_set.jpeg', name: "Wooden Dinning Table", category: "Dinning Set", price: 4200 },
{ color: "brown", collection: "kids room", imgSrc: './assets/brown_rocking_chair.jpg', name: "Brown Rocking Chair", category: "Table & Chair", price: 600 },
{ color: "green", collection: "living room", imgSrc: './assets/green_table.jpg', name: "Green Vintage Table", category: "Tables & Chair", price: 200 },
  { color: "white", collection: "living room", imgSrc: './assets/sofa-white.jpg', name: "Coombes", category: "sofa", price: 2600 },
  { color: "grey", collection: "living room", imgSrc: './assets/sofa-grey.jpg', name: "Grey Sofa", category: "sofa", price: 3200 },
  { color: "yellow", collection: "living room", imgSrc: './assets/beige_shoe_rack.jpg', name: "Beige Shoe Rack", category: "wardrobe", price: 600 },
  { color: "black", collection: "bed room", imgSrc: './assets/black_chair.jpg', name: "Black Chair", category: "Table & Chair", price: 200 },
  { color: "blue", collection: "bed room", imgSrc: './assets/blue_wardrobe.webp', name: "Blue Almirah", category: "wardrobe", price: 2200 },
  { color: "brown", collection: "living room", imgSrc: './assets/brown_dinning_set.jpeg', name: "Wooden Dinning Table", category: "Dinning Set", price: 4200 },
  { color: "brown", collection: "kids room", imgSrc: './assets/brown_rocking_chair.jpg', name: "Brown Rocking Chair", category: "Table & Chair", price: 600 },
  { color: "green", collection: "living room", imgSrc: './assets/green_table.jpg', name: "Green Vintage Table", category: "Tables & Chair", price: 200 },
  { color: "brown", collection: "living room", imgSrc: './assets/brown_dinning_set.jpeg', name: "Wooden Dinning Table", category: "Dinning Set", price: 4200 },
  { color: "brown", collection: "kids room", imgSrc: './assets/brown_rocking_chair.jpg', name: "Brown Rocking Chair", category: "Table & Chair", price: 600 },
  { color: "green", collection: "living room", imgSrc: './assets/green_table.jpg', name: "Green Vintage Table", category: "Tables & Chair", price: 200 },
];


function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

  var displayElement1 = parent.getElementsByClassName("rangeValues1")[0];
  var displayElement2 = parent.getElementsByClassName("rangeValues2")[0];
  displayElement1.innerHTML = slide1;
  displayElement2.innerHTML = slide2;
  minPrice = slide1;
  maxPrice = slide2;
}

window.onload = function () {
  this.searchText = document.getElementById("search");
  searchText.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      ngForFunctionality();
      changePage(1);
    }
  });
  ngForFunctionality();
  changePage(1);
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
}

var expanded = false;

function showCheckboxesCollection() {
  var checkboxes = document.getElementById("checkboxes1");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxesColor() {
  var checkboxes = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
function showCheckboxesCategory() {
  var checkboxes = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function ngForFunctionality() {
  this.searchText = document.getElementById('search').value ? document.getElementById('search') : { value: '' };
  let value = '';
  this.paginationText = '';
  this.currentPage = 1;
  this.dataLength = 0;
  anArray1 = anArray.slice();
  anArray1 = anArray1.filter((el) => {
    return el.name.toLocaleLowerCase().includes(this.searchText.value.toLocaleLowerCase())
      || el.collection.toLocaleLowerCase().includes(this.searchText.value.toLocaleLowerCase())
      || el.category.toLocaleLowerCase().includes(this.searchText.value.toLocaleLowerCase())
      || el.color.toLocaleLowerCase().includes(this.searchText.value.toLocaleLowerCase())
      ;
  });
  anArray1.forEach((elem, index) => {
    if ((this.colors.indexOf(elem.color.toLocaleLowerCase()) != -1 || this.colors.length == 0) &&
      (this.categories.indexOf(elem.category.toLocaleLowerCase()) != -1 || this.categories.length == 0) &&
      (this.collection.indexOf(elem.collection.toLocaleLowerCase()) != -1 || this.collection.length == 0) &&
      (elem.price >= this.minPrice || !this.minPrice) && (elem.price <= this.maxPrice || !this.maxPrice)) {
      value += `<div onclick="redirectToProductInfo('${elem.name}', '${elem.price}','${elem.category}','${elem.imgSrc}')" class="col-md-4 card">
      <div  style="margin-bottom:8px; cursor:pointer;"><img src=${elem.imgSrc} style="width: 100%;">
          <div class="bottom-left"><span class="bottom-left-text">${elem.name}</span></div>
      </div>
      <div class="row">
          <div class="col-md-6" style="color:grey">${elem.category}</div>
          <div class="col-md-6" style="text-align: right;"><span>$</span>${elem.price}</div>
      </div>
      <div class="row">
          <div class="col-md-6">Stars</div>
          <div class="col-md-6" style="text-align: right;"><i
              class="fa fa-shopping-cart"></i></div>
      </div>
  </div>`;
  this.dataLength += 1;
    }
  });
  this.paginationText += `<a onclick="previousPage()" href="#">&laquo;</a>`;
  for (let i = 1; i < (this.dataLength / 9) + 1; i++) {
    this.paginationText += `<a href="#" id=${i} onclick="changePage(this.id)">${i}</a>`
    this.totalPage = i;
  }
  this.paginationText += `<a onclick="nextPage()" href="#">&raquo;</a>`;
  changePage(1);
  document.getElementById("card-list").innerHTML = value;
  document.getElementsByClassName('pagination')[0].innerHTML = this.paginationText;
};

var colors = new Array();
var categories = new Array();
var collection = new Array();

function applyColor() {
  this.colors = [];
  this.categories = [];
  this.collection = [];

  var boxes = document.getElementsByTagName("input");
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    if (box.type == "checkbox" && box.checked && box.id == "colors") {
      this.colors.push(box.value.toLocaleLowerCase());
    }
    if (box.type == "checkbox" && box.checked && box.id == "category") {
      this.categories.push(box.value.toLocaleLowerCase());
    }
    if (box.type == "checkbox" && box.checked && box.id == "collection") {
      this.collection.push(box.value.toLocaleLowerCase());
    }
  }

  ngForFunctionality();
  changePage(1);
}

function changePage(pageNumber) {
  this.currentPage = pageNumber;
  let paginationContent = document.getElementsByClassName('card');
  for (let i = 0; i < paginationContent.length; i++) {
    if (i < this.currentPage * 9 && i >= (this.currentPage - 1) * 9) {
      paginationContent[i].style.display = "block";
    }
    else {
      paginationContent[i].style.display = "none";
    }
  }
}

function previousPage() {
  this.currentPage == 1? this.changePage(this.currentPage) : this.changePage(this.currentPage-1);
}
function nextPage() {
  this.currentPage == this.totalPage? this.changePage(this.currentPage) : this.changePage(this.currentPage+1);
}

function redirectToProductInfo(name,price,category,imgSrc){
  sessionStorage.setItem("name",name);
  sessionStorage.setItem("price",price.toString());
  sessionStorage.setItem("category",category);
  sessionStorage.setItem("imgSrc",imgSrc);
  window.location.href = 'file:///C:/Users/anukesh.bhawsar/Desktop/test_js/product.html'
}

