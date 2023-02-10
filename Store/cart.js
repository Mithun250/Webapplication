localStorage.clear();
var buttons = document.getElementsByClassName('btn');
for(index = 0; index < buttons.length;index++)
{
    buttons[index].addEventListener('click',(event)=>{
        var product = event.target.parentElement.firstElementChild.nextElementSibling; //button -> div -> image -> name
        var productCopy = product.cloneNode(true);
        var price = product.nextElementSibling;
        var priceCopy = price.cloneNode(true);
        if(localStorage.getItem('number'))
        {
            var number = parseInt(localStorage.getItem('number')) + 1;
            localStorage.setItem('number',number);
        }
        else
            localStorage.setItem('number','1');
        if(localStorage.getItem('number'))
        {
            document.getElementById('popup').textContent = localStorage.getItem('number');
            document.getElementById('popup').style.display = 'inline';
        }
        var cart = document.createElement('div');
        document.getElementById('cart').appendChild(cart);
        cart.appendChild(productCopy);
        cart.appendChild(priceCopy);
    });
}

cartimage.onclick = (event) => {
    document.getElementById('cart').style.display = 'flex';
}