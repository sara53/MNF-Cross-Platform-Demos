import React, { useEffect, useState } from 'react'

export default function Login( { logout } ) {


    useEffect( () => {
        console.log( "Effect at Login Component" )

        //clean up function
        return () => {

            console.log( "Cleanup function" )
        }
    }, [] )
    return (
        <>

            <div className='alert alert-dark p-5 mt-4' >
                <h1>User name : Sara</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt cum quos asperiores placeat, harum labore suscipit autem mollitia. Eveniet tempore eaque distinctio maiores repellat officia dicta consequuntur molestiae iure!</p>
                <button onClick={logout} className='btn btn-danger'>logout</button>
            </div>
        </>
    )
}
