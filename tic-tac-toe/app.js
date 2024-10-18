let turn = 'X';
let gameOver = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWinner = () => {
    let boxtexts = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach( e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " WON!!!"
            gameOver = true
        } 
    })
}



let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === '' && !gameOver){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWinner();
            if(!gameOver){
                document.querySelector('.info').innerText = 'Turn for ' + turn;
            }
        }
    });
});



document.getElementById("reset").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(element => {
        element.innerText = ''
    });
    turn = "X"
    gameOver = false;
    document.querySelector('.info').innerText = 'Turn for ' + turn;
    
});