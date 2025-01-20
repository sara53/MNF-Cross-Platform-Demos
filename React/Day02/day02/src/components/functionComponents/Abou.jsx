import React from 'react'

export function About( { trackName, children } ) {



    const clickHandler = ( e, name ) => {
        console.log( "btn Clicked", name )
        console.log( e )
    }

    return (
        <div className='bg-dark text-light p-4 mb-3'>
            <div className="container">
                <h2 className='text-center text-warning'>About Us : {trackName}</h2>
                <p className='bg-light rounded my-5 text-dark p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem nihil consectetur optio doloremque aliquam nulla quibusdam magni maxime dolorum?</p>
                {children}
                <button className='btn btn-danger' onClick={( e ) => clickHandler( e, "Ali" )}>Show More !</button>
            </div>

        </div>
    )
}
