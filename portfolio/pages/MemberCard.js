import * as React from 'react'

const MemberCard = (props) => {
    return  <div className='card'>
        <div className ='face1'>
            <div className='imgbox'>
            <a href={props.linked} target='_blank' className='linkedin'>
                <h3>{props.header}</h3>
                </a>
            </div>
        </div>
        <div className='face2'>
            <div className='member-content'>
            <a href={props.linked} target='_blank' className='linkedin'>
                <span>{props.role}</span>
                    <img src='linked.svg'/>
                </a>
            </div>
        </div>
    </div>
}

export default MemberCard