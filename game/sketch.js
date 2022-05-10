var Engine = Matter.Engine;
var World= Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var sensitivity = 100;
var engine, world;
var box1, box2;
var leftbarrier, rightbarrier, topbarrier, bottombarrier;
var game, gameState;
var minusone = 0;
var width = window.outerWidth;
var height = window.outerHeight;

function setup(){
    createCanvas( window.innerWidth - 20 , window.innerHeight - window.height );
    engine = Engine.create();
    world = engine.world;
    menu1 = new BOX( 100 , 100 , 50 , 50 , 1.2 , 0 , 0 , 1.0 , 100 , false );
    menu2 = new BOX( 50 , 50 , 50 , 50 , 1.2 , 0 , 0 , 1.0 , 100 , false );
    bottombarrier = new GROUND( width/2 , height , width , 50 , true );
    topbarrier = new GROUND( width/2 , 0 , width , 50  , true );
    leftbarrier = new GROUND( 0 , height/2 , 50 , height , true );
    rightbarrier = new GROUND( width , height/2 , 50 , height , true );
}

function draw(){
    needs(0);
    minusone++;
    zero = 0;
    one = 0;
    two = 0;
    if(minusone === 1)
    {
        menu1 = undefined;
        menu2 = undefined;
        menu1 = new BOX( 100 , 100 , 50 , 50 , 1.2 , 0 , 0 , 1.0 , 100 , false );
        menu2 = new BOX( 50 , 50 , 50 , 50 , 1.2 , 0 , 0 , 1.0 , 100 , false );
    }
    if(menu1!=undefined && menu2!=undefined)
    {
        if( menu1.body.speed < 7 ){
            Body.applyForce( menu1.body , menu1.body.position ,{
                x: menu1.body.density*Math.round(random( -100, 100 )),
                y: menu1.body.density*Math.round(random( -100, 100 ))
            });
        }
        if( menu2.body.speed < 7 ){
            Body.applyForce( menu2.body , menu2.body.position ,{
                x: menu2.body.density*Math.round(random( -100, 100 )),
                y: menu2.body.density*Math.round(random( -100, 100 ))
            });
        }
    }
}