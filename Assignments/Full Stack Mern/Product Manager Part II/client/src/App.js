import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main';
import { OneProduct } from './components/OneProduct';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <Routes>
        {/* Main page */}
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<OneProduct />} />

      </Routes>

    </div>
  );
}

export default App;
