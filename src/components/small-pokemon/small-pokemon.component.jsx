import PokeImg from '../poke-img/poke-img.component';
import PokeTextArea from '../text-area/text-area.component';
import styled from 'styled-components';
import './small-pokemon.styles.css'

const SmallCard = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    background-color: white;
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
    transition: .2s ease-out;
    // transform: scale(0.4);
    &:not(:first-child){
        margin-left: -200px;
    }
    &:hover{
        transform: scale(1.1) translateY(-50px);
        transition: 0.4s ease-out;
        + .smallPoke {
            // position: relative;
            margin-left:20px;
            transition: all .4s ease-out;
            background-color: red;
        }
    }

`

const SmallPokemon = ({ pokemon }) => {
    console.log('pokemony:  ', pokemon);

    return (
        pokemon.map((el, index) => {
            return (
                <SmallCard key={index + 300} className="smallPoke">
                    {/* <h1 className='pokeName'>{capitalizeFirstLetter(el.name)}</h1> */}
                    <h1 className='pokeName'>{el.name}</h1>
                    <PokeImg imgSource={el.sprites?.front_default} pokeName={el.name} />
                    <PokeTextArea className='stats' stats={el?.stats} />
                    <PokeTextArea className='types' types={el?.types} />
                </SmallCard>
            )
        })
    )

}

export default SmallPokemon