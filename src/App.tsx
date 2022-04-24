
import { Container } from "./App.style";
import { Login } from "./components/Login";
import { Message } from "./components/Message";
import { GlobalStyle } from "./global/styles/theme";

function App() {

  return (
    <Container>
      <Message />
      <Login />
      <GlobalStyle />
    </Container>
  );
}

export default App;
