import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { CustomToast } from '@components/common/toast';
import { theme } from 'referlink-ui';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomToast />
      <App />
    </ThemeProvider>
  </>,
);
