import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-brand-black pt-5 pb-3 z-40 relative">
      <div className="max-w-[500px] mx-auto px-6 flex items-center justify-center gap-4">
        <div className="font-sans font-extrabold text-[1.2rem] uppercase tracking-tighter flex items-center gap-1">
          <span className="text-white">Personal</span>
          <span className="text-[#FF0000]">Premier</span>
        </div>
        <img 
          src="/logo.jfif" 
          alt="Personal Premier Logo" 
          className="w-[24px] h-[24px] object-cover rounded-[2px] shadow-md"
        />
      </div>
    </nav>
  );
}
