import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RatingStar } from "rating-star";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Avis() {

    const [avis, setAvis] = useState([]);
    const [count, setCount] = useState(3);
    const [nbrAvis, setNbrAvis] = useState(0);

    useEffect(() => {
        const getAvis = async (num) => {
            await axios({
                url :'http://localhost:3000/api/avis/', 
                mode: 'cors'
            }).then((result) => {
                let array = result.data.slice(0, count)
                setNbrAvis(result.data.length)
                setAvis(array)
            })
            .catch(err => console.log ({err}))
        };
        getAvis();
    }, [count])
    console.log(avis)

    return (
        <>
            <section id='Avis' className='avis'>
                <h2 className='subtitle'>Avis clients <span className='nbrAvis'>({nbrAvis})</span></h2>
                {avis.map(item => (
                    <div className='avi' key={item.idAvis}>
                        <div className='fullName'>
                            <div className='agentNameAndNote'>
                                <p>{item.name} {item.lastName}</p>
                                <RatingStar maxScore={5} rating={JSON.parse(item.note)} colors={{ rear: "darkgrey", stroke: "none", mask: "darkgoldenrod"}} id={JSON.stringify(item.idAvis)}/>
                            </div>
                        </div>
                        <div className='avis-comment'>
                            <p className='comment'>{item.comment}</p>
                        </div>
                        <div className='avis-date'>
                            <p className='date'>{item.date}</p>
                        </div>
                    </div>
                ))}
                <div className='group-avis-btn'>
                    {count <= 3 || count < nbrAvis ?
                        <button className='avis-btn btn-plus' onClick={()=>{setCount(count+3)}}>Voir Plus</button>
                    :
                        null
                    }
                    {count > 3 || count >= nbrAvis ?
                        <button className='avis-btn btn-moins' onClick={()=>{setCount(3)}}>Voir moins</button>
                    :
                        null
                    }
                </div>
            </section>
        </>
    )
}

export default Avis;