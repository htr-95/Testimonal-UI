import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Pricing from './components/pricing/Pricing';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <><Header />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer /></>
  );
}

export default App;
