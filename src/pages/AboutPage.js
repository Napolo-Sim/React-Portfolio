import React from 'react';
import { Hero } from '../components/Hero&Jumbotrons/Hero';
import Content from '../components/Content';

const AboutPage = (props) => {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Napoleon Vuong. I'm a full stack engineer with experience in HTML, CSS, JavaScript, Express JS, Node JS, mySQL, MongoDB, Sequelize, and React.</p>

                <p>My dream is to one day be part of a web dev team and contribute to clean and modern Websites for all types of Businesses.</p>

                <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB/Atlas, React, Express JS, and Node JS</p>

                <p>My latest big project, PokeTrade, is a trading site for Pokemon Card Collectors. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.</p>

                <p>When I'm not learning something new, chances are I'm livestreaming on Twitch. You can find me <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    )
}

export default AboutPage
