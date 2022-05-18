import React from 'react';

import photo from "../images/IMG_3108.jpg"
import mail from "../images/envelope-fill.svg"
import linkedin from "../images/linkedin.svg"

export default function Info() {
    return (
        <div className="info">
            <img className='info-photo' alt='photo' src={photo} />
            <h2>Adam Mroczek</h2>
            <h5 className="info-stanowisko">Fullstack Developer</h5>
            <p>adammroczek.website</p>
            <a href="https://konto.onet.pl/profile-page"><button className='info-mail'><img alt='mail' src={mail} /> Email</button></a>
            <a href="https://www.linkedin.com/in/adammroczek"><button className="info-linkedin"><img alt='linkedin' src={linkedin} /> Linkedin</button></a>
        </div>
    )
}