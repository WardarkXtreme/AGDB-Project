import React, { useState } from 'react';
import logo from '../img/logo-gitedubois.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faXmark, faBed, faUser, faMagnifyingGlassDollar, faCommentDots, faHouseCircleCheck, faPhone, faMapLocation } from "@fortawesome/free-solid-svg-icons";

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
                    <nav className='btn_nav'>
                        <Link className='btn_nav_form' to="/connexion"><FontAwesomeIcon icon={faUser} className="icoMenu"/><p className="textMenu">Se connecter</p></Link>
                        <a className='btn_nav_form' onClick={()=> {
                            setDisplayMenu(!displayMenu)
                            document.getElementById('Chambres').scrollIntoView()
                        }}><FontAwesomeIcon icon={faBed} className="icoMenu"/><p className="textMenu">Chambres</p></a>
                        <a className='btn_nav_form' onClick={()=> {
                            setDisplayMenu(!displayMenu)
                            document.getElementById('Tarifs').scrollIntoView()
                        }}><FontAwesomeIcon icon={faMagnifyingGlassDollar} className="icoMenu"/><p className="textMenu">Tarifs</p></a>
                        <a className='btn_nav_form' onClick={()=> {
                            setDisplayMenu(!displayMenu)
                            document.getElementById('Avis').scrollIntoView()
                        }}><FontAwesomeIcon icon={faCommentDots} className="icoMenu"/><p className="textMenu">Avis clients</p></a>
                        <a className='btn_nav_form' onClick={()=> {
                            setDisplayMenu(!displayMenu)
                            document.getElementById('Reservation').scrollIntoView()
                        }}><FontAwesomeIcon icon={faHouseCircleCheck} className="icoMenu"/><p className="textMenu">Réservations</p></a>
                        <div className="group_social">
                            <a className='btn_social_form' href="tel:+33601028535"><FontAwesomeIcon icon={faPhone} className="icoSocial"/></a>
                            <a className='btn_social_form' href="https://www.google.com/maps/dir/49.0834471,-1.4483277/4+Le+Petit+Andillou,+50300+Ponts/@48.8945809,-1.6149684,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x480955860af92997:0x720635645a3c804e!2m2!1d-1.3269999!2d48.7064013"><FontAwesomeIcon icon={faMapLocation} className="icoSocial"/></a>
                        </div>
                    </nav>
                </div>
            }
        </>
    )
};

export default Header;