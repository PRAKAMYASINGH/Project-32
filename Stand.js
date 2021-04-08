class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }

//the main rectangular body for the class...

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

//adding the main rectangular body to the world...

        World.add(world, this.body);
      }

//the display function to display everything in sketch.js ...

      display() {

//tbe abbreviation variable for the angle of the class's body...

        var angle = this.body.angle;
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

      }
      
}