import { FaInstagram } from 'react-icons/fa';
import { Container, SignInWithInstagram } from "./style";

export function Login() {

    return (
        <Container>
            <strong>Entre e compartilhe sua mensagem</strong>
            <SignInWithInstagram>
                <FaInstagram size={24} />
                Entrar com github
            </SignInWithInstagram>
        </Container>
    )
}