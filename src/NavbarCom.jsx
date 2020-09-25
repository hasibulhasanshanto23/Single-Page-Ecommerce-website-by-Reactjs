import React from 'react'
import logo from './logo.png'
import cart from './images/cart.png'
import menu from './images/menu.png'
import image1 from './images/image1.png'
import NavbarComData from './NavbarComData'
import ButtonCom from './ButtonCom'
import H1andPCom from './H1andPCom'


const NavbarCom=()=>{
    return(<>
       <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} width="125px"/>
                </div>
                <nav>
                    <ul id="MenuItems" >
                      {NavbarComData.map((val,index)=>{
                          return( <li key={index}><a href={val.url}>{val.title}</a></li>)
                      })}  
                    </ul>
                </nav>
                 <img src={cart} width="30px" height="30px"/>
                 <img src={menu} className="menu-icon" onClick="menutoggle()"/>
            </div>
            <div className="row">
                <div className="col-2">
                   <H1andPCom h1='Give Your Workout A  New Style!' para="Success isn't always about greatness.Its about consistency.Consistent  hard work gain
                   success.Greatness will come."/>
                   <ButtonCom/>
                </div>
                <div className="col-2">
                    <img src={image1}/>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default NavbarCom