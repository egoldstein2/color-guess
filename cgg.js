// <---- Square Colors --- >
var colors = genRandomColors(6);

// <---- Vars ---->
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // Chooses the correct square
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector(".header");
var resetButton = document.querySelector("#reset");
var footer = document.querySelector(".footerDisplay");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


// <---- Square Logic ---->
for(var i = 0; i < squares.length; i++){
    // add color to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) { // compares square to colorDisplay
            messageDisplay.textContent = "You got it!"
            changeColors(this.style.backgroundColor);
            header.style.backgroundColor = this.style.backgroundColor;
            footer.style.backgroundColor = this.style.backgroundColor;
        } else {
            this.style.backgroundColor = "black"
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColors(color) { // Sets all squares to correct color on proper guess.
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


// <---- Button Logic ---->

// RESET
resetButton.addEventListener("click", function(){
    if(hardBtn.classList.value === "selected"){
        colors = genRandomColors(6);
    } else {
        colors = genRandomColors(3);
    }
    // Turnary Operator Method. Much cleaner. Below is just an example, not using code
    // from this app. It says: If textContent equals easy, make squares equal 3, otherwise
    // make it equal 6.
        // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
        if(colors[i]){
            squares[i].style.display = "block";
        }
    }
    header.style.backgroundColor = "rgb(48, 99, 148)";
    footer.style.backgroundColor = "rgb(48, 99, 148)";
    messageDisplay.textContent = "Choose a color!";
});

// HARD
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    header.style.backgroundColor = "rgb(48, 99, 148)";
    footer.style.backgroundColor = "rgb(48, 99, 148)";
    messageDisplay.textContent = "Choose a color!";
    colors = genRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
        } else {
            squares[i].style.display = "none"
        }
    }
});

// Easy
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    header.style.backgroundColor = "rgb(48, 99, 148)";
    footer.style.backgroundColor = "rgb(48, 99, 148)";
    messageDisplay.textContent = "Choose a color!";
    colors = genRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
        } else {
            squares[i].style.display = "none"
        }
    }
});

// <---- Color Logic ---->
function pickColor() { // Picks a random color from arr[] in genRandomColors(num). This //allows the colorDisplay footer section to show the guess color.
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
    // .random picks a decimal from 0-1.
    // .floor returns a whole number instead. //
    // .length returns the number of items in colors[] array (6 in this case), but random
    // will never go to the highest number in that count so it works with the index starting 
    // at 0 and going to 5.
}

function genRandomColors(num) { // Uses genRGB() to generate a randon RGB value, then adds // it to an array that pickColor() can choose from and var colors can assign to a square.
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(genRGB());
    }
    return arr;
}


function genRGB(){ // Creates a random RGB value for each square.
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// <---- Footer Section ---->
colorDisplay.textContent = pickedColor.toUpperCase(); // Sets rgb message for user to guess in footer HTML section.

