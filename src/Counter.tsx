import { useCallback, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = useCallback(
        () => { setCounter(counter + 1) },
        [counter]
    )

    return (
        <div className="cpt">
            <p> {counter}</p>
            <button className='button' onClick={handleClick}>+</button>
        </div>
    );
};

export default Counter;