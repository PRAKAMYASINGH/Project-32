class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }

//creation of the main constraint body....

        this.sling = Constraint.create(options);
        this.pointB=pointB;

//adding the main constraint body to the world...

        World.add(world, this.sling);

    }

//the attach function to be called later in sketch.js ...

    attach(body) {
 
        this.sling.bodyA = body;

    }

//the fly function to disable the main controls...

    fly() {

        this.sling.bodyA =null;

        }

//the diplay function to be later mentioned in sketch.js ...

    display(){
        if(this.sling.bodyA){
   
//the abbreviation variables for the angle and position of the class....            

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        }
    
}