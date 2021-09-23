function setup(){
    createCanvas(500,500);
}

function draw(){
    //create array holding the colors of the ice cream
   let icecreamColors = ["#ffd6fb", "#fffefa", "#785d4e"];
    //loop to draw a rectangle with each color
    for(let x = 0; x <= icecreamColors.length; x++){
        //use x to go through array, fill and stroke set to the color at the array value located at place x
        fill(icecreamColors[x]);
        stroke(icecreamColors[x]);
        //draw the rectangle, using x to make them an equal distance
        rect(90*x, 10, 90, 90);
    }
}