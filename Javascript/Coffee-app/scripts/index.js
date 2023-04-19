let orderDetailLS = JSON.parse(localStorage.getItem("orderDetailLS")) || [];

function handleFormSubmit (e) {
e.preventDefault();
let obj = {
     name : document.getElementById("customer-name").value,
     coffeeType : document.getElementById("coffee-type").value,
     size : document.getElementById("size").value,
     quantity : document.getElementById("quantity").value,
     price : document.getElementById("price").value,
}

console.log(obj)
orderDetailLS.push(obj)
localStorage.setItem("orderDetailLS",JSON.stringify(orderDetailLS))
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);

// price change is handled down here
function handleTotalPrice () {
    let name = document.getElementById("customer-name").value;
    let coffeeType = document.getElementById("coffee-type").value;
    let size = document.getElementById("size").value;
    let quantity = document.getElementById("quantity").value;
    
    let sizePrice = 0;
    if(coffeeType === "Americano") {
      if(size === "Small") {
        sizePrice = 100;
      } else if(size === "Medium") {
        sizePrice =200;
      } else if(size === "Large") {
        sizePrice=300;
      }
    }   
      
   else if(coffeeType === "Expresso") {
    if(size === "Small") {
        sizePrice =70;
    } else if(size === "Medium") {
        sizePrice=140;
    } else if(size === "Large") {
        sizePrice=210;
    }
    }
   else if(coffeeType === "Cappuccino") {
    if(size === "Small") {
        sizePrice=50;
    } else if(size === "Medium") {
        sizePrice=100;
    } else if(size === "Large") {
        sizePrice=150;
    }
    }
    document.getElementById("price").value = quantity*sizePrice;

}

document.getElementById("size").addEventListener("change", handleTotalPrice);
document.getElementById("coffee-type").addEventListener("change", handleTotalPrice);

