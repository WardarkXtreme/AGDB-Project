import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import logo from '../img/logo-gitedubois.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import { RatingStar } from "rating-star";

function AddAvis() {

  const [readySend, setReadySend] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [isSend, setIsSend] = useState(false);

  const regExMessage = /^(([a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{40,150}))$/;

  const verifyMessage = regExMessage.test(message);
  const name = sessionStorage.getItem('name');
  const lastName = sessionStorage.getItem('lastName');

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const messageValidation = () => {
    if (verifyMessage) {
      console.log("valide")
    } else if (!verifyMessage) {
      console.log("non valide message")
    }
  }
  function handleMessage(e) {
    setMessage(e.target.value)
    messageValidation();
  }

  useEffect(() => {
    if (rating !== 0 && verifyMessage) {
      setReadySend(true)
    }
  }, [rating, message])

  function submit(e) {

    e.preventDefault();
    const jwt = sessionStorage.getItem('token')
    if (readySend === true) {
      const data = {
        "name": name,
        "lastName": lastName,
        "comment": message,
        "note": rating
      }
      Axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwt
        },
        url: "https://www.augitedubois.com/api/avis/add",
        mode: 'cors',
        data: data
      })
        .then(res => {
          setIsSend(true);
          setTimeout(() => {
            window.location.href = '/'
          }, 4000);
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      console.log('rien')
    }
  }

  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo Gite du bois' height='172' width='262' className='logo_1' />
        <a href='/'><FontAwesomeIcon icon={faHome} className='icoMenu' id='openMenu' onClick={() => { sessionStorage.clear() }} /></a>
      </div>
      <div className='group-form_avis'>
        {isSend === false ?
          <form className='avisForm'>
            <div className='NameAndNote'>
              <p className='fullName'>{name} {lastName}</p>
              <RatingStar
                clickable
                maxScore={5}
                colors={{ rear: "darkgrey", stroke: "none", mask: "darkgoldenrod" }}
                onRatingChange={ratingChanged}
                rating={rating}
                id="stars"
              />
            </div>
            <textarea className="avis-commentForm" placeholder="votre commentaire ici" onChange={handleMessage}></textarea>
            {message.length <= 39 ?
              <p className='rangeError'>{message.length}/40 caracteres minimum attendus</p>
              :
              null
            }
            {readySend === true ?
              <button className='send-true' onClick={submit}>Publier</button>
              :
              <button className='send-false' onClick={(e) => { e.preventDefault() }}>Publier</button>
            }
          </form>
          :
          <form className='avisForm'>
            <div className='Ball'>
                <FontAwesomeIcon icon={faCheck} className='ico-ball' />
            </div>
            <p className='p-ball'>Votre avis est envoyé</p>
            <p className='p-ball'>Veuillez attendre la redirection automatique, Au Gîte Du Bois vous remercie !</p>
          </form>
          }
      </div>
    </>
  )
};

export default AddAvis;