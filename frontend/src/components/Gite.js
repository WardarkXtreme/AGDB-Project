import React, { useEffect, useState } from 'react';
import pic1 from './assets/slide_1.jpg';
import pic2 from './assets/slide_2.jpg';
import pic3 from './assets/slide_3.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp} from "@fortawesome/free-solid-svg-icons";



function Gite() {
    
    const [img, setImg] = useState(0);
    const [cache, setCache] = useState();

    const toggleCache = () => {
        setCache(!cache)
    }

    const tableGite = [
        pic1,
        pic2,
        pic3
    ]
    useEffect(() => {
        const ballOne = document.getElementById('ballOne');
        const ballTwo = document.getElementById('ballTwo');
        const ballTree = document.getElementById('ballTree');
        
        if (img === 0) {
            ballOne.style.background = '#BC8212';
            ballOne.style.height = '13px';
            ballOne.style.width = '13px';
            ballOne.style.border = 'white 1px solid';
            ballTwo.style.background = 'white';
            ballTwo.style.height = '10px';
            ballTwo.style.width = '10px';
            ballTwo.style.border = 'none';
            ballTree.style.background = 'white';
            ballTree.style.height = '10px';
            ballTree.style.width = '10px';
            ballTree.style.border = 'none';
        };
        if (img === 1) {
            ballOne.style.background = 'white';
            ballOne.style.height = '10px';
            ballOne.style.width = '10px';
            ballOne.style.border = 'none';
            ballTwo.style.background = '#BC8212';
            ballTwo.style.height = '13px';
            ballTwo.style.width = '13px';
            ballTwo.style.border = 'white 1px solid';
            ballTree.style.background = 'white';
            ballTree.style.height = '10px';
            ballTree.style.width = '10px';
            ballTree.style.border = 'none';
        };
        if (img === 2) {
            ballOne.style.background = 'white';
            ballOne.style.height = '10px';
            ballOne.style.width = '10px';
            ballOne.style.border = 'none';
            ballTwo.style.background = 'white';
            ballTwo.style.height = '10px';
            ballTwo.style.width = '10px';
            ballTwo.style.border = 'none';
            ballTree.style.background = '#BC8212';
            ballTree.style.height = '13px';
            ballTree.style.width = '13px';
            ballTree.style.border = 'white 1px solid';
        };

    }, [img])
    
    return (
        <>
            <div className='goupeGite'>
                <h2 className='subtitle'>Pour des vacances innoubliables !</h2>
                <p className='textSubtitle'>
                    Un cocon de charme à Avranches,<br></br>
                    sur la côte normande,<br></br>
                    situé à seulement 30 minutes du Mont-Saint-Michel !
                </p>
                <div className='img'>
                    <img src={tableGite[img]} alt="photo-gite" className="picGite"/>
                    <div className='btnBar'>
                        <button className='btn_left' onClick={() => {
                            if (img > 0){
                                setImg(img - 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} className='icoArrowLR'/>
                        </button>
                        <div className='groupBall'>
                            <div id='ballOne' className='ball'></div>
                            <div id='ballTwo' className='ball'></div>
                            <div id='ballTree' className='ball'></div>
                        </div>
                        <button className='btn_right' onClick={() => {
                            if (img < 2){
                                setImg(img + 1)
                            }
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} className='icoArrowLR'/>
                        </button>
                    </div>
                    <div className='informationGite'>
                        <div className={`displayNone ${cache ? "displayInfo" : "displayNone"}`}>
                            <h3>Le Gîte :</h3>
                            <ul>
                                <li>Un grand séjour, une cuisine, une salle à manger et un salon cosy de 63 m2</li>
                                <li>Quatre chambres (dont une suite parentale et une chambres PMR)</li>
                                <li>Un dortoir (capacité de six personnes)</li>
                            </ul>
                            <h3>Le jardin aménagé :</h3>
                            <ul>
                                <li>Vous retrouverez pour vos loisirs plusieurs équipements de plein air<br></br>(terrain de pétanque, jeu de molki, tennis de table, badminton et hamac)</li>
                                <li>Ces équipements sont à votre disposition pour votre séjour </li>
                            </ul>
                        </div>
                        {!cache ? 
                            <button className='btnInfo' onClick={toggleCache}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                            :
                            <button className='btnInfo' onClick={toggleCache}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Gite;