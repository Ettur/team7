import * as React from 'react'

const MemberCard = (props) => {
    return  <div className='card'>
        <div className ='face1'>
            <div className='imgbox'>
                <img src={props.picture}/>
                <h3>{props.header}</h3>
            </div>
        </div>
        <div className='face2'>
            <div className='member-content'>
                <span>{props.role}</span>
                <a href='#'>LINKED IN</a>
            </div>
        </div>
    </div>
}

export default MemberCard