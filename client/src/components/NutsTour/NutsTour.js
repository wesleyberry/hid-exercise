import React from 'react';
import './NutsTour.css';
import Nut_1 from '../../Images/nut_1.png';
import Nut_2 from '../../Images/nut_2.png';

function NutsTour() {
    return (
    <React.Fragment>
        <img src={ Nut_1 } alt="nut 1" className="backgroundNuts" id="nut_1" />
        <img src={ Nut_2 } alt="nut 2" className="backgroundNuts" id="nut_2"/>
        <img src={ Nut_1 } alt="nut 3" className="backgroundNuts" id="nut_3" />
    </React.Fragment>
    );
}

export default NutsTour;