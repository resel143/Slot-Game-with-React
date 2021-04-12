import React from 'react';
import './App.css';
function App(){
    return <>
        <div className='heading'>
            <h1 class="font-effect-neon">Welcome to Slot Game</h1>
        </div>
        <div className='Content'>
            <div className='Container'>
                <div className='Slot'>
                    <div className='emojis'>
                        <p>&#128516; &#128516; &#128516;</p>
                    </div>
                    <h2 class="font-effect-shadow-multiple">Matching</h2>
                </div>
                <div className='Slot'>
                    <div className='emojis'>
                        <p>&#129409; &#128516; &#129409; </p>
                    </div>
                    <h2 class="font-effect-shadow-multiple">Not matching !</h2>
                </div>
                <div className='Slot'>
                    <div className='emojis'>
                    <p>&#127804; &#127803; &#127803; </p>
                    </div>
                    <h2 class="font-effect-shadow-multiple">Not matching !</h2>
                </div>
                <div className='Slot'>
                    <div className='emojis'>
                    <p>&#127771; &#127771; &#127771;  </p>
                    </div>
                    <h2 class="font-effect-shadow-multiple">Matching</h2>
                </div>
            </div>
        </div>
    </>
}

export default App;