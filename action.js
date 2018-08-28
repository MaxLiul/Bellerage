var carsImg = document.getElementsByClassName("car_image");
var totalPrice = document.getElementById('totalPrice');
var carImg = document.getElementsByTagName("img");
var priceMassiv = []; // массив цен
var sumPrice = 0; 
for(let i=0; i<carsImg.length; i++){
  carImg[i].addEventListener('click', changeBigPicture); 
}
for(let j=0; j<carsImg.length; j++){
// Фрагмент, отвечающий за цену
  var price = document.createElement('div');
  priceMassiv[j] = Math.floor(Math.random()*100000);
  price.className = 'price';
  price.textContent = 'Цена: ' + priceMassiv[j] + ' $';
  price.setAttribute("id", j+1);
  carsImg[j].appendChild(price);
 
// Фрагмент, отвечающий за кнопку
  var buttonBuy = document.createElement('button');
  buttonBuy.className = 'buyButton';
  buttonBuy.textContent = 'Купить';
  carsImg[j].appendChild(buttonBuy);
  buttonBuy.setAttribute('id', j+1);
  buttonBuy.addEventListener('click', buyCar);
}

function changeBigPicture(eventObj){
  let bigPicture = document.getElementById("big_picture");
  bigPicture.innerHTML = "";
  let eventElement = eventObj.target;
  let imageNameParts = eventElement.id.split("_");
  var src = "img/ferrari_" + imageNameParts[1] + ".jpg";
  let imageDomElement = document.createElement("img");
  imageDomElement.src = src;
  bigPicture.appendChild(imageDomElement);
}

function buyCar(eventObj){
  let purchase = document.getElementById("purchase");
  purchase.innerHtml = "";
  var src = "img/ferrari_" + eventObj.target.id + ".jpg";
  let buyDomElement = document.createElement("img");
  buyDomElement.setAttribute('width', "200px")
  buyDomElement.src = src;
  purchase.appendChild(buyDomElement);
  sumPrice +=priceMassiv[eventObj.target.id - 1];
  totalPrice.textContent = 'Cтоимость покупки: ' + sumPrice + " $";
  
  

}