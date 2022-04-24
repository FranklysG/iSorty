import { FaInstagram } from 'react-icons/fa';
import { Container, Label, SignInWithInstagram } from "./style";

export function Login() {

    return (
        <Container>
            <Label>
                Seus sorteios de forma rapida e simples
            </Label>
            <SignInWithInstagram>
                <FaInstagram size={24} />
                Entrar com instagram
            </SignInWithInstagram>
        </Container>
    )
}