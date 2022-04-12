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