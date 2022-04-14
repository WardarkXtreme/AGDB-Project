import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Gite() {
    
    const [gite, setGite] = useState([]);
    const [cache, setCache] = useState();

    const toggleCache = () => {
        setCache(!cache)
    };
    useEffect(() => {

        const getGite = async () => {
            await axios({
                url :'http://localhost:3000/api/gite/', 
                mode: 'cors'
            }).then((result) => {
                setGite(result.data)
            })
            .catch(err => console.log ({err}))
        };
        getGite();
    }, [])
    console.log(gite)
    
    return (
        <>
           <div className='groupeChambre'>
                {gite.map(item => (
                    <div className='chambre' key={item.id} id={item.id}>
                        <h2 className='subtitle'>{item.title}</h2>
                        <p className='textSubtitle'>{item.headtext}</p>
                        <Carousel>
                            <div>
                                <img src={item.imageUrl[0]} alt={item.title}/>
                            </div>
                            <div>
                                <img src={item.imageUrl[1]} alt={item.title}/>
                            </div>
                            <div>
                                <img src={item.imageUrl[2]} alt={item.title}/>
                            </div>
                        </Carousel>
                        <div className='informationGite'>
                            <div className={`displayNone ${cache ? "displayInfo" + item.id : "displayNone"}`}>
                                <h3>{item.subtitle1}</h3>
                                <ul>
                                   {item.li1.map((li) =>(
                                       <li className='liGite' key={li}>{li}</li>
                                   ))}
                                </ul> 
                                <h3>{item.subtitle2}</h3>
                                <ul>
                                   {item.li2.map((li) =>(
                                       <li className='liGite' key={li}>{li}</li>
                                   ))}
                                </ul>                             
                            </div>
                            {!cache ? 
                                <button className='btnInfo' onClick={toggleCache}>Plus d'informations <FontAwesomeIcon icon={faAngleDown} className='icoArrowD'/></button>
                                :
                                <button className='btnInfo' onClick={toggleCache}>Moins d'informations <FontAwesomeIcon icon={faAngleUp} className='icoArrowU'/></button>
                            }
                        </div>
                    </div> 
                ))}
            </div> 
        </>
    )
};

export default Gite;