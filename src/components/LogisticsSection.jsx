import React from 'react';

export default function LogisticsSection() {
  return (
    <section id="logistica" className="py-12 md:py-20 bg-[#080808]">
      <div className="max-w-[400px] md:max-w-[800px] mx-auto px-6">
        
        <h2 className="font-sans font-extrabold text-[2rem] md:text-5xl uppercase tracking-tighter text-[#FF0000] mb-8 text-center">
          Horário
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          
          {/* Card 1: Manhã */}
          <div className="bg-[#181818] border border-[#2a2a2a] p-5 flex flex-col items-center text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <h3 className="font-sans font-extrabold text-[0.8rem] md:text-[0.95rem] uppercase mb-2 text-white tracking-wide">
              Manhã
            </h3>
            <p className="text-[#f2b79f] text-[0.8rem] md:text-[0.9rem] font-medium leading-[1.4]">
              08h30–12h30<br/>
              Hotel Quality
            </p>
          </div>

          {/* Card 2: Tarde */}
          <div className="bg-[#181818] border border-[#2a2a2a] p-5 flex flex-col items-center text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              <path d="M14.4 14.4l5.6-5.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-5.6 5.6"/>
              <path d="M9.6 9.6L4 15.2a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l5.6-5.6"/>
              <path d="M14.4 14.4l-4.8-4.8"/>
            </svg>
            <h3 className="font-sans font-extrabold text-[0.8rem] md:text-[0.95rem] uppercase mb-2 text-white tracking-wide">
              Tarde
            </h3>
            <p className="text-[#f2b79f] text-[0.8rem] md:text-[0.9rem] font-medium leading-[1.4]">
              14h–18h<br/>
              Hotel Quality
            </p>
          </div>

          {/* Card 3: Formato */}
          <div className="bg-[#181818] border border-[#2a2a2a] p-5 flex flex-col items-center text-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3 className="font-sans font-extrabold text-[0.8rem] md:text-[0.95rem] uppercase mb-2 text-white tracking-wide">
              Formato
            </h3>
            <p className="text-[#f2b79f] text-[0.8rem] md:text-[0.9rem] font-medium leading-[1.4]">
              Presencial<br/>
              Exclusivo
            </p>
          </div>

          {/* Card 4: Duração */}
          <div className="bg-[#181818] border border-[#2a2a2a] p-5 flex flex-col items-center text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              <circle cx="12" cy="13" r="8"></circle>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="13" x2="15" y2="13"></line>
              <line x1="12" y1="2" x2="12" y2="4"></line>
              <line x1="10" y1="2" x2="14" y2="2"></line>
            </svg>
            <h3 className="font-sans font-extrabold text-[0.8rem] md:text-[0.95rem] uppercase mb-2 text-white tracking-wide">
              Duração
            </h3>
            <p className="text-[#f2b79f] text-[0.8rem] md:text-[0.9rem] font-medium leading-[1.4]">
              8 horas<br/>
              presenciais<br/>
              + Certificado<br/>
              de 20h
            </p>
          </div>

        </div>
        
        {/* Card 5: Prática */}
        <div className="mt-3 md:mt-6 bg-[#181818] border border-[#2a2a2a] p-5 flex flex-col items-center text-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <h3 className="font-sans font-extrabold text-[0.8rem] md:text-[0.95rem] uppercase mb-2 text-white tracking-wide">
            Prática
          </h3>
          <p className="text-[#f2b79f] text-[0.8rem] md:text-[0.9rem] font-medium leading-[1.4]">
            Local iremos informar
          </p>
        </div>

      </div>
    </section>
  );
}
