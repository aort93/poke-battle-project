import React from 'react'


const SelectContainer = (props) => {
    return (
      <div>
        {props.pokemon.name}
        <img src={props.pokemon.frontURL} />
      </div>
    )

}

export default SelectContainer
