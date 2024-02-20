// {
//     var a =10;
//     let b =20;
//     const c =30;
// }



//CALLBACK FUNCTION 
// setTimeout( function(){
//  console.log("TIMER")
// }, 5000);
//  function x(y)
//  {
//     console.log("x");
//     y();
//  }

//  x( function y(){
//     console.log("y");
//  });




//EventListeners

//    function attachEventListners(){
//       let count = 0;
//  document.getElementById("ClickMe")
//  .addEventListener("click" , function xyz(){
//    console.log("Button Clicked " , count++);
//  });
//    }

// attachEventListners();

//Higher order function 
// function x(){
//   console.log("Namaste ")
// }

// function y(x){
//   x()
// }
//Here Y is Higher Order Function


//Functional programming
// const radius = [3,1,2,4];

// const calculateArea = function(radius){
//   const output = [];
//   for(let i=0 ; i<radius.length ; i++){
//     output.push(Math.PI * radius[i]*radius[i]);
//   }
//   return output;
// }
// console.log(calculateArea(radius));


// const calculateCircumference = function (radius){
//   const output = [];
//    for(let i=0 ; i<radius.length ; i++){
//     output.push(2*Math.PI *radius[i]);
//   }
//   return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius){
//   const output = [];
//    for(let i=0 ; i<radius.length ; i++){
//     output.push(2*radius[i]);
//   }
//   return output;
// }
// console.log(calculateDiameter(radius));




// Optimised Code 
const radius = [3,1,2,4];
const area = function(radius){
   return Math.PI * radius*radius;
}
const Circumference = function(radius){
  return  2*Math.PI.radius;
}
const diameter = function(radius){
  return 2*radius
}

const Calculate = function(radius){
 const output = [];
  for(let i=0 ; i<radius.length ; i++){
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter))

