import React from "react";

const MadeWith = (props) => {
    return <div className='madewith-container' style={{top: props.top}}>
        <img src={props.path} style={{pointerEvents: props.cursor ? 'none' : 'all'}}/>
    </div>
}

export default MadeWith