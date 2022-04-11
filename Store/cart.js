// function computeTotal(){

//     var parent = document.getElementById('cart');
//     var element = parent.firstElementChild;
//     let sum = 0;
//     while(element && element.firstElementChild)
//     {
//         var price = element.firstElementChild.nextElementSibling.nextElementSibling;
//         price = price.textContent.replace('Rs. ','');
//         price = parseInt(price);
//         sum+=price
//         element = element.nextElementSibling;
//     }
//     total.textContent = `Total : Rs. ${sum}`;
// }

// function addToCart(current)
// {
//     var parrent = current.parentElement;
//     var image = parrent.firstElementChild;
//     var imageClone = image.cloneNode();
//     var product = image.nextElementSibling;
//     var productClone = product.cloneNode(true);
//     var price = product.nextElementSibling;
//     var priceClone = price.cloneNode(true);
//     var closeButton = document.createElement('input');
//     closeButton.setAttribute('id','closebutton');
//     closeButton.setAttribute('type','button');
//     closeButton.setAttribute('value','Remove');
//     var cart = document.createElement('div');
//     document.getElementById('cart').appendChild(cart);
//     cart.appendChild(imageClone);
//     cart.appendChild(productClone);
//     cart.appendChild(priceClone);
//     cart.appendChild(closeButton);
//     computeTotal(cart);
//     closeButton.onclick = (event) => {
//         event.target.parentElement.remove();
//         computeTotal(cart);
//     }
// }

// hp.onclick = (event) => {
//     addToCart(event.target);
// }

// lenovo.onclick = (event) => {
//     addToCart(event.target);
// } 

// dell.onclick = (event) => {
//     addToCart(event.target);
// }

// apple.onclick = (event) => {
//     addToCart(event.target);
// }
    var buttons = document.getElementsByClassName('btn');
    for(index = 0; index < buttons.length;index++)
    {
        console.log(buttons[index]);
        buttons[index].addEventListener('click',(event)=>{
            var product = event.target.parentElement.firstElementChild.nextElementSibling; //button -> div -> image -> name
            document.getElementById('box1').textContent = `${product.textContent} was added to cart`;
            document.getElementById('box1').style.display = 'block';
        });
    }
