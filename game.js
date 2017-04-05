/**
 * Created by vikyf on 4/4/2017.
 */

var pjs = new PointJS('2d', 600, 600);
pjs.system.initFullPage();

var game = pjs.game;
var point = pjs.vector.point;

var height = game.getWH().h


var fon1 = game.newImageObject({
    x : 0, y : 0,
    file : 'img/fon.jpg',
    h : height,
    onload : function () {
        fon2.x = fon1.x+fon1.w;
    }
});


var fon2 = game.newImageObject({
    x : 0, y : 0,
    file : 'img/fon.jpg',
    h : height
});

var gr1 = game.newImageObject({
    x : 0, y : 0,
    file : 'img/ground.png',
    w : width,
    onload : function () {
        gr2.y = gr1.y = height - gr1.h;
        gr2.x = gr1.x+gr1.w;
    }
});

var gr2 = game.newImageObject({
    x : 0, y : 0,
    file : 'imgs/ground.png',
    w : width
});

var dog = game.newAnimationObject({
    x : width / 4, y : 0,
    h : 120, w : 150,
    delay : 4,
    animation : pjs.tiles.newAnimation('imgs/run_dog.png', 150, 120, 5)
});


var moveBackGround = function (s) {

    fon1.move(point(-s / 2, 0));
    fon2.move(point(-s / 2, 0));

    gr1.move(point(-s, 0));
    gr2.move(point(-s, 0));


    if (fon1.x + fon1.w < 0) {
        fon1.x = fon2.x+fon2.w;
    }

    if (fon2.x + fon2.w < 0) {
        fon2.x = fon1.x+fon1.w;
    }

    if (gr1.x + gr1.w < 0) {
        gr1.x = gr2.x+gr2.w;
    }

    if (gr2.x + gr2.w < 0) {
        gr2.x = gr1.x+gr1.w;
    }
};

game.newLoopFromConstructor('myGame', function () {







});

game.startLoop('myGame');

