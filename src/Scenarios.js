import React, {Component} from 'react'
import Default from './scenarios/Default'
import Default2 from './scenarios/Default2'
import FirstScenario from './scenario-data/first-scenario'
import { 
  Route,
  useParams, 
  Link
} from 'react-router-dom'
import allScenarios from './scenario-data'



class Scenarios extends Component {
  
  render () {
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}/${Object.keys(allScenarios)[0]}`}>Start!</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:scenarioId`} component={Default} /> 
      </div>
    )
  }
}

export default Scenarios
