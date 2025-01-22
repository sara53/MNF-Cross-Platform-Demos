import React, { useEffect, useState } from 'react'
import { useFetch } from '../CustomHooks/useFetch'

export function User() {

    const { data: users, isLoading, errors } = useFetch( "https://jsonplaceholder.typicode.com/users" )
    return (
        <div className='p-4'>
            <div className="container">
                <p className='text-muted fw-bold lead fs-1'> Users List</p>
                <div className='row'>
                    {isLoading && <div className='text-danger'>
                        <h2>Loading</h2>
                    </div>}
                    {errors && <div className='alert alert-danger mt-5'>

                        <h2>Errors occurs : {errors.message}</h2>
                    </div>}
                    {!isLoading && !errors && users.map( ( user ) => (
                        <div className="col-sm-6 g-4">
                            <div className='border'>
                                <h4 className='bg-dark p-2 text-light'>Username :  {user.name}</h4>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi accusamus commodi sit, quasi qui similique repellendus ut reiciendis architecto! Odio tempora dignissimos soluta consequuntur hic debitis, ducimus nam aperiam!</p>
                                <h6 className='p-3'>Email : {user.email} </h6>
                            </div>
                        </div>


                    ) )}

                </div>
            </div>
        </div>
    )
}
