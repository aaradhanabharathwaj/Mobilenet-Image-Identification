Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera')
    function capture_image(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="snap_image" src="'+data_uri+'"/>';
    });}
    console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded !!");
}
function predict_cam(){
    img=document.getElementById("snap_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error("Error");
}
else{
document.getElementById("object_name").innerHTML=results[0].label;
}  

}