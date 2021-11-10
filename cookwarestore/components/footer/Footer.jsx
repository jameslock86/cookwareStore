
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image  from "next/image";
import FooterLogo from '../../public/4qrtPot.jpg'


     export default function Footer() {
       return (
       <div>
           <Row className="footerRow">
               <Col>
                <Image alt="site logo" src={FooterLogo} width={100} height={100} />
               </Col>
               <Col>
                <h3 className="footertitle">About </h3>
                <h5><a className="footerLink" href="#">About Us</a></h5>
                <h5><a className="footerLink" href="#">Shop</a></h5>
                <h5><a className="footerLink" href="#">Contact Us</a></h5>

               </Col>
               <Col>
                <h3 className="footertitle">Shop</h3>
                <h5><a className="footerLink" href="#">Dutch Ovens</a></h5>
                <h5><a className="footerLink" href="#">Frying Pans</a></h5>
                <h5><a className="footerLink" href="#">Bakeware</a></h5>
               </Col>
               <Col>
                <h3 className="footertitle">Cookbook</h3>
                <h5><a className="footerLink" href="#">Veggie</a></h5>
                <h5><a className="footerLink" href="#">Chicken</a></h5>
                <h5><a className="footerLink" href="#">Beef</a></h5>
               </Col>
               <Col>
               <h3 className="footertitle">Social Media</h3>
                <h5><a className="footerLink" href="#">Facebook</a></h5>
                <h5><a className="footerLink" href="#">Instagram</a></h5>
                <h5><a className="footerLink" href="#">Twitter</a></h5>
               </Col>
           </Row>
       </div>
     
       )
     }


