// define document WIDTH & HEIGHT
var WIDTH	= document.width;
var HEIGHT	= document.height;


/* —————————————————————————————————————————————————— zone */
var zone ={

	minX:	0,
	maxX:	WIDTH,//canvas.width
	minY:	0,
	maxY:	HEIGHT,//canvas.height
	
	clear:			function(){
		clearInterval(game);
		console.log("Perdu !");
	},
	
	clearContext:	function(){
			ctx.clearRect(0,0,zone.max,zone.maxY)
	}, 
	clearContext2:	function(){
			ctx2.clearRect(0,0,zone.maxX,zone.maxY)
	} 
}
/* —————————————————————————————————————————————————— zone */
/* —————————————————————————————————————————————————— center */
var center ={
	
	m:		20,
	g:		9,
	
	r:		5,
	x:		zone.maxX/2,
	y:		zone.maxY/2,
	xdir:	.02,
	ydir:	.03,
	
	color:	"rgba(255,200,0,.8)",
		
	set:			function(){
			this.x = this.r*500
			this.y = this.r*300
			
			this.speed = Math.abs(this.xdir) + Math.abs(this.ydir)
	},
	
	affichage:		function(){
			
			ctx2.strokeStyle = this.color
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.stroke()
			
			
			ctx2.font = "10pt Myriad pro";
		    ctx2.strokeText("Hey dear", this.x-4.5*this.r,this.y+3*this.r)
			
	},
	
	deplacement1:	function(){
	
				this.x 		+= this.xdir
				this.y 		+= this.ydir
							
	},
	collisionBord:	function(){
			
			if	((this.x += this.xdir) + this.r >=  zone.maxX)	this.xdir = -this.xdir 
			if	((this.x += this.xdir) - this.r <=  zone.minX)	this.xdir = -this.xdir
			if	((this.y += this.ydir) + this.r >=  zone.maxY) 	this.ydir = -this.ydir
			if	((this.y += this.ydir) - this.r <=  zone.minY)	this.ydir = -this.ydir
	}
}
/* —————————————————————————————————————————————————— center */
/* —————————————————————————————————————————————————— planete */
var planete ={
	
	m:		.01,
	r:		1,
	x:		250,
	y:		250,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-.2,
	ydir:	Math.random()*-.2,
	speed:	0,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,255,255,1)",	
	
	// affichage & mouvement
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (center.x - this.x)/100000
			this.ydiff	= (center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)
			this.ydir	+= this.vy * (this.ydiff)
			
			this.x1	= this.x - this.xdir
			this.y1	= this.y - this.ydir
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
//			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
			// main
			ctx2.fillStyle = "rgba(0,255,255,1)"
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*5, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
	}
}
/* —————————————————————————————————————————————————— planete */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_1_1 ={
	
	m:		5000000,

	r:		1,
	x:		planete.x + Math.random()*100,
	y:		planete.y + Math.random()*100,
	
	ax:		null,
	ay:		null,
	xdir:	0,
	ydir:	0,
	speed:	20,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(200,200,200,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
			// main
			ctx2.fillStyle = "rgba(0,255,200,1)"
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
	}
}
/* —————————————————————————————————————————————————— satellite1 */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_1_2 ={
	
	m:		5000000,

	r:		1,
	x:		planete.x + Math.random()*10,
	y:		planete.y + Math.random()*10,
	
	ax:		null,
	ay:		null,
	xdir:	0,
	ydir:	0,
	speed:	20,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(200,200,200,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
			// main
			ctx2.fillStyle = "rgba(0,255,150,1)"
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
	}
}
/* —————————————————————————————————————————————————— satellite1 */
/* —————————————————————————————————————————————————— planete */
var planete2 ={
	
	m:		.01,
	r:		3,
	x:		150,
	y:		150,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-.2,
	ydir:	Math.random()*-.2,
	speed:	.0,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,100,200,1)",	
	
	// affichage & mouvement
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (center.x - this.x)/100000
			this.ydiff	= (center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)
			this.ydir	+= this.vy * (this.ydiff)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// main
			ctx2.fillStyle = this.color
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
//			ctx.arc(this.x,this.y,1, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
				    
	}
}
/* —————————————————————————————————————————————————— planete */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_2_1 ={
	
	m:		20000000,

	r:		1,
	x:		planete2.x + Math.random()*30,
	y:		planete2.y + Math.random()*30,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,150,200,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// main
			ctx2.fillStyle = this.color;
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	 
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
			   
	}
}
/* —————————————————————————————————————————————————— satellite1 */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_2_2 ={
	
	m:		10000000,

	r:		1,
	x:		planete2.x + Math.random()*10,
	y:		planete2.y + Math.random()*10,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,200,200,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			
			// main
			ctx2.fillStyle = this.color;
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
	}
}
/* —————————————————————————————————————————————————— satellite1 */
var planete3 ={
	
	m:		.05,
	r:		3,
	x:		300,
	y:		350,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,200,200,1)",	
	
	// affichage & mouvement
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (center.x - this.x)/100000
			this.ydiff	= (center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)
			this.ydir	+= this.vy * (this.ydiff)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// main
			ctx2.fillStyle = this.color
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
//			ctx.arc(this.x,this.y,1, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
				    
	}
}
/* —————————————————————————————————————————————————— planete */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_3_1 ={
	
	m:		1000000,

	r:		1,
	x:		planete3.x + Math.random()*30,
	y:		planete3.y + Math.random()*30,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,200,150,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			// main
			ctx2.fillStyle = this.color;
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	 
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
			   
	}
}
/* —————————————————————————————————————————————————— satellite1 */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_3_2 ={
	
	m:		1000000,

	r:		1,
	x:		planete3.x + Math.random()*10,
	y:		planete3.y + Math.random()*10,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,200,100,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			
			// main
			ctx2.fillStyle = this.color;
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
	}
}
/* —————————————————————————————————————————————————— satellite1 */
/* —————————————————————————————————————————————————— satellite1 */
var satellite_3_3 ={
	
	m:		1000000,

	r:		1,
	x:		planete3.x + Math.random()*10,
	y:		planete3.y + Math.random()*10,
	
	ax:		null,
	ay:		null,
	xdir:	Math.random()*-2,
	ydir:	Math.random()*.2,
	speed:	.002,
	
	gx:		null,
	gy:		null,
	
	color:	"rgba(255,200,50,1)",
	
	affichage:		function(_center){
			
			this.speed 	= (Math.abs(this.xdir)-this.atanxdiff) + (Math.abs(this.ydir)-this.atanydiff)
			this.gx		= (this.xdiff * -this.atanxdiff)
			this.gy		= (this.ydiff * -this.atanydiff)
			
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000

			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			this.gDistX	= Math.abs(this.x-_center.x)
			this.gDistY	= Math.abs(this.y-_center.y)
			this.gDist	= 1/(this.gDistX + this.gDistY)*_center.m
			
			this.speed = this.gDist
			
			
			// gravitation
			this.xdiff	= (_center.x - this.x)/100000
			this.ydiff	= (_center.y - this.y)/100000
			
			this.atanxdiff	= -Math.atan(this.xdiff)
			this.atanydiff	= -Math.atan(this.ydiff)
			
			/*
				G = 6,67384 * 10^(-10) 				N.m^2.kg^(-2)
				
				F(a/b) = F(b/a) = 	M(a)M(b)
									———————
									  d^2
			*/
			
			this.vx		= ((this.m * _center.m) / this.xdiff)* (-this.atanxdiff)
			this.vy		= ((this.m * _center.m) / this.ydiff)* (-this.atanydiff)
			
			this.xdir 	+= this.vx * (this.xdiff)*(this.speed)
			this.ydir	+= this.vy * (this.ydiff)*(this.speed)
			
			this.x1	= this.x - this.xdir/5
			this.y1	= this.y - this.ydir/5
			
			this.x2	= this.x - 25*this.xdir
			this.y2	= this.y - 25*this.ydir
			
			this.x += this.xdir
			this.y += this.ydir
			
			
			// main
			ctx2.fillStyle = this.color;
			ctx2.beginPath()
			ctx2.arc(this.x,this.y,this.r*2, 0, 2*Math.PI)
			ctx2.closePath()
			ctx2.fill()	    
			
			// suivi
			ctx.fillStyle = "rgba(250,100,200,.05)"
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.r, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
	}
}
/* —————————————————————————————————————————————————— satellite1 */




console.log("running");