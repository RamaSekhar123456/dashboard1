import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({imgsrc, title, hearts}) {
  return (
    <div className='card_main'>
       <img src={imgsrc}  alt=''/>


       <div className='card_main_name'>
        <h2>{title}</h2>

        <div className='card_icon'>
            <i>
                <BsFillHeartFill/> <span>{hearts}</span>{' '}
            </i>
        </div>
       </div>
        <div className='stats'>
            <p>
                Current Bid <span>1.2 ETH</span>
            </p>
            <p>
                Ending In <span>1d:12h:10m</span>
            </p>
        </div>
        <div className='card-button'>
            <a href='#' className='button1 btn'>Place a Bid</a>
            <a href='#' className='button2 btn'>History</a>
        </div>
    </div>
  )
}

export default CardMain