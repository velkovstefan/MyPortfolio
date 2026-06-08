import React, { useState, useEffect, useCallback } from 'react';

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
    <div className="flex items-center justify-center p-10 bg-transparent">
      <style>
        {`
          @keyframes flow {
            0%   { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .ascii-logo {
            background: linear-gradient(to right, #ff4e50, #f9d423, #ff4e50, #f9d423);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: flow 6s ease infinite;
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.5rem;
            line-height: 1;
            font-weight: bold;
            letter-spacing: 0px;
            cursor: pointer;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }
        `}
      </style>

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