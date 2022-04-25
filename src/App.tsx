import { GlobalStyle } from "./global/styles/theme";
import { CommentsProvider } from "./hooks/useComments";
import { Home } from "./pages/Home";
import { Sort } from "./pages/Sort";

function App() {

  return (
    <CommentsProvider>
      <Home />
      <br />
      <br />
      <br />
      <Sort />
      <GlobalStyle />
    </CommentsProvider>
  );
}

export default App;
