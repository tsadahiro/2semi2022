
let A = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
let B = [[0,0,1,1],[0,1,1,0],[1,1,0,0],[1,0,0,1]]
let C = [[1,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0],[0,0,0,1,0,0,0,1]]
//let C = [[0,0,0,1,0,0,0,1],[0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0],[1,0,0,0,1,0,0,0]]
let tate = [0,0,0,0,1,1,1,1]
let yoko = [0,0,0,0,1,1,1,1]
/*
let A = [[0,1],[1,0],[0,1],[1,0]]
let B = [[1,1],[0,1]]
let C = [[0,1,0,1],[1,0,1,0]]
let tate = [1,1,1,1]
let yoko = [0,0,0,0]
*/
let pal = ["white","red"]
let Prod

function setup() {
  createCanvas(640, 480);
    Prod = mult(A,B);
    Prod = mult(Prod,C);
    console.log(Prod);
}

function mult(A, B){
    let P = [];
    for (i = 0; i < A.length; i++){
	let vec = [];
	for (j = 0; j < B[0].length; j++){
	    let sum = 0;
	    for (k = 0; k < A[0].length; k++){
		sum += A[i][k]*B[k][j];
	    }
	    vec.push(sum);
	}
	P.push(vec);
    }
    return(P);
}

function draw() {
    unit = 20;
    for (let i in Prod){
	for (let j in Prod[i]){
	    if (Prod[i][j]==1){
		fill(pal[tate[i]])
	    }
	    else{
		fill(pal[yoko[j]])
	    }
	    rect(unit*j, unit*i, unit, unit)
	    rect(unit*(j)+unit*8, unit*i, unit, unit)
	    rect(unit*(j), unit*i+unit*8, unit, unit)
	    rect(unit*(j)+unit*8, unit*i+unit*8, unit, unit)
	}
    }
}

