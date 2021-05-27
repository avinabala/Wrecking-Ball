class Circle {
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r)
			pop()
			
	}

}