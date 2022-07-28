import { Container } from './styles';

function FormButton({ children, bg, hover, ...props }) {
  return <Container bg={bg} hover={hover} {...props}>{children}</Container>;
}

export default FormButton;  