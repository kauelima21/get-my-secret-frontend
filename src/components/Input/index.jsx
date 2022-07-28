import { Container } from './styles';

function Input({ type, id, onChange, value, ...props }) {
  return <Container type={type} id={id} onChange={onChange} value={value} {...props} />;
}

export default Input;