import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import imgdortoir1 from './assets/media/dortoir1.webp';
import imgdortoir2 from './assets/media/dortoir2.webp';
import imgdortoirMobile1 from './assets/media-mobile/dortoir1Mobile.webp';
import imgdortoirMobile2 from './assets/media-mobile/dortoir2Mobile.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Dortoir() {

    const [cache, setCache] = useState();
    const toggleCache = () => {
        setCache(!cache)
    };

    return (
        <>

            <div className='chambre'>
                <h2 className='subtitle'>Dortoir</h2>
                <Carousel>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgdortoir1} 1920w,${imgdortoirMobile1} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgdortoir1}
                            alt="dortoir-pictures-1"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgdortoir2} 1920w,${imgdortoirMobile2} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgdortoir2}
                            alt="dortoir-pictures-2"
                        />
                    </div>
                </Carousel>
                <div className='informationGite'>
                    <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                        <h3>Situé au deuxième étage</h3>
                        <ul>
                            <li className='liGite'>Quatre lits individuels</li>
                            <li className='liGite'>Un canapé convertible (2 places)</li>
                            <li className='liGite'>Équipements : chauffage indépendant, penderie, toilettes</li>
                        </ul>
                    </div>
                    {!cache ?
                        <div className='btnInfo' onClick={toggleCache}><FontAwesomeIcon icon={faAngleDown} className='icoArrowD' /></div>
                        :
                        <div className='btnInfo' onClick={toggleCache}><FontAwesomeIcon icon={faAngleUp} className='icoArrowU' /></div>
                    }
                </div>
            </div> 
        </>
    )
}

export default Dortoir;