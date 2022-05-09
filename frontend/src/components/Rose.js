import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import imgchambrerose1 from './assets/media/chambrerose1.webp';
import imgchambrerose2 from './assets/media/chambrerose2.webp';
import imgchambrerose3 from './assets/media/chambrerose3.webp';
import imgchambrerose4 from './assets/media/chambrerose4.webp';
import imgchambrerose5 from './assets/media/chambrerose5.webp';
import imgchambreroseMobile1 from './assets/media-mobile/chambrerose1Mobile.webp';
import imgchambreroseMobile2 from './assets/media-mobile/chambrerose2Mobile.webp';
import imgchambreroseMobile3 from './assets/media-mobile/chambrerose3Mobile.webp';
import imgchambreroseMobile4 from './assets/media-mobile/chambrerose4Mobile.webp';
import imgchambreroseMobile5 from './assets/media-mobile/chambrerose5Mobile.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Rose() {

    const [cache, setCache] = useState();
    const toggleCache = () => {
        setCache(!cache)
    };

    return (
        <>

            <div className='chambre'>
                <h2 className='subtitle'>Chambre Rose Poudrée</h2>
                <Carousel>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgchambrerose1} 1920w,${imgchambreroseMobile1} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgchambrerose1}
                            alt="chambre-rose-pictures-1"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgchambrerose2} 1920w,${imgchambreroseMobile2} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgchambrerose2}
                            alt="chambre-rose-pictures-2"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgchambrerose3} 1920w,${imgchambreroseMobile3} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgchambrerose3}
                            alt="chambre-rose-pictures-3"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgchambrerose4} 1920w,${imgchambreroseMobile4} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgchambrerose4}
                            alt="chambre-rose-pictures-4"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="1080"
                            width="1920"
                            srcSet={`${imgchambrerose5} 1920w,${imgchambreroseMobile5} 960w`}
                            syzes="(max-width: 600px) 960px, 1920px"
                            src={imgchambrerose5}
                            alt="chambre-rose-pictures-5"
                        />
                    </div>
                </Carousel>
                <div className='informationGite'>
                    <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                        <h3>Située au premier étage</h3>
                        <ul>
                            <li className='liGite'>Un lit double</li>
                            <li className='liGite'>Équipements en suite : chauffage indépendant, penderie</li>
                            <li className='liGite'>Commun à l’étage : accès salle de bain avec douche, toilettes et Sauna 4 personnes</li>
                        </ul>
                    </div>
                    {!cache ?
                        <div className='btnInfo'><FontAwesomeIcon onClick={toggleCache} icon={faAngleDown} className='icoArrowD' /></div>
                        :
                        <div className='btnInfo'><FontAwesomeIcon onClick={toggleCache} icon={faAngleUp} className='icoArrowU' /></div>
                    }
                </div>
            </div> 
        </>
    )
}

export default Rose;