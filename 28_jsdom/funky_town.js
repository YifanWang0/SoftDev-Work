//Jackie Lin and Yifan Wang
//SoftDev1 pd1
//K#28 -- Sequential Progression
//2019-12-11

// console.log("this is a test");

//function for factorial
var fact = function(n) {
  if (n < 2) return 1;
  return fact(n - 1) * n;
};

//function for fibonacci
var fib = function(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

//function for GCD
var gcd = function(a, b){
  if (b > a) return gcd(b, a);
  if (a % b == 0) return b;
  return gcd(b, a % b);
};

var test = ["Tiffany", "Jackie", "Tina", "Wooooo", "Bob", "Joe", "Esteban"]

//function for selecting random student from a given list
var randomStudent = function() {
  var index = parseInt(Math.random() * test.length);
  return test[index];
};

document.getElementById("fact").addEventListener("click", function() {
    console.log(fact(5));
});

document.getElementById("fib").addEventListener("click", function() {
    console.log(fib(5));
});

document.getElementById("gcd").addEventListener("click", function() {
    console.log(gcd(36,84));
});

document.getElementById("rand").addEventListener("click", function() {
    console.log(randomStudent());
});
