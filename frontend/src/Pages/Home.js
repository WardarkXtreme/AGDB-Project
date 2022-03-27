import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gite from "../components/Gite";
import Chambre from "../components/Chambres";
import Tarif from "../components/Tarif";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Gite />
            <Chambre />
            <Tarif />
        </>
    )
};

export default Home;