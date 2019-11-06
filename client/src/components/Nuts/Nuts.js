import React from 'react';
import './Nuts.css';
import Nut_1 from '../../Images/nut_1.png';
import Nut_2 from '../../Images/nut_2.png';

function Nuts() {
    return (
    <React.Fragment>
        <img src={ Nut_1 } alt="nut 1" className="backgroundNuts" id="nut_1" />
        <img src={ Nut_2 } alt="nut 2" className="backgroundNuts" id="nut_2"/>
        <img src={ Nut_1 } alt="nut 3" className="backgroundNuts" id="nut_3" />
        <img src={ Nut_2 } alt="nut 4" className="backgroundNuts" id="nut_4" />
        <img src={ Nut_1 } alt="nut 5" className="backgroundNuts" id="nut_5" />
    </React.Fragment>
    );
}

export default Nuts;