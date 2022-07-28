import Input from '../../../../components/Input';
import IconLoad from '../../../../components/IconLoad';
import FormButton from '../../../../components/FormButton';
import ButtonSection from '../../../../components/ButtonSection';
import { useState } from 'react';
import { Container } from './styles';
import { GetMySecretApiMethods } from '../../../../utils/global';

function Form({ setData }) {
  const [passwd, setPasswd] = useState(false);
  const [error, setError] = useState({ s: false, p: false, m: '' });
  const [secret, setSecret] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [fetching, setFetching] = useState(false);

  async function handleClick() {
    const content = secret.trim();

    if (!content) {
      setError({ s: true, m: 'Não pode criar um segredo vazio.' });
      return;
    }
    const body = {
      content,
    }

    const password = passwordValue.trim();

    if (password && password.length < 8) {
      setError({ p: true, m: 'A senha precisa ter mais de 8 caracteres.' });
      return;
    }

    if (password) {
      body.password = password;
    }

    setFetching(true);
    try {
      const res = await GetMySecretApiMethods.post(`secret`, body);

      setData(res.data);
    } catch (e) {
      setError({ s: true, m: "Estamos com alguns problemas, tente novamente mais tarde." });
    } finally {
      setFetching(false);
    }
  }

  function handleChangeSecret({ target }) {
    setSecret(target.value);
    if (target.value.trim()) {
      setError({ s: false });
    }
  }

  function handleChangePassword({ target }) {
    setPasswordValue(target.value);
    if (target.value.trim()) {
      setError({ p: false });
    }
  }

  return (
    <Container>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor='mySecret'>Meu segredo</label>
        <Input type='text' id='mySecret' onChange={handleChangeSecret} value={secret} />
        {error.s && <p style={{ color: '#D34242', marginTop: '8px' }}>{error.m}</p>}

        {passwd &&
          <>
            <label htmlFor='myPasswd' style={{ marginTop: '28px' }}>Senha</label>
            <Input type='password' id='myPasswd' onChange={handleChangePassword} value={passwordValue} />
            {error.p && <p style={{ color: '#D34242', marginTop: '8px' }}>{error.m}</p>}
          </>
        }

        <ButtonSection>
          <FormButton onClick={() => setPasswd(!passwd)} bg='#29292E' hover='#37373D'>
            {passwd ? 'Remover Senha' : 'Adicionar Senha'}
          </FormButton>
          <FormButton onClick={handleClick} bg='#8257E5' hover='#996DFF'>
            {fetching ? <IconLoad size={18} /> : 'Compartilhar'}
          </FormButton>
        </ButtonSection>
      </form>
    </Container>
  );
}

export default Form;