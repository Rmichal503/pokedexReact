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
      toggle: false
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
    this.setState({toggle: true})
  }

  render() {
    return (
      <div className="App">
        <PokeCard pokemon={this.state.pokemon} addingHandler={this.addingSmallCard} clickSearchHandler={this.fetchingData} clickLuckyHandler={this.luckySpin} inputValueHandler={this.inputValue}/>
        <PokeButton clickHandler={this.toggle} buttonClass='toogle' buttonText={'Show pokemons'} />
        {this.state.toggle?<SmallPokemon pokemon={this.state.smallPokemons} />:<h1>false</h1>}
    </div>
    );
  }
}

export default App;


