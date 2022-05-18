import React from 'react';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'

export default function Footer() {
    return (
        <footer>
            <a href='https://www.facebook.com/adam.mroczek.94/'><img alt='facebook' src={facebook} /></a>
            <img alt='instagram' src={instagram} />
            <a url='https://github.com/Mroku99'><img alt='github' src={github} /></a>
        </footer>
    )
}