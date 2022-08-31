import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import imgpmr1 from './assets/media/pmr1.webp';
import imgpmr2 from './assets/media/pmr2.webp';
import imgpmr3 from './assets/media/pmr3.webp';
import imgpmr4 from './assets/media/pmr4.webp';
import imgpmr5 from './assets/media/pmr5.webp';
import imgpmrMobile1 from './assets/media-mobile/pmr1Mobile.webp';
import imgpmrMobile2 from './assets/media-mobile/pmr2Mobile.webp';
import imgpmrMobile3 from './assets/media-mobile/pmr3Mobile.webp';
import imgpmrMobile4 from './assets/media-mobile/pmr4Mobile.webp';
import imgpmrMobile5 from './assets/media-mobile/pmr5Mobile.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Pmr() {

    const [cache, setCache] = useState();
    const toggleCache = () => {
        setCache(!cache)
    };

    return (
        <>

            <div className='chambre'>
                <h2 className='subtitle'>Chambre PMR</h2>
                <p className='textSubtitle'>Accessible aux personnes à mobilité réduite !</p>
                <p className='textSubtitle'>Optimisé pour garantir accessibilité, autonomie maximale, confort et sécurité !</p>
                <Carousel>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgpmr1} 768w,${imgpmrMobile1} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgpmr1}
                            alt="pmr-pictures-1"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgpmr2} 768w,${imgpmrMobile2} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgpmr2}
                            alt="pmr-pictures-2"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgpmr3} 768w,${imgpmrMobile3} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgpmr3}
                            alt="pmr-pictures-3"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgpmr4} 768w,${imgpmrMobile4} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgpmr4}
                            alt="pmr-pictures-4"
                        />
                    </div>
                    <div>
                        <img
                            className='img-gite'
                            height="432"
                            width="768"
                            srcSet={`${imgpmr5} 768w,${imgpmrMobile5} 480w`}
                            syzes="(max-width: 600px) 480px, 768px"
                            src={imgpmr5}
                            alt="pmr-pictures-5"
                        />
                    </div>
                </Carousel>
                <div className='informationGite'>
                    <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                        <h3>Située au rez-de-chaussée</h3>
                        <ul>
                            <li className='liGite'>Un lit double</li>
                            <li className='liGite'>Salle de bain avec douche, et toilettes</li>
                            <li className='liGite'>Équipements en chambre : chauffage indépendant, penderie, bureau</li>
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

export default Pmr;