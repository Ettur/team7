import React from "react";
import Navbar from './Navbar'

const MenuButton = (props) => {

const handleClick = () => {
    props.setShowNav(!props.showNav)
}

return <div className='menu-button-container'>
    <img src='menu.svg' style={{pointerEvents: 'all'}} onClick={ () => handleClick()}/>
    <div style={{position:'relative'}}>
        <Navbar showNav={props.showNav} setShowNav={props.setShowNav} currentView={props.currentView} setCurrentView={props.setCurrentView} />
    </div>
</div>
}

export default MenuButton