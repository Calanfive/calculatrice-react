import { useCallback} from "react";

const Bouton = (props: {
    valueParent: number; onClickedParent: (numb: number,) => void 
}) => {

    const handleClickChild = useCallback(
        () => {
            props.onClickedParent(props.valueParent);
            console.log(props.valueParent);
            
        }, [props.onClickedParent]
    
    );

    return (
        <button className='button' onClick={handleClickChild}>
            {props.valueParent}
        </button>
    );
};

export default Bouton;