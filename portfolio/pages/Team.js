import * as React from 'react'
import Header from './Header'
import MemberCard from './MemberCard'
import { useWindowSize } from '../util/functions'

const Team = () => {

    const size = useWindowSize()

    const marginTop = () => {
       const current =  30 - size.width / 40 + size.width / 230
       if (current > 0) {
           return current
       } else {
           return 0
       }
    }



    return <div className='team-container' id='team'>
        <Header headline='TEAM' info='AVENGERS ASSEMBLE'/>
        <div className='cards-container' style={{marginTop: marginTop() + '%'}}>
            <div className='card-row'>
                <MemberCard header='MOONA' name='MOONA TAAVITSAINEN' role='Team leader' picture='brain.svg' linked='url' />
                <MemberCard header='ILDIKO' name='ILDIKO MAKRA' role='Developer' picture='tools.svg' linked='url' />
                <MemberCard header='MARTIN' name='MARTIN AEDMA' role='Team leader' picture='tools.svg' linked='url' />
            </div>
            <div className='card-row'>

            </div>
        </div>
    </div>
}

export default Team