import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./pages/Logo";
import SeeSecret from "./pages/SeeSecret";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret/:uuid/:encryptionKey" element={<SeeSecret />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App
