import { Header } from './components/Header';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Features } from './components/Features';
import { Shortener } from './components/Shortener';
import './App.scss';
import './styles/_responsive.scss'

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
