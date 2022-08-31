import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gite from "../components/Gite";
import Chambre from "../components/Chambres";
import Tarif from "../components/Tarif";
import Avis from "../components/Avis";
import NosValeur from "../components/NosValeurs";
import Reservation from '../components/Reservation';
import Proximity from '../components/Proximity';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <Main />
                <Gite />
                <Chambre />
                <div className="responsive-tarif-avis">
                    <Tarif />
                    <Avis />
                    <NosValeur />
                </div>
                <div className="responsive-res-activity">
                    <Reservation />
                    <Proximity />
                </div>
                <footer className="footer">
                    <Footer />
                </footer>
            </main>
        </>
    )
};

export default Home;