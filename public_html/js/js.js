const area = document.getElementById('area');
let move=0;

area.addEventListener('click', e => {
    if(e.target.className === 'square'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        console.log('eee');
    }
});