type P = { className?: string };

/* Pokéball pixel — logo */
export const IconBall = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
    <path d="M3 11a9 9 0 0 1 18 0h-6.1a3 3 0 0 0-5.8 0H3Z" fill="currentColor" />
    <path
      d="M3 13a9 9 0 0 0 18 0h-6.1a3 3 0 0 1-5.8 0H3Z"
      fill="currentColor"
      opacity="0.35"
    />
    <rect x="3" y="11" width="18" height="2" fill="currentColor" opacity="0.85" />
    <rect x="9.5" y="9.5" width="5" height="5" fill="currentColor" />
    <rect x="10.8" y="10.8" width="2.4" height="2.4" fill="#050f0a" />
  </svg>
);

export const IconBolt = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M13 2 5 13h5l-2 9 9-12h-5l1-8Z" />
  </svg>
);

export const IconSun = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <rect x="9" y="9" width="6" height="6" />
    <rect x="11" y="2" width="2" height="4" />
    <rect x="11" y="18" width="2" height="4" />
    <rect x="2" y="11" width="4" height="2" />
    <rect x="18" y="11" width="4" height="2" />
    <rect x="4.6" y="4.6" width="2.8" height="2.8" />
    <rect x="16.6" y="16.6" width="2.8" height="2.8" />
    <rect x="16.6" y="4.6" width="2.8" height="2.8" />
    <rect x="4.6" y="16.6" width="2.8" height="2.8" />
  </svg>
);

export const IconMoon = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M16 3a9 9 0 1 0 5 14.5A10.5 10.5 0 0 1 16 3Z" />
    <rect x="5" y="5" width="2" height="2" opacity="0.6" />
    <rect x="8" y="16" width="2" height="2" opacity="0.4" />
  </svg>
);

export const IconSunset = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M6 14a6 6 0 0 1 12 0H6Z" />
    <rect x="2" y="16" width="20" height="2" opacity="0.8" />
    <rect x="5" y="20" width="14" height="2" opacity="0.45" />
    <rect x="11" y="3" width="2" height="4" />
    <rect x="4" y="7" width="2.6" height="2.6" />
    <rect x="17.4" y="7" width="2.6" height="2.6" />
  </svg>
);

export const IconBerry = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <circle cx="9" cy="14" r="5.2" />
    <circle cx="15.5" cy="15" r="4.4" opacity="0.7" />
    <path d="M11 8c0-3 2-5 5-5-0.5 3-2 5-5 5Z" opacity="0.85" />
    <rect x="10" y="12" width="1.6" height="1.6" fill="#050f0a" opacity="0.55" />
    <rect x="14.6" y="13.6" width="1.4" height="1.4" fill="#050f0a" opacity="0.55" />
  </svg>
);

export const IconEgg = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2c4.5 0 8 6.4 8 12a8 8 0 1 1-16 0C4 8.4 7.5 2 12 2Z" />
    <path
      d="M4.6 12.5 8 15l3-2.5 3 2.5 3-2.5 2.4 1.8"
      stroke="#050f0a"
      strokeWidth="1.6"
      opacity="0.45"
      fill="none"
    />
  </svg>
);

export const IconBook = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 5C10 3.4 7 3 4 3v16c3 0 6 .4 8 2 2-1.6 5-2 8-2V3c-3 0-6 .4-8 2Z" />
    <rect x="11.2" y="5" width="1.6" height="16" fill="#050f0a" opacity="0.5" />
    <rect x="6" y="7" width="3.4" height="1.4" fill="#050f0a" opacity="0.35" />
    <rect x="6" y="10" width="3.4" height="1.4" fill="#050f0a" opacity="0.35" />
    <rect x="14.6" y="7" width="3.4" height="1.4" fill="#050f0a" opacity="0.35" />
    <rect x="14.6" y="10" width="3.4" height="1.4" fill="#050f0a" opacity="0.35" />
  </svg>
);

export const IconSpark = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 1.5 14.4 9.6 22.5 12 14.4 14.4 12 22.5 9.6 14.4 1.5 12 9.6 9.6 12 1.5Z" />
    <rect x="18" y="3" width="2.4" height="2.4" opacity="0.6" />
    <rect x="4" y="17" width="2" height="2" opacity="0.45" />
  </svg>
);

export const IconDownload = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <rect x="10" y="2" width="4" height="10" />
    <path d="M6 9h4v3h4V9h4l-6 7-6-7Z" />
    <rect x="4" y="18" width="16" height="4" />
  </svg>
);

export const IconExt = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M13 3h8v8h-3V8.4L11.4 15 9 12.6 15.6 6H13V3Z" />
    <path d="M5 7h6v3H8v6h6v-3h3v6H5V7Z" />
  </svg>
);

export const IconPlay = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M6 3.5 20 12 6 20.5v-17Z" />
  </svg>
);

export const IconChevron = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M4 8h3v3h3v3h4v-3h3V8h3v3h-3v3h-3v3h-4v-3H7v-3H4V8Z" opacity="0" />
    <path d="M3 7h4v3h3v3h4V10h3V7h4v4h-3v3h-4v3h-4v-3H6v-3H3V7Z" />
  </svg>
);

export const IconPin = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" />
    <rect x="9.5" y="6.5" width="5" height="5" fill="#050f0a" opacity="0.7" />
  </svg>
);

export const IconPad = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M7 6h10a5 5 0 0 1 5 5.5L21.4 17a2.6 2.6 0 0 1-4.6 1.2L15 16H9l-1.8 2.2A2.6 2.6 0 0 1 2.6 17L2 11.5A5 5 0 0 1 7 6Z" />
    <rect x="6" y="9" width="2" height="6" fill="#050f0a" opacity="0.65" />
    <rect x="4" y="11" width="6" height="2" fill="#050f0a" opacity="0.65" />
    <rect x="15" y="9" width="2.4" height="2.4" fill="#050f0a" opacity="0.65" />
    <rect x="17.8" y="11.8" width="2.4" height="2.4" fill="#050f0a" opacity="0.65" />
  </svg>
);

export const IconLeaf = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M20 4C9 4 4 10 4 20c10 0 16-5 16-16Z" />
    <path d="M4 20C9 14 14 9 20 4" stroke="#050f0a" strokeWidth="1.6" opacity="0.4" fill="none" />
  </svg>
);

export const IconClock = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3a7 7 0 1 1-7 7 7 7 0 0 1 7-7Z"
    />
    <rect x="11" y="7" width="2" height="6" />
    <rect x="11" y="11" width="5" height="2" />
  </svg>
);

export const IconWindows = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <rect x="3" y="5" width="8" height="6" />
    <rect x="13" y="3" width="8" height="8" />
    <rect x="3" y="13" width="8" height="6" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
);

export const IconGamejolt = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2 2 7v10l10 5 10-5V7l-10-5Zm0 2.3L19.6 8 12 11.8 4.4 8 12 4.3ZM4 9.8l7 3.5v6.4l-7-3.5V9.8Zm16 0v6.4l-7 3.5v-6.4l7-3.5Z" />
  </svg>
);

export const IconDisk = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3a7 7 0 0 1 6.9 6H13.5A4 4 0 0 0 12 8V5Zm-7 7a7 7 0 0 1 5-6.7V8a4 4 0 0 0-1.5.9L5.6 6.1A7 7 0 0 0 5 12Zm2 0a5 5 0 1 1 5 5 5 5 0 0 1-5-5Zm12 0a7 7 0 0 1-12 4.9l2.5-2.5A4 4 0 0 0 12 16v3a7 7 0 0 0 7-7Z" />
  </svg>
);

export const IconStar = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2l2.4 6.6L21 9.3l-5 4.4 1.6 6.8L12 16.9l-5.6 3.6L8 13.7 3 9.3l6.6-.7L12 2Z" />
  </svg>
);
