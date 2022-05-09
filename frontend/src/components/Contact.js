import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Contact() {

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
  console.log(readySend);
  const regExLastName = /^(([a-zA-Z-]{3,10}))$/;
  const regExFirstName = /^(([a-zA-Z-]{3,10}))$/;
  const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
  const regExMessage = /^(([a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{40,150}))$/;

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
    if(verifyLastName) {
      console.log("valide")
    }else if (!verifyLastName) {
      console.log("non valide last name")
    }
  }
  function handleLastName(e){
    setlastName(e.target.value)
    lastNameValidation();
  }

  const firstNameValidation = () => {
    if(verifyFirstName) {
      console.log("valide")
    }else if (!verifyFirstName) {
      console.log("non valide first name")
    }
  }
  function handleFirstName(e){
    setfirstName(e.target.value)
    firstNameValidation();
  }

  const mailValidation = () => {
    if(verifyMail) {
      console.log("valide")
    }else if (!verifyMail) {
      console.log("non valide mail")
    }
  }
  function handleMail(e){
    setMail(e.target.value)
    mailValidation();
  }
  
  const messageValidation = () => {
    if(verifyMessage) {
      console.log("valide")
    }else if (!verifyMessage) {
      console.log("non valide message")
    }
  }
  function handleMessage(e){
    setMessage(e.target.value)
    messageValidation();
  }


  useEffect(()=> {

    let getValue = JSON.parse(valueRangeAdult) + JSON.parse(valueRangeChild);
    let people = JSON.parse(valueRangePeople)
    if(getValue === people){
      setValueError(false)
    }else{
      setValueError(true)
    }
   
    console.log(getValue)
    console.log(valueRangePeople)
  }, [valueRangeAdult, valueRangeChild, valueRangePeople])
 
  useEffect(()=> {
    if(verifyLastName && verifyFirstName && verifyMail && valueError === false && valueStart !== undefined && verifyMessage) {
      setReadySend(true)
    }else{
      setReadySend(false)
    }

  }, [lastName, firstName, mail, valueError, valueStart, message])

  function submit(e) {

    e.preventDefault();
    if(readySend === true) {
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
          url: "http://localhost:3000/api/contact/",
          mode: 'cors',
          data: data
      })
      .then(res=>{
          console.log(res)
      })
      .catch(error=>{
          console.log(error)
      })
    }else{
      console.log('rien')
    }
}
  return (
    <section id='Reservation' className='group-form_contact'>
      <h2 className='subtitle'>Réservation</h2>
      <p className='textSubtitle'>Envoyez nous votre demande, nous y repondrons dans les plus brefs delais</p>
      <div className='contentForm'>
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
              <p className='pForm'>{valueRangePeople}</p>
              <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='2' max='14' defaultValue={valueRangePeople} onChange={(e) => {setValueRangePeople(e.target.value)}} />
            </div>
          </label>
          <label className='nbrForm'>
            <p className='pForm'>Nombre d'adultes :</p>
            <div className='rangeGroup'>
              <p className='pForm'>{valueRangeAdult}</p>
              <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='2' max='14' defaultValue={valueRangeAdult} onChange={(e) =>{setValueRangeAdult(e.target.value)}} />
            </div>
          </label>
          <label className='nbrForm'>
            <p className='pForm'>Nombre d'enfants :</p>
            <div className='rangeGroup'>
              <p className='pForm'>{valueRangeChild}</p>
              <input className={`rangeFormValid ${valueError ? "rangeFormNotValid" : ""}`} type='range' min='0' max='14' defaultValue={valueRangeChild} onChange={(e) => {setValueRangeChild(e.target.value)}} />
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
              <p>Du {`${valueStart[0].toLocaleDateString()}`}</p>
              <p>Au {`${valueStart[1].toLocaleDateString()}`}</p> 
            </div>
            :
            null
          }
          <label className='messageForm'>
            <p className='pForm'>Message :</p>
            <textarea className='messageFormIn' onChange={handleMessage}/>
            {message.length <= 39 ?
              <p className='rangeError'>{message.length}/40 caracteres minimum attendus</p>
            :
              <p className='valid'>Super, votre message a l'air complet !</p>
            }
          </label>
          {readySend === true ?
            <button className='send-true' onClick={submit}>envoyer</button>
          :
            <button className='send-false' onClick={(e) =>{e.preventDefault()}}>envoyer</button>
          }
        </form>
      </div>
    </section>
  );
}

export default Contact;