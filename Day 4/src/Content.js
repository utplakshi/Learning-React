import React from 'react'

const Content = () => {
    const handleChangeName = () =>{
        const names=['Utplakshi','Rob','Sakshi','Radha'];
        const int= Math.floor(Math.random()*4);
        return names[int];
     }
     const handleClick = () =>{
         console.log('You clicked it!!!');
     }
     const handleClick1 = (name) =>{
        console.log(`${name} was clicked`);
    }
     const handleClick2 = (e) =>{
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleChangeName()}!!           
            </p>
            <button onClick={handleClick}>Button 1</button>
            <button onClick={()=>handleClick1('Utplakshi')}>Button 2</button>
            <button onClick={(e)=>handleClick2(e)}>Button 3</button>
        </main>
    )
}

export default Content
