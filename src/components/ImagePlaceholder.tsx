import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  aspectRatio?: string; // e.g. 'aspect-[4/3]', 'aspect-[16/10]', 'aspect-[4/5]'
  label?: string;
  dimensionHint?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = 'aspect-[4/3]',
  label = 'Image Placeholder',
  dimensionHint,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl bg-gradient-to-br from-sand-pale/80 via-cream to-sand-pale/50 border border-sand/20 flex flex-col items-center justify-center p-6 text-center shadow-xs overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Subtle organic background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="placeholder-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#CA9585" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#placeholder-grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-white/80 border border-sand/30 flex items-center justify-center text-sand-dark shadow-xs">
          <ImageIcon className="w-5 h-5 text-sand" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-sand-deep">
          {label}
        </span>
        {dimensionHint && (
          <span className="text-[11px] text-muted/80 font-normal">
            {dimensionHint}
          </span>
        )}
      </div>
    </div>
  );
};

