import { useCallback} from "react";

const Bouton = (props: {
    valueParent: string; onClickedParent: (numb: string,) => void 
}) => {

    const handleClickChild = useCallback(
        () => {
            props.onClickedParent(props.valueParent);
            console.log(props.valueParent);
            
        }, [props.onClickedParent]
    
    );

    return (
        <button className='button' onClick={handleClickChild}></button>
    );
};

export default Bouton;