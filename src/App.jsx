import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import CourseContent from './components/CourseContent';
import LogisticsSection from './components/LogisticsSection';
import SocialCommitment from './components/SocialCommitment';
import GuaranteeCTA from './components/GuaranteeCTA';
import Footer from './components/Footer';
import RedBanner from './components/RedBanner';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <RedBanner />
        <ProblemSection />
        <CourseContent />
        <LogisticsSection />
        <SocialCommitment />
        <GuaranteeCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
