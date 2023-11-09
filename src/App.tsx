import { useCallback, useState } from 'react'
import Bouton from './Component/Bouton'

function App() {
  const [inputValue, setInputValue] = useState<string>()
  
  const handleClick = useCallback(
    () => { setInputValue(JSON.stringify(1))
     },
    [inputValue]
  )

  return (
    <>
      <div className='calculatrice'>
        <div className='input'>{inputValue}</div>
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
          <Bouton onClicked={handleClick}/>
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
