import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Tarif() {

    const [cacheT, setCacheT] = useState();
    const toggleCacheT = () => {
        setCacheT(!cacheT)
    }

    return(
        <section id='Tarifs' className='tarif-gite'>
            <div className='headTarif'>
                <h2 className='subtitle'>Tarifs</h2>
                <p className='textSubtitle'>De nombreuses options de réservation sont mises en place pour vous accueillir selons vos possibilités</p>
            </div>
            <div className='tableTarif'>
                <table>
                    <thead>
                        <tr className='table-one'>
                            <th>Tarification par nuit jusqu’à 14 personnes</th>
                            <th>Du Lundi au Vendredi</th>
                            <th>Du Samedi au Dimanche</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='table-one'>Haute saison</td>
                            <td className='table-price'>430€/ Nuit</td>
                            <td className='table-price'>495€/ Nuit</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className='table-one'>Moyenne saison</td>
                            <td className='table-price'>360€/ Nuit</td>
                            <td className='table-price'>410€/ Nuit</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className='table-one'>Basse saison</td>
                            <td className='table-price'>290€/ Nuit</td>
                            <td className='table-price'>350€/ Nuit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='igcontent'>
                <div className={`displayNone ${cacheT ? "displayInfo" : "displayNone"}`}>
                    <div>
                        <h3>Haute saison :</h3>
                        <ul>
                            <li>du 1er Juillet au 31 Aout</li>
                        </ul>    
                    </div>
                    <div>
                        <h3>Moyenne saison :</h3>
                        <ul>
                            <li>du 1er Septembre au 31 Octobre</li>
                            <li>du 1er Mars au 31 Juin</li>
                            <li>Vacances scolaires et jours fériés</li>
                        </ul>    
                    </div>
                    <div>
                        <h3>Basse saison :</h3>
                        <ul>
                            <li>du 1er Novembre au 28 Février</li>
                        </ul>    
                    </div>
                    <div>
                        <h3>À savoir :</h3>
                        <ul>
                            <li>Les prix s'entendent pour la location du gîte entier</li>
                            <li>Un acompte de 25% sera demandé lors de la réservation</li>
                            <li>Un dépôt de garantie de 900€ vous sera demandé à l'arrivée, et restitué lors de l’état des lieux de sortie.</li>
                            <li>Taxes de séjour non incluses au tarif de 1.16 € par personne et par nuit</li>
                            <li>Les animaux ne sont pas autorisés.</li>
                        </ul>
                        <h3>Heure d'arrivée : <span className='pHeure'>15H00</span></h3>
                        <h3>Heure de départ : <span className='pHeure'>10H00</span></h3>
                    </div>
                    <div>
                        <h3>Services inclus dans le tarif :</h3>
                        <ul>
                            <li>Réception ouverte de 9h à 18h</li>
                            <li>Sauna</li>
                            <li>WiFi gratuit</li>
                            <li>Linge de maison fourni (draps, serviettes)</li>
                            <li>Quatre chambres et un dortoir de quatre couchages</li>
                            <li>BBQ et équipements de plein air (pétanque, Molki, hamac...)</li>
                            <li>Jeux et jouets pour enfants</li>
                            <li>Produits ménagers</li>
                            <li>Ménage de fin de séjour</li>
                        </ul>    
                    </div>
                    <div>
                        <h3>Services optionnels</h3>
                        <ul>
                            <li>Relaxation et massage bien être peut être envisagé, réalisé par Myriam Bierjon-Gerbaud (membre F.F.M.T.R.)</li>
                            <li>Lit bébé (0-2 ans) disponible gratuitement</li>
                        </ul>    
                    </div>
                </div>
                <div className='informationGite'>
                    {!cacheT ? 
                        <button className='btnInfo' onClick={toggleCacheT}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                        :
                        <button className='btnInfo' onClick={toggleCacheT}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                    }
                </div>
            </div>
        </section>
    )
}

export default Tarif;