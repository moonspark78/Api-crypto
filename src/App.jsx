import './App.css';
import {ApiCrypto} from "./Components/ApiCrypto"
import {ApiCryptoDetail} from "./Components/ApiCryptoDetail"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={ <ApiCrypto/>}/>
          <Route path='crypto/:id' element={<ApiCryptoDetail />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
