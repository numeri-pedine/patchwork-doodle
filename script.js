var imagesArray = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];

function displayImage(){
    flip1();
    flip2();
};

var flip1 = function(){
    document.getElementById("flip").animate([
        // keyframes
        { transform: 'scaleX(100%)' },
        { transform: 'scaleX(0)' }
      ], {
        // timing options
        duration: 100,
      });
    var num = Math.floor(Math.random() * 24 + 1); // 0...6
    var rotation = Math.floor(Math.random() * 3) * 90;
    document.canvas.src = 'img/PD_carta'+ num+".png";
    document.getElementById("img").style.transform=`rotate(${rotation}deg)`;

};

function flip2(){

    document.getElementById("flip").animate([
        // keyframes
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(100%)' }
        ], {
        // timing options
        duration: 100,
        });
};
