import React from "react";

const MadeWith = (props) => {
    return <div className='madewith-container' style={{top: props.top}}>
        <img src={props.path}/>
    </div>
}

export default MadeWith