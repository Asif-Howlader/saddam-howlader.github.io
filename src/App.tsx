import React, { useEffect, useState } from 'react';
import { portfolioData } from './data';
import BentoGrid from './components/BentoGrid';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('./_data/cv.json');
        if (response.ok) {
          const json = await response.json();
          setData({ ...portfolioData, ...json });
        } else {
          setData(portfolioData);
        }
      } catch (err) {
        setData(portfolioData);
      }
    };
    loadData();
  }, []);

  if (!data) return (
    <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
      <div className="text-cyan-400 font-mono text-xl animate-pulse tracking-widest uppercase">
        Initializing_System...
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080808] text-slate-300 font-mono">
      <header className="fixed top-0 left-0 w-full z-50 p-6 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative w-12 h-12 border-2 border-cyan-500 flex items-center justify-center bg-cyan-500/10">
              <span className="text-cyan-400 font-black text-xl tracking-tighter">SH</span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500"></div>
            </div>
            <div className="hidden md:block text-left">
              <div className="text-[10px] text-cyan-500 font-bold tracking-[0.4em] uppercase opacity-60">
                AUTH::SECURE_UPLINK
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-white">{data.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <a 
               href={`mailto:${data.contact.email}`}
               className="px-4 py-2 border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 text-[10px] font-bold uppercase tracking-widest transition-all"
             >
               Contact_Me
             </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-left">
              Project_Bio_V2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-8 text-left">
              CYBER <span className="text-cyan-400">INFRA</span> SPECIALIST
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-cyan-500/30 pl-8 text-left">
              Expertise in <span className="text-white font-bold">Digital Forensics</span> and 
              <span className="text-white font-bold"> Cybersecurity</span> protocols.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="p-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden group">
               <img 
                 src={data.profile_image} 
                 alt={data.name} 
                 className="w-full aspect-square object-cover grayscale brightness-110 contrast-125 hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </section>
        <BentoGrid data={data} />
      </main>
      <footer className="p-12 border-t border-white/5 text-center mt-20">
        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Saddam Howlader // INFRA_SECURED
        </div>
      </footer>
    </div>
  );
};

export default App;