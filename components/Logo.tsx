
import React from 'react';
import { LOGO_URL } from '../constants';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", inverted = false }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src={LOGO_URL} 
      alt="Z Financeira Logo" 
      className="h-full w-auto object-contain" 
      style={inverted ? { filter: 'brightness(0) invert(1)' } : {}}
      referrerPolicy="no-referrer"
    />
  </div>
);

export default Logo;
