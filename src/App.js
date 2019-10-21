import React, {Component} from 'react';
import croost from './images/crooster.jpg';
import './App.css';
import Default from './scenarios/Default';
import firstScenario from './scenario-data/first-scenario'


class App extends Component {

  state = {
    image: firstScenario.image,
    events: firstScenario.events,
    buttons: firstScenario.buttons
  }

  nextScenarioInport = (scenarioData) => {
    this.setState({
      image: scenarioData.image,
      events: scenarioData.events,
      buttons: scenarioData.buttons
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={croost} className="App-logo" alt="croost" />
          <p>
            
          </p>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Hackers_(film)"
            target="_blank"
            rel="noopener noreferrer"
          >
            I Know You Play the Game
          </a>
        </header>
  
        <Default 
          image={this.state.image} 
          events={this.state.events} 
          buttons={this.state.buttons}
          click={this.nextScenarioInport} />
  
      </div>
  
    );
  }
  
}


export default App;
