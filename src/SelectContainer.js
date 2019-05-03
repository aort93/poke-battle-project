import React from 'react'


const SelectContainer = (props) => {


    return (
      <div>
        {props.pokemon.name}
        <img src={props.pokemon.frontURL}  onClick={() => props.handleRemoveFromTeam(props.pokemon)}/>
      </div>
    )

}

export default SelectContainer
