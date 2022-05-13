import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import imgsuite1 from './assets/media/suiteparentale1.webp';
import imgsuite2 from './assets/media/suiteparentale2.webp';
import imgsuite3 from './assets/media/suiteparentale3.webp';
import imgsuiteMobile1 from './assets/media-mobile/suiteparentale1Mobile.webp';
import imgsuiteMobile2 from './assets/media-mobile/suiteparentale2Mobile.webp';
import imgsuiteMobile3 from './assets/media-mobile/suiteparentale3Mobile.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Suite() {

    const [cache, setCache] = useState();
    const toggleCache = () => {
        setCache(!cache)
    };

    return (
        <>

            <div className='chambre'>
                <h2 className='subtitle'>Suite Parentale</h2>
                <Carousel>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgsuite1} 768w,${imgsuiteMobile1} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgsuite1}
                            alt="suite-pictures-1"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgsuite2} 768w,${imgsuiteMobile2} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgsuite2}
                            alt="suite-pictures-2"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgsuite3} 768w,${imgsuiteMobile3} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgsuite3}
                            alt="suite-pictures-1"
                        />
                    </div>
                </Carousel>
                <div className='informationGite'>
                    <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                        <h3>Située au premier étage</h3>
                        <ul>
                            <li className='liGite'>Un lit double</li>
                            <li className='liGite'>Salle de bain avec douche, baignoire, toilettes</li>
                            <li className='liGite'>Équipements en suite : chauffage indépendant, penderie</li>
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

export default Suite;