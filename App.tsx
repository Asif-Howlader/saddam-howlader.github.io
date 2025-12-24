import React, { useEffect, useState } from 'react';
import { portfolioData } from './data';

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
          setData(json);
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
      <div className="text-cyan-400 font-mono text-xl animate-pulse tracking-widest">INITIALIZING_SYSTEM...</div>
    </div>
  );

  const profileImg = data.profile_image || data.profileImage;

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-black transition-colors duration-500">
      
      {/* HUD HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 border-b border-cyan-500/20 bg-black/90 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative group cursor-crosshair">
              <div className="w-12 h-12 border-2 border-cyan-500 flex items-center justify-center bg-cyan-500/10">
                <span className="text-cyan-400 font-black text-xl tracking-tighter animate-pulse">SH</span>
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>
            </div>
            <div className="hidden md:block">
              <div className="text-[10px] text-cyan-500 font-bold tracking-[0.4em] uppercase opacity-60">Identity::Forensics_Specialist</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/90">{data.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-ping"></span>
                UPLINK_STABLE
              </div>
              <div className="h-4 w-px bg-zinc-800"></div>
              <div className="font-mono">NODE: DHAKA_BD</div>
            </div>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-3 border border-cyan-500/40 px-5 py-2 hover:bg-cyan-500 hover:text-black transition-all group font-bold text-[10px] uppercase tracking-widest"
            >
              <span className="group-hover:text-black text-cyan-400">{isDark ? 'Stealth' : 'Light'}</span>
              <div className={`w-3 h-3 border border-cyan-500 ${isDark ? 'bg-cyan-500' : 'bg-transparent'}`}></div>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-44 pb-32">
        
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 font-bold uppercase mb-12">
              <span className="w-2 h-2 bg-magenta-500 rounded-full bg-pink-500"></span> CMD: whoami --profile
            </div>
            
            <h1 className="font-display text-7xl md:text-[8.5rem] font-black leading-[0.8] uppercase tracking-tighter mb-10">
              <span className="block hover:text-cyan-400 transition-colors cursor-default">CYBER</span>
              <span className="text-cyan-400 block">ARCHITECT</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-16 max-w-2xl border-l-2 border-cyan-500/30 pl-8">
              Strategic <span className="text-white font-bold">{data.title}</span> specializing in 
              <span className="text-pink-500 font-bold"> Digital Forensics</span> and 
              <span className="text-white font-bold"> National ICT Infrastructure</span>.
            </p>

            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] mb-3">Origin_Point</span>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Dhaka // Bangladesh</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] mb-3">Secure_Contact</span>
                <a href={`mailto:${data.contact.email}`} className="text-sm font-bold uppercase text-cyan-400 hover:text-white transition-colors underline underline-offset-8 decoration-cyan-500/30">{data.contact.email}</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative group">
            <div className="cyber-border p-2 bg-black/50 cyber-cut relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-all"></div>
              <img 
                src={profileImg} 
                alt={data.name} 
                className="w-full aspect-square object-cover grayscale mix-blend-lighten contrast-125 brightness-110 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 text-[9px] font-mono text-cyan-400/60 bg-black/80 px-2 py-1">SCAN_ID_SADDAM</div>
              <div className="absolute bottom-4 right-4 text-right">
                <div className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest">UID_{Math.floor(Math.random() * 9999)}</div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-24">
            <div className="text-pink-500 font-black text-xs uppercase tracking-[0.8em]">Deployment_History</div>
            <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12 space-y-20">
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="group relative border-l-2 border-zinc-800 pl-12 hover:border-pink-500 transition-colors">
                  <div className="absolute -left-2 top-0 w-3.5 h-3.5 bg-black border-2 border-zinc-700 group-hover:border-pink-500 transition-all"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white mb-2 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                      <p className="text-xs font-black text-pink-500 uppercase tracking-[0.4em]">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 font-bold px-3 py-1 bg-zinc-900 border border-zinc-800">{exp.period}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                    {exp.responsibilities.map((res: string, j: number) => (
                      <div key={j} className="text-sm text-zinc-400 leading-relaxed flex gap-4 group/item">
                        <span className="text-cyan-400 font-black shrink-0 transition-all group-hover/item:translate-x-1">_</span>
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-24">
            <div className="text-green-500 font-black text-xs uppercase tracking-[0.8em]">Technical_Skill_Index</div>
            <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.skills.map((skill: string, i: number) => (
              <div key={i} className="cyber-border p-8 bg-zinc-900/20 group hover:bg-green-500/5 transition-all flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">MOD_{i.toString().padStart(2, '0')}</span>
                  <div className="w-1.5 h-6 bg-green-500/20 group-hover:bg-green-500 transition-all shadow-[0_0_10px_#22c55e]"></div>
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest group-hover:text-white transition-all leading-tight">{skill}</h4>
                <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-green-500/40 w-4/5 group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <section className="text-center py-20 border-t border-zinc-800">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            INITIATE <span className="text-cyan-400">UPLINK</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
             <a href={`mailto:${data.contact.email}`} className="px-10 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-white transition-all">Send_Message</a>
             <a href={`https://${data.contact.linkedin}`} target="_blank" className="px-10 py-4 border border-cyan-500 text-cyan-400 font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-all">Connect_LinkedIn</a>
          </div>
        </section>

      </main>

      {/* FOOTER BAR */}
      <footer className="fixed bottom-0 left-0 w-full p-4 border-t border-zinc-800 bg-black/95 backdrop-blur-md z-50">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
           <span>SADDAM_HOWLADER // OS_V6.1</span>
           <div className="flex gap-8">
              <span className="text-cyan-500 animate-pulse">SYSTEM_ONLINE</span>
              <span className="hidden sm:block">2024_UTC</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;