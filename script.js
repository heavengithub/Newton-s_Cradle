(function(){
// Simple animation 
// using Snap.svg. 

var s = Snap('#s'),

    // Styles
    ballStyle = {
        fill: s.gradient("r(0.57, 0.4, 0.5)#fff-#cc0000")
    },
    strStyle = {
        stroke: '#CC0000',
      	strokeWidth: 3
      
    };

// Background... Thing
var triThing = s.path(
  'M0 0,L4000 3000,v-3000,h-4000').attr({
  fill: '#111'
});

// Models 
function ballModel(x) {
    return s.circle(x, 400, 50).attr(ballStyle);
}

function strModel(x) {
    return s.path('M' + x + ' -300, v650').attr(strStyle);
}

// The objects
var ball = [],
    str = [];
for (var i = 2; i < 7; i++) {
    ball.push(ballModel(i * 100));
    str.push(strModel(i * 100));
}

// Groups
var grpA = s.g(),
    grpE = s.g();

// Add to groups    
grpA.add(ball[0]).add(str[0]);
grpE.add(ball[4]).add(str[4]);

// The Loop
function leftOut() {
    grpA.animate({
        transform: 'r60, 200, -300'
    }, 650, mina.backout, function () {
        leftIn();
    });
}

function leftIn() {
    grpA.animate({
        transform: 'r0, 200, -300'
    }, 550, mina.backin, function () {
        rightOut();
    });
}

function rightOut() {
    grpE.animate({
        transform: 'r-60, 600, -300'
    }, 650, mina.backout, function () {
        rightIn();
    });
}

function rightIn() {
    grpE.animate({
        transform: 'r0, 600, -300'
    }, 550, mina.backin, function () {
        leftOut();
    });
}

// Init
leftOut();
}());