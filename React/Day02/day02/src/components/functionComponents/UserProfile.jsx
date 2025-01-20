import React from 'react'

export default function UserProfile( props ) {
    const { logout } = props
    return (
        <div className='lead alert alert-dark mt-5 fs-3'>
            <p>Hello , ..... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, deserunt error. Excepturi eveniet doloremque natus ipsum dolorem laborum rem nihil dolorum fugit, debitis ipsa incidunt amet vitae placeat ducimus nam?</p>

            <button onClick={logout} className='btn btn-danger mt-5'>Logout</button>
        </div>
    )
}
