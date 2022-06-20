import PokeButton from "../buttons/buttons.component";
import PokeImg from "../poke-img/poke-img.component";
import SearchInput from "../search-input/search-input.component";
import PokeTextArea from "../text-area/text-area.component";

import './poke-card.styles.css'


export default function PokeCard({pokemon, clickSearchHandler, clickLuckyHandler, inputValueHandler, addingHandler}) {
return (
    <div className="card">
        <h1 className='pokeName'>{pokemon.name}</h1>
        <PokeImg imgSource={pokemon.sprites?.front_default} pokeName={pokemon.name} />
        <SearchInput className={'pokeSearch'} valueHandler={inputValueHandler} />
        <PokeTextArea className='stats' stats={pokemon?.stats}/>
        <PokeTextArea className='types' types={pokemon?.types}/>
        <PokeButton clickHandler={clickSearchHandler} buttonClass='searchingButton' buttonText={'Search'}/>
        <PokeButton clickHandler={clickLuckyHandler} buttonClass='luckySpin' buttonText={'Random'}/>
        <PokeButton clickHandler={addingHandler} buttonClass='add' buttonText={'Add'}/>
    </div>
)
}
