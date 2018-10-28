function sumOfOther (arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
console.log(sum);
for (let i = 0; i < arr.length; i++) {
  newArr.push(sum - arr[i]);
}
return newArr;    
}