//starts here

prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:280,
    image_format:"png",
    png_quality=90

});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/44TU7K_Fz/model.json",modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded!");
}
function speak(){
    synth=window.speechSynthesis;
speak_data_1="First prediction is"+prediction_1;
speak_data_2="And second prediction is"+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 synth.speak(utterthis);
}
//*Ends here*//