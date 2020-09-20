import React from 'react';
import Typewriter from 'typewriter-effect';
import './Text.modules.css';

export const Text = () => {
    return (
        <div className = "font">
            <Typewriter
                options={{
                    strings: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    wrapperClassName:'h2',
                    cursorClassName: 'Typewritter__cursor'
                }}
            />

        </div>
    )
}



