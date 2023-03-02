import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import AuthProvider from './Context';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
