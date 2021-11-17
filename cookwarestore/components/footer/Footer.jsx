
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Image  from "next/image";
import FooterLogo from '../../public/4qrtPot.jpg'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Toggle, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'


     export default function Footer() {
       return (
       <div>
           <Row className="footerRow">
               <Col>
                <Image alt="site logo" src={FooterLogo} width={100} height={100} />
               </Col>
               <Col>
                <h3 className="footertitle">About </h3>
                  <h5><Nav.Link href="/">Home</Nav.Link></h5>
                  <h5><Nav.Link href="/about">About</Nav.Link></h5>
                  <h5><Nav.Link href="/shop">Shop</Nav.Link></h5>
                  <h5><Nav.Link href="/contact">Contact</Nav.Link></h5>
               </Col>
               <Col>
                <h3 className="footertitle">Shop</h3>
                <h5><Nav.Link href="/shop/#dutchOven">Dutch Ovens</Nav.Link></h5>
                <h5><Nav.Link href="/shop/#fryingPan">Frying Pans</Nav.Link></h5>
                <h5><Nav.Link href="/shop/#bakeware">Bakeware</Nav.Link></h5>
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


