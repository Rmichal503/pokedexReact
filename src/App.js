import './App.css';
import React, { useState } from 'react';
import PokeButton from './components/buttons/buttons.component';
import PokeCard from './components/poke-card/poke-card.component';
import { Link } from "react-router-dom";


export const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [searchString, setSearchString] = useState('');
  const [smallPokemons, setSmallPokemons] = useState([]);

  const fetchingData=()=>{
    if(searchString){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${searchString}/`)
    .then((response) =>response.json())
      .then((users) =>{
        setPokemon(users);
      })}
    alert('No name or number of pokemon to look for!')
  }

  const luckySpin = ()=>{
    let luck = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${luck}/`)
    .then((response) =>response.json())
    .then((users) =>{
      setPokemon(users);
    })
  }

  const inputValue =e=>{
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString);
  }

  const addingSmallCard=()=>{
    const smallPokemonCard=smallPokemons
    smallPokemonCard.push(pokemon)
    setSmallPokemons(smallPokemonCard);
    console.log(smallPokemons);
  }

  const saveLocaleDate =()=>{
    const collName = document.querySelector('.collectionInput').value
    localStorage.setItem(collName, JSON.stringify(smallPokemons))
    console.log(collName);
    document.querySelector('.collectionInput').value = '';
    setSmallPokemons([]);
  }
  return (
    <div className="App">
      <nav>
        <Link to='collection_of_pokemons'>Collection</Link>
      </nav>
        <div className="mainPok">
          <PokeCard pokemon={pokemon} addingHandler={addingSmallCard} clickSearchHandler={fetchingData} clickLuckyHandler={luckySpin} inputValueHandler={inputValue}/>
          <div className='localStorage'>
            <input className='collectionInput' type={'search'} placeholder='Collection Name'></input>
            <PokeButton clickHandler={saveLocaleDate} buttonClass='saveData localButton' buttonText={'Save Collection'} />
            <PokeButton clickHandler={()=>{
              return setSmallPokemons([]);
            }} buttonClass='clearCurrentCollection localButton' buttonText={'Clear Current Collection'} />
          </div>
        </div>
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       pokemon: {},
//       searchString: '',
//       smallPokemons: [],
//       localCollections:[],
//       localPokemons:[]
//     }
//   }
//   fetchingData=()=>{
//     fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchString}/`)
//     .then((response) =>response.json())
//       .then((users) =>this.setState(()=>{
//         return {pokemon: users}
//       }))
//   }

//   luckySpin = ()=>{
//     let luck = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${luck}/`)
//     .then((response) =>response.json())
//       .then((users) =>this.setState(()=>{
//         return {pokemon: users}
//       }))
//   }

//   inputValue =e=>{
//     const searchFieldString = e.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchString: searchFieldString}
//     }) 
//   }
//   addingSmallCard=()=>{
//     const smallPokemonCard=this.state.smallPokemons
//     smallPokemonCard.push(this.state.pokemon)
//     this.setState(()=>{
//       return {smallPokemons: smallPokemonCard}
//     },()=>{
//       console.log(this.state.smallPokemons)
//     })
//   }

//   toggle=()=>{
//     document.querySelector('.smallCollection').classList.toggle('show')
//   }
//   saveLocaleDate =()=>{
//     const collName = document.querySelector('.collectionInput').value
//     localStorage.setItem(collName, JSON.stringify(this.state.smallPokemons))
//     console.log(collName)
//   }
//   showLocaleCollection = (localColl)=>{
//     console.log(`lokalna kolekcja ${localColl}`)
//     this.setState(()=>{
//       return{localPokemons: JSON.parse(localStorage.getItem(localColl))}
//     })

//     // return(<SmallPokemon pokemon={coll}/>)
//   }
//   allKeys=()=>{
//     this.setState(()=>{
//       return{localCollections: Object.keys(localStorage)}
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="mainPok">
//           <PokeCard pokemon={this.state.pokemon} addingHandler={this.addingSmallCard} clickSearchHandler={this.fetchingData} clickLuckyHandler={this.luckySpin} inputValueHandler={this.inputValue}/>
//           {this.state.localCollections[0]?this.state.localCollections.map(el=>{
//             return(<PokeButton clickHandler={()=>{this.showLocaleCollection(el);
//               // <SmallPokemon pokemon={JSON.parse(window.localStorage.getItem(el))}/>
//             }} buttonText={el} buttonClass='localButton'/>)}):null}
//           <div className='localStorage'>
//           <input className='collectionInput' type={'search'}></input>
//           <PokeButton clickHandler={this.saveLocaleDate} buttonClass='saveData' buttonText={'Save Collection'} />
//           <PokeButton clickHandler={this.allKeys} buttonClass='showCollection' buttonText={'Show Collection'} />
//           <PokeButton clickHandler={()=>{
//             localStorage.clear();
//             alert('Collection Deleted');
//           }} buttonClass='deleteCollection' buttonText={'Delete Collection'} />
//           </div>
//         </div>
//         <PokeButton clickHandler={this.toggle} buttonClass='toogle' buttonText={'Show pokemons'} />
//         <SmallColection className="smallCollection show">
//           {/* {this.state.toggle?<SmallPokemon pokemon={this.state.smallPokemons} />:null} */}
//           {this.state.localPokemons[0]?<SmallPokemon pokemon={this.state.localPokemons} />:null}
//         </SmallColection>
//     </div>
//     );
//   }
// }

// export default App;


