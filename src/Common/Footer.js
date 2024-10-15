import { Col, Container, Nav, Row } from "react-bootstrap";
import '../index.css'

export default function Footer() {
    return (
        <>
            <footer  className="py-5 bg-dark text-white rounded-top">
                <Container>
                    <Row>
                        <Col>
                            <h4 className="text-warning ">Registered office:</h4>
                            Udyog Bhavan, Block No. 16,<br />
                            4th Floor, Sector-11,<br />
                            Gandhinagar - 382 010.<br />
                            Tel:079-23977219, 079-23977229.<br />
                            Fax: Not In Use<br />
                            Toll Free Number:1800 203 1111<br />
                            E -mail: info@gujarattourism.com
                        </Col>
                        <Col className="py-3">
                            <ul >
                                <h4 className="text-warning ">To Begin Your Journey</h4>
                                <li><a href='https://www.gujarattourism.com/central-zone/ahmedabad.html' >Ahmedabad</a></li>
                                <li><a href='https://www.gujarattourism.com/central-zone/gandhinagar.html' className="py-2">Gandhinagar</a></li>
                                <li><a href='https://www.gujarattourism.com/central-zone/vadodara.html' className="pb-2">Vadodara</a></li>
                                <li><a href='https://www.gujarattourism.com/saurashtra/jamnagar.html' className="pb-2">Jamnagar</a></li>
                                <li><a href="https://www.gujarattourism.com/south-zone/surat.html">Surat</a></li>
                            </ul>
                        </Col>
                        <Col >
                        <img style={{height:'15rem' ,width:'20rem'}} src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/gujarat-tourism-logo.png" alt="logo" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}