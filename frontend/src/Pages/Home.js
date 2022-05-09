import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gite from "../components/Gite";
import Chambre from "../components/Chambres";
import Tarif from "../components/Tarif";
import Avis from "../components/Avis";
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <Main />
                <Gite />
                <Chambre />
                <Tarif />
                <Avis />
                <Contact />
            </main>
        </>
    )
};

export default Home;