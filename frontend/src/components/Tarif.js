import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Tarif() {

    const [cacheT, setCacheT] = useState();
    const toggleCacheT = () => {
        setCacheT(!cacheT)
    }

    return(
        <>
            <div className='headTarif'>
                <h2 className='subtitle'>Tarifs</h2>
                <p className='textSubtitle'>De nombreuses options de réservation<br></br>sont mises en place<br></br>pour vous accueillir selons vos possibilités</p>
            </div>
            <div className='tableTarif'>
                <table>
                    <thead>
                        <tr>
                            <th>Tarification par nuit jusqu’à 14 personnes</th>
                            <th>Du Lundi au Vendredi</th>
                            <th>Du Lundi au Vendredi</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Haute saison</td>
                            <td>430€/ Nuit</td>
                            <td>495€/ Nuit</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Moyenne saison</td>
                            <td>360€/ Nuit</td>
                            <td>410€/ Nuit</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Basse saison</td>
                            <td>290€/ Nuit</td>
                            <td>350€/ Nuit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                <ul>
                    <li>Les prix s'entendent pour la location du gîte entier</li>
                    <li>Un acompte de 25% sera demandé lors de la réservation</li>
                    <li>Un dépôt de garantie de 900€ vous sera demandé à l'arrivée, et restitué lors de l’état des lieux de sortie.</li>
                    <li>Taxes de séjour non incluses au tarif de 1.16 € par personne et par nuit</li>
                    <li>Les animaux ne sont pas autorisés.</li>
                </ul>
                <h3>Heure d'arrivée :</h3>
                <h3>heure de départ :</h3>
            </div>
            <div className='informationGite'>
                {!cacheT ? 
                    <button className='btnInfo' onClick={toggleCacheT}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                    :
                    <button className='btnInfo' onClick={toggleCacheT}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                }
            </div>
        </>
    )
}

export default Tarif;