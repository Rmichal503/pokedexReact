import PokeImg from '../poke-img/poke-img.component';
import PokeTextArea from '../text-area/text-area.component';
import styled from 'styled-components';
import './small-pokemon.styles.css'

const SmallCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 340px;
    max-height: 420px;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 50%;
    flex-wrap: wrap;
    border: 2px solid black;
    border-radius: 2ex;
    padding: 0.5rem;
    margin: 1rem;
`

const SmallPokemon =({pokemon}) => {
        console.log('pokemony:  ',pokemon);
        
        return(
            pokemon.map((el, index)=>{
                return(
                <SmallCard key={index+300} className="smallPoke">
                    <h1 className='pokeName'>{el.name}</h1>
                    <PokeImg imgSource={el.sprites?.front_default} pokeName={el.name} />
                    <PokeTextArea className='stats' stats={el?.stats}/>
                    <PokeTextArea className='types' types={el?.types}/>
                </SmallCard>
                )
            })
        )
            
}

export default SmallPokemon