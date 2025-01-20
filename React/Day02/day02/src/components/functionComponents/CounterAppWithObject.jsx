import React, { useState } from 'react'

export const CounterAppWithObject = () => {




    const [ state, setState ] = useState( {
        count: 0,
        title: "Counter App"
    } )

    const increase = () => {
        setState( {
            ...state,
            count: state.count + 1
        } )

    }
    const decrease = () => {
        setState( {
            ...state,
            count: state.count - 1
        } )

    }
    const changeTitle = () => {
        setState( {
            ...state,
            title: "New Title"
        } )
    }
    return (

        <div className='container'>

            < div className='alert alert-info p-5' >
                {console.log( "1-Render Method" )}
                <h1 className='mb-5'>{state.title}</h1>
                <button className='btn btn-success mx-3' onClick={increase}>Increase</button>
                <span className='fw-bold fs-5'>{state.count}</span>
                <button className='btn btn-danger mx-3' onClick={decrease}>decrease</button>
                <button className='btn btn-dark mx-3' onClick={changeTitle}>Change Title</button>
            </ div>

            {( state.count < 0 ) && <div className='alert alert-danger'>
                Count Value is less than zero
            </div>}
        </div>
    )
}




