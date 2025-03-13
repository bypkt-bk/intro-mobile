import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import City from './city.jsx';
import BlackWhite from './blackwhite.jsx';
import TaxCal from './taxcal.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<City />} />
        <Route path="/blackwhite" element={<BlackWhite />} />
        <Route path="/tax" element={<TaxCal />} />
      </Routes>
    </Router>
  );
}

export default App;
