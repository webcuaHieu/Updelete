// rebder out table
var data = [];

function add() {
    var itemId = document.getElementById("id").value;
    var itemName = document.querySelector("#name").value;
    var itemPhone = document.querySelector("#phone").value;

    var item = {
        id: itemId,
        name: itemName,
        phone: itemPhone
    };

    data.push(item);
    render(data);
}


function render(data) {
    var table = '';
    for (let i = 0; i < data.length; i++) {
        table += `
          <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].phone}</td>
            <td><button onclick="deleteItem(${i})">Delete</button></td>
          </tr>
        `;
    }
    document.getElementById("render").innerHTML = table;
}
function search() {
    var keyword = document.getElementById("keyword").value.toLowerCase();
    var filteredData = data.filter(function (item) {
        return item.id.toString().toLowerCase() === keyword || item.name.toLowerCase() === keyword || item.phone.toString().toLowerCase() === keyword;
    });
    render(filteredData);
}

function deleteItem(index) {
    data.splice(index, 1);
    render();
}
function clearInpput() {
    document.querySelector("#id").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#phone").value = "";
}

// check input

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}