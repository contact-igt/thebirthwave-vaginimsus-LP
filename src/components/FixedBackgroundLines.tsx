import React from 'react';

/**
 * Continuous fixed background silhouette accurately derived from the reference image:
 * A refined, elegant silhouette of a woman's side profile with flowing, layered paper-cut fabric curves,
 * recoloured to the official Birthwave brand palette (Rose Sand #CA9585, Sand Dark #8C594A, Light Sand #E8D4C2).
 *
 * Requirements:
 * - Lower flowing fabric portion extended downward to cover the bottom gap of the hero section.
 * - Shifted slightly to the right to reduce unused space between the illustration and the right viewport edge.
 * - Does not interfere with the floating social media buttons (z-0 vs z-40).
 * - Fixed position across the entire landing page viewport (remains stationary during scroll).
 * - Preserves subtle, faded appearance and clear left-side reading space.
 * - Responsive across desktop, tablet, and mobile with zero horizontal overflow.
 */
export const FixedBackgroundLines: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <div className="absolute -right-14 sm:-right-18 md:-right-24 lg:-right-36 xl:-right-28 top-1/2 -translate-y-[45%] h-[70vh] sm:h-[84vh] lg:h-[94vh] xl:h-[96vh] max-h-[850px] w-[72vw] sm:w-[54vw] lg:w-[44vw] max-w-[700px] flex items-center justify-end">
        <img
          src="/images/background/birthwave-silhouette.png"
          alt=""
          className="h-full w-auto object-contain object-right opacity-22 sm:opacity-28 lg:opacity-35 select-none pointer-events-none"
          loading="eager"
        />
      </div>
    </div>
  );
};
