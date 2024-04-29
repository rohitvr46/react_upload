import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Careers from './components/pages/Careers';
import Techarticles from './components/pages/Techarticles';
import Contactus from './components/pages/Contactus';
import Univrelations from './components/pages/Univrelations';
import Mainhome from './components/Mainhome';
import Mainservices from './components/pages/Mainservices';
import Semicustom from './components/pages/Semicustom';
import Fullcustom from './components/pages/Fullcustom';
import Highvoltage from './components/pages/Highvoltage';
import Aboutus from './components/pages/Aboutus';




function App() {
  return (
    <Routes>
         <Route path='/' element={<Mainhome/>}/>
         <Route path="/careers" element={<Careers/>}/>
         <Route path="/about-us" element={<Aboutus/>}/>
         <Route path="/techarticles" element={<Techarticles/>}/>
         <Route path="contactus" element={<Contactus/>}/>
         <Route path="/univrelations" element={<Univrelations/>}/>
         <Route path='/services' element={<Mainservices/>}/>
         <Route path='/semi-custom' element={<Semicustom/>}/>
         <Route path='/full-custom' element={<Fullcustom/>}/>
         <Route path='/high-voltage' element={<Highvoltage/>}/>
      </Routes>

  );
}

export default App;
