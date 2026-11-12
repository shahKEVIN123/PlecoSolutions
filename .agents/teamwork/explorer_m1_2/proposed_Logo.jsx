import React from 'react';

/**
 * Logo Component
 * Scalable inline vector SVG reconstructing Pleco Solutions' authentic brand identity:
 * - Dynamic dual-ribbon crest/wave motif symbolizing continuous supply chain flow
 * - Bold corporate typography for 'PLECO' and crisp sub-headline for 'SOLUTIONS'
 * - High-contrast rendering across both light (Navbar) and dark (Footer) enterprise surfaces
 * 
 * @param {Object} props
 * @param {string} [props.className="h-10 w-auto"] - Sizing and utility classes
 * @param {'default'|'white'|'navy'} [props.variant='default'] - Color theme
 * @param {boolean} [props.showText=true] - Whether to render brand wordmark
 */
export default function Logo({
  className = 'h-10 w-auto',
  variant = 'default',
  showText = true,
  ...props
}) {
  const isDarkSurface = variant === 'white';

  // Theme-aware fill colors
  const primaryTextColor = isDarkSurface ? '#FFFFFF' : '#0A192F';
  const subtitleTextColor = isDarkSurface ? '#38BDF8' : '#0284C7';
  const crestNavyColor = isDarkSurface ? '#60A5FA' : '#0F2744';

  return (
    <svg
      viewBox={showText ? '0 0 250 56' : '0 0 56 56'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Pleco Solutions Logo"
      {...props}
    >
      <title>Pleco Solutions — Oracle SCM & Value Chain Planning Consulting</title>
      <defs>
        {/* Cyan Wave Gradient */}
        <linearGradient id="plecoCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Navy/Blue Wave Gradient */}
        <linearGradient id="plecoNavyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        {/* Accent Glow Filter */}
        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0284C7" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Brand Crest / Wave Motif */}
      <g id="logo-crest" transform="translate(2, 4)">
        {/* Lower Wave Flow (Enterprise Foundation) */}
        <path
          d="M 6 36 C 14 42, 28 44, 38 34 C 44 28, 48 18, 44 10 C 40 18, 32 24, 22 24 C 14 24, 8 20, 4 28 C 3 31, 4 34, 6 36 Z"
          fill={crestNavyColor}
          opacity="0.95"
        />

        {/* Upper Dynamic Cyan Ribbon (Supply Chain Agility) */}
        <path
          d="M 12 10 C 22 4, 38 6, 46 16 C 50 22, 50 32, 44 38 C 44 30, 40 22, 32 18 C 24 14, 16 16, 10 14 C 8 13, 10 11, 12 10 Z"
          fill="url(#plecoCyanGrad)"
          filter="url(#softGlow)"
        />

        {/* Intersecting Pulse Node */}
        <circle cx="28" cy="22" r="3.5" fill="#38BDF8" />
        <circle cx="28" cy="22" r="1.5" fill="#FFFFFF" />
      </g>

      {/* Wordmark Typography */}
      {showText && (
        <g id="logo-text" transform="translate(64, 0)">
          {/* Main Title: PLECO */}
          <text
            x="0"
            y="31"
            fill={primaryTextColor}
            fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="26"
            fontWeight="800"
            letterSpacing="0.06em"
          >
            PLECO
          </text>

          {/* Subtitle: SOLUTIONS */}
          <text
            x="1"
            y="47"
            fill={subtitleTextColor}
            fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="0.32em"
          >
            SOLUTIONS
          </text>
        </g>
      )}
    </svg>
  );
}
