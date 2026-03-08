import type React from "react";

const iconSize = 40;
const iconClass = "size-10";

export function IconAppDevelopment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="app-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="app-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="url(#app-body)" stroke="#7C3AED" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#DDD6FE" strokeWidth="2" strokeLinecap="round" />
      <rect x="9" y="5" width="6" height="10" rx="1" fill="url(#app-screen)" />
    </svg>
  );
}

export function IconWebDevelopment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="monitor-frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <rect x="2" y="3" width="20" height="14" rx="2" fill="url(#monitor-frame)" fillOpacity="0.25" stroke="#0EA5E9" strokeWidth="1.5" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="#7DD3FC" strokeWidth="1.5" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="#38BDF8" strokeWidth="1.5" />
      <rect x="6" y="8" width="3" height="2" rx="0.5" fill="#7DD3FC" />
      <rect x="10" y="8" width="3" height="2" rx="0.5" fill="#BAE6FD" />
      <rect x="14" y="8" width="3" height="2" rx="0.5" fill="#0EA5E9" />
    </svg>
  );
}

export function IconWebDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="brush-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
      </defs>
      <path d="M12 19l3-8 4 4-7 4z" fill="url(#brush-grad)" fillOpacity="0.8" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21l2-4 3 2-5 2z" fill="#FBBF24" fillOpacity="0.6" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 5l-2 4-3-2 5-2z" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBranding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="tag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" fill="url(#tag-grad)" fillOpacity="0.35" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="7" x2="7.01" y2="7" stroke="#FBCFE8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconSEO(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="seo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <circle cx="11" cy="11" r="8" fill="url(#seo-grad)" fillOpacity="0.25" stroke="#10B981" strokeWidth="1.5" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconProductDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="box-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" fill="url(#box-grad)" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="#A5B4FC" strokeWidth="1.5" />
      <path d="M12 22.08V12" stroke="#4F46E5" strokeWidth="1.5" />
    </svg>
  );
}

export function IconPaymentGateway(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shield-grad)" fillOpacity="0.25" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAI(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      {...props}
    >
      <defs>
        <linearGradient id="atom-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" fill="url(#atom-core)" stroke="#7C3AED" strokeWidth="1.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#C084FC" strokeWidth="1.5" />
      <path d="M12 5a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z" fill="none" stroke="#E879F9" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
    </svg>
  );
}
