import React from 'react';

/**
 * Continuous fixed background line art accurately derived from the official
 * reference image: oversized, delicate organic outline contours of the floral/botanical
 * motif positioned predominantly along the right side with ample clean empty space
 * across the left.
 *
 * Stays fixed (z-0, pointer-events-none) across all landing page sections,
 * cleanly obscured by the solid dark footer (z-10).
 */
export const FixedBackgroundLines: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 960"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        className="w-full h-full"
      >
        <g
          stroke="#CA9585"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.32"
        >
          {/* Upper blossom - Outer left petal contour */}
          <path d="M 1282.9 65.1 C 1260.5 120.2 1262.5 196.7 1272.7 278.3 C 1285.0 349.7 1340.0 416.0 1440.0 446.6" />

          {/* Upper blossom - Left petal top-right arc */}
          <path d="M 1282.9 65.1 C 1304.3 74.3 1340.0 94.7 1364.5 105.9" />

          {/* Upper blossom - Right petal top arc (sweeping off-screen top-right) */}
          <path d="M 1364.5 105.9 C 1391.0 59.0 1416.5 28.4 1440.0 10.0" />

          {/* Upper blossom - Petal inner contour to blossom base */}
          <path d="M 1364.5 105.9 C 1385.9 181.4 1421.6 324.2 1440.0 446.6" />

          {/* Upper stem - Flowing down from blossom base to leaf junction */}
          <path d="M 1440.0 446.6 C 1385.9 502.7 1338.0 563.9 1309.4 632.2" />

          {/* Broad organic leaf loop - Sweeping into mid-right and looping gracefully back */}
          <path d="M 1309.4 632.2 C 1243.1 591.4 1161.5 579.2 1059.5 594.5 C 998.3 609.8 962.6 650.6 970.8 691.4 C 979.0 730.1 1034.0 740.3 1095.2 737.3 C 1161.5 727.1 1232.9 691.4 1291.1 660.8" />

          {/* Lower stem - Grand sweeping contour visible in lower-right area */}
          <path d="M 1309.4 632.2 C 1345.1 676.1 1385.9 752.6 1416.5 844.4 C 1431.8 905.6 1435.9 966.8 1440.0 1040.2" />

          {/* Lower stem - Companion inner contour sweeping to bottom right */}
          <path d="M 1291.1 660.8 C 1319.6 711.8 1365.5 813.8 1421.6 1040.2" />
        </g>
      </svg>
    </div>
  );
};
