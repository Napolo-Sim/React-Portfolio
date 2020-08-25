import React from 'react'
import Hero from '../components/Hero'

const HomePage = (props) => {
    return (
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}></Hero>
    )
}

export default HomePage
