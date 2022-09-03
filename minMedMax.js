const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  const mValue = [num1,num2,num3]
  let maxValue = mValue[0]
  let minValue = mValue[0]
  let midValue = mValue[0]

  for(const Value of mValue){
    if(Value > maxValue){
      maxValue = Value;
    }
  }

  for(const Value of mValue){
    if(Value < minValue){
      midValue = Value;
    }
  }
  for(const Value of mValue){
    if(Value != midValue && Value != maxValue){
      midValue = Value
    }
    if(num1 === num2){
      midValue = num1
    }
    if(num1 === num3){
      midValue = num1
    }
    if(num2 === num3){
      midValue = num2
    }
  }
return {min: minValue, mid: midValue, max: maxValue}
}
module.exports = minMedMax
