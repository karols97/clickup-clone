import React from "react";

export const SvgIcons = {
    Board: ({ className }: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="10 5 45 85"
            stroke="currentColor"
            fill="none"
            strokeWidth="7"
            width="1em"
            height="1em"
            className={className}
        >
            {/* Left column */}
  <path d="
    M10 10 
    h20 
    v65 
    a10 10 0 0 1 -10 10 
    h-15 
    a10 10 0 0 1 -10 -10 
    v-55
    a10 10 0 0 1 10 -10 
    z" />

  {/* Right column */}
  <path d="
    M30 10 
    h22 
    a10 10 0 0 1 10 10 
    v40 
    a10 10 0 0 1 -10 10 
    h-22 
    z" />
    </svg>
    ),
    Table:({className}:React.SVGProps<SVGAElement>)=>(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 95 95"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            stroke-width="10"
            className={className}
        >
            {/* Table frame */}
            <rect x="10" y="10" width="80" height="80" rx="10" ry="10" />
            {/* column line */}
            <line x1="36.67" y1="10" x2="36.67" y2="90" />
            {/* row lines */}
            <line x1="10" y1="36.67" x2="90" y2="36.67" />
            <line x1="10" y1="63.33" x2="90" y2="63.33" />
        </svg>
    ),
    HorizontalChart:({className}:React.SVGProps<SVGAElement>)=>(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 95 95"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            stroke-width="10"
            className={className}
        >
            <line x1="10" y1="10" x2="45" y2="10" />
            <line x1="10" y1="33.3" x2="80" y2="33.3" />
            <line x1="10" y1="56.6" x2="55" y2="56.6" />
            <line x1="10" y1="80" x2="90" y2="80" />
        </svg>
    )
};