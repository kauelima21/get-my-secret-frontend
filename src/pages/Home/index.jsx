import logoSvg from '../../assets/message-send-svgrepo-com.svg';
import Form from './components/Form';
import SecretEncrypted from './components/SecretEncrypted';
import { Container, Logo } from './styles';
import { useState } from 'react';

function Home() {
  const [data, setData] = useState(null);

  return (
    <Container>
      <Logo to='/'>
        <img src={logoSvg} alt="logo" />
        <h1>GetMySecret</h1>
      </Logo>
      <p>Compartilhe segredos com um link que <span>só funciona uma vez</span> e depois se autodestrói!</p>
      { !data && <Form data={data} setData={setData} /> }
      { data && <SecretEncrypted data={data} setData={setData} /> }
    </Container>
  );
}

export default Home;