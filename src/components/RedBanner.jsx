import React from 'react';

export default function RedBanner() {
  return (
    <div className="bg-[#FF0000] w-full py-8 px-6 text-center shadow-[0_0_30px_rgba(255,0,0,0.3)] relative z-30 border-t-2 border-[#b50000]">
      <h2 className="text-white font-serif italic font-extrabold text-[1.8rem] md:text-4xl leading-tight max-w-[500px] mx-auto uppercase drop-shadow-md tracking-wider">
        Você vai sair daqui<br />completamente<br />diferente
      </h2>
    </div>
  );
}
