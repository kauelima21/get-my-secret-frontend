import Form from './components/Form';
import SecretEncrypted from './components/SecretEncrypted';
import { Container } from './styles';
import { useState } from 'react';

function Home() {
  const [data, setData] = useState(null);

  return (
    <Container>
      {!data && <>
        <Form setData={setData} />
        <p>Compartilhe segredos com um link que <span>só funciona uma vez</span> e depois se autodestrói!</p>
      </>}
      {data && <SecretEncrypted data={data} setData={setData} />}
    </Container>
  );
}

export default Home;