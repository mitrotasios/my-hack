import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Customers from './components/customers/Customers';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route exact path='/customers' element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
