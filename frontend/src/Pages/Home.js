import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gite from "../components/Gite";
import Chambre from "../components/Chambres";
import Tarif from "../components/Tarif";
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Gite />
            <Chambre />
            <Tarif />
            <Contact/>
        </>
    )
};

export default Home;