console.log("This is a test")

// init vars
let userScore = 0;
let computerScore = 0;
// Links it to the html id
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("r");
const sissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");
// Links it to the html class
const scoreBoard_div = document.querySelector(".score-board");
// Link to the paragraph
const result_p = document.querySelector(".result > p");

function computersChoice() {
    const choices = ['Rock', 'Paper', 'Sissors'];
    return choices[Math.floor(Math.random() * Math.floor(3))];
}

function win(user, comp) {
    userScore++;
    // this will update the HTML
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = user + " beats " + comp + " you WIN!!"
    console.log('Won');

}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = user + " draws with " + comp + " you draw!"
    console.log('draw');

}

function lose(user, comp) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = user + " loses to " + comp + " you LOSE!!"
    console.log('lose');

}


function game(userChoice) {
    const compChoice = computersChoice();
    console.log('You clicked ' + userChoice);
    console.log('Computer picked ' + compChoice);

    switch (userChoice + " & " + compChoice) {
        // User Wins
        case "Paper & Rock":
        case "Rock & Sissors":
        case "Sissors & Paper":
            win(userChoice, compChoice);
            break;

        // Comp Wins
        case "Paper & Sissors":
        case "Sissors & Rock":
        case "Rock & Paper":
            lose(userChoice, compChoice);
            break;

        // Draw
        case "Paper & Paper":
        case "Sissors & Sissors":
        case "Rock & Rock":
            draw(userChoice, compChoice);
            break;
    }

}


function main() {
    // Adding advent listeners to each rock, paper and sissor so when acation accors on it it will read it
    // addEventListener (action, what you want to do when action happens)
    rock_div.addEventListener('click', () => {
        game("Rock");
    })

    sissors_div.addEventListener('click', () => {
        game("Sissors");
    })

    paper_div.addEventListener('click', () => {
        game("Paper");
    })
}

main();






