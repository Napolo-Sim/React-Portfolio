import React from 'react'
import { Hero } from '../components/Hero&Jumbotrons/Hero'
import { Carousel } from '../components/Carousels/Carousel'
import { ProjectsJumbotron } from '../components/Hero&Jumbotrons/Hero'
import { MDBIcon, MDBCol } from 'mdbreact'
import Lulus1 from '../assets/images/Lulu.png'
import Lulus2 from '../assets/images/Lulu2.png'
import Lulus3 from '../assets/images/Lulu3.png'
import PokeTrade1 from '../assets/images/Poketrade.png'
import PokeTrade2 from '../assets/images/PokeTrade2.png'
import PokeTrade3 from '../assets/images/Poketrade3.png'
import Kibblings1 from '../assets/images/KibblingsScreenshot.png'
import Kibblings2 from '../assets/images/KibblingsScreenshot2.png'
import Kibblings3 from '../assets/images/KibblingsScreenshot3.png'
import Pokedex from '../assets/images/Pokedex.png'
import Weather from '../assets/images/Weather.png'
import employee from '../assets/images/Employee.png'

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
                appLink="https://napolo-sim.github.io/Recipe-App/"
                github="https://github.com/Napolo-Sim/Recipe-App"
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
                appLink="https://poketrade-heroku-demo.herokuapp.com/home.html"
                github="https://github.com/Napolo-Sim/Chat-Build-Around-P2"
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
            </ProjectsJumbotron>

            {/* Pokedex */}
            <ProjectsJumbotron
                title="Individual Project 1: Pokedex"
                image1={Pokedex}
                image2={Pokedex}
                image3={Pokedex}
                contributors="Napoleon Vuong"
                description="This app was created to allow its user to have access to an updated list of pokemon 
                within the series. There are hundreds of Pokemon within the Pokedex ranging from the most dated to modern pokemon."
                appLink="https://napolo-sim.github.io/Actual-Pokedex-Demo-/"
                github="https://github.com/Napolo-Sim/Actual-Pokedex-Demo-"
            >
            </ProjectsJumbotron>

            {/* Weather Dashboard */}
            <ProjectsJumbotron
                title="Individual Project 2: Weather Dashboard"
                image1={Weather}
                image2={Weather}
                image3={Weather}
                contributors="Napoleon Vuong"
                description="This app was created to allow its user to have access to recent weather 
                updates in cities across the World. It displays current weather conditions and gives indexes to 
                temperature, humidity, wind speeds, and UV levels."
                appLink="https://napolo-sim.github.io/HW-6-Weatehr-App/"
                github="https://github.com/Napolo-Sim/HW-6-Weatehr-App"
            >
            </ProjectsJumbotron>

            {/* Employee Directory */}
            <ProjectsJumbotron
                title="Individual Project 3: Employee Directory"
                image1={employee}
                image2={employee}
                image3={employee}
                contributors="Napoleon Vuong"
                description="This app was created to allow its user to simulate the searching and filtering 
                of employees within a company. The app allows the user to refresh and find new employees and filter by age."
                appLink="https://napolo-sim.github.io/Week-19-HW-Employee-Directory/"
                github="https://github.com/Napolo-Sim/Week-19-HW-Employee-Directory"
            >
            </ProjectsJumbotron>

            <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/napoleon-vuong-08b189192/"><MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                    /></a>
                    <a href="https://github.com/Napolo-Sim"><MDBIcon
                        fab
                        icon="github"
                        className="grey-text"
                        size="lg"
                    /></a>
                    <a href="https://napolo-sim.github.io/Personal-Portfolio-Freestyle-/Images/UCB%20Camp%20Resume.pdf"><MDBIcon
                        fab
                        icon="file"
                        className="far fa-file"
                        size="lg"
                    /></a>
                </MDBCol>
            </MDBCol>
        </div>
    )
}

export default HomePage
