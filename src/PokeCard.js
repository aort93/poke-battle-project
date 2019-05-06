import React from 'react'
import { Card } from 'semantic-ui-react'

const PokeCard = (props) => {

  const handleClick = () => {
     return props.handleSelect(props.pokemon, props.player)
  }

console.log(props.pokemon)
    return (
      // <div player={props.player} onClick={handleClick}>
      //   <p>{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}</p>
      //   <img src={props.pokemon.frontURL} />
      //   <p>HP:{props.pokemon.hp}</p>
      //   <p>Type: {props.pokemon.type_name}</p>
      //   <p>Move Set:</p>
      //   <ul>
      //     <li>{props.pokemon.move.name}</li>
      //   </ul>
      //   <br/>
      // </div>
      <Card player={props.player} onClick={handleClick}>
        <div>
        <br/>
          <div className="image">
           <img alt="picture" src={props.pokemon.frontURL}/>
          </div>
          <div className="content">
            <div className="header">{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)} </div>
          </div>
          <div className="extra-content">
            <span>
              <i className="bath" />
               <img src={`./${props.pokemon.type_name}.png`}/>
            </span>
          </div>
          <br/>
        </div>
      </Card>
    )

}

export default PokeCard
