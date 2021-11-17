import SimpleLayout from "../../components/layout/simple";
import Card from 'react-bootstrap/Card';
import Image  from "next/image";
import { Col, Row, Container } from 'react-bootstrap';
import Link from "next/link";
//http://localhost:3000/api/products/productId


import Button from 'react-bootstrap/Button'

import Section2Image2 from '../../public/10inFryPan.jpg'

export default function Shop() {
  return (
    <SimpleLayout>
      <section>
          <div className="sectionThree">
            <h2 className="text-center newArivalTitle">Dutch Oven</h2>
            <div className="newArivalProducts">
                  <div className="row mb-2">
                     <div className="col-md-3"><Card style={{ width: '18rem' }}>
                      <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                   
                    </div>
               
            </div>
           
          </div>
        </section>
        <section>
          <div className="sectionThree">
            <h2 className="text-center newArivalTitle">Frying Pan</h2>
            <div className="newArivalProducts">
                  <div className="row mb-2">
                     <div className="col-md-3"><Card style={{ width: '18rem' }}>
                      <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                   
                    </div>
               
            </div>
           
          </div>
        </section>
        <section>
          <div className="sectionThree">
            <h2 className="text-center newArivalTitle">Bakeware</h2>
            <div className="newArivalProducts">
                  <div className="row mb-2">
                     <div className="col-md-3"><Card style={{ width: '18rem' }}>
                      <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                      <div className="col-md-3"><Card style={{ width: '18rem' }}>
                        <Image alt="Vercel logo" src={Section2Image2} width={200} height={200} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      </div>
                   
                    </div>
               
            </div>
           
          </div>
        </section>
    </SimpleLayout>
  )
}