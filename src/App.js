import './style//App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from './components/Carousel';
import ValuesSection from './Pages/ValuesSection';
import ContactSection from './Pages/ContactSection';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Navbar />
      <ControlledCarousel />
      <ValuesSection />
      <ContactSection />
    </div>
  );
}

export default App;
