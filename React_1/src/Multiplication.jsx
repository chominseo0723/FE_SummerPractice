import React from 'react'

const Multiplication = () => {
    let num1,  num2
    let result

    const handleNultiply = () => {
        result = num1 * num2
        console.log(`곱샘 결과 :  ${result}`)
    }


  return (
    <div>
        <input type='number' value={num1} onChange={(e) => (num1 = e.target.value)} />
        <input type='number' value={num2} onChange={(e) => (num2 = e.target.value)}/>

        <button onClick={handleNultiply}>곱셈</button>
    </div>
  )
}

export default Multiplication