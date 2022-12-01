
let A = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
let B = [[0,0,1,1],[0,1,1,0],[1,1,0,0],[1,0,0,1]]
let C = [[1,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0],[0,0,0,1,0,0,0,1]]
let tateIto = [2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,
	      2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2]
let yokoIto = [2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,
	      2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2]
let pal = ["white","orange","blue","black"]
let Prod
let result = document.getElementById('result');

function gA(rep,n){
    let M = [];
    for (let k = 0; k < rep; k++){
	for (let i = 0; i < n; i++){
	    let row = [];
	    for (let j = 0; j < n; j++){
		if (i==j){
		    row.push(1);
		}
		else{
		    row.push(0);
		}
	    }
	    M.push(row);
	}
    }
    return(M);
}

function gC(n,rep){
    let M = [];
    for (let i = 0; i < n; i++){
	let row = [];
	for (let j = 0; j < rep*n; j++){
	    if (i==(j%n)){
		row.push(1);
	    }
	    else{
		row.push(0);
	    }
	}
	M.push(row);
    }
    return(M);
}


function setup() {
    let canvas = createCanvas(1200, 1200);
    canvas.parent(result);
    A = gA(48,4);
    C = gC(4,48);
    Prod = mult(A,B);
    Prod = mult(Prod,C);
    console.log(Prod);
    unit = 6;
    let b1 = B.length;
    let b2 = B[0].length;
    //draw B
    translate(3*unit,3*unit);
    for (let i in yokoIto){
	fill(pal[yokoIto[i]]);
	rect(unit*(-3),unit*i+unit*b1, unit*3, unit);
    }
    for (let j in tateIto){
	fill(pal[tateIto[j]]);
	rect(unit*j+unit*b2,unit*(-3), unit, unit*3);
    }
    for (let i in B){
	for (let j in B[0]){
	    if (B[i][j]==1){
		fill("black")
	    }
	    else{
		fill("white")
	    }
	    rect(unit*j, unit*(i), unit, unit)
	}
    }
    //draw A
    for (let i in A){
	for (let j in A[0]){
	    if (A[i][j]==1){
		fill("black")
	    }
	    else{
		fill("white")
	    }
	    rect(unit*j, unit*(i)+unit*b1, unit, unit)
	}
    }
    //draw C
    for (let i in C){
	for (let j in C[0]){
	    if (C[i][j]==1){
		fill("black")
	    }
	    else{
		fill("white")
	    }
	    rect(unit*j+unit*b2, unit*(i), unit, unit)
	}
    }
    //draw Prod
    for (let i in Prod){
	for (let j in Prod[i]){
	    if (Prod[i][j]==1){
		fill(pal[tateIto[i]])
	    }
	    else{
		fill(pal[yokoIto[j]])
	    }
	    rect(unit*j+unit*b2, unit*(i)+unit*b1, unit, unit)
	}
    }
    
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
}

