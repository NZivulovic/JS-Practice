
function tictactoe() {

    function player() {
        this.firstPlayerName = '';
        this.secondPlayerName = '';


        const button1 = document.getElementById("submit1")
        const button2 = document.getElementById("submit2")
        const playerDisplayText1 = document.getElementById("player1Text")
        const playerDisplayText2 = document.getElementById("player2Text")

        button1.addEventListener('click', () => {
            this.firstPlayerName = document.getElementById("playerInput1").value
            playerDisplayText1.innerText += ` ${firstPlayerName}`
            document.getElementById("playerInput1").value = '';
            console.log("Player 2 is: " + this.firstPlayerName);
        })
        button2.addEventListener('click', () => {
            this.secondPlayerName = document.getElementById("playerInput2").value
            playerDisplayText2.innerText += ` ${secondPlayerName}`
            document.getElementById("playerInput2").value = '';
            console.log("Player 2 is: " + this.secondPlayerName);
        })

    }
    player();

    function gameBoard() {
        const X = "X";
        const O = "O";
        let playCheck = false;
        const turns = 9;
        this.spaces = [
            '', '', '',
            '', '', '',
            '', '', '',
        ]
        gridTexts = document.querySelectorAll(".gridBox")
        for (let i = 0; i < turns; i++) {
            gridTexts[i].addEventListener('click', () => {
                if (playCheck === false) {
                    playCheck = true
                    gridTexts[i].innerText = X
                }
                else if (playCheck === true) {
                    playCheck = false
                    gridTexts[i].innerText = O
                }
            })

        }
    }
    gameBoard();
    console.log()

    // for (let i = 0; i < turns; i++) {
    //     if (playCheck === false) {
    //         player1Choice = prompt("Player 1 Choice?");
    //         playCheck = true
    //         spaces[player1Choice - 1] = 'X'
    //     }
    //     else if (playCheck === true) {
    //         player2Choice = prompt("Player 2 Choice?");
    //         playCheck = false
    //         spaces[player2Choice - 1] = 'O'
    //     }
    //     console.log(spaces.slice(0, 3));
    //     console.log(spaces.slice(3, 6));
    //     console.log(spaces.slice(6, 9));
    // }

}
tictactoe();