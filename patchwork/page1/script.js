function rand(a){
    return Math.floor(Math.random() * a);
}


function createStar(classes, element){
    var star = document.createElement('div');
    star.classList += classes[rand(classes.length)];
    var windowHeight = element.innerHeight || element.clientHeight;
    var windowWidth = element.innerWidth || element.clientWidth;
    var x = rand(windowWidth)+"px";
    var y = rand(windowHeight)+"px";
    star.style.left = x;
    star.style.top = y;
    return star;
};

var stars = ["star", "star2", "star3", "star4"];

function fillSky(number, classes, element){
    if(!element){
        element = document.getElementsByTagName('body');
        element = element[0];
    }
    for (var i = 0; i < number; i++) {
      element.appendChild(createStar(classes, element));
    }
};
 function init(){
    fillSky(150, stars);
 }
