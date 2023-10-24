import React from 'react'
import './MainContainer.css'
import banner from "../images/1.jpg"
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
import card4 from "../images/card4.jpg"
import card5 from "../images/card5.jpg"
import card6 from "../images/card6.jpg"
import CardMain from "../components/CardMain"
import MainRightTop from "../components/MainRightTop"
import MainRightBottom from '../components/MainRightBottom'

function MainContainer() {
  return (
    <div className='mainContainer'>
        <div className='left'>
            <div className='banner' style={{background: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
                <div className='textContainer'>
                    <h1>Round Hall</h1>
                    <h2>1.5 ETH</h2>
                    <p>Uploaded by Alexander Vernof</p>
                    <div className='bid'>
                        <a href='#' className='button1'>
                            Bid Now
                        </a>
                        <p>
                            Ending In <span>2d:15h:20m</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='cards'>
                <div className='filters'>
                    <div className='popular'>
                        <h2>Feed</h2>
                        <a href='#' className='button2'>
                            Popular
                        </a>
                    </div>
                    <div className='filter_buttons'>
                        <a href='#' className='button1'>All</a>
                        <a href='#' className='button2'>Illustration</a>
                        <a href='#' className='button2'>Art</a>
                        <a href='#' className='button2'>Games</a>
                    </div>
                </div>
                <main>
                   <CardMain  imgsrc={card1} title={'Cubic Thunder'} hearts={'65'}/>
                   <CardMain  imgsrc={card2} title={'Pokemon Ball'} hearts={'45'}/>
                   <CardMain  imgsrc={card3} title={'Pyramid God'} hearts={'55'}/>
                   <CardMain  imgsrc={card4} title={'Stunning Cube'} hearts={'75'}/>
                   <CardMain  imgsrc={card5} title={'Star Crystal'} hearts={'35'}/>
                   <CardMain  imgsrc={card6} title={'Crystal Bird'} hearts={'85'}/>
                </main>
            </div>
        </div>
        <div className='right'>
            <MainRightTop/>
            <MainRightBottom/>
        </div>

    </div>
  )
}

export default MainContainer