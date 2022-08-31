import React from "react";
import AddAvis from "../components/AddAvis"
import { SecureU } from "../components/SecureU";

const HomeUser = () => {
    SecureU();
    return (
        <>  
            <main>
                <AddAvis />
            </main>
        </>
    )
};

export default HomeUser;