import React from 'react';

export default function Hero() {
  return (
    <section className="bg-brand-black relative w-full h-[550px] flex flex-col justify-end">
      
      {/* Background Gradient / Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#FF0000]/10 blur-[90px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-[500px] mx-auto w-full h-full relative">
        {/* Instructor Image */}
        <img 
          src="/instructor.jfif" 
          alt="Instructor" 
          className="absolute bottom-0 left-[-70px] w-[310px] object-contain z-10 pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />

        {/* Main Content Container */}
        <div className="relative z-20 w-full h-full px-5 pt-4 pb-6 flex flex-col pointer-events-none">
          
          {/* Top Text Block (PERSONAL PREMIER CLASSIC) */}
          <div className="flex flex-col items-end mt-2 z-20 relative">
            <h2 className="font-sans font-extrabold text-[1.7rem] text-white uppercase leading-none tracking-tight">
              Personal
            </h2>
            <h1 className="font-sans font-extrabold text-[2.5rem] text-[#FF0000] uppercase leading-[0.9] tracking-tighter" style={{ textShadow: '0 0 20px rgba(255,0,0,0.7)' }}>
              Premier
            </h1>
            <p className="text-white tracking-[0.3em] text-[0.7rem] mt-3 mr-1 font-light opacity-90 text-right">
              C L A S S I C
            </p>
          </div>

          {/* EM: SALVADOR & Date */}
          <div className="flex flex-col items-end mt-1 mr-1 z-20 relative">
            <p className="text-white text-[1rem] uppercase font-bold mb-1 flex items-center gap-2 drop-shadow-md">
              <span className="text-[#8e8e8e] font-normal text-[0.8rem]">EM:</span> SALVADOR
            </p>
            <div className="bg-[#FF0000] text-white font-extrabold px-5 py-[6px] text-[1.1rem] rounded-[2px]" style={{ boxShadow: '0 0 15px rgba(255,0,0,0.8)' }}>
              07 DE JUNHO
            </div>
          </div>

          {/* Floating Card */}
          <div className="flex justify-end mt-16 mr-[-4px] z-20 relative">
            <div className="w-[260px] bg-[#1a1a1a]/95 backdrop-blur-md border-r-[3px] border-[#FF0000] py-4 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-[2px]">
              <h3 className="text-white font-sans font-extrabold text-[0.85rem] uppercase leading-snug text-right">
                Biomecânica de <br/>
                <span className="text-[#FF0000]" style={{ textShadow: '0 0 10px rgba(255,0,0,0.6)' }}>Coxas e Glúteos!</span>
              </h3>
              <p className="text-[#999999] font-serif italic text-[0.65rem] mt-2 text-right leading-tight">
                (Como construir do zero ao Avançado)
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-[100px] left-0 w-full px-5 flex justify-center pointer-events-auto z-20">
            <a href="https://evento.blinket.com.br/premier-salvador?fbclid=PARlRTSAR4pV9leHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadS5Lt8RJPANjhBVdY39CgmafwvFxN5Es0GmXQ1RCmBcZHGeOTlJcUcp4w2mw_aem_b8Cb3PhqV6Rfxrtoa-RiyQ" target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] text-white uppercase font-extrabold py-3 px-4 w-full max-w-[340px] rounded-[3px] hover:bg-red-700 transition-colors text-[1.05rem] tracking-wide text-center" style={{ boxShadow: '0 0 20px rgba(255,0,0,0.8)' }}>
              Garantir Minha Vaga
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
