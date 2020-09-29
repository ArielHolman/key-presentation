import React from 'react'

export default function MapPoop(props) {
  

  return (
    <ul>
      {props.poop.map((item, index) => (
        <li key={item.poopId}>
          {item.poopKey}
          {item.poopId + 1}
          <select>
            <option>Expecting soon</option>
            <option>5 I am in heaven </option>
            <option>4 IT WAS SO MUCH FUN</option>
            <option>3 Eh, not life changing</option>
            <option>2 At least I'm not dying </option>
            <option>1 WHY MUST I SUFFER?!</option>
          </select>
          <button onClick={() => props.method(item.poopId)}>
            Delete Poop
          </button>
        </li>
  ))}
    </ul>
  )
}

