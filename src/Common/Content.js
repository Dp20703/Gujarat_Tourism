import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Content() {
    return (
        <>
            <Row><Col><Feature /></Col></Row>
            <Row><Col><AboutUs /></Col></Row>

        </>
    );
}

function Feature() {
    return (
        <>
            <Container fluid>
                <h2 className="py-3 px-2">Features</h2>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white m-2">
                            <Card.Header>

                                <i className="fs-3 ri-map-fill" />
                                <span className="fs-3 mx-2"> Interactive Maps</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="fs-5"> Detailed maps with points of interest, routes, and interactive elements to help users plan their trips2.
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card className="bg-dark text-white m-2">
                            <Card.Header>
                                <i className="fs-3 ri-notification-fill" />
                                <span className="fs-3 mx-2">Real-Time Updates</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="fs-5">Notifications about weather, travel advisories, and other important information to keep users informed1.
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card className="bg-dark text-white m-2">
                            <Card.Header>
                                <i className="fs-3 ri-chat-4-fill" />
                                <span className="fs-3 mx-2">Live Chat Support</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="fs-5">Instant assistance through live chat to answer queries and provide support.
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>

                </Row>
            </Container>
        </>
    );
}
function AboutUs() {
    return (
        <>
            <Container fluid >
                <Card className="my-4 mx-2">
                    <Card.Img src="https://www.gujarattourism.com/content/gujrattourism/en/about-gujarat/_jcr_content/root/responsivegrid/pagebanner.coreimg.jpeg/1643369253714/about1.jpeg" alt="about-Gujarat" className="rounded" />
                    <Card.Header className="px-3 fs-2" >
                        About Gujarat
                        <Card.Subtitle className="py-1 text-muted">Know more about Gujarat State</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="mt-5 fs-6 ">Aavo Padharo, words of welcome in the language of Gujarat because it is here that these words ring truly and the guest is 'God' and the people of Gujarat are gregariously friendly, inviting and will entice you to come again and again.<br /><br />

                            Stretches out into the Arabian Sea, with a hint of the desert and with a coastline of 1600 kms long is Gujarat - the home state of Mahatma Gandhi, the Father of Nation. It is renowned for its beaches, temple towns and historic capitals. Wildlife sanctuaries, hill resorts and natural grandeur are gifts of Gujarat. Sculpture, handicrafts, arts, festivals also make the state rich. Gujarat is also among the most technologically advanced, housing the largest petrochemical complex in the country.<br /><br />

                            Gujarat has always been a major centre for the Jains and some of its most interesting locations are the Jain Temple centres at Palitana and Girnar Hills. Besides the Jain temples, the state's major attractions include the only habitat of the Asiatic Lions in India (Gir Forests), a desert ride at the Wild Ass Sanctuary and the beautiful Indo-Saracenic Architecture of Ahmedabad. The colourful tribal villages of Kutch make a visit unforgettable.
                        </Card.Text>
                        <Button variant="dark" href="https://www.gujarattourism.com/about-gujarat.html">Know more</Button>
                    </Card.Body>
                </Card>
                <Card>

                </Card>
            </Container>
        </>
    );
}