import React, {Component} from 'react'
import Default from './scenarios/Default'
import FirstScenario from './scenario-data/first-scenario'



class Scenario extends Component {
  
  state = {
    image: FirstScenario.image,
    events: FirstScenario.events,
    buttons: FirstScenario.buttons,
    path: FirstScenario.path
  }

  nextScenarioInport = (scenarioData) => {
    this.setState({
      image: scenarioData.image,
      events: scenarioData.events,
      buttons: scenarioData.buttons,
    })
  }


  render () {
    return (
      <div>
        <Default 
          image={this.state.image} 
          events={this.state.events} 
          buttons={this.state.buttons}
          click={this.nextScenarioInport} 
        /> 
      </div>
    )
  }
}

export default Scenario
