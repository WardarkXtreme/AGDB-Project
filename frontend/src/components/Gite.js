import React, { useState } from 'react';
import pic1 from './assets/slide_1.jpg';
import pic2 from './assets/slide_2.jpg';
import pic3 from './assets/slide_3.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";



function Gite() {
    
    const [url, setUrl] = useState('')
    
    const tableGite = [
        pic1,
        pic2,
        pic3
    ];
    setUrl(pic1)
    const btnRight = document.getElementById('btn_right');
    btnRight.addEventListener('click', () => {
        let i;
        for (i = 0; i < tableGite.length; i++) {
            setUrl(tableGite[i]);
        }
    })
    

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
                    <img src={url} className="picGite"/>
                    <div className='btnBar'>
                        <button id='btn_left'><FontAwesomeIcon icon={faArrowLeft} className='icoArrowLR'/></button>
                        <button id='btn_right'><FontAwesomeIcon icon={faArrowRight} className='icoArrowLR'/></button>
                    </div>  
                </div>
            </div>
        </>
    )
};

export default Gite;