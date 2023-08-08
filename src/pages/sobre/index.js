import React from "react";
import Header from "../../components/header/index";
import capa from "../../assets/capa.jfif";

const Sobre = () => {
  return (
    <>
      <Header />

      <div>
        <b>PÁGINA-SOBRE</b>
      </div>

      <table
        style={{
          width: "100%",
          backgroundColor: "rgb(46,139,87)",
          color: "white"
        }}
      >
        <tr
          style={{
            height: "40px",
            textAlign: "center",
            fontWeight: "bold",
            border: "solid"
          }}
        >
          <td style={{ width: "50%" }}>FOTO</td>
          <td style={{ width: "50%" }}>MEUS DADOS </td>
        </tr>
        <tr style={{ height: "70vh" }}>
          <td style={{ width: "50%", textAlign: "center" }}>
            <img src={capa} alt="capa da impresa" />
          </td>
          <td style={{ width: "50%" }}>
            <b>NOME:</b>
            <i>MATHEUS RUFINO SILVA SANTOS </i>
            <br />
            <b>DATA :</b>
            <i> 9/11/2021 12:23 </i>
            <br />
            <b>CURSO: </b>
            <i>ETIM INFORMÁTICA PARA INTERNET </i>
            <br />
            <b>SERIE: </b>
            <u>2 ANO</u>
            <br />

            <b>DADOS DA EMPRESA </b>
            <br />
            <b>EMAIL:</b>
            <i>agro-life_sustentavel@gmail.com</i>
            <br />
            <b>TELEFONE:</b>
            <b>(18) 4578-9989</b>
            <br />
            <i>
              <u>
                <b style={{ background: " #23D87F78" }}>
                  “O sucesso nasce do querer, da determinação e persistência em
                  se chegar a um objetivo. Mesmo não atingindo o alvo, quem
                  busca e vence obstáculos, no mínimo fará coisas admiráveis” –
                  José de Alencar
                </b>{" "}
              </u>
            </i>
          </td>
        </tr>
        <tr style={{ height: "50px", textAlign: "center" }}>
          <td colSpan={2}>DESENVOLVIDO PELO MATHEUS RUFINO VERSÃO 1.17 </td>
        </tr>
      </table>
    </>
  );
};

export default Sobre;
