import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import About from './pages/About';
import Contact from './pages/Contact';
import UGC from './pages/UGC';
import Footer from './components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabase_url, supabase_anon_key);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/ugc" element={<UGC />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
