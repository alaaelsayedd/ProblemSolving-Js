function countPositivesSumNegatives(input) {
  let countPostive = input.filter((current)=>current>0).length;
  let sumNegative = input.filter((current)=>current<0).reduce((acc,current)=>acc+current)
  return [countPostive,sumNegative]
  
}
