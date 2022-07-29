import Input from '../../../../components/Input';
import IconLoad from '../../../../components/IconLoad';
import FormButton from '../../../../components/FormButton';
import ButtonSection from '../../../../components/ButtonSection';
import { useState } from 'react';
import { Container } from './styles';
import { GetMySecretApiMethods } from '../../../../utils/global';

function Form({ setData, params, showMe }) {
  const [passwordError, setPasswordError] = useState({ p: false, m: '' });
  const [passwordValue, setPasswordValue] = useState('');
  const [fetching, setFetching] = useState(false);

  async function handleClick() {
    setFetching(true);

    if (!passwordValue.length) {
      setPasswordError({ p: true, m: 'Preencha este campo.' });
      setFetching(false);
      return;
    }

    try {
      const content = await GetMySecretApiMethods.delete(`secret/${params.uuid}/${params.encryptionKey}`, {
        password: passwordValue,
      });
      setData(content.data);
      showMe(false);
    } catch (e) {
      setPasswordError({ p: true, m: 'Senha incorreta.' });
    } finally {
      setFetching(false);
    }
  }


  function handleChangePassword({ target }) {
    setPasswordValue(target.value);
    if (target.value.trim()) {
      setPasswordError({ p: false, m: '' });
    }
  }

  return (
    <Container>
      <h2 style={{ color: 'white' }}>Informe a senha para acessar o segredo</h2>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor='myPasswd' style={{ marginTop: '28px' }}>Senha</label>
        <Input type='password' id='myPasswd' onChange={handleChangePassword} value={passwordValue} />
        {passwordError.p && <p style={{ color: '#D34242', marginTop: '8px' }}>{passwordError.m}</p>}

        <ButtonSection>
          <FormButton onClick={handleClick} bg='#8257E5' hover='#996DFF'>
            {fetching ? <IconLoad size={18} /> : 'Visualizar Segredo'}
          </FormButton>
        </ButtonSection>
      </form>
    </Container>
  );
}

export default Form;