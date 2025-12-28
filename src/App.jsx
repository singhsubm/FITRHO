import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signature from './components/Signature';
import Schedule from './components/Schedule';
import Discover from './components/Discover';
import Commitment from './components/Commitment';
import Team from './components/Team';
import Footer from './components/Footer';
import Faq from './components/Faq';


function App() {

  return (
    <>
    <div className="bg-slate-950 min-h-screen text-brand-gold font-nunito overflow-x-hidden">

      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="story">
        <Signature />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="services">
        {/* <Discover /> */}
        <Discover />
      </section>

      <section id="commitment">
        <Commitment />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
    </>
  )
}

export default App
