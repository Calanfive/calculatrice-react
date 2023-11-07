import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='calculatrice'>
        <input className='input'></input>
        <div className='ligneUne'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
        </div>
        <div className='ligneDeux'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className='ligneTrois'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>=</button>
        </div>
        <div className='ligneQuatre'>
          <button>0</button>
        </div>
      </div>
    </>
  )
}

export default App
