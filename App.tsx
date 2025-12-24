import React, { useEffect, useState } from 'react';
import { portfolioData } from './data';
import BentoGrid from './components/BentoGrid';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('./_data/cv.json');
        if (response.ok) {
          const json = await response.json();
          // Fallback check for missing fields in JSON
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
      <div className="text-cyan-400 font-mono text-xl animate-pulse tracking-widest uppercase">Initializing_System...</div>
    </div>
  );

  const profileImg = data.profile_image || data.profileImage;

  return (
    <div className="min-h-screen bg-[#080808] text-slate-300 selection:bg-cyan-500 selection:text-black font-mono">
      
      {/* HEADER HUD */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative w-12 h-12 border-2 border-cyan-500 flex items-center justify-center bg-cyan-500/10">
              <span className="text-cyan-400 font-black text-xl tracking-tighter">SH</span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500"></div>
            </div>
            <div className="hidden md:block">
              <div className="text-[10px] text-cyan-500 font-bold tracking-[0.4em] uppercase opacity-60">ID::FORENSICS_SPECIALIST</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white">{data.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
              Connection_Secure
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="px-4 py-2 border border-white/10 hover:border-cyan-500 transition-all text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400"
            >
              Mode: {isDark ? 'Stealth' : 'Active'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              System_Whoami --profile
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              CYBER <br /> <span className="text-cyan-400">ARCHITECT</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-12 border-l-2 border-cyan-500/30 pl-8">
              Strategic <span className="text-white font-bold">{data.title}</span> specializing in national ICT infrastructure and digital defense.
            </p>
            <div className="flex gap-12">
               <div>
                 <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mb-2">Location</div>
                 <div className="text-xs font-bold text-white uppercase tracking-widest">Dhaka // BD</div>
               </div>
               <div>
                 <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mb-2">Secure_Contact</div>
                 <a href={`mailto:${data.contact.email}`} className="text-xs font-bold text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">{data.contact.email}</a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl group overflow-hidden">
               <img 
                 src={profileImg} 
                 alt={data.name} 
                 className="w-full aspect-square object-cover grayscale brightness-110 contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute top-6 left-6 text-[8px] font-bold bg-black/80 px-2 py-1 border border-cyan-500/20 text-cyan-400 uppercase tracking-widest">Scan_ID: {data.name.split(' ')[0]}</div>
            </div>
          </div>
        </section>

        {/* BENTO GRID INTEGRATION */}
        <BentoGrid data={data} />

        {/* FOOTER ACTION */}
        <section className="mt-32 text-center p-20 border border-white/5 rounded-3xl bg-white/[0.02]">
           <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Ready to <span className="text-cyan-400">Collaborate?</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a href={`mailto:${data.contact.email}`} className="px-10 py-4 bg-cyan-500 text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all">Open_Uplink</a>
              <a href={`https://${data.contact.linkedin}`} target="_blank" className="px-10 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white/5 transition-all">LinkedIn_Profile</a>
           </div>
        </section>

      </main>

      <footer className="p-8 border-t border-white/5 text-center">
        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Saddam Howlader // OS_V6.0_STABLE
        </div>
      </footer>
    </div>
  );
};

export default App;