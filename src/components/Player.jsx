import { useState } from "react";

export default function Player({name,symbol}) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick(){
        setIsEditing((editing) => !editing);
        // setIsEditing((editing) => !editing);
        

    }
    let player = <span className="player-name">{name}</span>;
    if(isEditing){
        player = <input type="text" required value={name}></input>
    }
    return (
        <>
            <li>
                <span id="player">
                    {player}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>
    );
}
