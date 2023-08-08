import React from "react";
import { Card, Alert } from "react-bootstrap";

const Cards2 = () => {
  return (
    <>
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Body>
          <Card.Title>PLANO 1</Card.Title>
          <Card.Text>
            <p>
              <b>SISTEMA AUTÔNOMO DE RIGAMENTOS ATRAVÉS DA ÁGUA DA CHUVA</b>
            </p>
            <p>
              TODO PROCESSO SERÁ AUTOMATIZADO E SE RESUMI EM 3 ETAPAS: CAPTAÇÃO,
              TRATAMENTO E ARMAZENAGEM. AS ÁGUAS PLUVIAIS SERÃO COLETADAS
              ATRAVÉS DO TELHADO DA RESIDÊNCIA E CONDUZIDAS PARA UM RESERVATÓRIO
              DE TRATAMENTO, ONDE SERÁ DOSADA UMA SOLUÇÃO DESINFECTANTE. LOGO
              QUE TRATADAS, AS MESMAS SERÃO REMANEJADAS PARA UM RESERVATÓRIO DE
              ARMAZENAGEM, DISPONIBILIZANDO-AS PARA USO. COM ISSO ESTE PROJETO
              VISA COLABORAR COM A ECONOMIA DE ÁGUA POTÁVEL E MINIMIZAR OS
              IMPACTOS CAUSADOS POR FORTES PERÍODOS DE CHUVAS COMO ALAGAMENTOS,
              ENCHENTES ENTRE OUTROS
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">$12,000,000,</Card.Footer>
      </Card>
      <br />
      {/*card2 */}
      <Card style={{ background: "rgb(46,139,87)" }}>
        <Card.Body>
          <Card.Title>PLANO 2</Card.Title>
          <Card.Text>
            <p>
              <b>DESENVOLVIMENTO AO MEIO AMBIENTE</b>
            </p>
            <p>
              O DESENVOLVIMENTO SUSTENTÁVEL É UM CONCEITO ELABORADO PARA FAZER
              REFERÊNCIA AO MEIO AMBIENTE E À CONSERVAÇÃO DOS RECURSOS NATURAIS.
              ENTENDE-SE POR DESENVOLVIMENTO SUSTENTÁVEL A CAPACIDADE DE
              UTILIZAR OS RECURSOS E OS BENS DA NATUREZA SEM COMPROMETER A
              DISPONIBILIDADE DESSES ELEMENTOS PARA AS GERAÇÕES FUTURAS.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">$1,500,000,</Card.Footer>
      </Card>
      <br />
      <Alert variant="success" className="text-center">
        O MAIS ESCOLHIDO
      </Alert>
      {/*card3 */}
      <Card style={{ background: "rgb(46,139,87)", color: "white" }}>
        <Card.Body>
          <Card.Title>PLANO 3</Card.Title>
          <Card.Text>
            <p>
              <b>PLANO PARA AS PLANTAÇÃO AUTÔNOMO SUSTENTÁVEL</b>
            </p>
            <p>
              VEÍCULOS AUTÔNOMOS SÃO CAPAZES DE PULVERIZAR A LAVOURA SOZINHO,
              SEM A NECESSIDADE DE OPERADORES DENTRO DA CABINE, NÃO É FICÇÃO
              CIENTÍFICA. JÁ EXISTEM DIVERSOS PROTÓTIPOS DE MÁQUINAS AGRÍCOLAS
              TOTALMENTE AUTOMATIZADAS, QUE SE ORIENTAM POR CAMERAS, SENSORES E
              GPS, E PODEM ASSUMIR RESPONSABILIDADES NO CAMPO COM SEGURANÇA E
              EFICIÊNCIA.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">$900,000,</Card.Footer>
      </Card>
      <br />
      {/*card4 */}
      <Card style={{ background: "rgb(46,139,87)", color: "white" }}>
        <Card.Body>
          <Card.Title>PLANO 4</Card.Title>
          <Card.Text>
            <p>
              <b>REDUZA A POLUIÇÃO EM 45% NO SEU AGRONEGÓCIO</b>
            </p>

            <p>
              {" "}
              É PRECISO QUE HAJA UMA MUDANÇA NA FORMA COMO O SETOR INDUSTRIAL E
              O AGRONEGÓCIO ENXERGAM O MEIO AMBIENTE E O IMPACTO DE SUAS
              ATIVIDADES SOBRE ELE. OS RESÍDUOS, POR EXEMPLO, AINDA SÃO VISTOS
              SIMPLESMENTE COMO LIXO, QUANDO NA VERDADE PODERIAM SER
              REAPROVEITADOS DE MANEIRA A REDUZIR OS IMPACTOS AMBIENTAIS E
              PRESERVAR OS RECURSOS NATURAIS.
            </p>
            <p>
              VOCÊ PODE FAZER PARA REDUZI-LOS OU COMBATÊ-LOS. DENTRE AS
              PRINCIPAIS ALTERNATIVAS PARA COLOCAR ESSA MISSÃO EM PRÁTICA,
              DESTACAM-SE:
            </p>
            <p>
              <b>
                {" "}
                • REFLORESTAMENTO; • FISCALIZAÇÃO DE ATIVIDADES POLUIDORAS; •
                CONTROLE NO USO DE FERTILIZANTES E AGROTÓXICOS; • USO DE
                PRODUTOS BIODEGRADÁVEIS; • COLETA SELETIVA E DESCARTE CORRETO DE
                RESÍDUOS.
              </b>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">$1,950,000,</Card.Footer>
      </Card>
    </>
  );
};
export default Cards2;
