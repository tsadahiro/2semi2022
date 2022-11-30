function setup() {
    createCanvas(400, 400);
    for (let i=0; i<10; i++){
	fill(255-20*i,0,0)
	stroke("orange")
	ellipse(200, 200, 200-20*i, 200-20*i);
    }
}

function draw() {
}
