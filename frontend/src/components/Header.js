import React, { useState } from 'react';
import logo from '../img/logoNoName.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {

    const [displayMenu, setDisplayMenu] = useState()

    return (
        <>
            <div className='header'>
                <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1'/>
                <FontAwesomeIcon icon={faAlignJustify} onClick={() => setDisplayMenu(!displayMenu)} className='icoMenu' id='openMenu'/>
            </div>
            <div className={`displayNone ${displayMenu ? "menu" : ""}`}>
                <div className='header'>
                <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1'/>
                <FontAwesomeIcon icon={faXmark} onClick={() => setDisplayMenu(!displayMenu)} className='icoMenu'/>
                </div>
                <div className='titleGroupe'>
                    <FontAwesomeIcon icon={faStar} className='icoStars'/>
                    <FontAwesomeIcon icon={faStar} className='icoStars'/>
                    <h1 className='titleName'>Au Gîte Du Bois</h1>
                    <FontAwesomeIcon icon={faStar} className='icoStars'/>
                    <FontAwesomeIcon icon={faStar} className='icoStars'/>
                </div>
                <div className='btn_nav'>
                    <button className='btn_nav_form'>Se Connecter</button>
                    <button className='btn_nav_form'>Chambres</button>
                    <button className='btn_nav_form'>Tarifs</button>
                    <button className='btn_nav_form'>Avis Clients</button>
                    <button className='btn_nav_form'>Réservations</button>
                </div>
            </div>
        </>
    )
};

export default Header;