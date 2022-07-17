import { Container, Logo } from './styles';
import logoSvg from '../../assets/message-send-svgrepo-com.svg';
import Form from './components/Form';

function Home() {
  return (
    <Container>
      <Logo to='/'>
        <img src={logoSvg} alt="logo" />
        <h1>GetMySecret</h1>
      </Logo>
      <p>Compartilhe segredos com um link que <span>só funciona uma vez</span> e depois se auto-destrói!</p>
      <Form />
    </Container>
  );
}

export default Home;