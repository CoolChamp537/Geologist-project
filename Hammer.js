class Hammer extends BaseClass {
  constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("Baseball bat.png");
    this.scale = 5
  };

  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    super.display();
  }
 
};
