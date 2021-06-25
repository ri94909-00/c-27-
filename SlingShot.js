class SlingShot{

constructor(bodyA,bodyB){
     
  var  options={

     length:10,
     stiffness:0.5,
     bodyA:bodyA,
     bodyB:bodyB,

    }



    this.sling = Constarint.create(options);
    
    World.add(world,this.sling);

}

display(){

var pointA = this.sling.bodyA.position;
var pointB = this.sling.bodyB.position;
strokeWeight(5);
line(pointA.x,pointA.y,pointB.x,pointB.y)


}




}