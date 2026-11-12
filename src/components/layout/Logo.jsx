import React from 'react';
import logoLight from '../../assets/logo.png';
import logoDark from '../../assets/logo-white-text.png';

/**
 * Logo Component
 * Renders the authentic Pleco Solutions brand identity logo:
 * - Dynamic stylized 'P' monogram with orbital sweep and tech pixel nodes
 * - Center vertical accent divider
 * - Distinctive 'Pleco Solutions' wordmark with high-contrast variants for light and dark enterprise surfaces
 * 
 * @param {Object} props
 * @param {string} [props.className="h-10 w-auto"] - Sizing and utility classes
 * @param {'default'|'white'} [props.variant='default'] - Color theme ('default' for light surfaces, 'white' for dark surfaces)
 * @param {boolean} [props.showText=true] - Whether to render full brand logo or icon emblem only
 * @param {string} [props.alt='Pleco Solutions'] - Alt text for accessibility
 */
export default function Logo({
  className = 'h-10 w-auto',
  variant = 'default',
  showText = true,
  alt = 'Pleco Solutions Logo',
  ...props
}) {
  const isDarkSurface = variant === 'white';
  const logoSrc = isDarkSurface ? logoDark : logoLight;

  if (!showText) {
    return (
      <img
        src="/favicon.png"
        alt={alt}
        className={`object-contain ${className}`}
        loading="eager"
        {...props}
      />
    );
  }

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`object-contain ${className}`}
      loading="eager"
      {...props}
    />
  );
}
