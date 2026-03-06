import { useState } from 'react';
import { PressStart } from './components/PressStart';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <PressStart onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
