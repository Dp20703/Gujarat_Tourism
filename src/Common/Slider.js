import { Button, Carousel } from "react-bootstrap";



export default function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/rani-ki-vav/Rani-Ki-Vav-Banner.jpg" alt="Rani-Ki-Vav" style={{ height: '500px', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <Carousel.Caption className="mt-5">
                        <h3>Rani Ki Vav</h3>
                        <h6>Patan</h6>
                        <p >The stepwell was built in 1063 by Rani Udayamati of the Chaulukya Dynasty to commemorate her husband, Bhimdev I. A 1304 composition of Jain monk, Merutunga, mentions that Udayamati, the daughter of Naravaraha Khangara, built this stepwell at Patan. The same composition also mentions that the stepwell was commissioned in 1063 and was completed after 20 years.</p>
                        <a href="https://www.gujarattourism.com/north-zone/patan/rani-ki-vav.html">
                            <Button variant="danger" >Explore more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/Great-Rann-Of-Kutch-Banner.jpg" alt="Great Rann Of Kutch" style={{ height: '500px', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <Carousel.Caption className="text-dark mt-5">

                        <h3>Great Rann Of Kutch</h3>
                        <h6>Kutch</h6>
                        <p>The area was a once a sprawling shallow of the Arabian Sea until a constant geological shift closed off the connection with the sea. Over the years, the region eventually became a seasonal marshy salt desert. During monsoons, the marsh fills up with water and the wetland extends from the Gulf of Kutch on the west through to the Gulf of Cambay on the east.</p>
                        <a href="https://www.gujarattourism.com/kutch-zone/kutch/great-rann-of-kutch.html">
                            <Button variant="dark" >Explore more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/wild-ass-sanctuary/Wild-Ass-Sanctuary-Banner.jpg" alt="Wild Ass Sanctuary" style={{ height: '500px', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <Carousel.Caption className="mt-5">
                        <h3>Wild Ass Sanctuary</h3>
                        <h6>Surendranagar</h6>
                        <p>Wild Ass Sanctuary, also known as the Little Rann of Kutch, is a wildlife reserve located in the Indian state of Gujarat. Spread over 4,953 square kilometers, this sanctuary is a popular destination for wildlife enthusiasts and bird watchers from across the globe. The sanctuary is home to the last remaining population of Indian Wild Ass, which is a critically endangered species.</p>
                        <a href="https://www.gujarattourism.com/saurashtra/surendranagar/wild-ass-sanctuary-in-little-rann-of-kutch1.html">
                            <Button variant="danger" >Explore more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/Navratri.jpg" alt="Vibrant Navratri Festival" style={{ height: '500px', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <Carousel.Caption className="mt-5">
                        <h3>Vibrant Navratri Festival</h3>
                        <h6>Ahmedabad</h6>
                        <p>Navratri, meaning 'nine nights', is one of the most popular and widely celebrated Hindu festivals in many parts of India. Gujarat, however, is the only state that erupts into a nine-night dance festival, perhaps the longest in the world. Each night, all over the state, villages and cities alike, people gather in open spaces to celebrate feminine divinity, referred to as Shakti.</p>
                        <a href="https://www.gujarattourism.com/fair-and-festival/navratri-festival.html">
                            <Button variant="primary" >Explore more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}