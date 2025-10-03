import { useState } from 'react'



export default function Players({ name, symbol ,isActive }) {

    function handleEffect() {
        setIsEditing(editing=>!editing );
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    const [isEditing, setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(name);
    let changePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        changePlayerName = <input type="text" required className='player input' defaultValue={name} onChange={handleChange}></input>;
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            {changePlayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEffect}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}