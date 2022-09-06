const { template } = require('@babel/core')

function minMedMax(num1,num2,num3){
  const seekValue = [num1,num2,num3]
  let maxValue = seekValue[0]
  let minValue = seekValue[0]
  let midValue = seekValue[0]

  // find Max Value
  for(const value of seekValue){
      if(value > maxValue){
          maxValue = value;
      }
  }
  // console.log(maxValue)

  // find Min value
  for(const value of seekValue){
      if(value < minValue){
          minValue = value;
      }
  }
  // console.log(minValue)

  for(const value of seekValue){
      if(value != minValue && value != maxValue){
          midValue = value
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
