let winner='';

const contentWrapper=document.getElementById('content');
const modalRes=document.getElementById('modal-res-wrapper');
const overlay=document.getElementById('overlay');
const btnClose=document.getElementById('btn-close');

//проверка на победителя 
const checkWinner = () => {
    const square = document.getElementsByClassName('square');
    console.log(square);
    const arr = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];
    for(i =0;i<arr.length;i++){
        if(square[arr[i][0]].innerHTML ==='X' && square[arr[i][1]].innerHTML ==='X' 
                && square[arr[i][2]].innerHTML ==='X'){
            winner='крестики';
            prepare(winner);
        } else if(square[arr[i][0]].innerHTML ==='O' && square[arr[i][1]].innerHTML ==='O' 
                && square[arr[i][2]].innerHTML ==='O'){
            winner='нолики';
            prepare(winner);
        }
    }
};

 //вывод победителя 
const prepare = res =>{
    if (btnO1.disabled===true || btnX2.disabled===true){
        //`Победили ${res} !`
        contentWrapper.innerHTML="Победил игрок 1";
    } else{
        contentWrapper.innerHTML="Победил игрок 2";
    }
    //contentWrapper.innerHTML=`Победили ${res} !`;
    modalRes.style.display = 'block';
};


//закрытие окна
const closeModal =()=>{
    modalRes.style.display='none';
    location.reload();
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

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

let move=0;
if ((btnX1.disabled===false) || (btnO1.disabled===false)){
    area.addEventListener('click', e => {
        if (e.target.className === 'square'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++; 
    checkWinner();} 
    
    }); } else{
    alert('Игроки не выбрали символы!');
}


/*area.addEventListener('click', e => {
        if (e.target.className === 'square'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
    } 
});*/

//function areaFunc() {
//    if (area.className === 'square'){
//        move % 2 === 0 ? square.innerHTML = 'X' : square.innerHTML = 'O';
//        move++;
//    }
//};



//function areaFunc(){
//    if (e.target.className === 'square'){
//        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
//        move++;
//};

//if ((btnX1.disabled===false) || (btnO1.disabled===false)){
       // alert('Игроки не выбрали символы!');}
       
//(btnX1.disabled===true) || (btnO1.disabled===true))

