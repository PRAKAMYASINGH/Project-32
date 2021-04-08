class Ground{

    constructor() {
        var ground_options={
            isStatic : true

          }
        
//creation of the main body of this class...

          this.ground = Bodies.rectangle(450,390,900,20,ground_options);

//adding the created body to the world...

          World.add(world,this.ground);

    }

    display() {
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
    
}