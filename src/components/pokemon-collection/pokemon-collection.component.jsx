import React, {useState} from 'react'
import SmallPokemon from '../small-pokemon/small-pokemon.component';
import styled from 'styled-components';
import PokeButton from '../buttons/buttons.component';
import { Link } from 'react-router-dom';

const SmallColection = styled.div`
  position:absolute;
  width:100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  top:65%;
  left:0;
`

export const PokemonCollection = () => {
  const [smallPokemons, setSmallPokemons] = useState([]);
  const [localCollections, setLocalCollections] = useState([]);
  const [localPokemons, setLocalPokemons] = useState([]);
  const [toggle, setToggle] = useState(false);

  const toggleCollection=()=>{
    console.log(toggle);
    setToggle(!toggle);
  }

  const showLocaleCollection = (localColl)=>{
    console.log(`lokalna kolekcja ${localColl}`)
    setLocalPokemons(JSON.parse(localStorage.getItem(localColl)))
  }

  const allKeys=()=>{
    setLocalCollections(Object.keys(localStorage))
  }
  return (
    <div className='localStorage'>
        <nav>
            <Link to={'/'}>Back</Link>
        </nav>
        <div>
            <PokeButton clickHandler={allKeys} buttonClass='showCollection localButton' buttonText={'Show Collection'} />
            <PokeButton clickHandler={()=>{
              return setSmallPokemons([]);
            }} buttonClass='clearCurrentCollection localButton' buttonText={'Clear Current Collection'} />
            <PokeButton clickHandler={()=>{
              localStorage.clear();
              alert('Collection Deleted');
            }} buttonClass='deleteCollection localButton' buttonText={'Delete Collection'} />
            <PokeButton clickHandler={toggleCollection} buttonClass='toggle localButton' buttonText={'Show pokemons'} />
          <div className="localStorageCollections">
              {localCollections[0]?localCollections.map(el=>{
                return(<PokeButton clickHandler={()=>{showLocaleCollection(el);
                }} buttonText={el} buttonClass='localCollectionButton'/>)}):null}
          </div>
        </div>
            <div>
              {toggle&&<SmallColection
                  className="smallCollection">
                  {localPokemons[0]?<SmallPokemon pokemon={localPokemons} />:null}
                </SmallColection>}
            </div>
        </div>
        
  )
}
