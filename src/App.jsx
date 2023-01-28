import { Header } from './components/Header';
import './App.scss';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Features } from './components/Features';
import { Shortener } from './components/Shortener';

function App() {
  return (
    <>
      <Header />
      <Shortener />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
