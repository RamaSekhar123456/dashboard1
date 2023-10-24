import React, { useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import  log  from '../images/log1.png'

function TopContainer() {

    useEffect(() => {
        const menuTarget = document.getElementById("menuChevron");
        const menuContainer = document.getElementById("menuContainer");

        menuTarget.addEventListener('mouseenter', () => {
            menuTarget.style.transform = "rotate(180deg)";
            menuContainer.style.transform = "translate(0px)"
        });

       menuContainer.addEventListener('mouseleave', () => {
        menuTarget.style.transform = "rotate(0deg)";
            menuContainer.style.transform = "translate(300px)"
        });


    },[])
  return (
    <div className='topContainer'>
        <div className='inputBox'>
            <input type='text' placeholder='Search item, collections'/>
            <i>
                <BiSearchAlt/>
            </i>
        </div>
        <div className='profileContainer'>
            <i className='profileIcon'>
                <FaBell/>
            </i>
            <div className='profileImage'>
                <img src={log} alt='' />
            </div>
          
            <p className='profileName'>olivia Christine</p>
            <i className='menuChevron' id='menuChevron'>
                <FaChevronDown/>
            </i>
            <div className='menuContainer' id='menuContainer'>
                <ul>
                    <li>Web Desgin</li>
                    <li>UI / UX</li>
                    <li>From Desgin</li>
                    <li>UI Desgin</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopContainer