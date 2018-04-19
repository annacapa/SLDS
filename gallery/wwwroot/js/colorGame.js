// Write your Javascript code.

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var messageBkgdDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init (){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //The above is callered the "Ternary Operator"
            //It has three operands: condition, expression 1, expression 2
            //and it means the same as the if statement below:
            // if(this.textContent === "Easy"){
            //  numSquares = 3;
            // } else {
            //  numSquares = 6;
            // }
            reset();
        });
    }

}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style["background-color"];
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                messageBkgdDisplay.style.background = clickedColor;
            } else {
                this.style.background = "#eee";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the button text back to say New Colors
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "Click the correct color";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
          squares[i].style.display = "block";
          squares[i].style.background = colors[i];
        } else {
          squares[i].style.display = "none";
        }
    }
    h1.style.background = "#444";
    messageBkgdDisplay.style.background = "#555";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length); //pics a random number w/i the colors array
    return colors[random]; //access an element from the array at that index, meaning it returns the color picked above
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}