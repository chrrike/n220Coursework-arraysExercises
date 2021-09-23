function setup(){
    //create canvas that is 500px by 500px
    createCanvas(500,500);
}

//create y value array to store the y position of the circles
let yPos = [];

function draw(){
    //fill background white
    background(255);
    //fill the circles with a blue color
    fill(0, 0, 122);

    //use frameCount value to track how many frames have passed
    //if the frameCount%10 is equal to 0, then 10 frames have passed
    if(frameCount%10 == 0){
        //push the value of 0 onto the yPos arrat
        yPos.push(0)
    }

    //when a value has been pushed onto the yPos array, i will be less than the length so the for loop will run
    for(let i = 0; i<yPos.length; i++){
        //draw a circle in the middle of the screen with the y value of yPos[i]
        circle(250, yPos[i], 20);
        //add 5 to that yPos value so it falls at a rate of 5px per frame
        yPos[i] = yPos[i] + 5;
    }
}