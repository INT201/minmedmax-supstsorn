const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  const mValue = [n1,n2,n3]
  let maxValue = mValue[0]
  let minValue = mValue[0]
  let midValue = mValue[0]

  for(const value of mValue){
    if(value > maxValue){
      maxValue = value;
    }
  }

  for(const value of mValue){
    if(value < minValue){
      minValue = value;
    }
  }

  for(const value of mValue){
    if(value != minValue && value != maxValue){
      midValue = value
    }
    if(n1 === n2){
      midValue = n1
    }
    if(n1 === n3){
      midValue = n1
    }
    if(n2 === n3){
      midValue = n2
    }
  }
return {min: minValue, mid: midValue, max: maxValue}
}
module.exports = minMedMax
