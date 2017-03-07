var tiles = 25;
var startGame = function() {
	myGameArea.start();
	tile(tiles,tiles);
	bobby = new makePlayer(tiles,tiles,"red",3,4);
}


//tiles the whole screen with "width" by "height" #tiles
var tile = function(width,height) {
	for (var h = 0; h <= height; h++) {
		for (var w = 0; w <= width; w++) {
			tileW = myGameArea.canvas.width/width;
			tileH = myGameArea.canvas.height/height;
			ctx = myGameArea.context;
		    ctx.strokeStyle = "black";
		    ctx.strokeRect(tileW*w, tileH*h, tileW, tileH);
		}
	}
}


//object constructor for making basic movable sprites
var makePlayer = function(width,height,color,x,y){
	//constant variables
	this.width = width;
    this.height = height;
    //position variables
    this.x = x;
    this.y = y;
    //changing position
    this.speedX = 0;
    this.speedY = 0;
    this.controls = {
    	moveUp: function(){
    		setInterval(function(){this.speedY=-1;bobby.move();this.speedY=0;},250);
    	},
	moveDown: function(){
    		setInterval(function(){this.speedY=1;bobby.move();this.speedY=0;},250);
    	},
	moveUp: function(){
    		setInterval(function(){this.speedY=-1;bobby.move();this.speedY=0;},250);
    	},
	moveUp: function(){
    		setInterval(function(){this.speedY=-1;bobby.move();this.speedY=0;},250);
    	}
    }
    //update & draw functions
	this.update = function(){
		if (myGameArea.key && myGameArea.key == 37) {this.controls.moveLeft}
		if (myGameArea.key && myGameArea.key == 39) {this.controls.moveUp}
		if (myGameArea.key && myGameArea.key == 38) {this.controls.moveRight}
		if (myGameArea.key && myGameArea.key == 40) {this.controls.moveDown}
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect((this.x-1)*(this.width-1), (this.y-1)*(this.height-1), (myGameArea.canvas.width/this.width), (myGameArea.canvas.height/this.height));
	}
    this.move = function(){
    	this.x+=this.speedX;
    	this.y+=this.speedY;
    }
}


//stores variables and functions for canvas
var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function() {
		this.canvas.width = 600;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
			myGameArea.key = e.keyCode;
		})
		window.addEventListener('keyup', function (e) {
			myGameArea.key = false;
		})
	},
	clear: function() {
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
	}
}


//draws to canvas
function updateGameArea() {
	myGameArea.clear();
	tile(tiles,tiles);
	bobby.update();
}
