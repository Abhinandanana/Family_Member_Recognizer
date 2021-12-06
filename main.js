Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_picture(){
    Webcam.snap(function(data_uri){
document.getElementById("final").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5', ml5.version);

model_link= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BeMl8uaTl/model.json', modelLoaded);

function modelLoaded(){
console.log('Model Loaded!');
}

function Identify(){
    captured_image= document.getElementById('captured_image');
    model_link.classify(captured_image, final_result);
}

function final_result(error, results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object").innerHTML= results[0].label;
    document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(2);
}
}