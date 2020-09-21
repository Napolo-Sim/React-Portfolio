import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../Cards/Card';

import Github from '../../assets/images/GitHubLogo.png';
import LinkedIn from '../../assets/images/LinkedInLogo.webp';
import Twitch from '../../assets/images/TwitchLogoSpaced.png';
import Instagram from '../../assets/images/InstagramLogoTransparent.png';


export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Git Hub',
                    subTitle: 'Napolo-Sim',
                    imgSrc: Github,
                    link: 'https://github.com/Napolo-Sim',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'Napoleon Vuong ',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/napoleon-vuong-08b189192/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Twitch',
                    subTitle: 'Twitch.tv/napoonthego',
                    imgSrc: Twitch,
                    link: 'https://www.twitch.tv/napoonthego',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Instagram',
                    subTitle: '@polo_simmaly',
                    imgSrc: Instagram,
                    link: 'https://www.instagram.com/polo_simmaly/?hl=en',
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


