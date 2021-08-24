'use strict';

let btn = document.getElementById('save');
let nameFiled = document.getElementById('name');
let imageFiled = document.getElementById('image');
let relesaFiled = document.getElementById('relesa');
let table = document.getElementById('table');




function Movie(image, name, relesa) {
    this.image = image;
    this.name = name;
    this.relesa = relesa;
    Movie.arr.push(this);

}

Movie.arr = [];

btn.addEventListener('click', handel);

function handel(event) {
    event.preventDefault();

    let newImage = imageFiled.value;
    let newName = nameFiled.value;
    let newRelesa = relesaFiled.value;
    new Movie(newImage, newName, newRelesa);
    saveTols();
    table.textContent = '';
    Movie.prototype.render();

}


Movie.prototype.render = function () {
    for (let i = 0; i < Movie.arr.length; i++) {

        let dataRow = document.createElement('tr');
        table.appendChild(dataRow);

        let td1 = document.createElement('td');
        dataRow.appendChild(td1);
        let imagePh = document.createElement('img');
        td1.appendChild(imagePh);
        imagePh.src = Movie.arr[i].image;

        let td2 = document.createElement('td');
        dataRow.appendChild(td2);
        td2.textContent = Movie.arr[i].name;

        let td3 = document.createElement('td');
        dataRow.appendChild(td3);
        td3.textContent = parseInt(Movie.arr[i].relesa);


    }
}


function saveTols() {
    let newArr = JSON.stringify(Movie.arr);
    localStorage.setItem('arr', newArr);
}


function getTols() {
    let data = localStorage.getItem('arr');
    let parsOrder = JSON.parse(data);
    if (parsOrder) {
        Movie.arr = parsOrder;
    }
}
getTols();
Movie.prototype.render();





