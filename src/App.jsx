import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BMRCalculator from './components/BMRCalculator.jsx'
import TDEECalculator from './components/TDEECalculator.jsx'
import CaloriesCalculator from './components/CaloriesCalculator.jsx'
import CaloriesTable from './components/CaloriesTable.jsx'

import Home from './pages/Home.jsx';

function App() {
 
  return (
   
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/bmr-kalkulator' element={<BMRCalculator />} />
        <Route path='/tdee-kalkulator' element={<TDEECalculator />} />
        <Route path='/kalorije-kalkulator' element={<CaloriesCalculator />} />
        <Route path='/tablica/:type' element={<CaloriesTable />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
