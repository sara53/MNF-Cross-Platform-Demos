import React, { useState } from 'react'
import { Contact } from './Contact'

export function About( props ) {

    let [ receivedPhone, setReceivedPhone ] = useState( '' );
    let getPhoneData = ( data ) => {
        setReceivedPhone( data )
    }
    return (
        <div className='bg-dark p-5 text-light'>
            <h2 className='text-warning text-center mb-4'>About Us : phone : {receivedPhone} </h2>
            <p className='border p-3 rounded'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis iste mollitia placeat odit est nisi, cum labore beatae deserunt facilis provident aut veniam voluptas magnam illum quae, eum consectetur?</p>
            <Contact onGetPhoneData={getPhoneData} trackName={props.trackName} />
        </div>
    )
}
