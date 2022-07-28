import { AiFillHeart } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./pages/Logo";
import SeeSecret from "./pages/SeeSecret";
import { Container, InfoText } from "./styles";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret/:uuid/:encryptionKey" element={<SeeSecret />} />
        </Routes>
        <InfoText>Feito com <AiFillHeart color="#8257E5" /> por <a href="https://github.com/kauelima21">Kauê</a></InfoText>
      </BrowserRouter>
    </Container>
  );
}

export default App
