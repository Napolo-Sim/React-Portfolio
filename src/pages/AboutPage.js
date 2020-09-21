import React from 'react';
import { Hero } from '../components/Hero&Jumbotrons/Hero';
import Content from '../components/Content';

const AboutPage = (props) => {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <h1 style={{ fontSize: "60px" }}>Hello! My name is Napoleon Vuong. </h1>

                <h2>I'm a full stack engineer with experience in HTML, CSS, JavaScript, Express JS, Node JS, mySQL, MongoDB, Sequelize, and React.

                My dream is to one day be part of a web dev team and contribute to clean and modern Websites for all types of Businesses.
                I'm constantly learning new things. Currently those things include gaining more experience with MongoDB/Atlas, React, Express JS, and Node JS.

My latest big project, Kibblings, is a website for Current or soon to be pet owners to manage or find new pets that they want to adopt and stay updated with. You can check it out <a href="https://project-3-kibblings.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.

When I'm not learning something new, chances are I'm binge watching shows on Netflix or occasionaly livestreaming on Twitch. You can find me <a href="https://www.twitch.tv/napoonthego" target="_blank" rel="noopener noreferrer">here</a> </h2>
            </Content>
        </div>
    )
}

export default AboutPage
