import { useCallback} from "react";

const Bouton = (props: {
    value: string; onClicked: (numb: string,) => void 
}) => {

    const handleClick = useCallback(
        () => {
            props.onClicked(props.value);
            console.log('link');
            
        }, [props.onClicked]
    
    );

    return (
        <button className='button' onClick={handleClick}>1</button>
    );
};

export default Bouton;

