import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import photoRouter from "../../../public/photoRouter";

const SingleCard = ({ title, price, description, image }) => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setPhoto(photoRouter(image));
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Image alt="Vercel logo" src={photo.src} width={200} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;