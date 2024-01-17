

import { useState } from "react"

export default function Player({ name, symbol, isActive, onChangeName }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function editButton() {
    console.log('Você consegue!!');
    setIsEditing((editing) => !editing)
  }

  function handleChange(e) {
    setPlayerName(e.target.value)
    if (isEditing) {
      onChangeName(symbol, playerName)
    }

  }

  let editableName = <span className="player-name">{playerName}</span>;

  let btnCaption = 'Edit';
  if (isEditing) {
    editableName = <input type="text" required value={playerName} onChange={handleChange} />
    btnCaption = 'Save'
  }
  return (

    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableName}
      </span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={editButton}>{btnCaption}</button>
    </li>


  )
}