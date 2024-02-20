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
function x(){
  console.log("Namaste ")
}

function y(x){
  x()
}
//Here Y is Higher Order Function