import * as React from 'react'
import Header from './Header'

const Team = () => {
    return <div className='team-container' id='team'>
        <Header headline='TEAM' info='AVENGERS ASSEMBLE'/>
        <div className='cards-container'>
            <div className='card-row'>
                <div className='card'>
                    <div className ='face1'>
                        <div className='imgbox'>
                            <img src='brain.svg'/>
                            <h3>MOONA</h3>
                        </div>
                    </div>
                    <div className='face2'>
                        <div className='content'>
                            <span>Moona Taavitsainen</span>
                            <span>Team Leader</span>
                            <a href='#'>LINKED IN</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='card-row'>

            </div>
        </div>
    </div>
}

export default Team