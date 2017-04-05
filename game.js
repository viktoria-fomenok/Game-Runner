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

<<<<<<< HEAD
// создание экземпляра движка
var pjs = new PointJS('2d', 800, 400);
pjs.system.initFullPage();

var game = pjs.game;
var point = pjs.vector.point;

=======
>>>>>>> 57e013e8a940649a2d5351bbed1abb36e18ccdd0
var fon1 = game.newImageObject({
    x : 0, y : 0,
    file : 'img/fon.jpg',
    h : height,
    onload : function () {
        fon2.x = fon1.x+fon1.w;
    }
});

<<<<<<< HEAD
var fon2 = game.newImageObject({
    x : 0, y : 0,
    file : 'imgs/fon.jpg',
    h : height
});

var gr1 = game.newImageObject({
    x : 0, y : 0,
    file : 'imgs/ground.png',
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


=======
>>>>>>> 57e013e8a940649a2d5351bbed1abb36e18ccdd0
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
<<<<<<< HEAD
        game.clear();
=======

        game.clear();

>>>>>>> 57e013e8a940649a2d5351bbed1abb36e18ccdd0
        myText.draw();
        myText.transparent(0.005);

    };

<<<<<<< HEAD
});

game.startLoop('myGame');
=======

});

game.startLoop('myGame');
>>>>>>> 57e013e8a940649a2d5351bbed1abb36e18ccdd0
