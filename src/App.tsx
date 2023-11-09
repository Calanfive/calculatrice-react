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
        <Bouton value={'9'} onClicked={handleClick} />
        <Bouton value={'8'} onClicked={handleClick} />
        <Bouton value={'7'} onClicked={handleClick} />
          <button>-</button>
        </div>
        <div className='ligneDeux ligne'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className='ligneTrois ligne'>
          <Bouton value={'1'} onClicked={handleClick}/>
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
