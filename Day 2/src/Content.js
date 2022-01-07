import React from 'react'

const Content = () => {
    const handleChangeName = () =>{
        const name=['Utplakshi','Rob','Sakshi','Radha'];
        const int= Math.floor(Math.random()*4);
        return name[int];
     }
    return (
        <main>
            <p>
                Hello {handleChangeName()}!!           
            </p>
        </main>
    )
}

export default Content
