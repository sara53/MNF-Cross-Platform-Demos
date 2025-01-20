import React from 'react'
import { Content } from '../components/classComponents/Content'
import { About } from '../components/functionComponents/Abou'
import { CounterApp } from '../components/functionComponents/CounterApp'

export function MainLayout() {

    let itiTracks = [
        {
            id: 1,
            trackName: "Frontend",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui libero fugit illo expedita quos, praesentium voluptatibus totam optio harum vero dicta corporis provident suscipit. Odit odio esse iusto quo.",
            bgColor: "contentBg"
        },
        {
            id: 1,
            trackName: "Open Source",
            bgColor: "contentBg",
            description: "Hello Open Source Welcome at ITI"
        }
    ]


    let trackName = "FrontEnd"
    return (
        <main>
            <CounterApp />

            {/* <About trackName={trackName} test="Hello">
                <p className='bg-light text-dark p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam sed, a inventore maxime, ullam odit magnam, tempore nulla quae sunt distinctio. Amet, sapiente aspernatur inventore repudiandae officia cumque porro.</p>
            </About>
            <About /> */}
            {/* <Counter /> */}

            {/* <Content values={itiTracks[ 0 ]} >
                <p className='bg-light text-dark p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aut deserunt minus id sapiente ea tempore expedita reiciendis quis praesentium veritatis, sunt mollitia explicabo voluptatum blanditiis libero repudiandae nihil soluta?</p>
                <button className='btn btn-danger'>Show More</button>
            </Content> */}
            {/* <Content values={itiTracks[ 1 ]} /> */}
            {/* <hr /> */}
            {/* <Content {...data} /> */}
            {/* <Content id="1" trackName="Frontend" d /> */}
            {/*   <hr />
            <Content myName="Ahmed" trackName="Dotnet" /> */}
        </main>
    )
}
