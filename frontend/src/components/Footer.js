import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair, faBed, faUtensils, faWifi, faBanSmoking, faPaw, faPhone, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {

    return (
        <>
            <p className="adress-footer">Gîte Du Bois<br />4 le petit Andillou, 50300 Ponts<br/>France</p>
            <div className="ico-footer">
                <FontAwesomeIcon icon={faWheelchair} />
                <FontAwesomeIcon icon={faBed} />
                <FontAwesomeIcon icon={faUtensils} />
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBanSmoking} />
                <FontAwesomeIcon icon={faPaw} />
            </div>
            <p>Contact et réseaux</p>
            <div className="ico-footer">
                <a className="Afooter" href="tel:+33771086630"><FontAwesomeIcon icon={faPhone} className="icoSocial"/>appeler</a>
                <a className="Afooter" href="https://www.google.com/maps/dir/49.0834471,-1.4483277/4+Le+Petit+Andillou,+50300+Ponts/@48.8945809,-1.6149684,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x480955860af92997:0x720635645a3c804e!2m2!1d-1.3269999!2d48.7064013"><FontAwesomeIcon icon={faMapLocation} className="icoSocial"/>itineraire</a>
                <a className="Afooter" href="https://www.facebook.com/Au-Gite-Du-Bois-2069159439861829"><FontAwesomeIcon icon={faFacebookSquare} className="icoSocial"/>facebook</a>
                <a className="Afooter" href='https://www.instagram.com/augitedubois/?hl=fr'><FontAwesomeIcon icon={faInstagramSquare} className="icoSocial"/>instagram</a>
                <a className="Afooter" href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} className="icoSocial"/>linkedin</a>
            </div>
            <p className="licence">© 2022 Du Bois</p>
        </>
    )
}

export default Footer;