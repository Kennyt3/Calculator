import React from 'react'
import { useRef, useState } from 'react'
import { math } from './logic.mjs'

const Calculator = () => {
  const formRef = useRef()
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const symbols = ['+', '-', '*', '/', '(', ')', '%', '^']

  const equal = (e) => {
    e.preventDefault()
    !isNaN(math.evaluate(inputRef.current.value)) &&
      setResult(math.evaluate(inputRef.current.value))
    console.log(math.evaluate(inputRef.current.value))
    inputRef.current.value = ' '
  }
  const resetInput = (e) => {
    e.preventDefault()
    inputRef.current.value = ' '
  }

  const resetResult = (e) => {
    e.preventDefault()
    setResult((result) => result * 0)
  }

  const addnum = (e) => {
    e.preventDefault()
    inputRef.current.value += e.target.innerText
    console.log(e.target.innerText)
  }
  const addsym = (e) => {
    e.preventDefault()
    inputRef.current.value += ' ' + e.target.innerText + ' '
    console.log(e.target.innerText)
  }

  return (
    <div className='mx-auto  w-fit pt-20'>
      <form action='' ref={formRef}>
        <h1 className='text-3xl text-center font-bold'>TMK Calculator</h1>
        <p className='text-xl my-5' ref={resultRef}>
          {result}
        </p>
        <div className='flex gap-3'>
          <input
            placeholder='Type a number'
            ref={inputRef}
            className='bg-white sm:w-96 h-10 px-5'
          />
          <button
            type='button'
            className='px-5 py-1 text-2xl rounded-xl bg-blue-600 text-white'
            onClick={equal}
          >
            =
          </button>
        </div>
        <div className='grid gap-5 grid-cols-3 my-5'>
          {symbols.map((x) => {
            return (
              <button
                type='button'
                onClick={addsym}
                className='p-3 rounded-md text-2xl bg-white '
                key={x}
              >
                {x}
              </button>
            )
          })}
        </div>
        <div className='grid gap-5 grid-cols-3 my-5'>
          {num.map((x) => {
            return (
              <button
                type='button'
                onClick={addnum}
                className='p-3 rounded-md text-2xl bg-white '
                key={x}
              >
                {x}
              </button>
            )
          })}
        </div>
        <div className='mt-7 grid grid-cols-2 gap-3'>
          <button
            type='button'
            className='p-3 rounded-xl  bg-blue-600 text-white '
            onClick={resetInput}
          >
            Reset input
          </button>
          <button
            type='button'
            className='p-3 rounded-xl   bg-blue-600 text-white '
            onClick={resetResult}
          >
            Reset result
          </button>
          {/* <button
            type='button'
            className='p-3 rounded-xl bg-blue-600 text-white'
            onClick={equal}
          >
            Result
          </button> */}
        </div>
      </form>
    </div>
  )
}

export default Calculator
