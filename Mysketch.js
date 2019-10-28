let sliderX;
let sliderY;
let sliderSz;
let AmpSlider;
let Phase = 0; 
let size = 0;

function setup() {
	createCanvas(600, 600);
	background(135,206,0);

	sliderX = createSlider(0,width,200);
	sliderX.position(10,550);
	
	sliderY = createSlider(0,height,200);
	sliderY.position(200,550);	

	sliderSz = createSlider(0,500,200); 
	sliderSz.position(400,550);

	AmpSlider = createSlider(0,height/2,10)
	AmpSlider.position (10,10);
}

function draw() {
	background(135,206,0)
	fill(255)
	
	text('X= '+sliderX.value(),10,550)
	text('Y= '+sliderY.value(),200,550)
	text('Sz= '+sliderSz.value(),400,550)
	text('Amp=' + AmpSlider.value(),150,20)
	//Panda
	
	let X = 0;
	let Step = 30;
	let Amp = AmpSlider.value(); 
	let Freq = 1;
	Phase = Phase + 10;
	let Ave = height/2;


	
	let Y =mySine(X,Amp,Freq,Phase,Ave);
	fill(60,179,113)
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)

	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)

	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)

	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)

	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)

	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	X = X+Step;
	Y = mySine (X,Amp,Freq,Phase,Ave);
	rect(X,Y,10,30)
	
	Panda(sliderX.value(),sliderY.value(),sliderSz.value()) // order matters 

}



function Panda(X,Y,Sz) {
	noStroke();
	fill(255);
	rectMode(CENTER)
	rect(X+100,Y+100,Sz,Sz)
	fill(64);
	ellipse(X,Y-25,.6*Sz,.6*Sz)
	fill(255);
	ellipse(X,Y-25,.3*Sz,.3*Sz)
	fill(64);
	ellipse(X+200,Y-25,.6*Sz,.6*Sz)
	fill(255);
	ellipse(X+200,Y-25,.3*Sz,.3*Sz)
	fill(0);
	ellipse(X+50,Y+75,.2*Sz,.2*Sz)
	ellipse(X+150,Y+75,.2*Sz,.2*Sz)
	fill(255);
	ellipse(X+50,Y+75,.1*Sz,.1*Sz)
	ellipse(X+150,Y+75,.1*Sz,.1*Sz)
	fill(255,0,0);
	ellipse(X+100,Y+150,0.3*Sz,0.1*Sz)
}


function mySine(X,Amp,Freq,Phase,Ave){
	angleMode(DEGREES);

let Y = Amp*sin(Freq*X+Phase)+Ave;
return Y;
}
