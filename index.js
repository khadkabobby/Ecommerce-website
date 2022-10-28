let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}
// ------jd for product gallery--
let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

// ------js for form-----

loginForm.addEventListener("click", login);
regForm.addEventListener("click", register);

function login() {
  var loginForm = document.getElementById("loginForm");
  var indicator = document.getElementById("indicator");
  loginForm.style.transform = "translateX(300px)";
  regForm.style.transform = "translateX(300px)";

  indicator.style.transform = "translateX(0px)";
}
function register() {
  var regForm = document.getElementById("regForm");
  var indicator = document.getElementById("indicator");
  loginForm.style.transform = "translateX(0px)";
  regForm.style.transform = "translateX(0px)";

  indicator.style.transform = "translateX(100px)";
}
