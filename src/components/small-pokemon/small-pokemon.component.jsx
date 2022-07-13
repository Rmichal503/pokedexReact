import PokeImg from '../poke-img/poke-img.component';
import PokeTextArea from '../text-area/text-area.component';

import './small-pokemon.styles.css'

const SmallPokemon =({pokemon}) => {
        console.log('pokemony:  ',pokemon);
        // const capitalizeFirstLetter = (string) => {
        //     return string?.charAt(0).toUpperCase() + string?.slice(1);
        // }
        return(
            pokemon.map((el, index)=>{
                return(
                <div key={index+300} className="smallPoke">
                    {/* <h1 className='pokeName'>{capitalizeFirstLetter(el.name)}</h1> */}
                    <h1 className='pokeName'>{el.name}</h1>
                    <PokeImg imgSource={el.sprites?.front_default} pokeName={el.name} />
                    <PokeTextArea className='stats' stats={el?.stats}/>
                    <PokeTextArea className='types' types={el?.types}/>
                </div>
                )
            })
        )
            
}

export default SmallPokemon