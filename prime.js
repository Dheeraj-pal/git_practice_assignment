// Check whether a number is Prime or not.
let number = 13;
let flag=false;
for (let i =0 ; i <= number; i++) {
  if (number % i == 0) {
   flag=true;
  
  }
}
if (flag==true) {
  console.log(number, "is a prime number.")
} else {
  console.log(number, "is not a prime number.")
}