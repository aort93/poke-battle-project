import React from 'react'

const PokeCard = (props) => {
  const handleClick = () => {
    return props.handleSelect(props.pokemon, props.player)
  }

    return (
      <div player={props.player} onClick={handleClick}>
        <p>{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}</p>
        <img src={props.pokemon.frontURL} />
        <p>HP:{props.pokemon.hp}</p>
        <p>Type: {props.pokemon.type_name}</p>
        <p>Move Set:</p>
        <ul>
          <li>{props.pokemon.move.name}</li>
        </ul>
        <br/>
      </div>
    )

}

export default PokeCard
