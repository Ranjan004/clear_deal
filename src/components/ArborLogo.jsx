import React from 'react';

export function ArborLogoMark({ className = "w-8 h-8", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 35 35" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M17.5 0C17.5 9.66498 9.66498 17.5 0 17.5C9.66498 17.5 17.5 25.335 17.5 35C17.5 25.335 25.335 17.5 35 17.5C25.335 17.5 17.5 9.66498 17.5 0Z" 
        fill={color} 
      />
    </svg>
  );
}

export function ArborWordmark({ className = "h-5", color = "currentColor" }) {
  return (
    <div className={`flex flex-col tracking-[0.25em] font-serif uppercase select-none ${className}`}>
      <span className="text-[14px] leading-tight font-medium" style={{ color }}>BELGRADE</span>
      <span className="text-[11px] leading-tight font-light tracking-[0.4em]" style={{ color }}>ARBOR</span>
    </div>
  );
}

export default function ArborLogo({ className = "flex items-center gap-3", iconClassName = "w-7 h-7 text-[#ccbf99]", textColor = "#fdfbef" }) {
  return (
    <a href="#hero" className={`group cursor-pointer no-underline ${className}`}>
      <ArborLogoMark className={`${iconClassName} transition-transform duration-500 group-hover:rotate-45`} />
      <div className="flex flex-col text-left">
        <span className="font-serif text-[15px] tracking-[0.28em] font-normal leading-tight" style={{ color: textColor }}>
          BELGRADE
        </span>
        <span className="font-serif text-[11px] tracking-[0.45em] font-light leading-tight text-[#ccbf99]">
          ARBOR
        </span>
      </div>
    </a>
  );
}
