import Header from './Components/Header';
import {ThemeProvider } from "@material-ui/core/styles";
import Theme from './theme';
import Main from './Pages/Main';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
