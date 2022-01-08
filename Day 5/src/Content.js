import React from 'react'
import { useState } from 'react';
const Content = () => {
    const [name,setName]=useState('Utplakshi');
    const [count, setCount]=useState(0);
    const handleChangeName = () =>{
        const names=['Utplakshi','Rob','Sakshi','Radha'];
        const int= Math.floor(Math.random()*4);
        setName(names[int]);
     }
     const handleClick = () =>{
         setCount(count+1);
         console.log(count);
     }
     const handleClick1 = (name) =>{
        console.log(count);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!!           
            </p>
            <button onClick={handleChangeName}>Change Name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={handleClick1}>Click it</button>
        </main>
    )
}

export default Content
