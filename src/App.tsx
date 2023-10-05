import { Router } from 'routes/Router';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
