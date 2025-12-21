const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => board;

    const setField = (index, sign) => {
        if (index > board.length || board[index] !== '') return;
        board[index] = sign;
    };
    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return { getBoard, setField, reset };
})();


const Player = (name, sign) => {
    return { name, sign };
};


const displayController = (() => {
    const playerXInput = document.getElementById("playerInput1");
    const playerOInput = document.getElementById("playerInput2");
    const submitBtn1 = document.getElementById("submit1");
    const submitBtn2 = document.getElementById("submit2");

    const startGameButton = document.querySelector(".startGameButton");
    const resetGameButton = document.querySelector(".resetGameButton");

    const beforeNameWrap = document.querySelector(".beforeNameWrap");
    const afterNameWrap = document.querySelector(".afterNameWrap");

    startGameButton.addEventListener('click', () => {
        beforeNameWrap.style.display = 'flex';
    })



    let playerX;
    let playerO;

    let playCheck = false;
    let gameOver = false;

    submitBtn1.addEventListener('click', () => {

        playerX = Player(playerXInput.value, "X");
        document.getElementById("player1Text").innerText = `Player X: ${playerX.name}`;
        playerXInput.value = '';

        if (playerX.value !== '' && playerO.value !== '') {
            afterNameWrap.style.display = 'flex';
        }
    });
    submitBtn2.addEventListener('click', () => {

        playerO = Player(playerOInput.value, "O");
        document.getElementById("player2Text").innerText = `Player O: ${playerO.name}`;
        playerOInput.value = '';

        if (playerX.value !== '' && playerO.value !== '') {
            afterNameWrap.style.display = 'flex';
        }
    });



    gridBoxes = document.querySelector(".userUIDiv")
    gridBoxes.addEventListener('click', (e) => {
        if (e.target.classList.contains("gridBox")) {
            const parentID = e.target.id;
            console.log("ID: " + parentID);
            const squareToMark = document.getElementById(parentID);
            symbolText = document.createElement("h1")
            symbolText.setAttribute('class', 'gridText')
            if (playCheck === false && gameBoard.getBoard().at(parentID) === '' && gameOver === false) {
                console.log(gameBoard.setField(parentID, 'X'))
                symbolText.innerText = 'X';
                squareToMark.appendChild(symbolText)
                playCheck = true;
            }
            else if (playCheck === true && gameBoard.getBoard().at(parentID) === '' && gameOver === false) {
                console.log(gameBoard.setField(parentID, 'O'))
                symbolText.innerText = 'O';
                squareToMark.appendChild(symbolText)
                playCheck = false;
            }
            console.log(gameBoard.getBoard())
            const result = checkForWin.checkWin();

            if (result === 'win') {
                const winner = playCheck ? "X" : "O";
                document.getElementById("resultDisplay").innerText = `Player ${winner} Wins!`;

                gameOver = true;

            }
            else if (result === "tie") {
                document.getElementById("resultDisplay").innerText = "Its a Tie!";
                gameOver = true;
            }
        }
    });


    const resetGame = () => {
        playCheck = false;
        gameOver = false;

        gameBoard.reset();

        const gridTexts = document.querySelectorAll(".gridText");
        gridTexts.forEach(text => {
            text.innerText = '';
        });

        document.getElementById("resultDisplay").innerText = '';

        playerXInput.value = '';
        playerOInput.value = '';

        document.getElementById("player1Text").innerText = 'Player X: '
        document.getElementById("player2Text").innerText = 'Player O: '

        afterNameWrap.style.display = 'none';
        beforeNameWrap.style.display = 'none';
    };
    resetGameButton.addEventListener('click', resetGame);


})();

const checkForWin = (() => {

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const checkWin = () => {
        const board = gameBoard.getBoard();


        const isWin = winningConditions.some(combination => {

            return combination.every(index => {
                return board[index] !== '' && board[index] === board[combination[0]];
            });
        });

        if (isWin) {
            return "win";
        }


        if (!board.includes('')) {
            return "tie";
        }

        return null;
    };

    return { checkWin };
})();
