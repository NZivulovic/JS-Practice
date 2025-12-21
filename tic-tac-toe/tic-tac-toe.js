<<<<<<< HEAD
// 1. store gameboard as array, inside gameboard object
// 2. players also stored in objects
// 3. object to control the flow of the game
// 4. check for all winning 3-in-a-rows and ties.
// 5. object that will handle the display/DOM logic.
// 6. players click on a board square to place their marker, X and O automatic switch
// 7. start/restart the game button
// 8. display element for result



// 1. The Game Board Module
=======
>>>>>>> tic-tac-toe
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => board;

    const setField = (index, sign) => {
        if (index > board.length || board[index] !== '') return;
        board[index] = sign;
    };
<<<<<<< HEAD

    return { getBoard, setField };
})();

// 2. Player Factory
=======
    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return { getBoard, setField, reset };
})();


>>>>>>> tic-tac-toe
const Player = (name, sign) => {
    return { name, sign };
};

<<<<<<< HEAD
// 3. Game Controller (Handles the "glue" logic)
=======

>>>>>>> tic-tac-toe
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

<<<<<<< HEAD
    resetGameButton.addEventListener('click', () => {
        reset.resetGame();
    })
=======
>>>>>>> tic-tac-toe


    let playerX;
    let playerO;

    let playCheck = false;
    let gameOver = false;

    submitBtn1.addEventListener('click', () => {
<<<<<<< HEAD
        // Create players when the button is clicked
=======

>>>>>>> tic-tac-toe
        playerX = Player(playerXInput.value, "X");
        document.getElementById("player1Text").innerText = `Player X: ${playerX.name}`;
        playerXInput.value = '';

        if (playerX.value !== '' && playerO.value !== '') {
            afterNameWrap.style.display = 'flex';
        }
    });
    submitBtn2.addEventListener('click', () => {
<<<<<<< HEAD
        // Create players when the button is clicked
=======
        
>>>>>>> tic-tac-toe
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
<<<<<<< HEAD
                const winner = playCheck ? "X" : "O"; // Because playCheck already toggled
                document.getElementById("resultDisplay").innerText = `Player ${winner} Wins!`;
                // Add logic here to stop the game (e.g., remove event listeners)
=======
                const winner = playCheck ? "X" : "O"; 
                document.getElementById("resultDisplay").innerText = `Player ${winner} Wins!`;
                
>>>>>>> tic-tac-toe
                gameOver = true;

            }
            else if (result === "tie") {
                document.getElementById("resultDisplay").innerText = "Its a Tie!";
                gameOver = true;
            }
        }
    });


<<<<<<< HEAD
})();

const checkForWin = (() => {
    // Array of all 8 winning combinations (index positions)
=======
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

>>>>>>> tic-tac-toe
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const checkWin = () => {
        const board = gameBoard.getBoard();

<<<<<<< HEAD
        // 1. Check for a Winner
        // We use .some() to see if any winning condition is met
        const isWin = winningConditions.some(combination => {
            // Check if all three indices in a combination have the same sign (and aren't empty)
=======

        const isWin = winningConditions.some(combination => {

>>>>>>> tic-tac-toe
            return combination.every(index => {
                return board[index] !== '' && board[index] === board[combination[0]];
            });
        });

        if (isWin) {
            return "win";
        }

<<<<<<< HEAD
        // 2. Check for a Tie
        // If there is no win but all squares are filled
=======

>>>>>>> tic-tac-toe
        if (!board.includes('')) {
            return "tie";
        }

<<<<<<< HEAD
        return null; // Game continues
=======
        return null; 
>>>>>>> tic-tac-toe
    };

    return { checkWin };
})();
<<<<<<< HEAD

const reset = (() => {

    const resetGame = () => {

        delete (document.body.getElementsByClassName('gridText'));

    }
    return { resetGame };
})();
=======
>>>>>>> tic-tac-toe
