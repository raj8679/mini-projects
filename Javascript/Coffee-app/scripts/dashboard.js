let orderDetailLS = JSON.parse(localStorage.getItem("orderDetailLS")) || [];
console.log(orderDetailLS)

const handleSort = () => {
    let sortData = orderDetailLS.slice().sort((a,b) => {
        return a.price - b.price
    });
    displayData(sortData)
    console.log(sortData)
}

const filterFunc = () => {
    let val = document.getElementById("filter").value;
    let filteredData = orderDetailLS.filter((el) => {
        if(val === "coffeeType") {
            return el.coffeeType == val
        } else {
            return el.size == val
        }
    })
    console.log(val)
    displayData(filteredData)
}
document.getElementById("filter").addEventListener("change", filterFunc);


function displayData (data) {
document.querySelector("tbody").innerHTML=null;
data.forEach((el) => {
let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = el.name;
let td2 = document.createElement("td");
td2.innerText = el.coffeeType;
let td3 = document.createElement("td");
td3.innerText = el.size;
let td4 = document.createElement("td");
td4.innerText = el.quantity;
let td5 = document.createElement("td");
td5.innerText = el.price;
let editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.style.backgroundColor="tomato";
editBtn.style.color="white";
let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.style.backgroundColor="red";
deleteBtn.style.color="white";
deleteBtn.addEventListener('click', function(event){
    event.target.parentNode.remove();
})

tr.append(td1,td2,td3,td4,td4,td5,editBtn,deleteBtn);
document.querySelector("tbody").append(tr);
})
}
displayData(orderDetailLS)