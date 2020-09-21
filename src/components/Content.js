import React from 'react';
import { Row, Container, Col, Image, Card, Button } from 'react-bootstrap';
import selfPhoto from '../assets/images/SelfPhoto.JPG'

function Content(props) {

    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={selfPhoto} />
                    </Card>
                </Col>
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;