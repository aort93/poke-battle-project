import React from 'react'
import { Card } from 'semantic-ui-react'

const SelectContainer = (props) => {


    return (
      <Card onClick={() => props.handleRemoveFromTeam(props.pokemon)}>
      <br/>
      <div>
        <div className="image">
         {<img alt="picture" src={props.pokemon.frontURL}/>}
          <img/>
        </div>
      </div>
      <br/>
      </Card>
    )

}

export default SelectContainer
