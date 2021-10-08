import * as React from 'react'

const Navbar = (props) => {

    const style = () => {
        if (props.showNav) {
            return 'flex-center navbar-container navbar-container-show'
        } else {
            return 'flex-center navbar-container'
        }
    }

    return <nav>
       <div className={style()}>
            <ul>
                <li style={{borderBottom: 'none', borderTopRightRadius:'3px', borderTopLeftRadius:'3px'}}>
                    HOME
                </li>
                <li style={{borderBottom: 'none'}}>
                    PROJECT
                </li>
                <li style={{borderBottom: 'none'}}>
                    TEAM
                </li>
                <li style={{borderBottomRightRadius:'3px', borderBottomLeftRadius:'3px'}}>
                    BLOG
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar