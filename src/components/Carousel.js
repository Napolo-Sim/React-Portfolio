import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import Github from '../assets/images/GitHubLogo.png';
import LinkedIn from '../assets/images/LinkedInLogo.webp';
import Twitch from '../assets/images/TwitchLogo.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Git Hub',
                    subTitle: 'A hub for developers everywhere',
                    imgSrc: Github,
                    link: 'https://github.com/Napolo-Sim',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Linked In',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/napoleon-vuong-08b189192/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Twitch',
                    subTitle: 'A livestreaming platform',
                    imgSrc: Twitch,
                    link: 'https://www.twitch.tv/napoonthego',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
