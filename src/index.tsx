import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { CustomToast } from '@components/common/toast';
import { theme } from 'referlink-ui';
import GlobalStyle from './styles/global';
import ReactModal from 'react-modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

ReactModal.setAppElement('#root');

root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomToast />
      <App />
    </ThemeProvider>
  </>,
);
