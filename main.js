Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementsById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml 5 version:',ml5.version);
    classifier=ml5.imagerClassifier('https://teachablemachine.withgoogle.com/models/Ffi-6lWfh/',modelLoaded);
    function modelLoaded(){
        console.log('model loaded');
    }