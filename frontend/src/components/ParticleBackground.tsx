import React, { useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      
      const particles = document.querySelector('.particles');
      if (particles) {
        particles.appendChild(particle);
        
        setTimeout(() => {
          if (particles.contains(particle)) {
            particles.removeChild(particle);
          }
        }, 6000);
      }
    };

    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="particles" />;
};

export default ParticleBackground;