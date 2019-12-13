//Yifan Wang and Hong Wei Chen (Team Ricebowl)
//SoftDev1 pd1
//K#29 - Squential Progression III: Season of the Witch
//2019-12-12

/*
//Testing how code works
document.getElementById("b").addEventListener('click', function(e) {
    console.log(e);
})
*/

var changeHeading = function(e) {
    var h = document.getElementById("h");
    h.innerHTML = e;
};


var removeItem = function(e) {
    
};


var lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// console.log(lis[0].innerText);

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', () => {
        changeHeading('WORD');
    });
    lis[i].addEventListener('mouseout', () => {
        changeHeading('Hello World!');
    });
    lis[i].addEventListener('click', );
};

/*
var addItem = function(e) {
    var list = ;
    var item = document.createElement("li");
    ??? = "WORD";
    list.???(item);
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
    if (n < 2) {
        return 1;
    } else{
        return fib(n-1) + fib(n-2);
    }
};

var addFib = function(e) {
    console.log(e);
    ???
};

var addFib2 = function(e) {
    console.log(e);
    ???
    //see QAF re: DYNAMIC PROGRAMMING
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);*/
