import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { FiPhoneOutgoing } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div style={{ color: "white", background: "rgb(46,139,87)" }}>
      <Row>
        <Col>
          <b>DADOS SOBRE A EMPRESA</b>
          <br />

          <p>
            SAMOS UMA EMPRESA COM O FOCO NA AGRONOMIA SUSTENTÁVEL E AUXILIAR UM
            MELHOR MUNDO
          </p>
        </Col>

        <Col>
          <b>ADICIONAR TODOS O SERVIÇO</b>
          <br />
          <p>
            SISTEMA AUTÔNOMO, DESENVOLVIMENTO AMBIENTAL, CAPTAÇÃO DE ÁGUA DA
            CHUVA,REDUÇÃO DA POLUIÇÃO
          </p>
        </Col>

        <Col>
          <b>CONTATOS</b>
          <br />
          <p>
            <IoLogoWhatsapp />{" "}
            <a
              style={{ all: "unset", cursor: "pointer" }}
              href="https://wa.me/5518991074608"
              target="_blank"
            >
              (18) 99107-4608
            </a>
          </p>
          <p>
            <FiPhoneOutgoing /> (18) 4578-9989
          </p>
          <p>
            <BiMailSend size={20} />{" "}
            <a
              style={{ all: "unset", cursor: "pointer" }}
              href="mailto://contato@agrolifesustentavel.com"
              target="_blank"
            >
              Contate-nos
            </a>
          </p>
          <p>
            <IoLogoInstagram size={20} />{" "}
            <a
              style={{ all: "unset", cursor: "pointer" }}
              href="http://www.instagran.com/agro_life_sustentavel/"
              target="_blank"
            >
              Instagran
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
