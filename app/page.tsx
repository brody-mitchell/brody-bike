"use client";

import { useState, useEffect } from "react";

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
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
        color: Math.random() > 0.5 ? "#06b6d4" : "#14b8a6",
      });
    }
    setParticles(newParticles);

    // Redirect after 3 seconds
    setTimeout(() => {
      window.open("https://www.santacruzbicycles.com", "_blank");
    }, 3000);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setParticles((prev) =>
          prev.map((particle) => ({
            ...particle,
            x: particle.x + Math.cos(particle.angle) * particle.speed,
            y: particle.y + Math.sin(particle.angle) * particle.speed,
            angle: particle.angle + 0.02,
            size: particle.size * 0.99,
          }))
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/mtbpic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center center' : 'center top',
          backgroundRepeat: 'no-repeat',
          height: '115vh',
          transform: isMobile ? 'none' : `translateY(${scrollY * -0.1}px)`,
          filter: isMobile ? 'brightness(0.8) contrast(1.1)' : 'none',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/40 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Theme Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border border-white/30"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  Mountain
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Biking
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg max-w-3xl mx-auto">
                Age is just a number. At 13, I&apos;m already conquering trails
                that challenge riders twice my age. This is my journey through
                the world of mountain biking.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="backdrop-blur-md rounded-2xl p-6 border border-white/20 bg-white/10">
                                  <div className="text-3xl font-bold text-cyan-300 mb-2">
                  13
                </div>
                <div className="text-white/80">Years Young</div>
              </div>
              <div className="backdrop-blur-md rounded-2xl p-6 border border-white/20 bg-white/10">
                <div className="text-3xl font-bold text-teal-300 mb-2">∞</div>
                <div className="text-white/80">Trails Conquered</div>
              </div>
              <div className="backdrop-blur-md rounded-2xl p-6 border border-white/20 bg-white/10">
                <div className="text-3xl font-bold text-cyan-300 mb-2">
                  100%
                </div>
                  <div className="text-white/80">Pure Passion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Story */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                    My Story
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-white/90 drop-shadow-md">
                  <p>
                    Just because I&apos;m 13 doesn&apos;t mean I can&apos;t
                    shred like the pros. I&apos;ve been riding since I was 8,
                    and my passion for mountain biking has only grown stronger
                    with every trail I conquer.
                  </p>

                  <p>
                    My bike isn&apos;t just a bike – it&apos;s my partner in
                    adventure. Together, we&apos;ve tackled everything from
                    smooth flow trails to technical rock gardens that would make
                    even experienced riders think twice.
                  </p>

                  <p>
                    Age is just a number. What matters is skill, determination,
                    and the love for the sport. I&apos;m here to prove that
                    young riders can be just as skilled, if not more, than their
                    older counterparts.
                  </p>
                </div>
              </div>

              {/* Right Column - Skills */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Skills & Achievements
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="backdrop-blur-md rounded-xl p-6 border border-white/20 bg-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-white/90">
                        Technical Riding
                      </span>
                      <span className="text-cyan-300 font-bold">99%</span>
                    </div>
                    <div className="w-full rounded-full h-4 bg-white/20">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-teal-500 h-4 rounded-full"
                        style={{ width: "99%" }}
                      ></div>
                    </div>
                    <p className="text-sm mt-3 text-white/70">
                      Expert level - can tackle any trail
                    </p>
                  </div>

                  <div className="backdrop-blur-md rounded-xl p-6 border border-white/20 bg-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-white/90">
                        Trail Navigation
                      </span>
                      <span className="text-teal-300 font-bold">76%</span>
                    </div>
                    <div className="w-full rounded-full h-4 bg-white/20">
                      <div
                        className="bg-gradient-to-r from-teal-400 to-cyan-500 h-4 rounded-full"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                    <p className="text-sm mt-3 text-white/70">
                      Excellent route planning skills
                    </p>
                  </div>

                  <div className="backdrop-blur-md rounded-xl p-6 border border-white/20 bg-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-white/90">
                        Bike Maintenance
                      </span>
                      <span className="text-cyan-300 font-bold">85%</span>
                    </div>
                    <div className="w-full rounded-full h-4 bg-white/20">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-teal-500 h-4 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-sm mt-3 text-white/70">
                      Pro-level mechanic knowledge
                    </p>
                  </div>

                  <div className="backdrop-blur-md rounded-xl p-6 border border-white/20 bg-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-white/90">
                        Fear Factor
                      </span>
                      <span className="text-teal-300 font-bold">28%</span>
                    </div>
                    <div className="w-full rounded-full h-4 bg-white/20">
                      <div
                        className="bg-gradient-to-r from-teal-400 to-cyan-500 h-4 rounded-full"
                        style={{ width: "28%" }}
                      ></div>
                    </div>
                    <p className="text-sm mt-3 text-white/70">
                      Minimal fear - very confident
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 text-center">
            <div className="backdrop-blur-md rounded-3xl p-12 border border-white/20 bg-white/10 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  Ready to Ride?
                </span>
              </h2>

              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-md">
                Whether you&apos;re 13 or 30, age doesn&apos;t define your
                potential. Get out there, push your limits, and discover what
                you&apos;re truly capable of.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <button
                    onClick={handleStartJourney}
                    disabled={isAnimating}
                    className={`relative z-10 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isAnimating ? "animate-pulse" : ""
                    }`}
                  >
                    {isAnimating ? "Opening Portal..." : "Start Your Journey"}
                  </button>

                  {/* Portal Animation Overlay */}
                  {isAnimating && (
                    <div className="absolute inset-0 -z-10">
                      {/* Spinning Portal Ring */}
                      <div
                        className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 to-teal-500 animate-spin"
                        style={{ animationDuration: "2s" }}
                      ></div>

                      {/* Inner Portal Ring */}
                      <div
                        className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-teal-500 to-cyan-500 animate-spin"
                        style={{
                          animationDuration: "1.5s",
                          animationDirection: "reverse",
                        }}
                      ></div>

                      {/* Particle Effects */}
                      {particles.map((particle) => (
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
                            transform: `translate(-50%, -50%)`,
                          }}
                        />
                      ))}

                      {/* Portal Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 animate-pulse"></div>
                    </div>
                  )}
                </div>

                <button className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/20 backdrop-blur-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-white/70 drop-shadow-md">
              © 2024 Mountain Biking Journey | Age is just a number, passion is
              everything
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}