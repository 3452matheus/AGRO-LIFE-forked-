import React from "react";
import { Jumbotron as RBJumbotron } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const Jumbotron = () => {
  return (
    <>
      <Alert variant="success" className="text-center">
        <Navbar.Brand
          as={Link}
          to="/mundo"
          style={{ color: "rgb(46,139,87)", className: "text-center" }}
        >
          QUER SABER MAIS DO DESENVOLVIMENTO SUSTENTÁVEL!
        </Navbar.Brand>
      </Alert>

      <RBJumbotron style={{ background: "rgb(46,139,87)", color: "white" }}>
        <h1>IMPORTÂNCIA DO MUNDO SUSTENTÁVEL </h1>

        <p>
          <b>ENTÃO VEM ASSISTIR O VÍDEO SOBRE O DESENVOLVIMENTO SUSTENTÁVEL</b>
        </p>
        <p className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ueU83pICyek"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
      </RBJumbotron>
    </>
  );
};

export default Jumbotron;
