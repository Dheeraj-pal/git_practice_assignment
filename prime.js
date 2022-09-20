// Check whether a number is Prime or not.
let number = 13;
let factor=0;
for (let i =0 ; i <= number; i++) {
  if (number % i == 0) {
   
   factor++
  
  }
}
if (factor==2) {
  console.log(number, "is a prime number.")
} else {
  console.log(number, "is not a prime number.")
}