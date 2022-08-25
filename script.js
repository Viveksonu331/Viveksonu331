/*document.write("Hello");
console.log("Hii");
window.alert("Hello"); */
var x=10;
let y=20;
const z=30;
//console.log(x+y);
//console.log((x+y)/z);
/*if(x>y&&x>z)
document.write("X is grater");
else if(y>x&&y>z)
document.write("y is greater");
else
document.write("Z is grater");*/
//console.log(x & y);                 //000000
//console.log(x|y);                   //011110
//console.log(x^y);                   //011110
//console.log(x<<y);
//console.log(x>>y);
//console.log(x>>>y);
/*var w=1;
switch(w)
{
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 1:
        console.log("Today is Sunday and its Funday");
        break;
    default:
        console.log("Day number is invalid");
} */
const min = 1;
    const max = 25;
    let num= Math.floor(Math.random()*(max-min+1))+ min;
    let guess= 0;
    let hint='';
    let n=0;
    do{
      let input=prompt('Please enter a number between 1 to 25 -----   ' +hint)
       n=parseInt(input);
       guess++;
      if (n > num){
        hint = "number is greater than the answer, please choose lower number"
        
      }else if(n < num){
        hint="number is lower than the answer, please choose greater number"
      }
      else if (n==num){
           alert("you guessed it right!!!")
      }
    }while(n !=num)
    
