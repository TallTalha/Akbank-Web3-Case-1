function oddOrEven(num) {
  
  let temp = 0;
  numArray = num.toString().split("");

  for (let i = 0; i < numArray.length; i++) {
    temp += parseInt(numArray[i]);
  }
  
  console.log(temp, temp % 2);

  const myResult = temp % 2 == !0 ? "odd" : "even";

  console.log(`The number is ${myResult}`);
}