import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBBtn, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCardBody, MDBCardText } from "mdbreact";
import "../Hero&Jumbotrons/Hero.css";

export const Hero = (props) => {
    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true} style={{ backgroundImage: `url(https://wallpaperaccess.com/full/187161.jpg)` }}>
                <Row className='justify-context-center pt-5 pb-5'>
                    <Col md={8} sm={12} style={{ color: "white" }}>
                        {props.title && <h1 className='display-1 font-weight-bolder'> {props.title}</h1>}
                        {props.subTitle && <h3 className='display-4 font-weight-light'> {props.subTitle}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}



export const ProjectsJumbotron = (props) => {
    return (
        <MDBContainer className=" text-center" fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron className="text-center" style={{ backgroundColor: "white", paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px" }} >
                        <MDBCardTitle className="card-title h1 pt-2" style={{ fontSize: "60px", paddingBottom: "20px" }}>
                            <strong>{props.title}</strong>
                        </MDBCardTitle>
                        <MDBContainer >
                            <MDBCarousel
                                activeItem={1}
                                length={3}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1"
                            >
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId="1">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={props.image1}
                                                alt="First slide"
                                            />
                                        </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={props.image2}
                                                alt="Second slide"
                                            />
                                        </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="3">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={props.image3}
                                                alt="Third slide"
                                            />
                                        </MDBView>
                                    </MDBCarouselItem>
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </MDBContainer>
                        <MDBCardBody style={{ padding: 0 }}>
                            <MDBCardTitle className="indigo-text text-muted h5 m-4">
                                Contributers: {props.contributors}
                            </MDBCardTitle>
                            <MDBContainer>
                                <MDBCardText>
                                    {props.description}
                                </MDBCardText>
                                <MDBCardText>
                                    View the deployed project <a href={props.appLink}>here</a> and the Github repository <a href={props.github}>here</a>.
                                </MDBCardText>
                            </MDBContainer>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}



