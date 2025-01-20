import React, { Component } from 'react'
import styles from '../../css/content.module.css'
export class Content extends Component {


    // statement
    clickHandler = () => {
        console.log( this.trackName )
    }


    render() {
        console.log( this.props );
        const { values: { trackName, description, bgColor } } = this.props
        console.log( "====================" );
        // const { values } = this.props
        // const { trackName } = values
        //const { values: { trackName } } = this.props

        return (
            <>
                <div className={`mb-3 ${styles[ bgColor ]} p-5 text-light`}>
                    <h1 className='text-center'>{trackName}</h1>
                    <p className='bg-light text-dark p-3 my-5 rounded'>{description}</p>
                    {this.props.children}
                    {/* <button onClick={this.clickHandler} className='btn btn-success'>Show More</button> */}
                </div>

            </>
        )
    }
}
