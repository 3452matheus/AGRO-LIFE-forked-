import Routes from "./routes/index";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Router>
      <Container>
        <Routes />
        <GlobalStyle />
      </Container>
    </Router>
  );
}
