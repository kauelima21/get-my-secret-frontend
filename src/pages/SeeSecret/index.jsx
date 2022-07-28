import Form from './components/Form';
import IconLoad from '../../components/IconLoad';
import FormButton from '../../components/FormButton';
import ButtonSection from '../../components/ButtonSection';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BiCopy } from 'react-icons/bi';
import { Container, BoxResult } from './styles';
import { useParams } from 'react-router-dom';
import { GetMySecretApiMethods } from '../../utils/global';
import { useState } from 'react';

export default function SeeSecret() {
  const params = useParams();
  const [copy, setCopy] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(null);
  const [hasPassword, setHasPassword] = useState(false);

  async function handleClick() {
    let secret;
    setFetching(true);
    try {
      secret = await GetMySecretApiMethods.get(`secret/${params.uuid}`);
    } catch (e) {
      setClicked(true);
      setError(e);
    }

    if (!secret) {
      return
    }

    if (secret.hasOwnProperty('password')) {
      setClicked(true);
      setHasPassword(true);
      return;
    }

    decryptSecret();
    setClicked(true);
  }

  async function decryptSecret() {
    try {
      const content = await GetMySecretApiMethods.delete(`secret/${params.uuid}/${params.encryptionKey}`);
      setData(content.data);
    } catch (e) {
      setError(e);
    } finally {
      setFetching(false);
    }
  }

  if (error) {
    return <Container>
      <BoxResult>
        <p>Ooops... Parece que esse segredo não existe ou então já expirou!</p>
        <ButtonSection>
          <a href='/'>
            <FormButton bg='#29292E' hover='#37373D'>Novo segredo</FormButton>
          </a>
        </ButtonSection>
      </BoxResult>
    </Container>
  }

  return <Container>
    {data && <BoxResult>
      <p>{data}</p>
      <ButtonSection>
        <a href="/">
          <FormButton bg='#E83F5B' hover='#E55050'>
            Apagar Secredo
          </FormButton>
        </a>
        <CopyToClipboard onCopy={() => setCopy(true)} text={data}>
          <FormButton bg='#8257E5' hover='#996DFF'>
            <BiCopy size={18} />
            {copy ? 'Copiado' : 'Copiar'}
          </FormButton>
        </CopyToClipboard>
      </ButtonSection>
    </BoxResult>}

    {hasPassword && <Form setData={setData} params={params} showMe={setHasPassword} />}

    {!clicked && <FormButton bg='#8257E5' hover='#996DFF' onClick={handleClick} size={16}>
      {fetching ? <IconLoad size={18} /> : 'Visualizar segredo'}
    </FormButton>}
  </Container>;
}
