
const btnO1 = document.getElementById('btnO1');
const btnX1 = document.getElementById('btnX1');
const btnX2 = document.getElementById('btnX2');
const btnO2 = document.getElementById('btnO2');

function btnFuncX1(){
    btnO1.disabled = true; 
    btnX2.disabled = true; 
};

function btnFuncO1(){
    btnX1.disabled = true; 
    btnO2.disabled = true; 
};

function btnFuncX2(){
    btnX1.disabled = true; 
    btnO2.disabled = true; 
};

function btnFuncO2(){
    btnO1.disabled = true; 
    btnX2.disabled = true; 
};


const area = document.getElementById('area');
const square = document.getElementsByClassName('square');
let move=0;

//function areaFunc() {
//    if (area.className === 'square'){
//        move % 2 === 0 ? square.innerHTML = 'X' : square.innerHTML = 'O';
//        move++;
//    }
//};


//document.getElementById('myAnchor').innerHTML="Новая ссылка";

if ((btnX1.disabled===false) || (btnO1.disabled===false)){
    area.addEventListener('click', e => {
        if (e.target.className === 'square'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++; } 
    }); } else{
    alert('Игроки не выбрали символы!');
}
//area.addEventListener('click', e => {
//        if (e.target.className === 'square'){
//        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
//        move++;
//    } 
//});

//function areaFunc(){
//    if (e.target.className === 'square'){
//        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
//        move++;
//};

//if ((btnX1.disabled===false) || (btnO1.disabled===false)){
       // alert('Игроки не выбрали символы!');}
       
//(btnX1.disabled===true) || (btnO1.disabled===true))