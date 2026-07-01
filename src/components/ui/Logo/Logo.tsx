import { useState, useEffect, useCallback } from 'react';
import './Logo.css';

const FlowingEncryptedLogo = () => {
  const originalLogo = `
 ███████╗ ████████╗ ███████╗ ███████╗  █████╗  ███╗   ██╗     ██╗   ██╗ ███████╗ ██╗      ██╗  ██╗  ██████╗  ██╗   ██╗
 ██╔════╝ ╚══██╔══╝ ██╔════╝ ██╔════╝ ██╔══██╗ ████╗  ██║     ██║   ██║ ██╔════╝ ██║      ██║ ██╔╝ ██╔═══██╗ ██║   ██║
 ███████╗    ██║    █████╗   █████╗   ███████║ ██╔██╗ ██║     ██║   ██║ █████╗   ██║      █████╔╝  ██║   ██║ ██║   ██║
 ╚════██║    ██║    ██╔══╝   ██╔══╝   ██╔══██║ ██║╚██╗██║     ╚██╗ ██╔╝ ██╔══╝   ██║      ██╔═██╗  ██║   ██║ ╚██╗ ██╔╝
 ███████║    ██║    ███████╗ ██║      ██║  ██║ ██║ ╚████║      ╚████╔╝  ███████╗ ███████╗ ██║  ██╗ ╚██████╔╝  ╚████╔╝
 ╚══════╝    ╚═╝    ╚══════╝ ╚═╝      ╚═╝  ╚═╝ ╚═╝  ╚═══╝       ╚═══╝   ╚══════╝ ╚══════╝ ╚═╝  ╚═╝  ╚═════╝    ╚═══╝
`;

  const [displayLogo, setDisplayLogo] = useState(originalLogo);
  const chars = "!@#$%^&*()_+{}:\"<>?,./;'[]-=";

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalFps = 30;

    let interval = setInterval(() => {
      let newLogo = originalLogo
        .split('')
        .map((ch, i) => {
          if (ch === '\n') return '\n';
          if (ch === ' ') return ' ';
          if (Math.random() < iteration / totalFps) return originalLogo[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

      setDisplayLogo(newLogo);
      iteration++;

      if (iteration >= totalFps) {
        clearInterval(interval);
        setDisplayLogo(originalLogo);
      }
    }, 40);
  }, [originalLogo]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  // Split into rows, then render each char as a fixed-width span
  const renderLogo = (logo: string) => {
    return logo.split('\n').map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.split('').map((ch, colIndex) => (
          <span
            key={colIndex}
            style={{
              display: 'inline-block',
              width: '0.5em',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            {
            ch
            }
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center p-10 mt-0  md:mt-[4rem] lg:mt-[8rem] bg-transparent fade-up">
      <div
        className="ascii-logo"
        aria-label="LOGO"
        onClick={scramble}
      >
        {renderLogo(displayLogo)}
      </div>
    </div>
  );
};

export default FlowingEncryptedLogo;
