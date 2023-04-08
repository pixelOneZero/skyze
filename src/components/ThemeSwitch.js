import React, { useState, useEffect } from 'react';


export const ThemeSwitch = () => {
    
    const switchTheme = () => {
        const htmlTag = document.getElementsByTagName('html');
        if (htmlTag[0].getAttribute('theme') === 'day') {
            htmlTag[0].setAttribute('theme', 'night');
        } else {
            htmlTag[0].setAttribute('theme', 'day');
        }
    };

    return <button onClick={switchTheme}>Dark/Light</button>;
}