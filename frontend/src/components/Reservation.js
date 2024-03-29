import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Valid from './Valid';
import NoValid from './NoValid';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Reservation() {

  const [displayForm, setDisplayForm] = useState(false);
  const [anim, setAnim] = useState(false);
  const [valid, setValid] = useState();
  const [dateStart, setDateStart] = useState();
  const [valueStart, setValueStart] = useState([]);
  const [valueRangePeople, setValueRangePeople] = useState(2);
  const [valueRangeAdult, setValueRangeAdult] = useState(2);
  const [valueRangeChild, setValueRangeChild] = useState(0);
  const [valueError, setValueError] = useState(false);
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [readySend, setReadySend] = useState(false);
  const regExLastName = /^(([a-zA-Z-]{3,10}))$/;
  const regExFirstName = /^(([a-zA-Z-]{3,10}))$/;
  const regExMail = /^(([a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
  const regExMessage = /^(([a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-']{40,150}))$/;
  const verifyLastName = regExLastName.test(lastName);
  const verifyFirstName = regExFirstName.test(firstName);
  const verifyMail = regExMail.test(mail);
  const verifyMessage = regExMessage.test(message);

  useEffect(() => {
    let date = new Date();
    date.setDate((date.getDate() + 7));
    setDateStart(new Date(date));
  }, [])

  const lastNameValidation = () => {
    if (verifyLastName) {
      console.log("valide")
    } else if (!verifyLastName) {
      console.log("non valide last name")
    }
  }
  function handleLastName(e) {
    setlastName(e.target.value)
    lastNameValidation();
  }

  const firstNameValidation = () => {
    if (verifyFirstName) {
      console.log("valide")
    } else if (!verifyFirstName) {
      console.log("non valide first name")
    }
  }
  function handleFirstName(e) {
    setfirstName(e.target.value)
    firstNameValidation();
  }

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

    let getValue = JSON.parse(valueRangeAdult) + JSON.parse(valueRangeChild);
    let people = JSON.parse(valueRangePeople)
    if (getValue === people) {
      setValueError(false)
    } else {
      setValueError(true)
    }
  }, [valueRangeAdult, valueRangeChild, valueRangePeople])

  const verifyPostMail = () => {
    if (verifyLastName && verifyFirstName && verifyMail && valueError === false && valueStart !== undefined && verifyMessage) {
      setReadySend(true)
    } else {
      setReadySend(false)
    }
  }

  useEffect(() => {
    verifyPostMail();

  }, [lastName, firstName, mail, valueError, valueStart, message])

  function submit(e) {

    e.preventDefault();
    if (readySend === true) {
      const data = {
        "lastName": lastName,
        "firstName": firstName,
        "email": mail,
        "numbersPeople": valueRangePeople,
        "numbersAdult": valueRangeAdult,
        "numbersChild": valueRangeChild,
        "dateStart": valueStart[0].toLocaleDateString(),
        "dateEnd": valueStart[1].toLocaleDateString(),
        "message": message
      }
      Axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: "https://www.augitedubois.com/api/contact/",
        mode: 'cors',
        data: data
      })
        .then(res => {
          setValid(true)
          setAnim(!anim)
          setTimeout(() => {
            document.getElementById('Reservation').scrollIntoView()
          }, 1500);
          setTimeout(() => {
            window.location.reload()
          }, 8000);
        })
        .catch(error => {
          setValid(false)
          setAnim(!anim)
          setTimeout(() => {
            document.getElementById('Reservation').scrollIntoView()
          }, 1500);
          setTimeout(() => {
              window.location.reload()
          }, 8000);
        })
    }
  }
  return (
    <section id='Reservation' className='group-form_contact'>
      <h2 className='subtitle'>Réservation</h2>
      {!displayForm ? 
        <div>
          <p className='textSubtitle'>
            Vous pouvez réserver vos vacances Au Gîte Du Bois en nous contactant 
            via le formulaire de réservation, nous vous répondrons au plus vite.  
          </p>
          <div className='group-reservation-btn'>
            <button className="reservation-btn" onClick={()=> {setDisplayForm(!displayForm)}}>Formulaire</button>
            <p className='textSubtitle'>
              Si vous préférez prendre une réservation en ligne dès maintenant nous vous invitons 
              à vous diriger sur les liens des plateformes ci-dessous.   
            </p>
            <a className="reservation-btn" href='https://www.airbnb.fr/rooms/35708380?federated_search_id=839c3325-cf53-488f-89e2-0eb896a82110&source_impression_id=p3_1652349727_gxwonF%2BsBNi1thHm'>Airbnb</a>
            <a className="reservation-btn" href='https://www.gites-de-france.com/fr/normandie/manche/le-bois-50g660'>Gite de France</a>
          </div>
        </div>
      :
        <> 
          {anim === false ?
            <div className="contentForm">
              <form className='form'>
                <label className='nameForm'>
                  <input className='inputForm' placeholder='Nom' name='name' type="text" onChange={handleLastName} />
                </label>
                <label className='nameForm'>
                  <input className='inputForm' placeholder='Prénom' name='firstName' type="text" onChange={handleFirstName} />
                </label>
                <label className='nameForm'>
                  <input className='inputForm' placeholder='Email' name='email' type="text" onChange={handleMail} />
                </label>
                <label className='nbrForm'>
                  <p className='pForm'>Nombre de personnes :</p>
                  <div className='rangeGroup'>
                    <p className='num'>{valueRangePeople}</p>
                    <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='2' max='14' defaultValue={valueRangePeople} onChange={(e) => { setValueRangePeople(e.target.value) }} />
                  </div>
                </label>
                <label className='nbrForm'>
                  <p className='pForm'>Nombre d'adultes :</p>
                  <div className='rangeGroup'>
                    <p className='num'>{valueRangeAdult}</p>
                    <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='2' max='14' defaultValue={valueRangeAdult} onChange={(e) => { setValueRangeAdult(e.target.value) }} />
                  </div>
                </label>
                <label className='nbrForm'>
                  <p className='pForm'>Nombre d'enfants :</p>
                  <div className='rangeGroup'>
                    <p className='num'>{valueRangeChild}</p>
                    <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='0' max='14' defaultValue={valueRangeChild} onChange={(e) => { setValueRangeChild(e.target.value) }} />
                  </div>
                </label>
                {valueError === true ?
                  <p className='rangeError'>Veuillez indiquer le nombre de personnes total, ensuite indiquez combien d'adultes et combien d'enfants composent votre réservation.</p>
                  :
                  null
                }
                <p className='pForm'>Choisissez les dates que vous souhaitez reserver.</p>
                <Calendar selectRange={true} minDate={dateStart} defaultValue={dateStart} onChange={setValueStart} />
                {valueStart.length > 0 ?
                  <div className="rplDate">
                    <p className='pForm'>Du <span className='num'>{`${valueStart[0].toLocaleDateString()}`}</span></p>
                    <p className='pForm'>Au <span className='num'>{`${valueStart[1].toLocaleDateString()}`}</span></p>
                  </div>
                  :
                  null
                }
                <label className='messageForm'>
                  <p className='pForm'>Message :</p>
                  <textarea className='messageFormIn' onChange={handleMessage} />
                  {message.length <= 39 ?
                    <p className='rangeError'>{message.length}/40 caractères minimums attendus</p>
                    :
                    null
                  }
                </label>
                {readySend === true ?
                  <button className='send-true' onClick={submit}>envoyer</button>
                  :
                  <button className='send-false' onClick={(e) => { e.preventDefault() }}>envoyer</button>
                }
              </form>
            </div>
          :
            <>              
              {valid === true ? 
                <Valid />
              :
                <NoValid />
              }
            </>
          }
        </> 
      }
    </section>
  );
}

export default Reservation;