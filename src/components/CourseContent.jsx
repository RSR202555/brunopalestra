import React from 'react';

export default function CourseContent() {
  const modules = [
    {
      id: '01',
      title: 'Biomecânica Aplicada Membros Inferiores',
      desc: 'Saber analisar os principais exercícios de forma anatômica, cinesiológica e funcional.',
      image: '/module_1.png'
    },
    {
      id: '02',
      title: 'Seleção de Exercícios',
      desc: 'O que funciona e o que é apenas "modinha" de rede social.',
      image: '/module_2.png'
    },
    {
      id: '03',
      title: 'Como Avaliar e Entender Coxas e Glúteos',
      desc: 'Aprenda a realizar uma avaliação física e biomecânica precisa para identificar pontos fracos e potencializar resultados.',
      image: '/module_3.png'
    },
    {
      id: '04',
      title: 'Montagem de Treino',
      desc: 'Como estruturar sua semana para priorizar glúteos e coxas.',
      image: '/module_4.png'
    },
    {
      id: '05',
      title: 'Fisiologia do Crescimento',
      desc: 'O caminho biológico para a hipertrofia real e duradoura.',
      image: '/module_5.png'
    },
    {
      id: '06',
      title: 'Periodização Estratégica',
      desc: 'Sair do platô e manter a evolução por meses a fio.',
      image: '/module_6.png'
    },
    {
      id: '07',
      title: 'Prática de Campo',
      desc: 'Execução supervisionada para correção imediata de falhas.',
      image: '/module_7.png'
    },
    {
      id: '08',
      title: 'Como fazer uma avaliação postural de MMII',
      desc: 'Aprenda o passo a passo para analisar desvios posturais nos membros inferiores e seu impacto no treinamento.',
      image: '/module_8.png'
    }
  ];

  return (
    <section id="programa" className="py-12 md:py-20 bg-[#1c1c1c]">
      <div className="max-w-[500px] md:max-w-[800px] mx-auto px-6">
        <h2 className="font-sans font-extrabold text-[2.2rem] md:text-5xl uppercase tracking-tighter text-[#FF0000] mb-8 text-center drop-shadow-md">
          O que abordaremos?
        </h2>

        <div className="flex flex-col gap-5">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-[#0a0a0a] border-l-[3px] border-[#FF0000] flex p-5 gap-5 items-center shadow-lg">
              
              <div className="shrink-0">
                <img 
                  src={mod.image} 
                  alt={mod.title} 
                  className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] object-cover bg-black border border-[#2a2a2a]" 
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-[6px]">
                  <span className="text-[#FF0000] font-sans font-extrabold text-[0.85rem] md:text-[0.95rem] leading-tight">
                    {mod.id}
                  </span>
                  <h3 className="font-sans font-extrabold text-[0.85rem] md:text-[0.95rem] uppercase text-white leading-tight">
                    {mod.title}
                  </h3>
                </div>
                <p className="text-[#dfa588] text-[0.85rem] md:text-[0.95rem] leading-snug font-medium pr-2">
                  {mod.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
