import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { AlertToast } from '@components/common/toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AlertToast />
      <App />
    </ThemeProvider>
  </>,
);
