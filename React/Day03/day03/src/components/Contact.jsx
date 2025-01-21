import React from 'react'

export function Contact( props ) {
    let { onGetPhoneData } = props
    let phone = "0123456789"

    onGetPhoneData( phone )
    return (
        <div className='alert alert-info p-4'>
            <h2>Contact Us : {phone}</h2>
            <h3>{props.trackName}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='btn btn-success mt-3'> Show More</button>
        </div>
    )
}
