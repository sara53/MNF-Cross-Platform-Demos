import React, { useEffect, useState } from 'react'

export function Counter() {
    const [ count, setCount ] = useState( 0 )
    const [ title, setTitle ] = useState( 'Counter App' )

    /**
     * useEffect
     * ----- componentDidMount --- ComponentDidUpdate
     * ---- [] -- componentDidMount
     * --- [stateName] -- componentDidMount and componentDidUpdate[stateName]
     * --- [stateName1,stateName2] -- componentDidMount and componentDidUpdate[stateName1,stateName2]
     */

    // useEffect( () => {
    //     // connect to API
    //     console.log( "Only One" )
    // }, [] )
    useEffect( () => {


        console.log( "After initial and after any aupdate" )
        // Send Count State After update to navbar
    }, [] )

    return (
        <div className='bg-dark p-5 text-light'>
            {console.log( "render Method" )}
            <div className="container">
                <h1 className='mb-4'>{title}</h1>
                <button className='btn btn-outline-success' onClick={() => setCount( count + 1 )}>Increase</button>
                <span className='fw-bold fs-5  mx-4'>{count}</span>
                <button className='btn btn-outline-danger' onClick={() => setCount( count - 1 )}>decrease</button>
                <button className='btn btn-outline-warning mx-3' onClick={() => setTitle( 'Front End Track' )}>Change Title</button>
            </div>
        </div>
    )
}
