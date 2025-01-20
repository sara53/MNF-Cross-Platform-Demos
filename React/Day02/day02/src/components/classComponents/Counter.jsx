import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }
    constructor() {
        super()
        console.log( "1-Constructor" )
    }

    componentDidMount() {
        console.log( "Render only once After Initial Render" )
    }
    componentDidUpdate() {
        console.log( "Run After Any StateRender" )
    }
    componentWillUnmount() {
        console.log( "sadfghyu" )
    }
    increaseHandler = () => {
        this.setState( {
            count: this.state.count + 1
        } )

    }
    decreaseHandler = () => {
        this.setState( {
            count: this.state.count - 1
        } )

    }
    render() {
        console.log( "2-Render Method" )
        return (
            <div className='alert alert-info p-5'>

                <h1 className='mb-4'>Counter App</h1>
                <button onClick={this.increaseHandler} className='btn btn-success mx-3'>Increase</button>
                <span className='fw-bold fs-5'>{this.state.count}</span>
                <button onClick={this.decreaseHandler} className='btn btn-danger mx-3'>decrease</button>
            </div>
        )
    }
}
