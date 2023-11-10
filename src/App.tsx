import { useCallback, useState } from 'react'
import Bouton from './Component/Bouton'

function App() {
  const [inputValue, setInputValue] = useState<string>()
  
  const handleClick = (newValue: string) => {
    setInputValue(newValue);
  }; [inputValue]

  return (
    <>
      <div className='calculatrice'>
        <div className='input'>{inputValue}</div>
        <div className='ligneUne ligne'>
        <Bouton valueParent={'9'} onClickedParent={handleClick} />
        <Bouton valueParent={'8'} onClickedParent={handleClick} />
        <Bouton valueParent={'7'} onClickedParent={handleClick} />
          <button>-</button>
        </div>
        <div className='ligneDeux ligne'>
        <Bouton valueParent={'6'} onClickedParent={handleClick} />
        <Bouton valueParent={'5'} onClickedParent={handleClick} />
        <Bouton valueParent={'4'} onClickedParent={handleClick} />
          <button>+</button>
        </div>
        <div className='ligneTrois ligne'>
          <Bouton valueParent={'3'} onClickedParent={handleClick} />
          <Bouton valueParent={'2'} onClickedParent={handleClick} />
          <Bouton valueParent={'1'} onClickedParent={handleClick} />
          <button>=</button>
        </div>
        <div className='ligneQuatre ligne'>
        <Bouton valueParent={'0'} onClickedParent={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App
