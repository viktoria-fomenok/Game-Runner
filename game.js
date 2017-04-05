/**
 * Created by vikyf on 4/4/2017.
 */

var pjs = new PointJS('2d', 400, 400);
pjs.system.initFullPage();

var game = pjs.game;
var point = pjs.vector.point;

var height = game.getWH().h;
var width = game.getWH().w;

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
<<<<<<< HEAD
    x : 0, y : 0,
    file : 'img/ground.png',
    w : width
=======
 x : 0, y : 0,
 file : 'img/ground.png',
 w : width
>>>>>>> 0dec38c2c9e5e11cde3b08eb905b1f0f99b79f24
});

var dog = game.newAnimationObject({
    x : width / 4, y : 0,
    h : 120, w : 150,
    delay : 4,
    animation : pjs.tiles.newAnimation('img/dog.png', 150, 120, 5)
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

game.newLoop('game', function () {
    game.fill('#D9D9D9');

    fon1.draw();
    fon2.draw();
    gr1.draw();
    gr2.draw();

    dog.y = -dog.h + gr1.y + gr1.h /2.7;
    dog.draw();

    moveBackGround(4);

});

<<<<<<< HEAD
game.startLoop('game');
=======
game.startLoop('game');

>>>>>>> 0dec38c2c9e5e11cde3b08eb905b1f0f99b79f24
