let winner='';

const contentWrapper=document.getElementById('content');
const modalRes=document.getElementById('modal-res-wrapper');
const overlay=document.getElementById('overlay');
const btnClose=document.getElementById('btn-close');


const a1 = document.getElementById('A1');
const a2 = document.getElementById('A2');
const a3 = document.getElementById('A3');

const b1 = document.getElementById('B1');
const b2 = document.getElementById('B2');
const b3 = document.getElementById('B3');

const c1 = document.getElementById('C1');
const c2 = document.getElementById('C2');
const c3 = document.getElementById('C3');

const mas =[a1, a2, a3, b1, b2, b3, c1, c2, c3];
console.log(mas[a1]);



let flag='';
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
            flag='x';
            prepare();
            
        } else if(square[arr[i][0]].innerHTML ==='O' && square[arr[i][1]].innerHTML ==='O' 
                && square[arr[i][2]].innerHTML ==='O'){
            winner='нолики';
            flag='o';
            prepare();
        } 
    }
    
};

 //вывод победителя 
const prepare= () =>{
    if ((pl===1) && (flag==='x')){
        contentWrapper.innerHTML="Победил игрок 1";
    } else if ((pl === 2) && (flag==='x')){
        contentWrapper.innerHTML="Победил игрок 2";
    } else if ((pl === 2) && (flag==='o')){
        contentWrapper.innerHTML="Победил игрок 1";
    } else if ((pl === 1) && (flag==='o')){
        contentWrapper.innerHTML="Победил игрок 2";
    } else if (flag===''){
        contentWrapper.innerHTML="ничья";
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

let pl=0; //если нажать на кнопку х за 1 игрока будет = 1, иначе 2
function btnFuncX1(){
    btnO1.disabled = true; 
    btnX2.disabled = true; 
    pl = 1;
};

function btnFuncO1(){
    btnX1.disabled = true; 
    btnO2.disabled = true; 
    pl = 2;
};

function btnFuncX2(){
    btnX1.disabled = true; 
    btnO2.disabled = true; 
    pl = 2;
};

function btnFuncO2(){
    btnO1.disabled = true; 
    btnX2.disabled = true; 
    pl = 1;
};


const area = document.getElementById('area');

let count=0;
//проверка на ничью 
const checkDraw = () =>{
//    for(i=0; i<mas.length;i++){
//        if(mas[i] !==''){
//            count++;
//        }
//    }
    
//    if(count===9){
//        contentWrapper.innerHTML="ничья";
//    }
//    if (count === 8){
//        contentWrapper.innerHTML="ничья";
//    }
    //alert("ничья");
    contentWrapper.innerHTML="ничья";
    modalRes.style.display = 'block';
};

let move=0;
    area.addEventListener('click', e => {
        if ((pl>0) && (e.target.className === 'square')){
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
            move++; 
            count++;
            if (count === 9){
                console.log('--------------------');
                checkDraw();
            }
            console.log(count);
            
            checkWinner();
        } else{
            alert('Игроки не выбрали символы!');
        }
    
    });


/*area.addEventListener('click', e => {
        if (e.target.className === 'square'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
    } 
});*/

