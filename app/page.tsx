'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  color: string;
}



export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);


  const handleStartJourney = () => {
    setIsAnimating(true);
    
    // Create particle effect
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6'
      });
    }
    setParticles(newParticles);

    // Redirect after 3 seconds
    setTimeout(() => {
      window.open('https://www.santacruzbicycles.com', '_blank');
    }, 3000);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setParticles(prev => prev.map(particle => ({
          ...particle,
          x: particle.x + Math.cos(particle.angle) * particle.speed,
          y: particle.y + Math.sin(particle.angle) * particle.speed,
          angle: particle.angle + 0.02,
          size: particle.size * 0.99
        })));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isDarkMode 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-purple-800/30' 
            : 'bg-gradient-to-br from-purple-200/30 via-blue-200/30 to-purple-300/30'
        }`}></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className={`bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Mountain
              </span>
              <br />
              <span className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Biking
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Age is just a number. At 13, I&apos;m already conquering trails that challenge riders twice my age. 
              This is my journey through the world of mountain biking.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-purple-600/30' 
                  : 'bg-white/80 border-purple-400/30 shadow-lg'
              }`}>
                <div className="text-3xl font-bold text-purple-400 mb-2">13</div>
                <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Years Young</div>
              </div>
              <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-blue-600/30' 
                  : 'bg-white/80 border-blue-400/30 shadow-lg'
              }`}>
                <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Trails Conquered</div>
              </div>
              <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-purple-600/30' 
                  : 'bg-white/80 border-purple-400/30 shadow-lg'
              }`}>
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pure Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                My Story
              </span>
            </h2>
            
            <div className={`space-y-6 text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>
                Just because I&apos;m 13 doesn&apos;t mean I can&apos;t shred like the pros. I&apos;ve been riding since I was 8, 
                and my passion for mountain biking has only grown stronger with every trail I conquer.
              </p>
              
              <p>
                My bike isn&apos;t just a bike – it&apos;s my partner in adventure. Together, we&apos;ve tackled everything 
                from smooth flow trails to technical rock gardens that would make even experienced riders think twice.
              </p>
              
              <p>
                Age is just a number. What matters is skill, determination, and the love for the sport. 
                I&apos;m here to prove that young riders can be just as skilled, if not more, than their older counterparts.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Achievements
              </span>
            </h3>
            
            <div className="space-y-6">
              <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-purple-600/30' 
                  : 'bg-white/80 border-purple-400/30 shadow-lg'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Technical Riding</span>
                  <span className="text-purple-400 font-bold">99%</span>
                </div>
                <div className={`w-full rounded-full h-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full" style={{width: '99%'}}></div>
                </div>
                <p className={`text-sm mt-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Expert level - can tackle any trail
                </p>
              </div>

              <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-blue-600/30' 
                  : 'bg-white/80 border-blue-400/30 shadow-lg'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Trail Navigation</span>
                  <span className="text-blue-400 font-bold">76%</span>
                </div>
                <div className={`w-full rounded-full h-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full" style={{width: '76%'}}></div>
                </div>
                <p className={`text-sm mt-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Excellent route planning skills
                </p>
              </div>

              <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-purple-600/30' 
                  : 'bg-white/80 border-purple-400/30 shadow-lg'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Bike Maintenance</span>
                  <span className="text-purple-400 font-bold">85%</span>
                </div>
                <div className={`w-full rounded-full h-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className={`text-sm mt-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Pro-level mechanic knowledge
                </p>
              </div>

              <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-blue-600/30' 
                  : 'bg-white/80 border-blue-400/30 shadow-lg'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Fear Factor</span>
                  <span className="text-blue-400 font-bold">28%</span>
                </div>
                <div className={`w-full rounded-full h-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full" style={{width: '28%'}}></div>
                </div>
                <p className={`text-sm mt-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Minimal fear - very confident
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className={`backdrop-blur-sm rounded-3xl p-12 border transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/80 border-purple-600/30' 
            : 'bg-white/80 border-purple-400/30 shadow-lg'
        }`}>
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Ride?
            </span>
          </h2>
          
          <p className={`text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you&apos;re 13 or 30, age doesn&apos;t define your potential. 
            Get out there, push your limits, and discover what you&apos;re truly capable of.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <button 
                onClick={handleStartJourney}
                disabled={isAnimating}
                className={`relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isAnimating ? 'animate-pulse' : ''
                }`}
              >
                {isAnimating ? 'Opening Portal...' : 'Start Your Journey'}
              </button>
              
              {/* Portal Animation Overlay */}
              {isAnimating && (
                <div className="absolute inset-0 -z-10">
                  {/* Spinning Portal Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-spin" 
                       style={{animationDuration: '2s'}}></div>
                  
                  {/* Inner Portal Ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-spin" 
                       style={{animationDuration: '1.5s', animationDirection: 'reverse'}}></div>
                  
                  {/* Particle Effects */}
                  {particles.map(particle => (
                    <div
                      key={particle.id}
                      className="absolute w-2 h-2 rounded-full animate-pulse"
                      style={{
                        left: `calc(50% + ${particle.x}px)`,
                        top: `calc(50% + ${particle.y}px)`,
                        backgroundColor: particle.color,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.size / 6,
                        transform: `translate(-50%, -50%)`
                      }}
                    />
                  ))}
                  
                  {/* Portal Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
                </div>
              )}
            </div>
            
            <button className={`border-2 font-bold py-4 px-8 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white' 
                : 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
            }`}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p className={`transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          © 2024 Mountain Biking Journey | Age is just a number, passion is everything
        </p>
      </footer>


    </div>
  );
}
