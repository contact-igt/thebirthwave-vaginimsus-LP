import React from 'react';

const artworkEdgeFade = '[mask-image:linear-gradient(to_bottom,transparent,black_8%,black_94%,transparent)]';

export const FixedBackgroundLines: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <img
        src="/images/background/birthwave-silhouette.png"
        alt=""
        className={`absolute bottom-0 right-0 h-auto w-[min(64vw,43vh)] translate-x-[15%] opacity-[0.16] blur-[1.5px] sm:w-[min(54vw,70vh,700px)] sm:translate-x-0 sm:opacity-[0.28] sm:blur-none lg:w-[min(38vw,76vh,700px)] lg:translate-x-[22%] lg:opacity-[0.35] ${artworkEdgeFade}`}
        loading="eager"
      />
    </div>
  );
};
