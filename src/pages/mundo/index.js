import React from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { Card, Alert } from "react-bootstrap";
const Mundo = () => {
  return (
    <>
      <Header />
      <b>MUNDO-SUSTENTÁVEL</b>
      <br />
      <Alert variant="success" className="text-center">
        DESENVOLVIMENTO SUSTENTAVEL
      </Alert>

      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Body>
          <Card.Text>
            <p>
              O DESENVOLVIMENTO SUSTENTÁVEL EXPRIME A RELAÇÃO ENTRE CRESCIMENTO
              ECONÔMICO, CONSERVAÇÃO AMBIENTAL E PREOCUPAÇÃO SOCIAL. A PARTIR DA
              SENSIBILIZAÇÃO DA SOCIEDADE EM RAZÃO DO USO IRRACIONAL DOS
              RECURSOS NATURAIS E DOS IMPACTOS AMBIENTAIS GERADOS PELA AÇÃO
              HUMANA, O CONCEITO DE CRESCIMENTO SUSTENTÁVEL SE COLOCA COMO UMA
              ALTERNATIVA, QUE PROMOVE A INTERDEPENDÊNCIA ENTRE ECONOMIA, MEIO
              AMBIENTE E SOCIEDADE.
            </p>
            <p>
              O CONCEITO DE DESENVOLVIMENTO SUSTENTÁVEL REMETE, DESSA MANEIRA, À
              IMPORTÂNCIA DE TRÊS PRINCÍPIOS PARA A SUA EFETIVAÇÃO: OS
              PRINCÍPIOS ECONÔMICOS, AMBIENTAIS E SOCIAIS. ESSAS AÇÕES REMETEM
              AINDA AO CONCEITO DE SUSTENTABILIDADE, QUE ESTÁ LIGADA À PROMOÇÃO
              DE AÇÕES QUE OFEREÇAM SUSTENTAÇÃO PARA O CRESCIMENTO ECONÔMICO, A
              PRESERVAÇÃO AMBIENTAL E A REDUÇÃO DA DESIGUALDADE SOCIAL.
            </p>
            <p>
              O DESENVOLVIMENTO SUSTENTÁVEL ESTÁ ANCORADO NO DESENVOLVIMENTO
              ECONÔMICO DA HUMANIDADE BASEADO NA CONSERVAÇÃO DOS RECURSOS
              NATURAIS. DESSE MODO, O DESENVOLVIMENTO DE MANEIRA SUSTENTÁVEL
              INDICA QUE OS RECURSOS NATURAIS SEJAM UTILIZADOS DE MANEIRA
              RACIONAL, OU SEJA, SEM O SEU ESGOTAMENTO, COM VISTAS À CONSERVAÇÃO
              DESSES RECURSOS PARA AS GERAÇÕES FUTURAS. SENDO ASSIM, BUSCA-SE O
              PROGRESSO ECONÔMICO DA SOCIEDADE BASEADO NA IMPORTÂNCIA DOS
              RECURSOS AMBIENTAIS PARA AS ATIVIDADES PRODUTIVAS E, AINDA, NA SUA
              CONSERVAÇÃO, EM UMA CLARA PREOCUPAÇÃO COM O FUTURO DA HUMANIDADE.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <br />
      <Footer />
    </>
  );
};

export default Mundo;
