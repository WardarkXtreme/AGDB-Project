import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import imgchambremoka1 from './assets/media/chambremoka1.webp';
import imgchambremoka2 from './assets/media/chambremoka2.webp';
import imgchambremoka3 from './assets/media/chambremoka3.webp';
import imgchambremoka4 from './assets/media/chambremoka4.webp';
import imgchambremoka5 from './assets/media/chambremoka5.webp';
import imgchambremokaMobile1 from './assets/media-mobile/chambremoka1Mobile.webp';
import imgchambremokaMobile2 from './assets/media-mobile/chambremoka2Mobile.webp';
import imgchambremokaMobile3 from './assets/media-mobile/chambremoka3Mobile.webp';
import imgchambremokaMobile4 from './assets/media-mobile/chambremoka4Mobile.webp';
import imgchambremokaMobile5 from './assets/media-mobile/chambremoka5Mobile.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Moka() {

    const [cache, setCache] = useState();
    const toggleCache = () => {
        setCache(!cache)
    };

    return (
        <>

            <div className='chambre'>
                <h2 className='subtitle'>Chambre Moka</h2>
                <Carousel>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgchambremoka1} 768w,${imgchambremokaMobile1} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgchambremoka1}
                            alt="chambremoka-pictures-1"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgchambremoka2} 768w,${imgchambremokaMobile2} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgchambremoka2}
                            alt="chambremoka-pictures-2"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgchambremoka3} 768w,${imgchambremokaMobile3} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgchambremoka3}
                            alt="chambremoka-pictures-3"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgchambremoka4} 768w,${imgchambremokaMobile4} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgchambremoka4}
                            alt="chambremoka-pictures-4"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgchambremoka5} 768w,${imgchambremokaMobile5} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgchambremoka5}
                            alt="chambremoka-pictures-5"
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

export default Moka;