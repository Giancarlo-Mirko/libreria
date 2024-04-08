import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './pages/theme/Theme.js';
import GlobalStyles from './pages/theme/GlobalStyles.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
