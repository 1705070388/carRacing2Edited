canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width="120";
car1_height= "70";
background_image = "data:image/jpeg;base64,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";
car1_image= "https://tse3.mm.bing.net/th?id=OIP.h1Cz2WVAMsNNupxzsGdNlgHaDq&pid=Api&P=0&w=316&h=157";
car1_x= 10;
car1_y= 10;

car2_width="120";
car2_height= "70";
car2_image= "https://tse4.mm.bing.net/th?id=OIP.BL83Zzsft4sifYQHMzZ7MwHaDt&pid=Api&P=0&w=346&h=174";
car2_x= 10;
car2_y= 100;


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        upC1();
        console.log("up arrow is pressed");
    }
    if(keypressed == "40"){
        downC1();
        console.log("down arrow is pressed");
    }

    if(keypressed == "37"){
        leftC1();
        console.log("left arrow is pressed");
    }

    if(keypressed == "39"){
        rightC1();
        console.log("right arrow is pressed");
    }



    if(keypressed == "87"){
        upC2();
        console.log("up arrow is pressed");
    }
    if(keypressed == "83"){
        downC2();
        console.log("down arrow is pressed");
    }

    if(keypressed == "65"){
        leftC2();
        console.log("left arrow is pressed");
    }

    if(keypressed == "68"){
        rightC2();
        console.log("right arrow is pressed");
    }

    if (car1_x >= 680) {
        console.log("Car 1 Won!");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!"
    }

    else if (car2_x >= 680) {
        console.log("Car 2 Won!");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!"
    }
}

function upC1() {
    if(car1_y>=10){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, Car 1 x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function downC1() {
    if(car1_y<=520){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, Car 1 x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function leftC1() {
    if(car1_x>=10){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, Car 1 x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function rightC1() {
    if(car1_x<=670){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, Car 1 x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}





function upC2() {
    if(car2_y>=10){
        car2_y = car2_y - 10;
        console.log("When w key is pressed, Car 2 x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function downC2() {
    if(car2_y<=520){
        car2_y = car2_y + 10;
        console.log("When s key is pressed, Car 2 x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function leftC2() {
    if(car2_x>=10){
        car2_x = car2_x - 10;
        console.log("When a key is pressed, Car 2 x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function rightC2() {
    if(car2_x<=670){
        car2_x = car2_x + 10;
        console.log("When up d is pressed, Car 2 x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}