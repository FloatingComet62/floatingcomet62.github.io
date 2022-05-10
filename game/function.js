function needs( color )
{
    background( color );
    Engine.update( engine );
    display();
}
//-----------------------------------------------------------------------------------------------------//
//object displaying
function display()
{
if( menu1!=undefined && menu2!=undefined )
{
    menu1.display("blue");
    menu2.display("red");
}
bottombarrier.display("brown");
topbarrier.display("brown");
leftbarrier.display("brown");
rightbarrier.display("brown");
}
//-----------------------------------------------------------------------------------------------------//
//enemy movements
function fightBack()
{

    Body.applyForce( Ebox.body , Ebox.body.position ,
        {
            x: Ebox.body.density*Math.round( random( -Esensivity , Esensivity ) ) ,
            y: Ebox.body.density*Math.round( random( -Esensivity , Esensivity ) )
        }
        );
}