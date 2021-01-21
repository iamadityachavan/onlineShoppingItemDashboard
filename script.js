function changeHandler(event) {
    var price, baseSize, baseSize, dataMul, newPrice;
    price = document.getElementsByClassName("price")[0];
    basePrice = parseInt(price.getAttribute("data-base-price"));
    baseSize = parseInt(price.getAttribute("data-base-size"));
    dataMul = parseInt(price.getAttribute("data-mul"));
    newPrice = basePrice + (parseInt(this.value) - baseSize) * dataMul;
    document.getElementById("newPrice").innerHTML = newPrice;
}

function changeThumbnil(event) {
    console.log(this);
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("mainImg")[0].getElementsByTagName('img')[0].setAttribute("src", this.getAttribute("src"));
    this.className = "active";
}

function updateCart(event) {
    var cart = document.getElementById("cart");
    var updateCart = cart.getAttribute("data-count");
    cart.setAttribute("data-count", ++updateCart);
    document.getElementById("data-count").innerHTML = updateCart;
}


function shuffle() {
    var container = document.getElementsByClassName("thumbs")[0];
    var elementsArray = Array.prototype.slice.call(container.getElementsByTagName('img'));
    elementsArray.forEach(function(element) {
        container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element) {
        container.appendChild(element);
    });
    document.getElementsByClassName("active")[0].classList.remove("active");
    container.getElementsByTagName('img')[0].className = "active";
    document.getElementsByClassName("mainImg")[0].getElementsByTagName('img')[0].setAttribute("src", container.getElementsByTagName('img')[0].getAttribute("src"));
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function(event) {
    var radios = document.querySelectorAll('input[type=radio][name=size]');
    var thumbnils = document.getElementsByClassName("thumbs")[0].querySelectorAll('img');
    shuffle();
    Array.prototype.forEach.call(radios, function(radio) {
        radio.addEventListener('change', changeHandler);
    });

    Array.prototype.forEach.call(thumbnils, function(radio) {
        radio.addEventListener('mouseover', changeThumbnil);
        radio.addEventListener('click', changeThumbnil);
    });

    document.getElementById("addToCart").addEventListener("click", updateCart);

});