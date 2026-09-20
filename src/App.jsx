import React, { useState } from 'react';
import AudioPlayer from './components/AudioPlayer';
import BackgroundEffects from './components/BackgroundEffects';
import WelcomeSection from './components/WelcomeSection';
import BirthdaySection from './components/BirthdaySection';
import MemoriesSection from './components/MemoriesSection';
import LoveLetterSection from './components/LoveLetterSection';
import EndingSection from './components/EndingSection';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenGift = () => {
    // Start music on first interaction
    setIsPlaying(true);

    // Smooth scroll down to Birthday Section
    const birthdaySection = document.getElementById('birthday-section');
    if (birthdaySection) {
      birthdaySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayAgain = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-body text-slate-800 selection:bg-pink-200 selection:text-rose-900">
      {/* Background Ambient Floating Particles */}
      <BackgroundEffects />

      {/* Music Player Control Floating Pill */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Welcome Opening Screen */}
        <WelcomeSection onOpenGift={handleOpenGift} />

        {/* Section 2: Birthday Main Wishes */}
        <BirthdaySection />

        {/* Section 3: Our Memories Photo Grid */}
        <MemoriesSection />

        {/* Section 4: Little Love Letter Envelope */}
        <LoveLetterSection />

        {/* Section 5: Ending & Replay */}
        <EndingSection onPlayAgain={handlePlayAgain} />
      </main>
    </div>
  );
}
