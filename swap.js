var a = 5;
var b = 2;
// console.log("before a =",a ,"b =",b);

var ye = a;
a = b;
b = ye;
// console.log("after swap a =",a ,"b =",b);


// Different methods 2

var x = 5;
var y = 2;

// console.log("before x =",x ,"y =",y);

x = x + y;
y = x - y;
x = x - y;

// console.log("after swap x =",x ,"y =",y);

// different methods 3

var p = 5;
var q = 2;
console.log("before p =",p ,"q =",q);

[p , q] = [q , p];
console.log("after swap p =",p ,"q =",q);



