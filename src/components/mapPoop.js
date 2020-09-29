import React, {useState} from 'react'
import _ from 'lodash'

let counter = 12

export default function MapPoop(props) {
  
  const counterAdd = () => {
    return counter++;
  };

  function getRandomInt(max) {
    return Math.random();
  }

  return (
    <ul>
      {props.poop.map((item, index) => (
        <li key={_.uniqueId}>
          {item.poopKey}
          {index}
          <select>
            <option>IDK</option>
            <option>IT WAS SO MUCH FUN</option>
            <option>Pretty Good</option>
            <option>Eh</option>
            <option>Pretty Bad</option>
            <option>WHY MUST I SUFFER?!</option>
          </select>
          <button onClick={() => props.method(item.poopId)}>
            Delete Poop
          </button>
        </li>
  ))}
    </ul>
  )
}

