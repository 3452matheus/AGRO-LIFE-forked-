import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import irrigação from "../../assets/irrigação.png";
import ambiente from "../../assets/ambiente.png";
import Plantio from "../../assets/Plantio.png";
import redução from "../../assets/redução.png";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <CardDeck>
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Img variant="irrigação" src={irrigação} />
        <Card.Body>
          <Card.Title>PLANO 1</Card.Title>
          <Card.Text>
            <b>SISTEMA AUTÔNOMO DE RIGAMENTOS ATRAVÉS DA ÁGUA DA CHUVA</b>{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            style={{ background: "rgb(46,139,87)", border: "rgb(46,139,87)" }}
            onClick={() => alert("FUNÇÃO EM  DESENVOLVIMENTO!")}
          >
            Saiba mais
          </Button>
        </Card.Footer>
      </Card>
      {/** card2  */}
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Img variant="ambiente" src={ambiente} />
        <Card.Body>
          <Card.Title>PLANO 2</Card.Title>
          <Card.Text>
            <b>DESENVOLVIMENTO AO MEIO AMBIENTE SUSTENTÁVEL</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link as={Link} to="/planos" style={{ color: "white" }}>
            Saiba mais
          </Card.Link>
        </Card.Footer>
      </Card>
      {/**card3 */}
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Img variant="Plantio autônomo" src={Plantio} />

        <Card.Body>
          <Card.Title>PLANO 3</Card.Title>
          <Card.Text>
            <b>PLANO PARA AS PLANTAÇÃO AUTÔNOMO SUSTENTÁVEL</b>
          </Card.Text>
          <Card.Header
            className="text-center"
            style={{ background: "#309561B5", color: "white" }}
          >
            <b> MAIS ESCOLHIDOS</b>
          </Card.Header>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link as={Link} to="/planos" style={{ color: "white" }}>
            Saiba mais
          </Card.Link>
        </Card.Footer>
      </Card>
      {/**card4 */}
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Img variant="REDUÇÃO" src={redução} />
        <Card.Body>
          <Card.Title>PLANO 4</Card.Title>
          <Card.Text>
            <b>
              REDUZA A POLUIÇÃO EM 45% NO SEU AGRONEGÓCIO, É SEJA REFERENCIAS
            </b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link as={Link} to="/planos" style={{ color: "white" }}>
            Saiba mais
          </Card.Link>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Cards;
