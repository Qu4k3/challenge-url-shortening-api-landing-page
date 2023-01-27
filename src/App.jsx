import { Header } from './components/Header';
import './App.scss';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Features } from './components/Features';

function App() {
  return (
    <>
      <Header />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
