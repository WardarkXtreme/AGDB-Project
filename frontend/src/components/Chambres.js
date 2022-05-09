import React from 'react';
import Pmr from'./Pmr';
import Suite from'./Suite';
import Rose from'./Rose';
import Moka from'./Moka';
import Dortoir from'./Dortoir';

function Chambre() {
    
    return (
        <>           
            <section id='Chambres' className='group-room'>
                <Pmr />
                <Suite />
                <Rose />
                <Moka />
                <Dortoir />
            </section>
        </>
    )
}

export default Chambre;