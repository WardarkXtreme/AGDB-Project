import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Player } from 'video-react';
import video from './assets/pres.mp4';

function Main() {
    return (
        <>
            <div className='titleGroupe'>
                <FontAwesomeIcon icon={faStar} className='icoStars'/>
                <FontAwesomeIcon icon={faStar} className='icoStars'/>
                <h1 className='titleName'>Au Gîte Du Bois</h1>
                <FontAwesomeIcon icon={faStar} className='icoStars'/>
                <FontAwesomeIcon icon={faStar} className='icoStars'/>
            </div>
            <div className='textPresentation'>
                <p className='tp'>Réservez vos vacances dans un gîte quatre étoiles au coeur de<br></br> 
                    nombreuses destinations touristiques.<br></br>
                    Un lieu remplie de charme, calme et reposant.<br></br>
                    Entre mer et verdure, les amateurs d'escapades bucoliques, seront<br></br> 
                    sensibles au style moderne et à l'ambiance conviviale revendiquée.
                </p>
            </div>
            <div className='moviePresentation'>
                <Player
                    playsInline
                    poster=""
                    src={video}
                />
            </div>
        </>
    )
};

export default Main;