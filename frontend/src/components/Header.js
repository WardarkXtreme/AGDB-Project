import React from 'react';
import logo from '../img/logoNoName.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <>
            <div className='header'>
                <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1'/>
                <FontAwesomeIcon icon={faAlignJustify} className='icoMenu'/>
            </div>
        </>
    )
};

export default Header;