import { Router } from 'routes/Router';

function App() {
  console.log(process.env.REACT_APP_SIGNUP_URL);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
