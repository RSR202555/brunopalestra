import React from 'react';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Má execução',
      desc: 'Treinamento sem técnica, pode ser lesivo e complicar seus resultados. Sempre a técnica vem à frente dos pesos, gravem isso.',
    },
    {
      title: 'Falta de intensidade',
      desc: 'Treinar "fofo" é o maior erro de quem busca o físico de elite.',
    },
    {
      title: 'Divisão de treino errada',
      desc: 'Volume excessivo ou descanso insuficiente impedem a evolução.',
    },
    {
      title: 'Nutrição negligenciada',
      desc: 'Sem o combustível certo, seu músculo não tem como crescer.',
    }
  ];

  return (
    <section id="resultados" className="py-12 md:py-20 bg-[#080808]">
      <div className="max-w-[500px] md:max-w-[1140px] mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="font-sans font-extrabold text-[1.8rem] md:text-5xl uppercase tracking-tighter text-white leading-[1.1]">
            Pq tanto <br className="block md:hidden"/>
            treino e <span className="text-[#FF0000]">não vejo <br className="block md:hidden"/>
            resultados?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-[#181818] p-6 pt-8 border-t-[3px] border-[#FF0000] border-x border-b border-x-[#2a2a2a] border-b-[#2a2a2a]">
              
              {/* Red X Icon */}
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#FF0000" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mb-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>

              <h3 className="font-sans font-extrabold text-[0.8rem] uppercase mb-3 text-white tracking-wide">
                {item.title}
              </h3>
              
              <p className="text-[#c4c4c4] text-[0.95rem] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
