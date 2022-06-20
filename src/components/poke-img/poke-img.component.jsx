import './poke-img.styles.css'

const PokeImg = (props)=>{
    return(
        <div className="pokeImage">
            <img className="pokemonFace" src={props.imgSource} alt={props.pokeName}></img>
        </div>
    )
}

export default PokeImg