import './App.css'
import MapMainSection from './components/MapMainSection/MapMainSection';
import SliderSection from './components/SliderSection/SliderSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <>
      <Header />


      <HeroSection />
      <MapMainSection />
      <SliderSection />

      <Footer />
    </>
  );
}
