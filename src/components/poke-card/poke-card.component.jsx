import PokeButton from "../buttons/buttons.component";
import PokeImg from "../poke-img/poke-img.component";
import SearchInput from "../search-input/search-input.component";
import PokeTextArea from "../text-area/text-area.component";
import './poke-card.styles.css'
import styled from 'styled-components'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    height: 400px;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 50%;
    flex-wrap: wrap;
    border: 2px solid black;
    border-radius: 2ex;
    padding: 0.5rem;
    margin: 1rem;
    background-color: gold;
`
const ImgAndStats = styled.div`
    display: flex;
    flex-direction: row;
`
export default function PokeCard({pokemon, clickSearchHandler, clickLuckyHandler, inputValueHandler, addingHandler}) {
return (
    <Card className="card">
        {/* <h1 className='pokeName'>{isNaN(capitalizeFirstLetter(pokemon.name)) ? null: capitalizeFirstLetter(pokemon.name)} </h1> */}
        <h1 className='pokeName'>{pokemon.name}</h1>
        <ImgAndStats className="imgAndStats">
            {pokemon.sprites ? <PokeImg imgSource={pokemon.sprites?.front_default} pokeName={pokemon.name}/>: null}
            <PokeTextArea className='stats' stats={pokemon?.stats}/>
        </ImgAndStats>
        <PokeTextArea className='types' types={pokemon?.types}/>
        <SearchInput className={'pokeSearch'} valueHandler={inputValueHandler} />
        <div className="buttons">
            <PokeButton clickHandler={clickSearchHandler} buttonClass='searchingButton' buttonText={'Search'}/>
            <PokeButton clickHandler={clickLuckyHandler} buttonClass='luckySpin' buttonText={'Random'}/>
            <PokeButton clickHandler={addingHandler} buttonClass='add' buttonText={'Add'}/>
        </div>
    </Card>
)
}
