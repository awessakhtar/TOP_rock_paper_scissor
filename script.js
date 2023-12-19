// wiat for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // assigning variables
    let rock = document.querySelector("#rockBtn");
    let paper = document.querySelector("#paperBtn");
    let scissor = document.querySelector("#scissorBtn");

    // adding click event
    rock.addEventListener('click', function () {
        // set choice and pass to the function
        let choice = 'rock'
        playGame(choice);
        // disable the button
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        // make image on play area
        let result = document.createElement('img');
        result.src = document.querySelector("#rockImg").getAttribute("src");
        let selected = document.createElement('h4');
        selected.innerHTML = 'You Selected';
        document.querySelector("#diplayPlayer").append(result, selected);
    })

    // adding click event
    paper.addEventListener('click', function () {
        // set choice 
        let choice = 'paper'
        playGame(choice);

        // disable the button
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;

        // make image on play area
        let result = document.createElement('img');
        result.src = document.querySelector("#paperImg").getAttribute("src");
        let selected = document.createElement('h4');
        selected.innerHTML = 'You Selected'
        document.querySelector("#diplayPlayer").append(result, selected);
    })

    // adding click event
    scissor.addEventListener('click', function () {
        // set choice 
        let choice = 'scissor';
        playGame(choice);

        // disable the button
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;

        // make image on play area
        let result = document.createElement('img');
        result.src = document.querySelector("#scissorImg").getAttribute("src");
        let selected = document.createElement('h4');
        selected.innerHTML = 'You Selected'
        document.querySelector("#diplayPlayer").append(result, selected);
    })

    function randomChoice() {
        let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = 'rock';
            // make image on play area
            let result = document.createElement('img');
            result.src = document.querySelector("#rockImg").getAttribute("src");
            let selected = document.createElement('h4');
            selected.innerHTML = 'Computer Selected'
            document.querySelector("#diplayPlayer").append(result, selected);
        } else if (computerChoice < 0.64) {
            computerChoice = 'paper';
            // make display of computer selection
            let result = document.createElement('img');
            result.src = document.querySelector("#paperImg").getAttribute("src");
            let selected = document.createElement('h4');
            selected.innerHTML = 'Computer Selected'
            document.querySelector("#diplayPlayer").append(result, selected);

        } else {
            computerChoice = 'scissor';
            // make image of computer selection
            let result = document.createElement('img');
            result.src = document.querySelector("#scissorImg").getAttribute("src");
            let selected = document.createElement('h4');
            selected.innerHTML = 'Computer Selected'
            document.querySelector("#diplayPlayer").append(result, selected);

        }
        return computerChoice;
    }

    function playGame(playerChoice) {
        let computerChoice = randomChoice();
        gameCalculation(playerChoice, computerChoice);
    }


    function gameCalculation(playerChoice, computerChoice) {
        if (playerChoice == "rock") {
            if (computerChoice == 'rock') {
                console.log('it is a tie')
                let result = document.createElement('H1');
                result.innerHTML = 'it is a tie';
                document.querySelector("#result").append(result);
            } else if (computerChoice == 'paper') {
                console.log('computer Wins')
                let result = document.createElement('H1');
                result.innerHTML = 'Computer Wins';
                document.querySelector("#result").append(result);
            } else {
                console.log("You Win")
                let result = document.createElement('H1');
                result.innerHTML = 'You Win';
                document.querySelector("#result").append(result);
            }
        }

        if (playerChoice == "paper") {
            if (computerChoice == 'rock') {
                console.log('You Win')
                let result = document.createElement('H1');
                result.innerHTML = 'You Win';
                document.querySelector("#result").append(result);
            } else if (computerChoice == 'paper') {
                console.log('Its a tie')
                let result = document.createElement('H1');
                result.innerHTML = 'it is a tie';
                document.querySelector("#result").append(result);
            } else {
                console.log("Computer Wins")
                let result = document.createElement('H1');
                result.innerHTML = 'Computer Wins';
                document.querySelector("#result").append(result);
            }
        }

        if (playerChoice == "scissor") {
            if (computerChoice == 'rock') {
                console.log('Computer Wins')
                let result = document.createElement('H1');
                result.innerHTML = 'Computer Wins';
                document.querySelector("#result").append(result);
            } else if (computerChoice == 'paper') {
                console.log('You Win')
                let result = document.createElement('H1');
                result.innerHTML = 'You Win';
                document.querySelector("#result").append(result);
            } else {
                console.log("Its a tie")
                let result = document.createElement('H1');
                result.innerHTML = 'it is a tie';
                document.querySelector("#result").append(result);
            }
        }
    }
})