import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import guessnumber from './guessNumber'
function Game() {

    const [end, setEnd] = useState(false)
    const [won, setWon] = useState(false)
    const params = useParams()
    let { lv } = params
    lv = parseInt(lv)
    const [guess, setGuess] = useState(lv + 4)
    const [num, setNum] = useState("")
    const max = 10 * (lv)
    const [guessNumber] = useState(guessnumber(max))
    //console.log("guess number  ", guessNumber)
    const [tries, setTry] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (num == guessNumber) 
        {
            setWon(true)
            setEnd(true)
            return
        }

        if (guess == 1) {
            setEnd(true)
            return
        }
        
        if (num == "" || (num>='a' && num<='z')) {
            alert(`Enter a number between 1 and ${max}`)
            return
        }
        if ((num < 1 || num > max)) {
            alert(`Enter a number between 1 and ${max}`)
            return
        }
        else if (num < guessNumber)
            setTry([`${num} is lower than the guess number`, ...tries])
        else
            setTry([`${num} is higher than the guess number`, ...tries])
        setGuess(guess - 1)
        setNum("")
    }

    return (
        <>
            {!end && (
                <div className=' mx-auto shadow p-3 bg-body-tertiary rounded w-50'>
                    <h1 >Level {lv}</h1>
                    <div className='m-2 mx-5 '>
                        <form action="" className='d-flex flex-column mx-auto w-75 justify-content-evenly'  >
                            <label htmlFor="">`Enter a number between 1 and {max}</label>
                            <input type="text"
                                value={num}
                                placeholder={`Enter a number between 1 and ${max}`}
                                onChange={(e) => setNum(e.target.value)} />
                            <button type='submit' className='m-3 shadow rounded btn-danger btn' onClick={handleSubmit}>Submit</button>
                        </form>

                    </div>
                    <div className=' text-start'>
                        <p>Guess(s) Left: {guess} </p>

                        {
                            tries.map((Try) => (
                                <p>{Try}</p>
                            ))
                        }
                    </div>
                </div>)
            }
            {end && !won && (
                <div className=' mx-auto shadow p-3 bg-body-tertiary rounded w-50'>
                    <h2>Better Luck Next Time !!</h2>
                    All tries are  Over <br />
                    <img className=' w-50 h-50 rounded ' src="https://media.tenor.com/U7TsNpl1mVkAAAAC/cry-sad.gif" alt="" />
                    <h3>Guess Number Was {guessNumber}</h3>
                    <Link to='/'><button className='m-3 shadow rounded btn-danger btn'>Play Again</button></Link>
                </div>
            )}
            {
                end && won && (
                    <div  className=' mx-auto shadow p-3 bg-body-tertiary rounded w-50'>
                        <h2>You Won!!!</h2>
                        <img className=' w-50 h-50 rounded ' src="https://media.tenor.com/u1hJFQOAWO4AAAAd/won.gif" alt="" srcset="" />
                        <br /><Link to='/'><button className='m-3 shadow rounded btn-danger btn'>Wanna Play Again?</button></Link>
                    </div>

                )
            }
        </>
    )
}

export default Game
