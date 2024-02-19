// {
//     var a =10;
//     let b =20;
//     const c =30;
// }



//CALLBACK FUNCTION 
setTimeout( function(){
 console.log("TIMER")
}, 5000);
 function x(y)
 {
    console.log("x");
    y();
 }

 x( function y(){
    console.log("y");
 });