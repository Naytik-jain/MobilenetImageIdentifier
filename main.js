function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5.version);
  Ml5ini=ml5.imageClassifier('MobileNet',Modelloaded);
}
function Modelloaded(){
  console.log("Ml5 is activated");
}

function draw(){
  image(video, 0, 0, 300, 300);
  Ml5ini.classify(video, gotResult);
}
function gotResult(error, results)
{
  if(error){
    console.error(error);
  }
  else
  {
    console.log(results);
    accurate=results[0].confidence;
    accuracy=accurate * 100;
    
    document.getElementById("Object_Name").innerHTML=results[0].label;
    document.getElementById("Object_Accuracy").innerHTML=accuracy.toFixed(3)+ ' %';
  }
}



