function setup() {
    //create canvas that is 500 x 500
    createCanvas(500, 500);
}

//make 2 empty arrays, one to hold x position (xPos) and y position (yPos)
let xPos = []; 
let yPos = []; 

function draw() {
    //make background white
    background(255);
    //fill the rectangle with a blue color
    fill(0, 0, 122);

    //when the mouse is pressed, push the mouseX position to the xPosition array and the mouseY position to the yPosition array
    if(mouseIsPressed){
        //push mouse x position to the x position array
        xPos.push(mouseX);
        //push mouse y position to y position array
        yPos.push(mouseY);
    }

    //when i is less than the length of either of the arrays, this means the mouse has been clicked
    //the tracking starts at 0 because array count starts at 0
    for (let i = 0; i < yPos.length; i++) {
        //draw a square/brick at the position at the array position i, xPos[i] for the x coordinate and yPos[i] for the y coordinate at the size of 50
        square(xPos[i], yPos[i], 50);
        //add 5 to the yPos coordinate so that it falls at a rate of 5 pixels per frame
        yPos[i] = 5 + yPos[i];
        //after the square is drawn, i++ so that the array stops if the mouse has only been clicked once, or continues if the mouse has been clicked more than once
    }
}