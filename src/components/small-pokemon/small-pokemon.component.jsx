import PokeImg from '../poke-img/poke-img.component';
import PokeTextArea from '../text-area/text-area.component';
import styled, {css} from 'styled-components';
import './small-pokemon.styles.css';


const bgColorSmallCard = (bgColor) =>{
    switch(bgColor){
        case 'grass':
            return 'var(--bg-grass)';
        case 'fire':
            return 'var(--bg-fire)';
        case 'water':
            return 'var(--bg-water)';
        case 'normal':
            return 'var(--bg-normal)';
        case 'flying':
            return 'var(--bg-flying)';
        case 'bug':
            return 'var(--bg-bug)';
        case 'poison':
            return 'var(--bg-poison)';
        case 'electric':
            return 'var(--bg-electric)';
        case 'ground':
            return 'var(--bg-ground)';
        case 'fighting':
            return 'var(--bg-fighting)';
        case 'psychic':
            return 'var(--bg-psychic)';
        case 'rock':
            return 'var(--bg-rock)';
        case 'ice':
            return 'var(--bg-ice)';
        case 'ghost':
            return 'var(--bg-ghost)';
        case 'dragon':
            return 'var(--bg-dragon)';
        case 'dark':
            return 'var(--bg-dark)';
        case 'steel':
            return 'var(--bg-steel)';
        case 'fairy':
            return 'var(--bg-fairy)';
        default:
            return 'black';
    }
}

const SmallCard = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    ${props => props.secondColor && css`
    background-image: linear-gradient(135deg, ${props =>bgColorSmallCard(props.typeColor)} 40%, ${props =>bgColorSmallCard(props.secondColor)} 60%);
    `}
    // background-image: linear-gradient(135deg, ${props =>bgColorSmallCard(props.typeColor)} 40%, ${props =>bgColorSmallCard(props.secondColor)} 60%);
    // background-image:radial-gradient(circle, ${props =>bgColorSmallCard(props.typeColor)} 40%, ${props =>bgColorSmallCard(props.secondColor)} 60%);    
    background-color: ${props =>bgColorSmallCard(props.typeColor)};
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
    & *{
        filter: blur(4px);
    }
    // filter: blur(4px);
    // transform: scale(0.4);
    &:not(:first-child){
        margin-left: -300px;
    }
    &:hover{
        transform: translateY(-50px);
        transition: 0.4s ease-out;
        *{
            filter: none;
        }
        + .smallPoke {
            // position: relative;
            margin-left:-40px;
            transition: all .4s ease-out;
            // background-color: red;
        }
    }
`

const SmallPokemon = ({ pokemon }) => {

    console.log('pokemony:  ', pokemon);

    return (
        pokemon.map((el, index) => {
            return (
                <SmallCard key={index + 300} typeColor={el?.types[0].type.name} secondColor={el.types[1]?.type.name} className="smallPoke">
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