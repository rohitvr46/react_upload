import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Featuresbus from './components/Featuresbus';
import Career from './components/Career';
import Slider2 from './components/Slider2';
import Contact from './components/Contact';
import Services from './components/Services';
import Copyright from './components/Copyright';
import Careers from './components/pages/Careers';
import Techarticles from './components/pages/Techarticles';
import Contactus from './components/pages/Contactus';
import Univrelations from './components/pages/Univrelations';
import Mainhome from './components/Mainhome';
import Mainservices from './components/pages/Mainservices';
import Semicustom from './components/pages/Semicustom';
import Highvoltage from './components/pages/Highvoltage';
import Mixedsignal from './components/pages/Mixedsignal';
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
         <Route path='/high-voltage' element={<Highvoltage/>}/>
         <Route path='/mixed-signal' element={<Mixedsignal/>}/>
      </Routes>

  );
}

export default App;
