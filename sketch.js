var bund = [];

function setup(){
    createCanvas(750,350);
    for(var i = 0;i < 650;i++){
bund[i] = new Drop()
    }
}

function draw(){
 background(255);
 for(var i = 0;i < bund.length;i++){
bund[i].fall();
bund[i].display();
 }
}