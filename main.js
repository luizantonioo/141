music.mp3
music2.mp3
function preload(){
 song = loadSound("music.mp3");
 song = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);//image(fonte da imagem, posição x e y, larg, alt)
    fill("#FF0000");
    stroke("#FF0000");

}












