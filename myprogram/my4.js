// Object literal Examples
/*
let empty={};
let point = {x:0, y:0};
let p2={x: point.x, y: point.y+1};
let book ={
    " main title " : " JavaScript ", //These property names include spaces
    " sub-title " : " The Definitive Guide ", //and hyphens, so use string literals
    for: " all audiences ",
    author:{
        firstname: " David ",
        Surname: " Flanagan "
    }
};
*/

//---------------------------------------------------

/*
let per1 = { id: 1, name: 'Joe' };
let per2 = per1;

doSomething(per2);
function doSomething(p) {
  p.name = 'Mary';
}
console.log(per1);
*/

//--------------------------

/*
let per1 = { id: 1, name: 'Joe' };
let per2 = per1;

doSomething(per2); //hoisting, use only var scope
function doSomething(p) {
  //p=per2  (memory address of per2 to p)
  p.name = 'Mary'; //pers2.name='Mary'
}
console.log(per1);
per2.id = 3;
console.log(per1);
*/

//----------------------------------

//object assignment example
let per1 = { id: 1, name: 'Joe' };
//per1 is an object variable,

//store memory address that points to object properties
let per2 = per1;
doSomething(per2); //hoisting, use only var scope
function doSomething(p) {
  //p=per2  (memory address of per2 to p)
  p.name = 'Mary'; //pers2.name='Mary'
}
console.log(per1);
per2.id = 3;
console.log(per1);

//primitive assignment example
let num1 = 10; //num1 is  a primitive variable, store value 10
let num2 = num1; //num2=10
doSomething(num2);
function doSomething(num) {
  //num=num2=10
  num = 20; //num=20
}
console.log(num1); //num1=10
console.log(num2); //num2=10