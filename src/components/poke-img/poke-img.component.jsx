import styled from 'styled-components'

const PokeImage = styled.div`
    justify-self: center;
    grid-area: img;
    padding: 2px;
    height: fit-content;
    width: fit-content;
    border: 1px solid black;
    border-radius: 2ex;
    background-color: white;
`
const PokeImg = (props)=>{
    return(
        <PokeImage className="pokeImage">
            <img className="pokemonFace" src={props.imgSource} alt={props.pokeName}></img>
        </PokeImage>
    )
}

export default PokeImg