import React from "react";
import { Carousel } from "react-bootstrap";
import poluição from "../../assets/poluição.png";
import captação from "../../assets/captação.png";
import agrotoxico from "../../assets/agrotoxico.png";
const Carrossel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={poluição}
          alt="TÉCNICA PARA EVITAR A POLUIÇÃO"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3 style={{ color: "" }}>TÉCNICAS QUE EVITAM A POLUIÇÃO DO AR</h3>
          <b style={{ color: "" }}>
            NOS TAMOS OFERECENDO MUNDO MAIS LIMPO PARA VOCÊ
          </b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={captação}
          alt="Serviço de captação de água "
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>SISTEMA DE CAPTAÇÃO DE ÁGUA DAS CHUVAS PARA USO NA IRRIGAÇÃO</h3>
          <b>ECONOMIZA ÁGUA PARA O FUTURO </b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={agrotoxico}
          alt="Produçao de agrotóxico natural "
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>VOCÊ TEM PROBLEMA COM INSETOS? </h3>
          <b>
            ENTÃO VEM CONHECER NOSSO, PESTICIDAS QUE NÃO EFETUA MAL AO MEIO
            AMBIENTE
          </b>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
