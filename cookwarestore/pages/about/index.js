import SimpleLayout from "../../components/layout/simple";

import { Col, Row, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//icons
import { FaEarlybirds, FaGripfire, FaPiedPiperAlt, FaCarrot, FaCat} from 'react-icons/fa'


import Image  from "next/image";
import Section2Image from '../../public/4qrtPot.jpg'
import Section2Image2 from '../../public/10inFryPan.jpg'
import Section2Image3 from '../../public/breadPan.jpg'


export default function About() {
  return (
    <SimpleLayout>
      <div>
        <Row className="heroAboutUsSection">
          <Col className="heroAboutUs">
            <h2 className="text-center">About Us</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
          </Col>
        </Row>
        <Row>
        <div className="sectionTwo ">        
            <div className="row mb-2">
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Dutch Ovens</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image} width={100} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Frying Pans</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image2} width={100} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Bakeware</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image3} width={100} height={100} />        

                  </div>
                </div>
              </div>
              </div>
          </div>
        </Row>
        <Row>
          <Col>
            <h3 className="text-center">Our Vision</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
          </Col>
          <Col>
            <h3 className="text-center">Our Mission</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
          </Col>
          <Col>
            <h3 className="text-center">Our Goals</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FaEarlybirds/>
            <h3 className="text-center">Words</h3>
          </Col>
          <Col>
            <FaGripfire/>
            <h3 className="text-center">Words</h3>
          </Col>
          <Col>
            <FaPiedPiperAlt/>
            <h3 className="text-center">Words</h3>
          </Col>
          <Col>
            <FaCarrot/>
            <h3 className="text-center">Words</h3>
          </Col>
          <Col>
            <FaCat/>
            <h3 className="text-center">Words</h3>
          </Col>
        </Row>
        <Row className="heroAboutUsSection">
          <Col className="heroAboutUs">
            <h2 className="text-center">Meet The Team</h2>
           
          </Col>
          <div className="row mb-2 align-self-center">
                     <div className="col-md-6">
                       <Card style={{ width: '18rem' }}>
                      <Image alt="Member Image" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title className="text-center">Ruth</Card.Title>
                          <Card.Text className="text-center">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                         
                        </Card.Body>
                      </Card>
                      </div>
                      <div className="col-md-6"><Card style={{ width: '18rem' }}>
                        <Image alt="Member Image" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title className="text-center">James</Card.Title>
                          <Card.Text className="text-center">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                         
                        </Card.Body>
                        </Card>
                      </div>  
                    </div>
        </Row>

      </div>
    </SimpleLayout>
  )
}