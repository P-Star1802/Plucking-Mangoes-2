class ground{

    constructor(){


        var options ={
            isStatic : true,
            friction : 0.4
        }

        this.body = Bodies.rectangle(500,630,1205,20,options);
        World.add(world,this.body);
    }

    display(){
  
       rectMode(CENTER);
       fill("green")
       rect(500,230,1205,20);



    }

}







