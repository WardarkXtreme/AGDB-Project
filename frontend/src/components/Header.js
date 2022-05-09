import React, { useState } from 'react';
import logo from '../img/logo-gitedubois.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faXmark, faBed, faUser, faMagnifyingGlassDollar, faCommentDots, faHouseCircleCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {

    const [displayMenu, setDisplayMenu] = useState()
    return (
        <>
            {!displayMenu ? 
                <div className='header'>
                    <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1'/>
                    <FontAwesomeIcon icon={faEllipsisH} onClick={() => setDisplayMenu(!displayMenu)} className='icoMenu' id='openMenu'/>
                </div>
            :
                <div className={`displayNone ${displayMenu ? "menu" : ""}`}>
                    <div className='header'>
                    <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1'/>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setDisplayMenu(!displayMenu)} className='icoMenu'/>
                    </div>
                    <div className='btn_nav'>
                        <a className='btn_nav_form' href="/connexion"><FontAwesomeIcon icon={faUser} className="icoMenu"/><p className="textMenu">Se connecter</p></a>
                        <a className='btn_nav_form' href='#Chambres' onClick={()=> {setDisplayMenu(!displayMenu)}}><FontAwesomeIcon icon={faBed} className="icoMenu"/><p className="textMenu">Chambres</p></a>
                        <a className='btn_nav_form' href='#Tarifs' onClick={()=> {setDisplayMenu(!displayMenu)}}><FontAwesomeIcon icon={faMagnifyingGlassDollar} className="icoMenu"/><p className="textMenu">Tarifs</p></a>
                        <a className='btn_nav_form' href='#Avis' onClick={()=> {setDisplayMenu(!displayMenu)}}><FontAwesomeIcon icon={faCommentDots} className="icoMenu"/><p className="textMenu">Avis clients</p></a>
                        <a className='btn_nav_form'  href='#Reservation' onClick={()=> {setDisplayMenu(!displayMenu)}}><FontAwesomeIcon icon={faHouseCircleCheck} className="icoMenu"/><p className="textMenu">Réservations</p></a>
                        <div className="group_social">
                            <a className='btn_social_form' href="tel:+33771086630"><FontAwesomeIcon icon={faPhone} className="icoSocial"/></a>
                            <a className='btn_social_form' href="https://www.facebook.com/Au-Gite-Du-Bois-2069159439861829"><FontAwesomeIcon icon={faFacebookSquare} className="icoSocial"/></a>
                            <a className='btn_social_form' href='https://www.instagram.com/augitedubois/?hl=fr'><FontAwesomeIcon icon={faInstagramSquare} className="icoSocial"/></a>
                            <a className='btn_social_form' href='#'><FontAwesomeIcon icon={faLinkedin} className="icoSocial"/></a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Header;