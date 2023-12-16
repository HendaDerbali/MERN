import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main';
import { OneProduct } from './components/OneProduct';
import Update from './components/Update'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">

      <Routes>

        {/* Main page */}
        <Route path="/" element={<Main />} />
        {/* Get One Product :  */}
        <Route path="/products/:id" element={<OneProduct />} />
        {/* Update One Product :  */}
        <Route path="/product/edit/:id" element={<Update />} />

      </Routes>

    </div>
  );
}

export default App;
