import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decreaseAction, increaseAction } from '../store/counterSlice';

export function Counter() {

    const { count } = useSelector( state => state.counterSlice )
    const dispatch = useDispatch();
    const increase = () => {
        dispatch( increaseAction( 5 ) )
    }
    const decrease = () => {
        dispatch( decreaseAction( 3 ) )

    }
    return (
        <div className='container p-5'>
            <h2 className='mb-5'>Counter Page</h2>
            <button className='btn btn-success mx-3' onClick={increase}>+</button>
            <span>{count}</span>
            <button className='btn btn-danger mx-3' onClick={decrease}>-</button>
        </div>
    )
}
