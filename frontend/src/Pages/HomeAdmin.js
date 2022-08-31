import React from "react";
import Privilege from '../components/Privilege';
import { SecureA } from '../components/SecureA';

function HomeAdmin(){
    SecureA();
    return (
        <>  
            <main>
                <Privilege />
            </main>
        </>
    )
};

export default HomeAdmin;