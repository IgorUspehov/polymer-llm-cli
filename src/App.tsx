import { LangProvider } from './LangContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Articles from './components/Articles';
import Logs from './components/Logs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #1e2530, transparent)' }} />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <div style={{ minHeight: '100vh' }}>
        <div className="scanlines" />
        <div className="crt-vignette" />

        <Nav />

        <main>
          <Hero />
          <Divider />
          <Tools />
          <Divider />
          <Articles />
          <Divider />
          <Logs />
          <Divider />
          <Contact />
        </main>

        <Footer />
      </div>
    </LangProvider>
  );
}
