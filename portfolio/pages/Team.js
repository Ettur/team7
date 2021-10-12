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
                <MemberCard header='MOONA' role='Team leader' linked='https://www.linkedin.com/in/moona-taavitsainen-982610203/' size={size} />
                <MemberCard header='ILDIKO' role='Developer' linked='https://www.linkedin.com/in/ildiko-makra/' size={size} />
                <MemberCard header='MARTIN' role='Developer' linked='https://www.linkedin.com/in/martin-aedma-7380aa1a7/' size={size} />
            </div>
            <div className='card-row'>
                <MemberCard header='MARIA' role='Developer' linked='#' size={size} />
                <MemberCard header='AKU' role='Developer' linked='#' size={size} />
                <MemberCard header='TEEMU' role='Developer' linked='https://www.linkedin.com/in/teemu-lindstr%C3%B6m-02811192/' size={size} />
            </div>
        </div>
    </div>
}

export default Team