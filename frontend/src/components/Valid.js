import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function Valid() {

    return (
        <>
            <div className='Ball' id='response'>
                <FontAwesomeIcon icon={faCheck} className='ico-ball' />
            </div>
            <p className='p-ball'>Votre demande est envoyée</p>
            <p className='p-ball'>Veuillez attendre la redirection automatique</p>
        </>
    )
}

export default Valid;
