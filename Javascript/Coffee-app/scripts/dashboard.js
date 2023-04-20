let orderDetailLS = JSON.parse(localStorage.getItem("orderDetailLS")) || [];
console.log(orderDetailLS);

// sorting code below
const sortingFunc = () => {
  let val = document.getElementById("price-sorting").value;
  let sortedData;
  if (val === "") {
    displayData(orderDetailLS);
  } else {
    sortedData = orderDetailLS.sort((a, b) => {
      if (val === "asc") return a.price - b.price;
      if (val === "desc") return b.price - a.price;
    });
    displayData(sortedData);
  }
};

document
  .getElementById("price-sorting")
  .addEventListener("change", sortingFunc);
// **************

// filter code below
const filterFunc = (arg) => {
  let val;
  if (arg === "type") {
    val = document.getElementById("filter-by-type").value;
  } else if (arg === "size") {
    val = document.getElementById("filter-by-size").value;
  }
  if (val === "") {
    return displayData(orderDetailLS);
  }
  let filteredData = orderDetailLS.filter((el) => {
    if (arg === "type") {
      return el.coffeeType === val;
    } else {
      return el.size === val;
    }
  });
  displayData(filteredData);
};
document
  .getElementById("filter-by-type")
  .addEventListener("change", () => filterFunc("type"));
document
  .getElementById("filter-by-size")
  .addEventListener("change", () => filterFunc("size"));
// ***********************

// display data in table code below
function displayData(data) {
  document.querySelector("tbody").innerHTML = null;
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
    editBtn.style.backgroundColor = "tomato";
    editBtn.style.color = "white";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentNode.remove();
    });

    tr.append(td1, td2, td3, td4, td4, td5, editBtn, deleteBtn);
    document.querySelector("tbody").append(tr);
  });
}
displayData(orderDetailLS);
// ***********************
