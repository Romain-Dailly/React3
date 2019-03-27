// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import GenerateCharacter from "./GenerateCharacter"

// Default character sample
const characterSample = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      working: true,
      character: characterSample
		};		
  }
  //Get character from API Simpsons
  getCharacter(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          character:  data[0],
        });  
    });
  }
 
  //Change working state with button
	handleClick = () => {
    this.setState({ working: !this.state.working})};
    
  render() {

    const work = this.state.working ? "Who's saying that?" : this.state.character.character;
    const workButton = this.state.working ? "Wanna know ???" : 'Click me and retry to guess';
    const workLogo = this.state.working ? logo : this.state.character.image;
    const workLogoClassName = this.state.working ? "App-logo" : "App-logo-not";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={workLogo} className={workLogoClassName} alt="logo" />
          <h1 className="guessWho">{work}</h1>
          <h2 className="quote">{this.state.character.quote}</h2>
          <button
            onClick={this.handleClick}
            className={this.state}>{workButton}
          </button>
          <GenerateCharacter selectCharacter={() =>  this.getCharacter()}/>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
