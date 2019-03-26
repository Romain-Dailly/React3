// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			working: true
		};		
	}
	handleClick = () => {
		this.setState({ working: !this.state.working })};
  render() {
    const work = this.state.working ? "working (really hard), it's PRIVATE" : "... oh, is still working!";
    const workButton = this.state.working ? "Wanna see him take a break ?" : 'Back to work ?';
    const workLogo = this.state.working ? logo : 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939';
    const workLogoClassName = this.state.working ? "App-logo" : "App-logo-not";
    return (
      <div className="App">
        <header className="App-header">
          <img src={workLogo} className={workLogoClassName} alt="logo" />
          <h1 className="App-title">Homer's {work}</h1>
          <button
					onClick={this.handleClick}
					className={this.state}>{workButton}
				</button>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
