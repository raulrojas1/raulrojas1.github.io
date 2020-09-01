const configuracion = {
	width: 600,
	height: 200,
	parent: "juego",
	type: Phaser.CANVAS,
	scene: {
		preload: preload,
		create: create,
		update: update
	},
	physics:{
		default: "arcade",
		arcade: {
			gravity:{
				y:500			}
		}
	}
}

var rot= 1;
var juego = new Phaser.Game(configuracion);

function preload(){
	this.load.spritesheet('trumpCorre'
		,'imag/trump_run.png',{frameWidth: 100
			, frameHeight: 100});


	//this.juego.stage.backgroundColor("#666333");
	this.load.image("paj","./imag/pajaro.png");
	this.load.image("fond","imag/background-day.png");

}

function create(){

	//crendo teclado teclas
	this.clics= this.input.keyboard.createCursorKeys();

    //this.juego.stage.backgroundColor = "#4488AA";
    this.fondo=this.add.image(0,0,"fond");
    this.fondo.setOrigin(0,0);
    this.fondo.setScale(0.4);

     personaje = this.physics.add.sprite(100,100,"trumpCorre",6);
    this.anims.create({
    	key: 'corre',
    	repeat: -1,
    	frameRate:14,
    	frames: this.anims.generateFrameNames('trumpCorre', {start:6, end: 11})
    });

    

	//juego.physics.arcade.enable(jugador);
	personaje.body.bounce.y = 0.2;
	personaje.body.gravity.y = 300;
	personaje.body.collideWorldBounds = true;


	this.pajaro=this.physics.add.image(1,10,"paj");
	this.ave=this.physics.add.image(400,10,"paj");

	this.pajaro.setScale(0.07);
	this.ave.setScale(0.07);
	personaje.setScale(0.7);
	//this.pajaro.flipX=true;
	//this.pajaro.setOrigin(1,1);
    //this.pajaro.setRotation(20);

    //fisicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(1);//rebote con fuerza *1
    this.pajaro.setVelocity(500,0);

    this.ave.setCollideWorldBounds(true);
    this.ave.setBounce(1);//rebote con fuerza *1
    this.ave.setVelocity(-250,0);
	//this.pajaro.setAcceleration(50,0);

	//evento de teclas
	/*

		this.input.keyboard.on("keydown_RIGHT",()=>
		{
			this.ave.body.velocity.x=200;
		});
	this.input.keyboard.on("keydown_LEFT",()=>
		{
			this.ave.body.velocity.x=-200
		});

	*/

	this.physics.add.collider(this.pajaro,this.ave,this.choca,null,this);	this.physics.add.collider(this.pajaro,this.ave,this.choca,null,this);
	this.physics.add.collider(this.ave,personaje,this.choca,null,this);
	this.physics.add.collider(this.pajaro,personaje,this.choca,null,this);



}

function choca(){

}



function update(time, delta){

	
		//this.pajaro.x+=1;
		//this.pajaro.setRotation(rot+=0.1);
		if(this.pajaro.body.velocity.x<=0){
			this.pajaro.flipX=true;
		}
		else{
			this.pajaro.flipX=false;
		}


		if(this.ave.body.velocity.x>=0){
			this.ave.flipX=false;
		}
		else{
			this.ave.flipX=true;
		}


if (this.clics.right.isDown)
{
    personaje.setVelocityX(360);
    personaje.flipX=false;
    personaje.anims.play('corre', true);
    if (this.clics.up.isDown && personaje.body.velocity.y==0)
	{
	    personaje.setVelocityY(2000);
	    personaje.anims.play('corre', true);
	}
}
else if (this.clics.left.isDown)
{
    personaje.setVelocityX(-360);
    personaje.flipX=true;
    personaje.anims.play('corre', true);

	if (this.clics.up.isDown && personaje.body.position.y==0)
	{
	    personaje.setVelocityY(2000);
	}
}
else if (this.clics.up.isDown)
	{
	    personaje.setVelocityY(2000);
	}
else if (this.clics.right.isDown==false)
{
    personaje.setVelocityX(0);
    personaje.anims.play('corre', false);
}
else if (this.clics.left.isDown==false)
{
    personaje.setVelocityX(0);
    personaje.anims.play('corre', false);
}



/*
	if (this.clics.left.isDown) {
		//canMove = false;
		// Move to the left.
		personaje.body.velocity.x = -150;
		personaje.anims.play('corre',true);
		if(personaje.body.velocity.x<=0){
			this.ave.flipX=true
		}		

	}

	if (this.clics.right.isDown) {
		//canMove = false;
		// Move to the left.
		personaje.body.velocity.x = 150;
		personaje.anims.play('corre',true);
		if(personaje.body.velocity.x>0){
			this.ave.flipX=true
		}

	}

*/

}
