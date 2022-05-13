import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gite from "../components/Gite";
import Chambre from "../components/Chambres";
import Tarif from "../components/Tarif";
import Avis from "../components/Avis";
import Reservation from '../components/Reservation';
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
                </div>
                <Reservation />
                <footer className="footer">
                    <Footer />
                </footer>
            </main>
        </>
    )
};

export default Home;