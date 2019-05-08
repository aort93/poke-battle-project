import React from 'react'
import { Card } from 'semantic-ui-react'
import SelectContainer from './SelectContainer'
import v4 from 'uuid'

class WinnerPage extends React.Component {
  componentDidMount() {
    console.log('mount')
  }

  handleClick = () => {
    this.props.battlegroundsStateReset()
    this.props.reset("index")
  }

  render() {
    return (
       <div className="winner-page">
       <br/>
       <br/>
       <br/>
       <br/>
         <h1 className="win-header">The Winner Is</h1>
         {this.props.winner2 ? <h1>Player 2</h1> : <h1>Player 1</h1>}
         <br/>
         <button class="ui button" onClick={this.handleClick}>Play Again</button>
         <br/>
       </div>
    )
  }

}

export default WinnerPage
