

//1 anonymous function
const anf = (num) => console.log(num);
 

anf(3);


//2 FIRST CLASS FUNCTIONS
/* A programming language is said to have First-class functions
 if functions in that language are treated like other variables. 
 So the functions can be assigned to any other variable or passed 
 as an argument or can be returned by another function. JavaScript 
 treat function as a first-class-citizens. This means that functions
  are simply a value and are just another type of object.

Example: Let us take an example to understand more about the first-class function.8*/

const Geek = (a, b) => {
    return (a + " " + b);
}
 
console.log(Geek("Akshit", "Saxena"));


//3 IIFE
/* Immediately invoked function expressions


(function (){ 
// Function Logic Here. 
})();


Immediately Invoked: This type of function is called immediately invoked as these functions
 are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function. 
 
If we look at the syntax 
itself we have two pairs of closed parentheses, the first one contains the logic to be executed 
and the second one is generally what we include when we invoke a function, the second parenthesis
 is responsible to tell the compiler that the function expression has to be executed immediately.
 
*/

/*
(function (x){
    console.log(x);
})(2);




(function(x){
    
    (function(y){
        console.log(x);
    })(2);


})(1);

*/


//due to closure -> ability of function to access var out of it's scope
/*
console.log("var ")
for(var i=0;i<5;i++){
setTimeout(() => {
    console.log(i);
    
},i*1000);
}

*/


/*
console.log("let ")

for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
        
    },i*1000);
    }
    
*/

//4 Params vs Args
/*
const anf = function(num){      //num is paramter
    console.log(num);
}


anf(3);//3 is arguments

*/

// 4 spread and rest operators
/*
function multiply(num1,num2){
    console.log(num1*num2);
}

num=[2,3];


multiply(...num);//rest operator



function multiply(...nums){
    console.log(nums[0]*nums[1]);
}

num=[2,3];


multiply(...num);//rest operator


*/

// 5 callback function

function add(num1,num2,callback){
    const sum = num1+num2;

    callback(sum);
}

function display(result){
    console.log(result);
}

add(5,2,display);


// 6 closures
var outername = "Piyush";
function closure(){
    var name = "var1 inner scope variable ";

    function innerscope(var1){
        console.log(var1,name,outername);
    }

    return innerscope; //return innerscope not innerscope()


}

closure()(3);


// why closure -> private var in js



//shadowing

console.log("shadowing");
let count =0;
(function printCount(){
    if(count ==0){
        let count =1;
        console.log(count);   //1 as it is shadowing
    }
    console.log(count);       // 0 as it is not shadowing as it is not in the same block
})();



console.log('write a function');
//addSix(10)=16
//addSix(21)=27

var addSix=createBase(6);

function createBase(num){

    return function(innerNum){
        console.log(num+innerNum);
    }

}

addSix(10);
addSix(21);


/*
function createCounter() {
  let count = 0; // This is a private variable within the closure.

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment, // Expose the increment method.
    decrement, // Expose the decrement method.
  };
}

const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

*/



//CURRYING

function area(L){
    return function b(B){
        console.log(L*B);
    }
}

area(5)(4);


function sum(a){
    return (b)=>{
        return (c)=>{
            console.log(a+b+c);
        }
    }
}


sum(2)(4)(6);


// Infinite currying

function addCurry(a){
    return (b)=>{
        if(b){
            return addCurry(a+b);
        }
        return a;
    };
}

console.log(addCurry(5)(2)(4)(8)());