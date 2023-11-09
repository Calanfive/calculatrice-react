import { useCallback} from "react";

const Bouton = (props: { onClicked: (numb: string) => void 
}) => {

    const handleClick = useCallback(
        () => {
            props.onClicked('');
            console.log('link');
            
        }, [props.onClicked]
    
    );

    return (
        <button className='button' onClick={handleClick}>1</button>
    );
};

export default Bouton;

