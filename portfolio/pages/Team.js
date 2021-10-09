import * as React from 'react'
import Header from './Header'
import MemberCard from './MemberCard'

const Team = () => {
    return <div className='team-container' id='team'>
        <Header headline='TEAM' info='AVENGERS ASSEMBLE'/>
        <div className='cards-container'>
            <div className='card-row'>
                <MemberCard header='MOONA' name='MOONA TAAVITSAINEN' role='Team leader' picture='brain.svg' linked='url' />
            </div>
            <div className='card-row'>

            </div>
        </div>
    </div>
}

export default Team