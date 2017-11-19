// var x =(function () {     return typeof arguments; })(); console.log(x); var
// f = function g(){ return 23; }; typeof g(); var y = (function(x){     delete
// x;     return x;   })(1);   console.log(y); var y = 1, x = y = typeof x; x;

var f = (function f() {
    return "1";
},
function g() {
    return 2;
}
)();
console.log(f);
