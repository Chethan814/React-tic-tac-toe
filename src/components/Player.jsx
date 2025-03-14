/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        // setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    let player = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        player = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            ></input>
        );
    }
    return (
        <>
            <li>
                <span id="player">
                    {player}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </li>
        </>
    );
}
