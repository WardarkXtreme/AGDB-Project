import React, { useState } from 'react';
import imgGite1 from './assets/media/gite1.webp';
import imgGite2 from './assets/media/gite2.webp';
import imgGite3 from './assets/media/gite3.webp';
import imgGite4 from './assets/media/gite4.webp';
import imgGite5 from './assets/media/gite5.webp';
import imgGite6 from './assets/media/gite6.webp';
import imgGiteMobile1 from './assets/media-mobile/gite1Mobile.webp';
import imgGiteMobile2 from './assets/media-mobile/gite2Mobile.webp';
import imgGiteMobile3 from './assets/media-mobile/gite3Mobile.webp';
import imgGiteMobile4 from './assets/media-mobile/gite4Mobile.webp';
import imgGiteMobile5 from './assets/media-mobile/gite5Mobile.webp';
import imgGiteMobile6 from './assets/media-mobile/gite6Mobile.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Gite() {
    
    const [cache, setCache] = useState();


    const toggleCache = () => {
        setCache(!cache)
    };
    
    return (
        <>
           <section className='gite'>
                    <div className='chambre'>
                        <h2 className='subtitle'>Des vacances inoubliables !</h2>
                        <p className='textSubtitle'>Un cocon de charme à Avranches, sur la côte normande.</p>
                        <p className='textSubtitle'>Situé à seulement 30 minutes du Mont Saint-Michel !</p>
                        <Carousel>
                            <div>
                                <img 
                                    className='img-valeur' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite1} 768w,${imgGiteMobile1} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite1}
                                    alt="gite-pictures-1"
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-gite' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite2} 768w,${imgGiteMobile2} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite2}
                                    alt="gite-pictures-2"
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-gite' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite3} 768w,${imgGiteMobile3} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite3}
                                    alt="gite-pictures-3"
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-gite' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite4} 768w,${imgGiteMobile4} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite4}
                                    alt="gite-pictures-4"
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-gite' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite5} 768w,${imgGiteMobile5} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite5}
                                    alt="gite-pictures-5"
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-gite' 
                                    height="432"
                                    width="768"
                                    srcSet={`${imgGite6} 768w,${imgGiteMobile6} 480w`}
                                    syzes="(max-width: 600px) 480px, 768px"
                                    src={imgGite6}
                                    alt="gite-pictures-6"
                                />
                            </div>
                        </Carousel>
                        <div className='informationGite'>
                            <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                                <h3>Le Gîte :</h3>
                                <ul>
                                    <li className='liGite'>Un grand séjour, une cuisine, une salle à manger et un salon cosy de 63 m2</li>
                                    <li className='liGite'>Quatre chambres (dont une suite parentale et une chambre PMR)</li>
                                    <li className='liGite'>Un dortoir (capacité de six personnes)</li>
                                </ul> 
                                <h3>Le jardin aménagé :</h3>
                                <ul>
                                    <li className='liGite'>Vous retrouverez pour vos loisirs plusieurs équipements de plein air(terrain de pétanque, jeu de molki, tennis de table, badminton et hamac)</li>
                                    <li className='liGite'>Ces équipements sont à votre disposition pour votre séjour</li>
                                </ul>                             
                            </div>
                            {!cache ? 
                                <div className='btnInfo'><FontAwesomeIcon onClick={toggleCache} icon={faAngleDown} className='icoArrowD' /></div>
                                :
                                <div className='btnInfo'><FontAwesomeIcon onClick={toggleCache} icon={faAngleUp} className='icoArrowU' /></div>
                            }
                        </div>
                    </div> 
            </section> 
        </>
    )
};

export default Gite;