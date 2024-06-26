const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const restartButton = document.getElementById('restart');
const playerXScore = document.getElementById('playerX');
const playerOScore = document.getElementById('playerO');
let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;

cells.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once: true});
});

restartButton.addEventListener('click', () =>{
    cells.forEach(cell =>{
        cell.innerText = '';
        cell.addEventListener('click', handleClick, {once: true});
    });
    currentPlayer = 'X';
});

function handleClick(e){
    const cell = e.target;
    cell.innerText = currentPlayer;
    if(checkWin(currentPlayer)){
        if(currentPlayer === 'X'){
            xScore++;
        playerXScore.innerText = `Player X: ${xScore}`;
        playerXScore.style.color = 'green';
        } else{
            oScore++;
        playerOScore.innerText = `Player O: ${oScore}`;  
        playerOScore.style.color = 'green';
    }
        setTimeout(() => alert(`${currentPlayer} wins`), 10);
        return;
    }
    if(checkDraw()){
        setTimeout(() =>{
            alert(`Draw`)
        },10);
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player){
    const winningCombiations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    return winningCombiations.some(combination => {
        return combination.every(index => {
            return cells[index].innerText === player;
        });
    });
}

function checkDraw(){
    return [...cells].every(cell =>{
        return cell.innerText === 'X' || cell.innerText === '0';
    });
}












