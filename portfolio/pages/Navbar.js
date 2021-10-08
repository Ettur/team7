import * as React from 'react'

const Navbar = (props) => {

    const style = () => {
        if (props.showNav) {
            return 'flex-center navbar-container navbar-container-show'
        } else {
            return 'flex-center navbar-container'
        }
    }

    const handleMenuNavigationClick = (number) => {
        props.setCurrentView(number);
        props.setShowNav(false)
    }

    return <nav>
       <div className={style()}>
           <div className='navbar-container-middle'>
                <ul>
                    <a href='#home'>
                        <li style={{borderBottom: 'none', borderTopRightRadius:'3px', borderTopLeftRadius:'3px'}} onClick={() => handleMenuNavigationClick(0)}>
                            HOME
                        </li>
                    </a>

                    <a href='#project'>
                        <li style={{borderBottom: 'none'}} onClick={() => handleMenuNavigationClick(1)}>
                            PROJECT
                        </li>
                    </a>

                    <a href='#team'>
                        <li style={{borderBottom: 'none'}} onClick={() => handleMenuNavigationClick(2)}>
                            TEAM
                        </li>
                    </a>

                    <a href='#blog'>
                        <li style={{borderBottomRightRadius:'3px', borderBottomLeftRadius:'3px'}} onClick={() => handleMenuNavigationClick(3)}>
                            NEWS
                        </li>
                    </a>
                </ul>
                <div className='navbar-close' onClick={() => {props.setShowNav(false)}}>
                ×
                </div>
           </div>
        </div>
    </nav>
}

export default Navbar