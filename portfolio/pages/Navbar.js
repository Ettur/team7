import * as React from 'react'

const Navbar = (props) => {

    const style = () => {
        if (props.showNav) {
            return 'flex-center navbar-container navbar-container-row'
        }
    }

    return <nav>
       <div className='flex-center navbar-container'>
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    PROJECTS
                </li>
                <li>
                    GAMEDEV
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar