import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function NoValid() {

    return (
        <>
            <div className='Ball-er' id='response'>
                <FontAwesomeIcon icon={faXmark} className='ico-ball-er' />
            </div>
            <p className='p-ball-er'>Erreur inattendue, veuillez réessayer</p>
            <p className='p-ball-er'>Veuillez attendre la redirection automatique</p>
        </>
    )
}

export default NoValid;