import './App.css';
import React, { Component } from 'react';
import PokeButton from './components/buttons/buttons.component';
import PokeCard from './components/poke-card/poke-card.component';
import SmallPokemon from './components/small-pokemon/small-pokemon.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: {},
      searchString: '',
      smallPokemons: [],
      localCollections:[],
      localPokemons:[]
    }
  }
  fetchingData=()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchString}/`)
    .then((response) =>response.json())
      .then((users) =>this.setState(()=>{
        return {pokemon: users}
      },()=>{
        console.log(this.state)
      }))
  }

  luckySpin = ()=>{
    let luck = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${luck}/`)
    .then((response) =>response.json())
      .then((users) =>this.setState(()=>{
        return {pokemon: users}
      },()=>{
        console.log(this.state)
      }))
  }

  inputValue =e=>{
    const searchFieldString = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchString: searchFieldString}
    }) 
  }
  addingSmallCard=()=>{
    const smallPokemonCard=this.state.smallPokemons
    smallPokemonCard.push(this.state.pokemon)
    this.setState(()=>{
      return {smallPokemons: smallPokemonCard}
    },()=>{
      console.log(this.state.smallPokemons)
    })
  }

  toggle=()=>{
    document.querySelector('.smallCollection').classList.toggle('show')
  }
  saveLocaleDate =()=>{
    const collName = document.querySelector('.collectionInput').value
    localStorage.setItem(collName, JSON.stringify(this.state.smallPokemons))
    console.log(collName)
  }
  showLocaleCollection = (localColl)=>{
    this.setState(()=>{
      return{localPokemons: JSON.parse(localStorage.getItem(localColl))}
    })

    // return(<SmallPokemon pokemon={coll}/>)
  }
  allKeys=()=>{
    this.setState(()=>{
      return{localCollections: Object.keys(localStorage)}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="mainPok">
          <PokeCard pokemon={this.state.pokemon} addingHandler={this.addingSmallCard} clickSearchHandler={this.fetchingData} clickLuckyHandler={this.luckySpin} inputValueHandler={this.inputValue}/>
          {this.state.localCollections[0]?this.state.localCollections.map(el=>{
            return(<PokeButton clickHandler={()=>{
              this.showLocaleCollection(el);
              // console.log(JSON.parse(window.localStorage.getItem(el)))
              <SmallPokemon pokemon={JSON.parse(window.localStorage.getItem(el))}/>
            }} buttonText={el} buttonClass='localButton'/>)}):null}
          <div className='localStorage'>
          <input className='collectionInput' type={'search'}></input>
          <PokeButton clickHandler={this.saveLocaleDate} buttonClass='saveData' buttonText={'Save Collection'} />
          <PokeButton clickHandler={this.allKeys} buttonClass='showCollection' buttonText={'Show Collection'} />
          <PokeButton clickHandler={()=>{
            localStorage.clear();
            alert('Collection Deleted');
          }} buttonClass='deleteCollection' buttonText={'Delete Collection'} />
          </div>
        </div>
        <PokeButton clickHandler={this.toggle} buttonClass='toogle' buttonText={'Show pokemons'} />
        <div className="smallCollection show">
          {/* {this.state.toggle?<SmallPokemon pokemon={this.state.smallPokemons} />:null} */}
          <SmallPokemon pokemon={this.state.smallPokemons} />
        </div>
    </div>
    );
  }
}

export default App;


