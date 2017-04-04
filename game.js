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

var fon1 = game.newImageObject({
    x : 0, y : 0,
    file : 'img/fon.jpg',
    h : height,
    onload : function () {
        fon2.x = fon1.x+fon1.w;
    }
});

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

        myText.draw();
        myText.transparent(0.005);

    };


});

game.startLoop('myGame');
