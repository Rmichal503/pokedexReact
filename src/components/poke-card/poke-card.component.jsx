import PokeButton from "../buttons/buttons.component";
import PokeImg from "../poke-img/poke-img.component";
import SearchInput from "../search-input/search-input.component";
import PokeTextArea from "../text-area/text-area.component";

import './poke-card.styles.css'


export default function PokeCard({pokemon, clickSearchHandler, clickLuckyHandler, inputValueHandler, addingHandler}) {

// const capitalizeFirstLetter = (string) => {
//     return string?.charAt(0).toUpperCase() + string?.slice(1);
// }
return (
    <div className="card">
        {/* <h1 className='pokeName'>{isNaN(capitalizeFirstLetter(pokemon.name)) ? null: capitalizeFirstLetter(pokemon.name)} </h1> */}
        <h1 className='pokeName'>{pokemon.name}</h1>
        <div className="imgAndStats">
            <PokeImg imgSource={pokemon.sprites?.front_default} pokeName={pokemon.name} />
            <PokeTextArea className='stats' stats={pokemon?.stats}/>
        </div>
        <PokeTextArea className='types' types={pokemon?.types}/>
        <SearchInput className={'pokeSearch'} valueHandler={inputValueHandler} />
        <div className="buttons">
            <PokeButton clickHandler={clickSearchHandler} buttonClass='searchingButton' buttonText={'Search'}/>
            <PokeButton clickHandler={clickLuckyHandler} buttonClass='luckySpin' buttonText={'Random'}/>
            <PokeButton clickHandler={addingHandler} buttonClass='add' buttonText={'Add'}/>
        </div>
    </div>
)
}
