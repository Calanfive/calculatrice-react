import { useCallback, useState } from 'react'
import Bouton from './Component/Bouton'

function App() {
  const [nbrA, setNbrA] = useState<number>(0)
  const [nbrB, setNbrB] = useState<number>(0)
  const [operator, setOperator] = useState<string>("")
  
  const handleClick = (newValue: number) => {
    if(operator === ""){
      setNbrA(nbrA * 10 + newValue);
    }
    else {
      setNbrB(nbrB * 10 + newValue);
    }
  };

  const handleClickOperator = (newOperator: string) => {
    if((nbrA || nbrA === 0) && (nbrB || nbrB === 0) && operator !== ""){
      let result = 0
      if (operator === "+") {
        result = nbrA + nbrB
      }
      else if (operator ==="-") {
        result = nbrA - nbrB
      }

      setNbrA(result)
      setNbrB(0)
    }
    setOperator(newOperator)
  }
  [operator, nbrA, nbrB]

  const handleEqual = useCallback(
  () => {
    if((nbrA || nbrA === 0) && (nbrB || nbrB === 0) && operator !== ""){
      let result = 0
      if(operator === "+"){
        result = nbrA + nbrB
      }
      else if(operator === "-"){
        result = nbrA - nbrB
      }

      setNbrA(result)
      setNbrB(0)
      setOperator("")
    }
  }, [nbrA, nbrB, operator]
  )

  return (
    <>
      <div className='calculatrice'>
        <div className='input'>
          {nbrA} {operator} {nbrB === 0 ? "" : nbrB}
        </div>
        <div className='ligneUne ligne'>
          <Bouton valueParent={9} onClickedParent={handleClick} />
          <Bouton valueParent={8} onClickedParent={handleClick} />
          <Bouton valueParent={7} onClickedParent={handleClick} />
          <button className='button' onClick={() => handleClickOperator("+")}>+</button>
        </div>
        <div className='ligneDeux ligne'>
          <Bouton valueParent={6} onClickedParent={handleClick} />
          <Bouton valueParent={5} onClickedParent={handleClick} />
          <Bouton valueParent={4} onClickedParent={handleClick} />
          <button className='button' onClick={() => handleClickOperator("-")}>-</button>
        </div>
        <div className='ligneTrois ligne'>
          <Bouton valueParent={3} onClickedParent={handleClick} />
          <Bouton valueParent={2} onClickedParent={handleClick} />
          <Bouton valueParent={1} onClickedParent={handleClick} />
          <button onClick={handleEqual}>=</button>
        </div>
        <div className='ligneQuatre ligne'>
          <Bouton valueParent={0} onClickedParent={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App
