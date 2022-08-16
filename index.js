let cartt = document.getElementById("cart");
let cartShow = document.getElementById("cart-show");
let minuss = document.getElementById("minus");
let pluss = document.getElementById("plus");
let zeroo = document.getElementById("zero");
let addd = document.getElementById("add");
let quant = document.getElementById("quantity");
let onn = document.getElementById("on");
let clos = document.getElementById("close");
let mainn = document.getElementById("main");
let topp = document.getElementById("top");
let lne = document.getElementById("lines");
let pre = document.getElementById("previous");
let nex = document.getElementById("next");
let nextt = document.getElementById("nex");
let pree = document.getElementById("pre");
let mainpic = document.getElementById("main-product");
let pic1 = document.getElementById("pro1");
let pic2 = document.getElementById("pro2");
let pic3 = document.getElementById("pro3");
let pic4 = document.getElementById("pro4");
let onpic = document.getElementById("mainproducton");
let picon1 = document.getElementById("product1");
let picon2 = document.getElementById("product2");
let picon3 = document.getElementById("product3");
let picon4 = document.getElementById("product4");
let men = document.getElementById("menu");
let navbar = document.getElementById("nav");
let log = document.getElementById("logo");

document.addEventListener("click", function(event) {
  if (cartShow.style.display == "block") {
    if (event.srcElement.id != "cart-show" && event.srcElement.id != "cart" && event.srcElement.id != "checkout" && event.srcElement.id != "delete") {
      cartShow.style.display = "none";
      if (window.innerWidth < 800) {
        pree.style.display = "block";
        nextt.style.display = "block";
      }
    }
  }
});

cartt.addEventListener("click", function() {
  if (zeroo.innerHTML == 0) {
    cartShow.innerHTML = '<p class="cartp topp">Cart</p><hr class="line"><p class="empty">Your cart is empty.</p>';
  }
  cartShow.style.display = "block";
  if (window.innerWidth < 800) {
    pree.style.display = "none";
    nextt.style.display = "none";
  }
  let del = document.getElementById("delete");
  del.addEventListener("click", function() {
    zeroo.innerHTML = 0;
    cartShow.innerHTML = '<p class="cartp topp">Cart</p><hr class="line"><p class="empty">Your cart is empty.</p>';
    quant.style.display = "none";
  });
});

minuss.addEventListener("click", function() {
  if (zeroo.innerHTML > 0) {
    zeroo.innerHTML--;
  }
});

pluss.addEventListener("click", function() {
  zeroo.innerHTML++;
});

addd.addEventListener("click", function() {
  cartShow.innerHTML = '<p class="cartp topp">Cart</p><hr class="line"><div class="a"><img src="images/image-product-1-thumbnail.jpg" alt="product1-mini" class="product1-cart"><div class="b"><p class="fall-cart">Fall Limited Edition Sneakers</p><p class="cart125" id="cart125">$125.00 * </p><p class="cart375" id="cart375">$000.00</p></div><img src="images/icon-delete.svg" alt="delete" class="delete" id="delete"></div><button type="button" name="button" class="checkout" id="checkout">Checkout</button>';
  let totalPrice = document.getElementById("cart375");
  let num = document.getElementById("cart125");
  let delet = document.getElementById("delete");
  totalPrice.innerHTML = "$" + zeroo.innerHTML * 125 + ".00";
  num.innerHTML = "$125.00 * " + zeroo.innerHTML;
  quant.innerHTML = zeroo.innerHTML;
  if (quant.innerHTML > 0) {
    quant.style.display = "block";
  } else {
    quant.style.display = "none";
  }
});

pic1.addEventListener("click", function() {
  mainpic.src = "images/image-product-1.jpg";
  onpic.src = "images/image-product-1.jpg";
  onpic.alt = "product1";
  pic1.style.opacity = "30%";
  pic1.style.border = "2px solid hsl(26, 100%, 55%)";
  picon1.style.filter = "invert(0.2)";
  picon1.style.border = "2px solid hsl(26, 100%, 55%)";
  pic2.style.opacity = "100%";
  pic2.style.border = "0px solid hsl(26, 100%, 55%)";
  picon2.style.filter = "invert(0)";
  picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  pic3.style.opacity = "100%";
  pic3.style.border = "0px solid hsl(26, 100%, 55%)";
  picon3.style.filter = "invert(0)";
  picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  pic4.style.opacity = "100%";
  pic4.style.border = "0px solid hsl(26, 100%, 55%)";
  picon4.style.filter = "invert(0)";
  picon4.style.border = "0px solid hsl(26, 100%, 55%)";
});

pic2.addEventListener("click", function() {
  mainpic.src = "images/image-product-2.jpg";
  onpic.src = "images/image-product-2.jpg";
  onpic.alt = "product2";
  pic2.style.opacity = "30%";
  pic2.style.border = "2px solid hsl(26, 100%, 55%)";
  picon2.style.filter = "invert(0.2)";
  picon2.style.border = "2px solid hsl(26, 100%, 55%)";
  pic1.style.opacity = "100%";
  pic1.style.border = "0px solid hsl(26, 100%, 55%)";
  picon1.style.filter = "invert(0)";
  picon1.style.border = "0px solid hsl(26, 100%, 55%)";
  pic3.style.opacity = "100%";
  pic3.style.border = "0px solid hsl(26, 100%, 55%)";
  picon3.style.filter = "invert(0)";
  picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  pic4.style.opacity = "100%";
  pic4.style.border = "0px solid hsl(26, 100%, 55%)";
  picon4.style.filter = "invert(0)";
  picon4.style.border = "0px solid hsl(26, 100%, 55%)";
});

pic3.addEventListener("click", function() {
  mainpic.src = "images/image-product-3.jpg";
  onpic.src = "images/image-product-3.jpg";
  onpic.alt = "product3";
  pic3.style.opacity = "30%";
  pic3.style.border = "2px solid hsl(26, 100%, 55%)";
  picon3.style.filter = "invert(0.2)";
  picon3.style.border = "2px solid hsl(26, 100%, 55%)";
  pic1.style.opacity = "100%";
  pic1.style.border = "0px solid hsl(26, 100%, 55%)";
  picon1.style.filter = "invert(0)";
  picon1.style.border = "0px solid hsl(26, 100%, 55%)";
  pic2.style.opacity = "100%";
  pic2.style.border = "0px solid hsl(26, 100%, 55%)";
  picon2.style.filter = "invert(0)";
  picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  pic4.style.opacity = "100%";
  pic4.style.border = "0px solid hsl(26, 100%, 55%)";
  picon4.style.filter = "invert(0)";
  picon4.style.border = "0px solid hsl(26, 100%, 55%)";
});

pic4.addEventListener("click", function() {
  mainpic.src = "images/image-product-4.jpg";
  onpic.src = "images/image-product-4.jpg";
  onpic.alt = "product4";
  pic4.style.opacity = "30%";
  pic4.style.border = "2px solid hsl(26, 100%, 55%)";
  picon4.style.filter = "invert(0.2)";
  picon4.style.border = "2px solid hsl(26, 100%, 55%)";
  pic1.style.opacity = "100%";
  pic1.style.border = "0px solid hsl(26, 100%, 55%)";
  picon1.style.filter = "invert(0)";
  picon1.style.border = "0px solid hsl(26, 100%, 55%)";
  pic3.style.opacity = "100%";
  pic3.style.border = "0px solid hsl(26, 100%, 55%)";
  picon3.style.filter = "invert(0)";
  picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  pic2.style.opacity = "100%";
  pic2.style.border = "0px solid hsl(26, 100%, 55%)";
  picon2.style.filter = "invert(0)";
  picon2.style.border = "0px solid hsl(26, 100%, 55%)";
});

mainpic.addEventListener("click", function() {
  if (window.innerWidth > 800) {
    on.style.display = "block";
    mainn.style.filter = "brightness(30%)";
    topp.style.filter = "brightness(30%)";
    document.body.style.backgroundColor = "hsl(0, 0%, 30%)";
    lne.style.display = "none";
  }
});

clos.addEventListener("click", function() {
  on.style.display = "none";
  mainn.style.filter = "brightness(100%)";
  topp.style.filter = "brightness(100%)";
  document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
  lne.style.display = "block";
});

nex.addEventListener("click", function() {
  if (onpic.alt == "product3") {
    onpic.alt = "product4";
    onpic.src = "images/image-product-4.jpg";
    picon4.style.filter = "invert(0.2)";
    picon4.style.border = "2px solid hsl(26, 100%, 55%)";
    picon3.style.filter = "invert(0)";
    picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (onpic.alt == "product2") {
    onpic.alt = "product3";
    onpic.src = "images/image-product-3.jpg";
    picon3.style.filter = "invert(0.2)";
    picon3.style.border = "2px solid hsl(26, 100%, 55%)";
    picon2.style.filter = "invert(0)";
    picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (onpic.alt == "product1") {
    onpic.alt = "product2";
    onpic.src = "images/image-product-2.jpg";
    picon2.style.filter = "invert(0.2)";
    picon2.style.border = "2px solid hsl(26, 100%, 55%)";
    picon1.style.filter = "invert(0)";
    picon1.style.border = "0px solid hsl(26, 100%, 55%)";
  }
});

pre.addEventListener("click", function() {
  if (onpic.alt == "product2") {
    onpic.alt = "product1";
    onpic.src = "images/image-product-1.jpg";
    picon1.style.filter = "invert(0.2)";
    picon1.style.border = "2px solid hsl(26, 100%, 55%)";
    picon2.style.filter = "invert(0)";
    picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (onpic.alt == "product3") {
    onpic.alt = "product2";
    onpic.src = "images/image-product-2.jpg";
    picon2.style.filter = "invert(0.2)";
    picon2.style.border = "2px solid hsl(26, 100%, 55%)";
    picon3.style.filter = "invert(0)";
    picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (onpic.alt == "product4") {
    onpic.alt = "product3";
    onpic.src = "images/image-product-3.jpg";
    picon3.style.filter = "invert(0.2)";
    picon3.style.border = "2px solid hsl(26, 100%, 55%)";
    picon4.style.filter = "invert(0)";
    picon4.style.border = "0px solid hsl(26, 100%, 55%)";
  }
});

nextt.addEventListener("click", function() {
  if (mainpic.alt == "product3") {
    mainpic.alt = "product4";
    mainpic.src = "images/image-product-4.jpg";
    picon4.style.filter = "invert(0.2)";
    picon4.style.border = "2px solid hsl(26, 100%, 55%)";
    picon3.style.filter = "invert(0)";
    picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (mainpic.alt == "product2") {
    mainpic.alt = "product3";
    mainpic.src = "images/image-product-3.jpg";
    picon3.style.filter = "invert(0.2)";
    picon3.style.border = "2px solid hsl(26, 100%, 55%)";
    picon2.style.filter = "invert(0)";
    picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (mainpic.alt == "product1") {
    mainpic.alt = "product2";
    mainpic.src = "images/image-product-2.jpg";
    picon2.style.filter = "invert(0.2)";
    picon2.style.border = "2px solid hsl(26, 100%, 55%)";
    picon1.style.filter = "invert(0)";
    picon1.style.border = "0px solid hsl(26, 100%, 55%)";
  }
});

pree.addEventListener("click", function() {
  if (mainpic.alt == "product2") {
    mainpic.alt = "product1";
    mainpic.src = "images/image-product-1.jpg";
    picon1.style.filter = "invert(0.2)";
    picon1.style.border = "2px solid hsl(26, 100%, 55%)";
    picon2.style.filter = "invert(0)";
    picon2.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (mainpic.alt == "product3") {
    mainpic.alt = "product2";
    mainpic.src = "images/image-product-2.jpg";
    picon2.style.filter = "invert(0.2)";
    picon2.style.border = "2px solid hsl(26, 100%, 55%)";
    picon3.style.filter = "invert(0)";
    picon3.style.border = "0px solid hsl(26, 100%, 55%)";
  }
  if (mainpic.alt == "product4") {
    mainpic.alt = "product3";
    mainpic.src = "images/image-product-3.jpg";
    picon3.style.filter = "invert(0.2)";
    picon3.style.border = "2px solid hsl(26, 100%, 55%)";
    picon4.style.filter = "invert(0)";
    picon4.style.border = "0px solid hsl(26, 100%, 55%)";
  }
});

men.addEventListener("click", function() {
  if (navbar.style.display == "block") {
    navbar.style.display = "none";
    pree.style.display = "block";
    log.style.display = "inline";
    men.src = "images/icon-menu.svg";
  } else {
    navbar.style.display = "block";
    pree.style.display = "none";
    log.style.display = "none";
    men.src = "images/icon-close.svg";
  }
});
