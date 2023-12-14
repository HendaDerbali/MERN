import './App.css';
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        {/* Dashboard */}
        <Route path="/products" element={<Create />} />
      </Routes>

    </div>
  );
}

export default App;
