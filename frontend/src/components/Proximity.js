import React from "react";
import imgKarting from "./assets/media/karting.webp";
import imgKartingMobile from "./assets/media-mobile/karting-mobile.webp";
import imgUlm from "./assets/media/ulm.webp";
import imgUlmMobile from "./assets/media-mobile/ulm-mobile.webp";
import imgDune from "./assets/media/jardindesdunes.webp";
import imgDuneMobile from "./assets/media-mobile/jardindesdunes-mobile.webp";
function Proximity(){

    return(
        <>
            <section id='Activity' className='activity'>
                <h2 className='subtitle'>Nos bonnes adresses</h2>
                <h3 className='workName'>Baptême ULM</h3>
                <div>
                    <img
                        className='img-activity'
                        height="432"
                        width="768"
                        srcSet={`${imgUlm} 768w,${imgUlmMobile} 480w`}
                        syzes="(max-width: 600px) 480px, 768px"
                        src={imgUlm}
                        alt="gite-activity-1"
                    />
                </div>
                <p className="textSubtitle">Une philosophie de VIE et de travail. Bienveillance, respect, écoute, positivité...</p>
                <div className="btn-direct-div">
                    <a href='https://www.ulm-mont-saint-michel.com/Bapteme.html' className='link'>☞ Se renseigner</a>
                </div>
                <h3 className='workName'>Karting et paintball</h3>
                <div>
                    <img
                        className='img-activity'
                        height="432"
                        width="768"
                        srcSet={`${imgKarting} 768w,${imgKartingMobile} 480w`}
                        syzes="(max-width: 600px) 480px, 768px"
                        src={imgKarting}
                        alt="gite-activity-2"
                    />
                </div>
                <p className="textSubtitle">Amusez-vous en famille ou entre amis au circuit karting du parc, sensations garanties.</p>
                <div className="btn-direct-div">
                    <a href='https://www.kartingduparc.fr/' className='link'>☞ Se renseigner</a>
                </div>
                <h3 className='workName'>Jardin des dunes</h3>
                <div>
                    <img
                        className='img-activity'
                        height="432"
                        width="768"
                        srcSet={`${imgDune} 768w,${imgDuneMobile} 480w`}
                        syzes="(max-width: 600px) 480px, 768px"
                        src={imgDune}
                        alt="gite-activity-3"
                    />
                </div>
                <p className="textSubtitle">Bar / Pizzas / Desserts et Concerts.<br/>Produits frais et faits maisons<br/>Vue mer / Mont St Michel.</p>
                <div className="btn-direct-div">
                    <a href='https://www.facebook.com/Jardindesdunes/' className='link'>☞ Se renseigner</a>
                </div>
            </section>
        </>
    )
}

export default Proximity;