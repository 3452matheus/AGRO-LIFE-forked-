import React from "react";
import Header from "../../components/header/index";

import Carrossel from "../../components/carrossel/index";
import Jumbotron from "../../components/jumbotron/index";
import Cards from "../../components/cards/index";
import Acordeon from "../../components/acordeon/index";
import Footer from "../../components/footer/index";
const Home = () => {
  return (
    <>
      <Header />

      <b>PÁGINA-PRINCIPAL</b>
      <br />
      <Carrossel />
      <br />
      <Jumbotron />
      <Acordeon />
      <br />
      <h1>PLANO MENSAL</h1>
      <br />
      <Cards />
      <br />

      <Footer />
    </>
  );
};

export default Home;
