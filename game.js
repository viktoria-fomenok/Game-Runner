/**
 * Created by vikyf on 4/4/2017.
 */

var pjs = new PointJS('2D', 1280 / 2, 720 / 2);
var log    = pjs.system.log;
var game   = pjs.game;
var point  = pjs.vector.point;
var camera = pjs.camera;
var brush  = pjs.brush;
var OOP    = pjs.OOP;
var math   = pjs.math;
var levels = pjs.levels;

var width  = game.getWH().w;
var height = game.getWH().h;

pjs.system.setTitle('PointJS Game');


// создание экземпляра движка
var pjs = new PointJS('2d', 800, 400);
pjs.system.initFullPage();

var game = pjs.game;
var point = pjs.vector.point;


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

    var myText = game.newTextObject({
        positionC : point(game.getWH2().w, game.getWH2().h),
        size : 50,
        color : '#EAEAEA',
        text : 'Hello, World!',
        alpha : 0,
        font : 'Arial'
    });

    this.update = function () {
        game.clear();
        game.clear();
        myText.draw();
        myText.transparent(0.005);

    };

});

game.startLoop('myGame');

