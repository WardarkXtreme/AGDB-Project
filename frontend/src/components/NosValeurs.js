import React from 'react';
import imgValeur1 from '../components/assets/media/nosvaleur1.webp';
import imgValeur1Mobile from '../components/assets/media-mobile/nosvaleur1Mobile.webp';

function NosValeur() {



    return (
        <>
            <section id='NosValeur' className='nos-valeur'>
                <h2 className='subtitle'>Nos Valeurs</h2>
                <p className='textSubtitle'>
                    Partage, Authenticité et Responsabilité
                    («3R» réduire, réutiliser et recycler).
                    Nous invitons nos hôtes à faire attention à leur impact sur
                    l’environnement sans être moralisateur, notre souhait est d’aller
                    vers un tourisme plus responsable et durable.
                </p>
                <div>
                    <img
                        className='img-valeur'
                        height="432"
                        width="768"
                        srcSet={`${imgValeur1} 768w,${imgValeur1Mobile} 480w`}
                        syzes="(max-width: 600px) 480px, 768px"
                        src={imgValeur1}
                        alt="gite-pictures-2"
                    />
                </div>
            </section>
        </>
    )
}

export default NosValeur;