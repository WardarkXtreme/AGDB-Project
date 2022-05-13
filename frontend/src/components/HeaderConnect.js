import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from '../img/logo-gitedubois.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function HeaderConnect() {

    const [readySend, setReadySend] = useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [checkOne, setCheckOne] = useState(true);
    const [checkTwo, setCheckTwo] = useState(true);

    const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const regExPassword = /^(([a-zA-Z0-9@%&]{10,20}))$/;

    const verifyMail = regExMail.test(mail);
    const verifyPassword = regExPassword.test(password);

    const mailValidation = () => {
        if (verifyMail) {
            console.log("valide")
        } else if (!verifyMail) {
            console.log("non valide mail")
        }
    }
    function handleMail(e) {
        setMail(e.target.value)
        mailValidation();
    }
    const mailPassword = () => {
        if (verifyPassword) {
            console.log("valide")
        } else if (!verifyPassword) {
            console.log("non valide mail")
        }
    }
    function handlePassword(e) {
        setPassword(e.target.value)
        mailPassword();
    }

    const handleCheckOne = () => {
        setCheckOne(!checkOne)
        console.log(checkOne)
    }
    const handleCheckTwo = () => {
        setCheckTwo(!checkTwo)
        console.log(checkTwo)
    }

    useEffect(() => {
        if (verifyMail && verifyPassword && !checkOne && !checkTwo) {
            setReadySend(true)
        } else {
            setReadySend(false)
        }
    }, [mail, password, checkOne, checkTwo])

    function submit(e) {

        e.preventDefault();
        if (readySend === true) {
            const data = {
                "email": mail,
                "password": password
            }
            Axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:3000/api/auth/login",
                mode: 'cors',
                data: data
            })
                .then(res => {
                    console.log(res.data.role)
                    if (res.data.role === 0) {
                        sessionStorage.setItem("name", res.data.name)
                        sessionStorage.setItem("lastName", res.data.lastName)
                        document.location = "/User"
                    }
                    if(res.data.role === 1) {
                        document.location = "/Admin"
                    }
                })
                .catch(error => {
                    document.location= "connexion"
                })
        } else {
            console.log('rien')
        }
    }

    return (
        <>
            <div className='header'>
                <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1' />
                <a href='/'><FontAwesomeIcon icon={faHome} className='icoMenu' id='openMenu' /></a>
            </div>
            <div className='group-form_connexion'>
                <div className='connexionForm'>
                    <form className='form'>
                        <label className='idForm'>
                            <input className='inputForm' placeholder='Votre identifiant' name='id' type="mail" onChange={handleMail} />
                        </label>
                        <label className='passwordForm'>
                            <input className='inputForm' placeholder='Votre mot de passe' name='password' type="password" onChange={handlePassword} />
                        </label>
                        <label>
                            <input type="checkbox" onClick={handleCheckOne} />
                            J'autorise Au Gite Du Bois à publier mon avis.
                        </label>
                        <label>
                            <input type="checkbox" onClick={handleCheckTwo} />
                            J'autorise Au Gite Du Bois à publier mon nom.
                        </label>
                        {readySend === true ?
                            <button className='send-true' onClick={submit}>Se connecter</button>
                            :
                            <button className='send-false' onClick={(e) => { e.preventDefault() }}>Se Connecter</button>
                        }
                    </form>
                </div>
            </div>
        </>
    )
};

export default HeaderConnect;