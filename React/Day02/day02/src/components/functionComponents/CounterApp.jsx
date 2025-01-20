import React, { useState } from 'react'

export const CounterApp = () => {




    const [ count, setCount ] = useState( 0 );
    const [ title, setTitle ] = useState( 'Counter APP' );

    const increase = () => {

        setCount( count + 1 )
    }
    const decrease = () => {
        setCount( count - 1 )
    }
    const changeTitle = () => {
        setTitle( "New Title" )
    }
    return (

        < div className='alert alert-info p-5' >
            {console.log( "1-Render Method" )}
            <h1 className='mb-5'>{title}</h1>
            <button className='btn btn-success mx-3' onClick={increase}>Increase</button>
            <span className='fw-bold fs-5'>{count}</span>
            <button className='btn btn-danger mx-3' onClick={decrease}>decrease</button>
            <button className='btn btn-dark mx-3' onClick={changeTitle}>Change Title</button>
        </ div>
    )
}




