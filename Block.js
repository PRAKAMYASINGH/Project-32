class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            
           
        }

//setting the visibilty...

        this.visibility = 225;

//creation of the main body of this class...

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

//adding this body to the world...

        World.add(world, this.body);
        
      }

//the score function to be later mentioned in sketch.js ...

      score() {

        if(this.visibility<0 && this.visibility >-105){
          score++;

        }

      }

//the display function to display everything accordingly in sketch.js ...

      display() {
        
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      } 

//the else function to remove the created body from the class...

      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
      }
    
    }

}