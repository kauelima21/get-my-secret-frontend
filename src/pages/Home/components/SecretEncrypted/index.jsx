import CopyToClipboard from 'react-copy-to-clipboard';
import Input from '../../../../components/Input';
import FormButton from '../../../../components/FormButton';
import ButtonSection from '../../../../components/ButtonSection';
import { Container } from './styles';
import { BiCopy } from 'react-icons/bi';
import { useEffect, useState } from 'react';

function SecretEncrypted({ data }) {
  const [copy, setCopy] = useState(false);
  const baseURL = 'https://get-my-secret-frontend.vercel.app';
  const value = `${baseURL}/secret/${data.secretUUID}/${data.encryptionKey}`;

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  }, [copy]);


  return (
    <Container>
      <Input type="text" value={value} disabled />
      <ButtonSection>
        <a href='/'>
          <FormButton bg='#29292E' hover='#37373D'>Novo segredo</FormButton>
        </a>
        <CopyToClipboard onCopy={() => setCopy(true)} text={value}>
          <FormButton bg='#8257E5' hover='#996DFF'>
            <BiCopy size={18} />
            {copy ? 'Copiado' : 'Copiar'}
          </FormButton>
        </CopyToClipboard>
      </ButtonSection>
    </Container>
  );
}

export default SecretEncrypted;
