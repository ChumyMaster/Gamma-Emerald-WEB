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

export const IconDiscord = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

export const IconItch = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 262.728 235.452" className={className} aria-hidden fill="currentColor">
    <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.014 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" />
  </svg>
);

export const IconGamepad = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M7.97 5h8.06c1.6 0 3.02.76 3.92 1.93l.02.03C21.3 8.72 22 11.3 22 14v1.5c0 1.93-1.57 3.5-3.5 3.5-1.06 0-2.06-.48-2.72-1.3l-1-1.2H9.22l-1 1.2a3.48 3.48 0 0 1-2.72 1.3C3.57 19 2 17.43 2 15.5V14c0-2.7.7-5.28 2.03-7.04l.02-.03A5.05 5.05 0 0 1 7.97 5ZM8 9H6v2H4v2h2v2h2v-2h2v-2H8V9Zm8 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16 10Zm2.5 3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
  </svg>
);
