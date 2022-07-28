import logoSvg from '../../assets/message-send-svgrepo-com.svg';
import { Container } from './styles';

function Logo() {
  return <Container to='/'>
    <img src={logoSvg} alt="logo" />
    <h1>GetMySecret</h1>
  </Container>;
}

export default Logo;