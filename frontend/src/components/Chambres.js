import React, { useState, useEffect } from 'react';
import pic4 from './assets/slide_4.jpg';
import pic5 from './assets/slide_5.jpg';
import pic6 from './assets/slide_6.jpg';
import pic7 from './assets/slide_7.jpg';
import pic8 from './assets/slide_8.jpg';
import pic9 from './assets/slide_9.jpg';
import pic10 from './assets/slide_10.jpg';
import pic11 from './assets/slide_11.jpg';
import pic12 from './assets/slide_12.jpg';
import pic13 from './assets/slide_13.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Chambre() {
    const [imgPMR, setImgPMR] = useState(0);
    const [imgSP, setImgSP] = useState(0);
    const [imgRP, setImgRP] = useState(0);
    const [imgM, setImgM] = useState(0);
    const [imgD, setImgD] = useState(0);

    const [cachePMR, setCachePMR] = useState();
    const [cacheSP, setCacheSP] = useState();
    const [cacheRP, setCacheRP] = useState();
    const [cacheM, setCacheM] = useState();
    const [cacheD, setCacheD] = useState();

    const toggleCachePMR = () => {
        setCachePMR(!cachePMR)
    }
    const toggleCacheSP = () => {
        setCacheSP(!cacheSP)
    }
    const toggleCacheRP = () => {
        setCacheRP(!cacheRP)
    }
    const toggleCacheM = () => {
        setCacheM(!cacheM)
    }
    const toggleCacheD = () => {
        setCacheD(!cacheD)
    }

    const tablePMR = [
        pic4,
        pic5
    ]
    const tableSP = [
        pic6,
        pic7
    ]
    const tableRP = [
        pic8,
        pic9
    ]
    const tableM = [
        pic10,
        pic11
    ]
    const tableD = [
        pic12,
        pic13
    ]
    useEffect(() => {

        const ballFour = document.getElementById('ballFour');
        const ballFive = document.getElementById('ballFive');
        const ballSix = document.getElementById('ballSix');
        const ballSeven = document.getElementById('ballSeven');
        const ballHeight = document.getElementById('ballHeight');
        const ballNine = document.getElementById('ballNine');
        const ballTen = document.getElementById('ballTen');
        const ballEleven = document.getElementById('ballEleven');
        const ballTwelve = document.getElementById('ballTwelve');
        const ballThirteen = document.getElementById('ballThirteen');
        
        if (imgPMR === 0) {
            ballFour.style.background = '#BC8212';
            ballFour.style.height = '13px';
            ballFour.style.width = '13px';
            ballFour.style.border = 'white 1px solid';
            ballFive.style.background = 'white';
            ballFive.style.height = '10px';
            ballFive.style.width = '10px';
            ballFive.style.border = 'none';
        };
        if (imgPMR === 1) {
            ballFour.style.background = 'white';
            ballFour.style.height = '10px';
            ballFour.style.width = '10px';
            ballFour.style.border = 'none';
            ballFive.style.background = '#BC8212';
            ballFive.style.height = '13px';
            ballFive.style.width = '13px';
            ballFive.style.border = 'white 1px solid';
        };
        if (imgSP === 0) {
            ballSix.style.background = '#BC8212';
            ballSix.style.height = '13px';
            ballSix.style.width = '13px';
            ballSix.style.border = 'white 1px solid';
            ballSeven.style.background = 'white';
            ballSeven.style.height = '10px';
            ballSeven.style.width = '10px';
            ballSeven.style.border = 'none';
        };
        if (imgSP === 1) {
            ballSix.style.background = 'white';
            ballSix.style.height = '10px';
            ballSix.style.width = '10px';
            ballSix.style.border = 'none';
            ballSeven.style.background = '#BC8212';
            ballSeven.style.height = '13px';
            ballSeven.style.width = '13px';
            ballSeven.style.border = 'white 1px solid';
        };
        if (imgRP === 0) {
            ballHeight.style.background = '#BC8212';
            ballHeight.style.height = '13px';
            ballHeight.style.width = '13px';
            ballHeight.style.border = 'white 1px solid';
            ballNine.style.background = 'white';
            ballNine.style.height = '10px';
            ballNine.style.width = '10px';
            ballNine.style.border = 'none';
        };
        if (imgRP === 1) {
            ballHeight.style.background = 'white';
            ballHeight.style.height = '10px';
            ballHeight.style.width = '10px';
            ballHeight.style.border = 'none';
            ballNine.style.background = '#BC8212';
            ballNine.style.height = '13px';
            ballNine.style.width = '13px';
            ballNine.style.border = 'white 1px solid';
        };
        if (imgM === 0) {
            ballTen.style.background = '#BC8212';
            ballTen.style.height = '13px';
            ballTen.style.width = '13px';
            ballTen.style.border = 'white 1px solid';
            ballEleven.style.background = 'white';
            ballEleven.style.height = '10px';
            ballEleven.style.width = '10px';
            ballEleven.style.border = 'none';
        };
        if (imgM === 1) {
            ballTen.style.background = 'white';
            ballTen.style.height = '10px';
            ballTen.style.width = '10px';
            ballTen.style.border = 'none';
            ballEleven.style.background = '#BC8212';
            ballEleven.style.height = '13px';
            ballEleven.style.width = '13px';
            ballEleven.style.border = 'white 1px solid';
        };
        if (imgD === 0) {
            ballTwelve.style.background = '#BC8212';
            ballTwelve.style.height = '13px';
            ballTwelve.style.width = '13px';
            ballTwelve.style.border = 'white 1px solid';
            ballThirteen.style.background = 'white';
            ballThirteen.style.height = '10px';
            ballThirteen.style.width = '10px';
            ballThirteen.style.border = 'none';
        };
        if (imgD === 1) {
            ballTwelve.style.background = 'white';
            ballTwelve.style.height = '10px';
            ballTwelve.style.width = '10px';
            ballTwelve.style.border = 'none';
            ballThirteen.style.background = '#BC8212';
            ballThirteen.style.height = '13px';
            ballThirteen.style.width = '13px';
            ballThirteen.style.border = 'white 1px solid';
        };
        
    }, [imgPMR, imgSP, imgRP, imgM, imgD])
    
    return (
        <>
            <div className='goupeGite'>
                <h2 className='subtitle'>Chambre PMR</h2>
                <p className='textSubtitle'>
                    Accessible aux personnes à mobilités réduites !<br></br>
                    Optimisé pour garantir accessibilité,<br></br>
                    autonomie maximale, confort et sécurité !
                </p>
                <div className='img'>
                    <img src={tablePMR[imgPMR]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (imgPMR > 0){
                                setImgPMR(imgPMR - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballFour' className='ball'></div>
                            <div id='ballFive' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (imgPMR < 1){
                                setImgPMR(imgPMR + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cachePMR ? "displayInfo" : "displayNone"}`}>
                            <h3>Située au rez-de-chaussée</h3>
                            <ul>
                                <li>Un lit double</li>
                                <li>Salle de bain avec douche, et toilettes</li>
                                <li>Équipements en chambre : chauffage indépendant, penderie, bureau.</li>
                            </ul>                            
                        </div>
                        {!cachePMR ? 
                            <button className='btnInfo' onClick={toggleCachePMR}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCachePMR}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
            <div className='goupeGite'>
                <h2 className='subtitle'>Suite parentale</h2>
                <div className='img'>
                    <img src={tableSP[imgSP]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (imgSP > 0){
                                setImgSP(imgSP - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballSix' className='ball'></div>
                            <div id='ballSeven' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (imgSP < 1){
                                setImgSP(imgSP + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cacheSP ? "displayInfo" : "displayNone"}`}>
                            <h3>Située au premier étage</h3>
                            <ul>
                                <li>Un lit double</li>
                                <li>Salle de bain avec douche, baignoire, toilettes</li>
                                <li>Équipements en suite : chauffage indépendant, penderie</li>
                            </ul>                            
                        </div>
                        {!cacheSP ? 
                            <button className='btnInfo' onClick={toggleCacheSP}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCacheSP}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
            <div className='goupeGite'>
                <h2 className='subtitle'>Chambre Rose Poudrée</h2>
                <div className='img'>
                    <img src={tableRP[imgRP]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (imgRP > 0){
                                setImgRP(imgRP - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballHeight' className='ball'></div>
                            <div id='ballNine' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (imgRP < 1){
                                setImgRP(imgRP + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cacheRP ? "displayInfo" : "displayNone"}`}>
                            <h3>Située au premier étage :</h3>
                            <ul>
                                <li>Un lit double</li>
                                <li>Équipements: chauffage indépendant, penderie</li>
                                <li>Commun à l’étage : accès salle de bain avec douche,
                                    toilettes et Sauna 4 personnes</li>
                            </ul>                            
                        </div>
                        {!cacheRP ? 
                            <button className='btnInfo' onClick={toggleCacheRP}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCacheRP}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
            <div className='goupeGite'>
                <h2 className='subtitle'>Chambre Moka</h2>
                <div className='img'>
                    <img src={tableM[imgM]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (imgM > 0){
                                setImgM(imgM - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballTen' className='ball'></div>
                            <div id='ballEleven' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (imgM < 1){
                                setImgM(imgM + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cacheM ? "displayInfo" : "displayNone"}`}>
                            <h3>Située au premier étage :</h3>
                            <ul>
                                <li>Un lit double</li>
                                <li>Équipements: chauffage indépendant, penderie</li>
                                <li>Commun à l’étage : accès salle de bain avec douche,
                                    toilettes et Sauna 4 personnes</li>
                            </ul>                            
                        </div>
                        {!cacheM ? 
                            <button className='btnInfo' onClick={toggleCacheM}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCacheM}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
            <div className='goupeGite'>
                <h2 className='subtitle'>Dortoir</h2>
                <div className='img'>
                    <img src={tableD[imgD]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (imgD > 0){
                                setImgD(imgD - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballTwelve' className='ball'></div>
                            <div id='ballThirteen' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (imgD < 1){
                                setImgD(imgD + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cacheD ? "displayInfo" : "displayNone"}`}>
                            <h3>Située au deuxième étage</h3>
                            <ul>
                                <li>Quatre lits individuels, et un canapé convertible (2 places)</li>
                                <li>Équipements: chauffage indépendant, penderie, toilettes</li>
                            </ul>                            
                        </div>
                        {!cacheD ? 
                            <button className='btnInfo' onClick={toggleCacheD}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCacheD}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chambre;