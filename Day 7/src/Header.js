import React from 'react'

const Header = (props) => {
    const HeaderStyle= {
        backgroundColor: 'royalblue',
        color: '#fff'
    };
    return (
       <header style={HeaderStyle}>
           <h1>{props.title}</h1>
       </header>
    )
}

Header.defaultProps ={
    title:"Default Title"
}

export default Header
