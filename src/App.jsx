import React from "react";

import Player from "./components/Player";

function App() {
    return (
        <>
            <main>
                <div id="game-container">
                    <ol id="players">
                        <Player name="Player 1" symbol="x" />
                        <Player name="Player 2" symbol="0" />
                    </ol>
                </div>
                LOGO
            </main>
        </>
    );
}

export default App;
