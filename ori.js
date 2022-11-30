
let A = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
let B = [[0,0,1,1],[0,1,1,0],[1,1,0,0],[1,0,0,1]]
let C = [[1,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0],[0,0,0,1,0,0,0,1]]
let tateIto = [2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2]
let yokoIto = [2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2,2,0,0,2,2,2,2,2,3,3,3,3,1,1,1,1,1,0,0,1,1,1,1,1,3,3,3,3,2,2,2,2]
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
    let canvas = createCanvas(800, 800);
    canvas.parent(result);
    A = gA(32,4);
    C = gC(4,32);
    Prod = mult(A,B);
    Prod = mult(Prod,C);
    console.log(Prod);
    unit = 4;
    for (let i in Prod){
	for (let j in Prod[i]){
	    if (Prod[i][j]==1){
		fill(pal[tateIto[i]])
	    }
	    else{
		fill(pal[yokoIto[j]])
	    }
	    rect(unit*j, unit*i, unit, unit)
	    rect(unit*(j)+unit*8, unit*i, unit, unit)
	    rect(unit*(j), unit*i+unit*8, unit, unit)
	    rect(unit*(j)+unit*8, unit*i+unit*8, unit, unit)
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

