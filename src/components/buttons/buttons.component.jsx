import './buttons.styles.css'

const PokeButton = ({buttonClass, clickHandler, buttonText}) =>{
    return(
        <button
        className={buttonClass}
        onClick={clickHandler}
        >{buttonText}</button>
    )
}

export default PokeButton