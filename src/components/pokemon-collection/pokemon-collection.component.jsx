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

  const saveLocaleDate =()=>{
    const collName = document.querySelector('.collectionInput').value
    localStorage.setItem(collName, JSON.stringify(smallPokemons))
    console.log(collName);
    document.querySelector('.collectionInput').value = '';
    setSmallPokemons([]);
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
            <input className='collectionInput' type={'search'} placeholder='Collection Name'></input>
            <PokeButton clickHandler={saveLocaleDate} buttonClass='saveData localButton' buttonText={'Save Collection'} />
            <PokeButton clickHandler={allKeys} buttonClass='showCollection localButton' buttonText={'Show Collection'} />
            <PokeButton clickHandler={()=>{
              return setSmallPokemons([]);
            }} buttonClass='clearCurrentCollection localButton' buttonText={'Clear Current Collection'} />
            <PokeButton clickHandler={()=>{
              localStorage.clear();
              alert('Collection Deleted');
            }} buttonClass='deleteCollection localButton' buttonText={'Delete Collection'} />
            <PokeButton clickHandler={toggleCollection} buttonClass='toggle localButton' buttonText={'Show pokemons'} />
          </div>
          <div className="localStorageCollections">
              {localCollections[0]?localCollections.map(el=>{
                return(<PokeButton clickHandler={()=>{showLocaleCollection(el);
                  // <SmallPokemon pokemon={JSON.parse(window.localStorage.getItem(el))}/>
                }} buttonText={el} buttonClass='localCollectionButton'/>)}):null}
            </div>
            {toggle&&<SmallColection 
                className="smallCollection">
                {/* {toggle?<SmallPokemon pokemon={smallPokemons} />:null} */}
                {localPokemons[0]?<SmallPokemon pokemon={localPokemons} />:null}
              </SmallColection>}
        </div>
        
  )
}
