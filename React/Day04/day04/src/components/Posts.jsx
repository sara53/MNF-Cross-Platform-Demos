import React from 'react'
import { useFetch } from '../CustomHooks/useFetch'

export function Posts() {
    const { data: posts, isLoading, errors } = useFetch( "https://jsonplaceholder.typicode.com/posts" )
    return (
        <div className='bg-dark text-light p-5'>
            <div className="container">
                <h2 className='text-warning'>Posts List</h2>
                <div className='row'>
                    {isLoading && <div className='text-danger'>
                        <h2>Loading</h2>
                    </div>}
                    {errors && <div className='alert alert-danger mt-5'>

                        <h2>Errors occurs : {errors.message}</h2>
                    </div>}
                    {!isLoading && !errors && posts.map( ( post ) => (
                        <div className="col-sm-6 g-4">
                            <div className='border'>
                                <h4 className='bg-dark p-2 text-light'>Username :  {post.title}</h4>
                                <p className='p-3'>{post.body}</p>
                                <h6 className='p-3'>Email : {post.id} </h6>
                            </div>
                        </div>


                    ) )}

                </div>
            </div>
        </div>
    )
}
