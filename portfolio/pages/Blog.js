import * as React from 'react'
import Header from './Header'
import { useWindowSize } from '../util/functions'

const Blog = () => {

    const size = useWindowSize()
    const containerWidth = 95 - (size.width / 30) - 5
    const marginLeft = () => {
        const calculated = size.width / 100
        if (size.width > 1000) {
            return 0
        } else {
            return calculated
        }
    }

    return <div className='blog-container' id='blog'>
        <Header headline='NEWS' info='LATEST UPDATES'/>
        <div className='latest-news' style={{marginLeft : marginLeft() + '%'}}>
            <div className='latest-news-text' style={{ width: containerWidth + '%'}}>
                <span>6.10.2021</span>
                <h2>ENGINE REVVING!</h2>
                <p>Team has been assembled, project start imminent!</p>
            </div>
            <img src='together.jpg' style={{ width: containerWidth + '%'}}/>
        </div>
    </div>
}
export default Blog