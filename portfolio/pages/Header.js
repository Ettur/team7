import * as React from 'react'

const Header = (props) => {

return <div className='header-container'>
<h1>{props.headline}</h1>
<span>{props.info}</span>
</div>
}

export default Header