function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function setup(){
canvas=createCanvas(500,400);
canvas.position(540,300)
canvas.mouseReleased(classifycanvas);
synth = window.speechSynthesis;
background('white');
}
 
function draw(){
 strokeWeight(14);
 stroke("red");
 if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
 }
}
function classifycanvas(){
classifier.classify(canvas,gotResult);
}
function gotResult(error,result){
  if(error){
    console.log(error);
  }
  else{
    console.log(result);
  }
}