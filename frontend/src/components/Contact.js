import React, { useEffect ,useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Contact() {

  let date = new Date();
  date.setDate((date.getDate() + 7));
  let reform = new Date(date)

  const [dateStart, setDateStart] = useState(reform);
  const [valueStart, setValueStart] = useState("");

  console.log(valueStart)

  return (
    <>
      <h2 className='subtitle'>Réservation</h2>
      <p className='textSubtitle'>Envoyez nous votre demande, nous y repondrons dans les plus brefs delais</p>
      <div className='contentForm'>
        <form>
          <label>
            nom :
            <input name='name' type="text" />
          </label>
          <label>
            Prénom :
            <input name='firstName' type="text" />
          </label>
          <label>
            email :
            <input name='email' type="text" />
          </label>
          <label>
            nombre de personnes :
            <select>
              <option>1</option><option>2</option><option>3</option>4<option>5</option><option>6</option><option>7</option>
              <option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
            </select>
          </label>
          <label>
            nombre d'enfants :
            <select>
              <option>1</option><option>2</option><option>3</option>4<option>5</option><option>6</option><option>7</option>
              <option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
            </select>
          </label>
          <label>
            nombre d'adultes :
            <select>
              <option>1</option><option>2</option><option>3</option>4<option>5</option><option>6</option><option>7</option>
              <option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
            </select>
          </label>
          <p>Choisissez les dates que vous souhaitez reserver.</p>
          <Calendar selectRange={true} minDate={dateStart} onChange={setValueStart} value={valueStart} />
          <p>Du {`${valueStart[0].toLocaleDateString()}`}</p>
          <p>Au {`${valueStart[1].toLocaleDateString()}`}</p>
          <label>
            message :
            <textarea />
          </label>
        </form>
      </div>
    </>
  );
}

export default Contact;