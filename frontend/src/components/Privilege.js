import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from '../img/logo-gitedubois.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPowerOff, faXmark } from "@fortawesome/free-solid-svg-icons";
import { RatingStar } from "rating-star";

function Privilege() {

    const [avis, setAvis] = useState([]);
    const [majDel, setMajDel] = useState([]);
    const [anim, setAnim] = useState(false);
    const [valid, setValid] = useState();
    const [count, setCount] = useState(3);
    const [nbrAvis, setNbrAvis] = useState(0);
    const [readySend, setReadySend] = useState(false);
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [validMail, setValidMail] = useState();
    const [validName, setValidName] = useState();
    const [validLastName, setValidLastName] = useState();
    const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const verifyMail = regExMail.test(mail);
    const regExName = /^(([a-zA-Z-]{3,12}))$/;
    const verifyName = regExName.test(name)
    const verifyLastName = regExName.test(lastName)


    const mailValidation = () => {
        if (verifyMail) {
            setValidMail(true)
        } else if (!verifyMail) {
            setValidMail(false)
        }
    }
    function handleMail(e) {
        setMail(e.target.value)
        mailValidation();
    }
    const nameValidation = () => {
        if (verifyName) {
            setValidName(true)
        } else if (!verifyName) {
            setValidName(false)
        }
    }
    function handleName(e) {
        setName(e.target.value)
        nameValidation();
    }
    const lastNameValidation = () => {
        if (verifyLastName) {
            setValidLastName(true)
        } else if (!verifyLastName) {
            setValidLastName(false)
        }
    }
    function handleLastName(e) {
        setLastName(e.target.value)
        lastNameValidation();
    }

    useEffect(() => {
        const getAvis = async (num) => {
            await Axios({
                url: 'http://localhost:3000/api/avis/',
                mode: 'cors'
            }).then((result) => {
                let array = result.data.slice(0, count)
                setNbrAvis(result.data.length)
                setAvis(array)
            })
                .catch(err => console.log({ err }))
        };
        getAvis();
    }, [count, majDel])

    useEffect(() => {
        if (verifyMail && verifyName && verifyLastName) {
            setReadySend(true)
        } else {
            setReadySend(false)
        }
    }, [mail, name, lastName])

    function submit(e) {
        e.preventDefault();
        if (readySend === true) {
            const data = {
                "email": mail,
                "name": name,
                "lastName": lastName
            }
            Axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:3000/api/auth/signup",
                mode: 'cors',
                data: data
            })
                .then(res => {
                    setValid(true)
                    setAnim(!anim)
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                })
                .catch(error => {
                    setValid(false)
                    setAnim(!anim)
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                })
        }
    }
    const deleteAvis = (e) => {
        let idAvis = e.target.id
        console.log(idAvis)
        const data = {
            "id": idAvis
        }
        Axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            url: "http://localhost:3000/api/avis/del",
            mode: 'cors',
            data: data
        })
            .then(res => {
                setMajDel(res.data)
                
            })
            .catch(error => {
                console.log(error)
            })
    } 

    return (
        <>
            <div className='header'>
                <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1' />
                <a href='/'><FontAwesomeIcon icon={faPowerOff} className='icoMenu' id='openMenu' /></a>
            </div>
            <div className='group-form_connexion'>
                <div className='connexionForm'>
                    {anim === false ?
                        <>
                            <h2>Créer un utilisateur</h2>
                            <form className='form'>
                                <label className='idForm'>
                                    <input className='inputForm' placeholder='Email' name='id' type="mail" onChange={handleMail}/>
                                    {validMail === false ?
                                        <p>email invalide</p>
                                    :
                                        null
                                    }
                                </label>
                                <label>
                                    <input className='inputForm' placeholder='Nom' name='name' type="name" onChange={handleName}/>
                                    {validName === false ?
                                        <p>Nom invalide</p>
                                    :
                                        null
                                    }
                                </label>
                                <label>
                                    <input className='inputForm' placeholder='Prénom' name='lastName' type="lastName" onChange={handleLastName}/>
                                    {validLastName === false ?
                                        <p>Prénom invalide</p>
                                    :
                                        null
                                    }
                                </label>
                                {readySend === true ?
                                    <button className='send-true' onClick={submit}>Envoyer</button>
                                    :
                                    <button className='send-false' onClick={(e) => { e.preventDefault() }}>Envoyer</button>
                                }
                            </form>
                        </>
                    :
                        <>
                            
                            {valid === true ? 
                                <>
                                    <div className='Ball'>
                                        <FontAwesomeIcon icon={faCheck} className='ico-ball'/>
                                    </div>
                                    <p className='p-ball'>Utilisateur créé avec succés</p>
                                    <p className='p-ball'>Veuillez attendre la redirection automatique</p>
                                </>
                            :
                                <>
                                    <div className='Ball'>
                                        <FontAwesomeIcon icon={faXmark} className='ico-ball'/>
                                    </div>
                                    <p className='p-ball'>Erreur innatendue, veuillez rééssayer</p>
                                    <p className='p-ball'>Veuillez attendre la redirection automatique</p>
                                </>
                            }
                                
                        </>
                    }
                </div>
            </div>
            <section id='Avis' className='avis'>
                <h2 className='subtitle'>Avis clients<span className='nbrAvis'>({nbrAvis})</span></h2>
                {avis.map(item => (
                    <div className='avi' key={item.idAvis}>
                        <div className='fullName'>
                            <div className='agentNameAndNote'>
                                <p>{item.name} {item.lastName}</p>
                                <RatingStar maxScore={5} rating={JSON.parse(item.note)} colors={{ rear: "darkgrey", stroke: "none", mask: "darkgoldenrod" }} id={JSON.stringify(item.idAvis)} />
                            </div>
                        </div>
                        <div className='avis-comment'>
                            <p className='comment'>{item.comment}</p>
                        </div>
                        <div className='avis-date admin'>
                            <button id={item.idAvis} onClick={deleteAvis} >Supprimer</button>
                            <p className='date'>{item.date}</p>
                        </div>
                    </div>
                ))}
                <div className='group-avis-btn'>
                    {count > 3 || count >= nbrAvis ?
                        <button className='avis-btn btn-moins' onClick={() => { setCount(3) }}>Voir moins</button>
                        :
                        null
                    }
                    {count <= 3 || count < nbrAvis ?
                        <button className='avis-btn btn-plus' onClick={() => { setCount(count + 3) }}>Voir Plus</button>
                        :
                        null
                    }
                </div>
            </section>
        </>
    )
}

export default Privilege;