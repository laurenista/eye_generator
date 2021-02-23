function setup() {
  createCanvas(windowWidth, windowHeight);
  d=select('.div-block');
  d.position(20,0);
  gui=new Gui();
  let gui_setup=new dat.GUI();
  gui_setup.add(gui,'height',10,200);
  gui_setup.add(gui,'width',10,200);
  background(220,);
}
function draw() {
  
  fill(300)
  ellipse(mouseX,mouseY,gui.width,gui.height);
  
  r = random(255); 
  g = random(50,200); 
  b = random(100); 
  a = random(200,255); 
  

  fill(r, g, b, a);
  ellipse(mouseX,mouseY,40,40)
  
  fill(20);
  ellipse(mouseX,mouseY,20,20) 
  
  
}
function Gui(){
  this.height=60;
  this.width=100;
 
  
}
