class Roof{
	constructor(x,y,width,height){
		var options={
			isStatic:true			
			}
		    
		    this.width=width
		    this.height=height
		    this.body=Bodies.rectangle(x, y, width, height , options);
 		    World.add(world, this.body);
	}
    
    display(){
			
			var roofPos=this.body.position;		
			rectMode(CENTER)
			fill("black")
			rect(roofPos.x,roofPos.y,this.width, this.height);	
	}

}