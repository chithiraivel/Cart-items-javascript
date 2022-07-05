var select1 = document.querySelector('.select1')
var select2 = document.querySelector('.select2')
var select3 = document.querySelector('.select3')
var select4 = document.querySelector('.select4')

var show = document.getElementById('show')
var btn1 = document.getElementById('btn1');

btn1.addEventListener("click" , () => {

        var price1 = 500;
    show.innerHTML += `<table><tr><td> <strong>Product 1</strong> <br>Quantity ${select1.value} 
    <br>Price ${select1.value*price1} 
     <br><hr><button onclick ="deleteItem(this)">Remove</button> </td></tr></table>`
})


btn2.addEventListener("click" , () => {

    var price2 = 300;
show.innerHTML += `<table><tr><td> <strong>Product 2</strong> <br>Quantity ${select2.value} 
<br>Price ${select2.value*price2} 
 <br><hr><button onclick ="deleteItem(this)">Remove</button> </td></tr></table>`
 
})

btn3.addEventListener("click" , () => {

    var price3 = 1000;
show.innerHTML += `<table><tr><td> <strong>Product 3</strong> <br>Quantity ${select3.value} 
<br>Price ${select3.value*price3} 
 <br><hr><button onclick ="deleteItem(this)">Remove</button> </td></tr></table>`
})

btn4.addEventListener("click" , () => {

    var price4 = 2000;
show.innerHTML += `<table><tr><td> <strong>Product 4</strong> <br>Quantity ${select4.value} 
<br>Price ${select4.value*price4} 
 <br><hr><button onclick ="deleteItem(this)">Remove</button> </td></tr></table>`
})


function deleteItem(x){

    x.parentElement.remove();
    select2.value = ""
}

