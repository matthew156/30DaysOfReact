import React from "react";

const Square= ({number}) => {
    function isPrime(num){
        if(num === 0)
        {
            return false;
        }
        if(num === 1)
        {
        return false
        }
        if(num <= 3)
        {
        return true;
        }
        for(let i = 2; i < num; i++)
        {

          if(num % i === 0){
          return false}
        }
        return true
      }
    
    function isEven(num) {
    return num % 2 === 0
    }
    {
        return(
            <div className="square" style={isPrime(number) ? {backgroundColor: 'red'} : isEven(number) ? {backgroundColor: 'green'} : {backgroundColor: 'yellow'}}>{number}</div>
        )
    }
}
export default Square