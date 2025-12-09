


// let totalScoreAI = document.body.querySelector('.AIScoreTotal').textContent += ` ${}`
// let totalScorePlayer = document.body.querySelector('.playerScoreTotal').textContent += ` ${}`
let totalScorePlayer = document.body.querySelector(".playerScoreTotal");
let totalScoreAI = document.body.querySelector(".playerScoreTotal");

totalScoreAINumber = 0;
totalScorePlayerNumber = 0;



const allButtons = document.body.querySelectorAll(".selection .selectorButton");
let currentImg = ''

allButtons.forEach(button => {
    button.addEventListener('click', function (e) {

        rockImg = 'https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        paperImg = 'https://plus.unsplash.com/premium_photo-1726244490618-e0f8361062e7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        scissorsImg = 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        const targetID = Number(e.target.id);

        let AIImg = document.body.querySelector(".AIImg");
        let playerImg = document.body.querySelector(".playerImg");

        let AIScoreTotal = document.body.querySelector(".AIScoreTotal");
        let playerScoreTotal = document.body.querySelector(".playerScoreTotal");


        let winnerHeader = document.body.querySelector(".winnerHeader");

        const playerChoice = targetID;
        console.log(playerChoice);



        function checkWin() {
            const rules = { 1: 3, 2: 1, 3: 2 };
            let imgChange = [rockImg, paperImg, scissorsImg];
            for (images of imgChange) {
                console.log(playerImg.src = imgChange[playerChoice - 1]);
                currentImg += playerImg.src;
                if (playerChoice === 0) {
                    playerImg.src = currentImg;
                }
                else if (playerChoice > 0) {
                    let AIChoice = Math.floor((Math.random() * 3) + 1);
                    console.log(AIChoice);
                    if (AIChoice === playerChoice) {
                        console.log(AIImg.src = imgChange[AIChoice - 1]);
                        return winnerHeader.textContent = 'Winner: Draw!';

                    }
                    console.log(AIImg.src = imgChange[AIChoice - 1]);
                    return rules[playerChoice] === AIChoice ? winnerHeader.textContent = "Winner: Player!" : winnerHeader.textContent = "Winner: AI!";
                }
            }
        }
        checkWin();


        function addNums() {
            if (winnerHeader.textContent === 'Winner: Player!') return totalScorePlayerNumber += 1;
            if (winnerHeader.textContent === 'Winner: AI!') return totalScoreAINumber += 1;
            else return;
        }
        addNums();
        AIScoreTotal.textContent = 'AI: ' + totalScoreAINumber;
        playerScoreTotal.textContent = 'Player: ' + totalScorePlayerNumber;

        console.log(currentImg);
    });
});

