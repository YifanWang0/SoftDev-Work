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
    if (e.type == 'mouseover'){
        h.innerHTML = e.srcElement.innerHTML;
    } else{
        h.innerHTML = 'Hello World!';
    };
};


var removeItem = function(e) {
    console.log('Removing item: ' + e.target.innerHTML);
    e.target.remove();
};

var addItem = function(e) {
    console.log('Adding item to list.');
    var list = document.getElementById("thelist");
    var item = document.createElement("li");
    var textnode = document.createTextNode("WORD");
    item.appendChild(textnode);

    //giving new item the same features as the rest in the list
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', changeHeading);
    item.addEventListener('click', removeItem);

    list.appendChild(item);
};


var button = document.getElementById("b");
button.addEventListener('click', addItem);

//originally changed order bc we wanted to see if we would then still need the
//addEventListner for item in addItem, turns out - yes, we do
var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', changeHeading);
    lis[i].addEventListener('click', removeItem);
};

var fib = function(n) {
    if (n < 2) {
        return 1;
    } else{
        return fib(n-1) + fib(n-2);
    }
};

var addFib = function(e) {
    console.log(e);
    var fibList = document.getElementById('fiblist');
    var newNum = fib(fiblist.children.length); //Why wouldn't fiblist.length work?
    var newItem = document.createElement('li');
    var textnode = document.createTextNode(newNum);
    newItem.appendChild(textnode);
    fibList.appendChild(newItem);
};


var addFib2 = function(e) {
    console.log(e);
    var fibList = document.getElementById('fiblist');

    //more efficient way to get the value of the next Fibinacci number
    var newNum;
    if( fibList.children.length < 2 ) {
        newNum = 1;
    } else {
	    var children = fiblist.children;
	    var prev = parseInt(children[children.length-1].innerHTML);
	    var twoPrev = parseInt(children[children.length-2].innerHTML);
	    newNum = prev + twoPrev;
    };

    //adding new Fib number to the list
    var newItem = document.createElement('li');
    var textnode = document.createTextNode(newNum);
    newItem.appendChild(textnode);
    fibList.appendChild(newItem);
};


var fb = document.getElementById("fb");
fb.addEventListener('click', addFib2);
