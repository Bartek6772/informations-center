import { React, useState, useEffect } from 'react';
import Element from './../../containers/Element/Element';
import './Clock.scss'


function Clock() {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    })

    return(
        <Element sizeX={3} sizeY={1} name="clock">
            {clockState}
        </Element>
    )
}
export default Clock;