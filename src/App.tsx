import { useCallback, useState } from 'react'

function App() {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleClick = useCallback(
    () => { setInputValue(JSON.stringify(1)), console.log('aaaaa');
     },
    []
  )

  return (
    <>
      <div className='calculatrice'>
        <input className='input' value={inputValue} ></input>
        <div className='ligneUne ligne'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
        </div>
        <div className='ligneDeux ligne'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className='ligneTrois ligne'>
          <button className='button' onClick={handleClick}>1</button>
          <button>2</button>
          <button>3</button>
          <button>=</button>
        </div>
        <div className='ligneQuatre ligne'>
          <button>0</button>
        </div>
      </div>
    </>
  )
}

export default App
