import { useState } from 'react';
import { ButtonSection, Container, FormButton } from './styles';

function Form() {
  const [passwd, setPasswd] = useState(false);

  return (
    <Container>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor='mySecret'>Meu segredo</label>
        <input type='text' id='mySecret' />
        {passwd && <><label htmlFor='myPasswd' style={{marginTop: '28px'}}>Senha</label>
        <input type='password' id='myPasswd' /></>}
        <ButtonSection>
          <FormButton onClick={() => setPasswd(!passwd)} bg='#29292E' hover='#37373D'>
            {passwd ? 'Remover Senha' : 'Adicionar Senha'}
          </FormButton>
          <FormButton bg='#8257E5' hover='#996DFF'>Compartilhar</FormButton>
        </ButtonSection>
      </form>
    </Container>
  );
}

export default Form;