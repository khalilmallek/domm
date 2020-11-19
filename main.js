


var shopButtons=document.getElementsByClassName('shop-item-button')
for (let i = 0; i< shopButtons.length; i++) {
  var button=shopButtons[i]
  button.addEventListener('click',itemClicked);
    }


function itemClicked(event){
        var button=event.target
        var shopItem=button.parentElement.parentElement
        var imageSrc=shopItem.getElementsByClassName("card-img-top")[0].src
        var price=shopItem.getElementsByClassName("shop-item-price")[0].innerHTML
        var title=shopItem.getElementsByClassName("card-title")[0].innerHTML

        button.addEventListener('click',onclick1(imageSrc,title,price))
        somme()
 }


function onclick1(imageSrc,title,price){
    var addItem=document.createElement("div")
    var items=document.getElementsByClassName('row')[0]
    addItem.classList.add('Cart-Row')
        var newItem=` <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
        <div> <i onclick="myFunction(this)" class="fa fa-heart"></i> </div>
        
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input btn-header " type="number" value="1"> 
        <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
                            
                addItem.innerHTML=newItem    
    items.append(addItem)
    
    for (let i = 0; i < items.getElementsByClassName('cart-quantity-input').length; i++) {
        items.getElementsByClassName('cart-quantity-input')[i].addEventListener('change',changeItem)        
    }
    for (let i = 0; i < items.getElementsByClassName('btn-danger').length; i++) {
        items.getElementsByClassName('btn-danger')[i].addEventListener('click',removeItem)        
    }
  
}

function removeItem(event){
    var buttonremove=event.target

    buttonremove.parentElement.parentElement.remove()
    somme()
}

var quantityChanged=document.getElementsByClassName('cart-quantity-input')

    for (let i = 0; i < quantityChanged.length; i++) {
        var input=quantityChanged[i]
        input.addEventListener('change',changeItem)
    }
somme()
function changeItem(event){

    var input=event.target
    if ( isNaN(input.value) || input.value<=0) {
        input.value=1
        
    }
    somme(event)

}



// function somme(event){
//     s=0;
//     for (let i = 0; i < items.getElementsByClassName('cart-quantity-input').length; i++){
//     var price=shopItem.getElementsByClassName("shop-item-price")[i].innerHTML

//     console.log(price)
//     }
//     // var input=event.target
//     // var g = parseInt("price")
//     // if(isNaN(input.value)>0)
// }
function somme(){
    var shopItem=document.getElementsByClassName("row")[0]
    var Item=shopItem.getElementsByClassName("cart-item")
    console.log(Item)
    var total=0;
    for (let i = 0; i < Item.length; i++) {
        var price=Item[i].getElementsByClassName("cart-price")[0].innerHTML
        var prix=parseFloat(price.replace('$',''))
        // price=parseFloat(price.replace('$',''))
        var quantity=Item[i].getElementsByClassName("cart-quantity-input")[0].value
        console.log(quantity)
        total=total+(prix*quantity)
        console.log(total)        
    }
    document.getElementsByClassName("Total")[0].innerHTML='$'+total
    

}