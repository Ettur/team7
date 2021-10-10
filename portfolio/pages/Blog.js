import * as React from 'react'
import Header from './Header'

const Blog = () => {
    return <div className='blog-container' id='blog'>
        <Header headline='NEWS' info='LATEST UPDATES'/>
        <div className='latest-news'>
            <div className='latest-news-text'>
                <h2>ENGINES READY!</h2>
                <span>6.10.2021</span>
                <p>Team has been assembled, Prepearing for project start!</p>
            </div>
            <img src='together.jpg'/>
        </div>
    </div>
}
export default Blog