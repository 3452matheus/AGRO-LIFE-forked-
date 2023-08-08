import React from "react";
import { Alert, Accordion, Card, Button } from "react-bootstrap";

const Acordeon = () => {
  return (
    <>
      <Alert variant="success" className="text-center">
        QUER SABER MAIS SOBRE AGRICULTURA SUSTENTÁVEL!
      </Alert>
      <Accordion defaultActiveKey="0">
        <Card style={{ background: "rgb(46,139,87)" }}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              variant="success"
              style={{
                color: "",
                background: "rgb(46,139,87)"
              }}
            >
              MAIS SOBRE A AGRICULTURA SUSTENTÁVEL
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              A AGRICULTURA SUSTENTÁVEL ADQUIRE NUM CONTEXTO INTERNACIONAL UM
              PAPEL EXTREMAMENTE RELEVANTE IDEALIZADA E TÃO ACLAMADA EM DIVERSOS
              CÍRCULOS INTELECTUAIS, CIENTÍFICOS E POLÍTICOS SERIA UM TIPO DE
              AGRICULTURA QUE PUDESSE CONSERVAR OS RECURSOS NATURAIS E
              FORNECESSE PRODUTOS SAUDÁVEIS (OU MAIS SAUDÁVEIS), SEM COMPROMETER
              OS NÍVEIS TECNOLÓGICOS JÁ ALCANÇADOS DE SEGURANÇA ALIMENTAR DOS
              PRODUTOS.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/*2 card acordeon  */}
        <Card style={{ background: "rgb(46,139,87)" }}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="success"
              eventKey="1"
              style={{
                background: "rgb(46,139,87)"
              }}
            >
              É POSSÍVEL UMA AGRONOMIA SUSTENTÁVEL ?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              PARA QUE A AGRICULTURA SUSTENTÁVEL SEJA UMA REALIDADE, É PRECISO
              ADOTAR ALGUMAS PRÁTICAS NA TERRA PARA DIMINUIR O IMPACTO CAUSADO
              AO MEIO AMBIENTE E DESENVOLVER SOLUÇÕES QUE POSSAM AJUDAR NESSE
              PROCESSO. DENTRE ELAS, ESTÁ DIMINUIR O USO DE ADUBOS QUÍMICOS,
              FERTILIZANTES E PESTICIDAS NOS ALIMENTOS, CRIAR FORMAS DE REÚSO DA
              ÁGUA DA CHUVA PARA ALIMENTAR O SISTEMA DE IRRIGAÇÃO DA FAZENDA,
              USAR FONTES DE ENERGIA LIMPA, DENTRE OUTRAS.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      <Alert variant="success" className="text-center">
        BENEFÍCIOS DA AGRICULTURA SUSTENTÁVEL
      </Alert>
      <Accordion defaultActiveKey="0">
        <Card style={{ background: "rgb(46,139,87)" }}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              eventKey="1"
              variant="success"
              style={{
                background: "rgb(46,139,87)"
              }}
            >
              SABER MAIS !
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                ADOTAR AS BOAS PRÁTICAS DA AGRICULTURA SUSTENTÁVEL É NÃO SÓ
                CONTRIBUIR PARA UM MUNDO COM MAIS QUALIDADE DE VIDA, MAS TER A
                CERTEZA DE PRODUZIR UM ALIMENTO COM MAIOR VALOR AGREGADO. ALGUNS
                BENEFÍCIOS DIRETOS QUE VOCÊ PODE ADQUIRIR AO ADOTAR ESSAS
                PRÁTICAS SUSTENTÁVEIS E DE FORMA CORRETA NA AGRICULTURA<b>:</b>
              </p>
              <p>
                <b>
                  MELHORIA DA GESTÃO DE ÁGUA, DA QUALIDADE DO SOLO E DA VIDA NO
                  CAMPO,AUMENTO DO VALOR AGREGADO DO PRODUTO E DA DIVERSIDADE
                  NAS LAVOURAS,DIVERSIFICAÇÃO DA BIODIVERSIDADE LOCAL.
                </b>
              </p>
              <p>
                VIU SÓ COMO É INTERESSANTE ADERIR A UMA AGRICULTURA
                AMBIENTALMENTE CORRETA?
              </p>{" "}
              BASTA INVESTIR EM BOAS PRÁTICAS QUE PERMITAM ACABAR COM HÁBITOS
              ANTIGOS E USUFRUIR DE TODOS OS BENEFÍCIOS DO DESENVOLVIMENTO
              SUSTENTÁVEL. LEMBRE-SE DE QUE A APLICAÇÃO DAS TÉCNICAS É A
              GARANTIA DA PRODUÇÃO DE ALIMENTOS CADA VEZ MAIS SAUDÁVEIS E LIMPOS
              PARA AS PRÓXIMAS GERAÇÕES.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Acordeon;
