import * as React from 'react'

const MemberCard = (props) => {
    return  <div className='card'>
        <div className ='face1'>
            <div className='imgbox'>
                <img src='brain.svg'/>
                <h3>{props.header}</h3>
            </div>
        </div>
        <div className='face2'>
            <div className='content'>
                <span>{props.name}</span>
                <span>{props.role}</span>
                <a href='#'>LINKED IN</a>
            </div>
        </div>
    </div>
}

export default MemberCard