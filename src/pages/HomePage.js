import React from 'react'
import { Hero } from '../components/Hero&Jumbotrons/Hero'
import { Carousel } from '../components/Carousels/Carousel'
import { ProjectsJumbotron } from '../components/Hero&Jumbotrons/Hero'
import { MDBIcon } from 'mdbreact'
import Lulus1 from '../assets/images/Lulu.png'
import Lulus2 from '../assets/images/Lulu2.png'
import Lulus3 from '../assets/images/Lulu3.png'
import PokeTrade1 from '../assets/images/Poketrade.png'
import PokeTrade2 from '../assets/images/PokeTrade2.png'
import PokeTrade3 from '../assets/images/Poketrade3.png'
import Kibblings1 from '../assets/images/KibblingsScreenshot.png'
import Kibblings2 from '../assets/images/KibblingsScreenshot2.png'
import Kibblings3 from '../assets/images/KibblingsScreenshot3.png'

const HomePage = (props) => {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}></Hero>

            {/* Lulu's Recipes */}
            <ProjectsJumbotron
                title="Group Project 1: Lulus Recipes"
                image1={Lulus1}
                image2={Lulus2}
                image3={Lulus3}
                contributors="Napoleon Vuong, Hedi Calabrese, Mykhas Nallas, and Bhagyashree Acharya"
                description="This app was created within 2 weeks at the UC Berkeley Extention Full-Stack Web 
                Development Bootcamp and provides it's users extensive features for finding, creating, and 
                storing recipes to cook. The app helps to organize what ingredients to buy at the store with its 
                'cart' functionality and lets it users know what info is necessary for making these dishes."
            >
            </ProjectsJumbotron>

            {/* PokemonTrade */}
            <ProjectsJumbotron
                title="Group Project 2: PokemonTrade"
                image1={PokeTrade1}
                image2={PokeTrade2}
                image3={PokeTrade3}
                contributors="Napoleon Vuong, Kenny Ngo, Bhagyashree Acharya, and Saidnazar Rakhimboev"
                description="This app was created to allow collectors of the popular trading card game, Pokemon, 
                to easily gather in a social hub to trade and converse about their favorite show and card game."
            >

            </ProjectsJumbotron>

            {/* Kibblings */}
            <ProjectsJumbotron
                title="Group Project 3: Kibblings"
                image1={Kibblings1}
                image2={Kibblings2}
                image3={Kibblings3}
                contributors="Napoleon Vuong, Mykhas Nallas, Shakila Marando, and Alvaro Centeno"
                description="Kibblings is an online, searchable database of animals that need homes. 
                It is also a directory of nearly 11,000 animal shelters and adoption organizations across the U.S., 
                Canada and Mexico. Organizations maintain their own home pages and available-pet databases."
                appLink="https://project-3-kibblings.herokuapp.com/"
                github="https://github.com/Napolo-Sim/kibblings-2"
            >
                <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                /></a>
                <a href="#"><MDBIcon
                    fab
                    icon="github"
                    className="grey-text"
                    size="lg"
                /></a>
                <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                /></a>
            </ProjectsJumbotron>
        </div>




    )
}

export default HomePage
