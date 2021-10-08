// let num = 4 ;
// let Num = 'this is not a num' ;
// console.log(num);
// console.log(Num); 

// num = 1
// var n = 0;
// for ( let i = 0 ; i <= 10 ; i++ ) {
//     if (n <= 5 ) {
//         n++;
//         console.log(n + ' <= 5' )
        
//     } else {
//         n++
//         console.log(n + ' != 5 ');
//     }
// }


// let mynum = 0 ;
// console.log(`type of mynum is ${typeof mynum}`);

// let myUndefined;
// console.log(`type of myUndefined is ${typeof myUndefined}`);

// var carName = "Volvo";
// var carName;
// console.log(`${typeof carName}`);

// const arraynum = [1,2,3,4,5] ;
// console.log(arraynum) ;
// arraynum[0] = 4 ;
// console.log(arraynum) ;

// const shop1 = {name:"A",price: 500};
// const shop2 = {name:"B",price: 1500};
// const shop3 = {name:"C",price: 2500};
// shop2.price = 5000;
// shop2.son = "papa"
// console.log(shop2);

// let e = 54e2 ;
// console.log(e); 

// let x = 5;
// let y = 5;
// let z = 6;
// a=(x == y)       // Returns true
// b=(x == z)       // Return false
// console.log(a);
// console.log(b);
// console.log(z);

// function fun1(q1, q2) {
//     return console.log(q1+=q2);
// }

// fun1(25, 32);

// function toCelsius(fahrenheit) {
//     return console.log(((5/9) * (fahrenheit-32)) + ' F' );
// }

// function toCelsius(fahrenheit) {
//     return console.log(((5/9) * (fahrenheit-32)) + ' C' );;
// }

// let x = toCelsius(77)
// console.log(x) 

// const phone = {
//     no: 1324 ,
//     owner: 'A' ,
//     brand: 'iphone' ,
//     info : function() {
//         return this.no +' '+this.owner+' '+this.brand ; 
//     }
// }

// console.log(phone);
// console.log(phone.info()); 

// let text = "Hello world" ;
// let newText = text.replace(/(e|o)/g , "*") ;
// console.log(newText);

// let f = `papaya`;
// let l = `pokpok`;
// console.log(`Welcome ${f} ${l}`);


// const fruit = [
//     'banana',
//     'pieapple',
//     'orange'
// ]
// console.log(fruit);
// fruit[0] = 'kiwwe' ;
// console.log(fruit);

// const mix = [1, "2", 0.21, true];
// console.log(mix)

// const home = ['wifi','router','modem','lan'];
// console.log(home);
// console.log(`length is ${home.length}`);
// home.push('wan');
// console.log(home);
// console.log(`length is ${home.length}`);

// const A = [1,2,3,4,5]
// const B = {a:1,b:2,c:3,d:4,e:5} ;
// console.log(`A is array: ${Array.isArray(A)}`);
// console.log(`B is array: ${Array.isArray(B)}`);
// Array.isArray(A);
// console.log(A[1]);
// console.log(A);
// A.push(6);
// console.log(A);
// A.pop(2);
// console.log(A);
// A.shift();
// console.log(A);
// A.unshift(1);
// console.log(A);
// const C = A.concat(B);
// console.log(C);


console.log('-----------------------------------');
const N = [12,14,1,5,3,4,2]
console.log(N.sort(function(a,b){return a-b}));
console.log(N.reverse());;
console.log(Math.max.apply(null, N));
console.log(Math.max(N));

let txt = "";
N.forEach(myFunction)

function myFunction(value, index, array) {
    txt += value + " "; 
}

console.log('=========================');

const M1 = [1,2,3,4,5]
const M2 = ['A','B','C','D'];
for(let x in M1) {
    console.log(x + ' ');
}
for(let x of M2) {
    console.log(x + ' ');
}

console.log(M1.forEach(function(value)))
