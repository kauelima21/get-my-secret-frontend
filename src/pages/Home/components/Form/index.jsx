import axios from 'axios';
import { useState } from 'react';
import { ButtonSection, Container, FormButton, Input, IconLoad } from './styles';

function Form({ data, setData }) {
  const [passwd, setPasswd] = useState(false);
  const [error, setError] = useState({ s: false, p: false });
  const [secret, setSecret] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [fetching, setFetching] = useState(false);

  function handleClick() {
    const content = secret.trim();

    if (!content) {
      setError({ s: true });
      return;
    }
    const params = {
      content,
    }

    const password = passwordValue.trim();

    if (password && password.length < 8) {
      setError({ p: true });
      return;
    }

    if (password) {
      params.password = password;
    }

    setFetching(true);
    axios.post('https://tadaqv8whj.execute-api.us-east-1.amazonaws.com/dev/secret', {
      content,
      password,
    }).then(response => {
      setData(response.data);
      setFetching(false);
    });
  }

  function handleChange({target}) {
    setSecret(target.value);
    if (target.value.trim()) {
      setError({ s: false });
    }
  }

  function handleChangePassword({target}) {
    setPasswordValue(target.value);
    if (target.value.trim()) {
      setError({ p: false });
    }
  }

  return (
    <Container>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor='mySecret'>Meu segredo</label>
        <Input type='text' id='mySecret' onChange={handleChange} value={secret} />
        {error.s && <p style={{color: '#D34242', marginTop: '8px'}}>Não pode criar um segredo vazio.</p>}

        {passwd &&
          <>
            <label htmlFor='myPasswd' style={{marginTop: '28px'}}>Senha</label>
            <Input type='password' id='myPasswd' onChange={handleChangePassword} value={passwordValue} />
            {error.p && <p style={{color: '#D34242', marginTop: '8px'}}>A senha precisa ter mais de 8 caracteres.</p>}
          </>
        }

        <ButtonSection>
          <FormButton onClick={() => setPasswd(!passwd)} bg='#29292E' hover='#37373D'>
            {passwd ? 'Remover Senha' : 'Adicionar Senha'}
          </FormButton>
          <FormButton onClick={handleClick} bg='#8257E5' hover='#996DFF'>
            { fetching ? <IconLoad size={18} fetching={fetching ? 1 : 0} /> : 'Compartilhar'}
          </FormButton>
        </ButtonSection>
      </form>
    </Container>
  );
}

export default Form;