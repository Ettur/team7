import React from "react";
import Navbar from './Navbar'

const MenuButton = (props) => {

const handleClick = () => {
    props.setShowNav(!props.showNav)
}

return <div className='menu-button-container' onClick={ () => handleClick()}>
    <img src='menu.svg'/>
    <div style={{position:'relative'}}>
        <Navbar showNav={props.showNav} setShowNav={props.setShowNav} currentView={props.currentView} setCurrentView={props.setCurrentView} />
    </div>
</div>
}

export default MenuButton