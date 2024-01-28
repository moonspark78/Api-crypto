import './App.css';
import {ApiCrypto} from "./Components/ApiCrypto"
import {ApiCryptoDetail} from "./Components/ApiCryptoDetail"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CryptoProvider } from "./Context/CryptoProvider";

function App() {
  return (
    <div className="App">
    <Router>
      <CryptoProvider>
        <Routes>
          <Route path='/' element={ <ApiCrypto/>}/>
          <Route path='crypto/:id' element={<ApiCryptoDetail />}/>
        </Routes>
      </CryptoProvider>
    </Router>
    </div>
  );
}

export default App;
