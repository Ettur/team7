import React from "react";

const MenuButton = (props) => {

const handleClick = () => {
    props.setShowNav(!props.showNav)
}

return <div className='menu-button-container' onClick={ () => handleClick()}>
    <img src='menu.svg'/>
    {console.log(props.showNav)}
</div>
}

export default MenuButton