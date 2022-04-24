import { GlobalStyle } from "./global/styles/theme";
import { CommentsProvider } from "./hooks/useComments";
import { Home } from "./pages/Home";
import { Sort } from "./pages/Sort";

function App() {

  return (
    <CommentsProvider>
      <Home />
      <Sort />
      <GlobalStyle />
    </CommentsProvider>
  );
}

export default App;
