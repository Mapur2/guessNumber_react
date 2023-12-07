import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Select() {

    const [level, setLevel] = useState(1)

    const handle = () => {
      console.log(level)
  
    }

  return (
    <div>
      <div className='mx-auto shadow p-5 border bg-body-tertiary rounded d-flex flex-column flex-wrap '>
        <h1 >Guess the number</h1>
        <div className='m-2 d-flex flex-column flex-wrap mx-5 justify-content-center '>
          <h4>Select your level</h4>
          <select name="" id="" className=' rounded bg-dark text-light my-3 py-3 text-center' onChange={(e) => setLevel(e.target.value)}>
            <option value={1} >Level 1 </option>
            <option value={5}>Level 5</option>
            <option value={10}>Level 10</option>
          </select>
          <Link to={`/level/${level}`}>
            <button className=' btn btn-primary btn-lg w-25 mx-auto' onClick={handle}>Play</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Select
