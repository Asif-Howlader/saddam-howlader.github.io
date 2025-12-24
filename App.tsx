import React, { useEffect, useState } from 'react';

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
          throw new Error('Fallback');
        }
      } catch (err) {
        import('./data').then(mod => {
          setData(mod.portfolioData);
        });
      }
    };
    loadData();
  }, []);

  if (!data) return null;

  const profileImg = data.profile_image || data.profileImage || 'input_file_0.png';

  return (
    <div className="min-h-screen selection:bg-cyber-cyan selection:text-black">
      
      {/* HUD HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 border-b border-cyber-cyan/30 bg-black/90 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-12 h-12 border border-cyber-cyan flex items-center justify-center bg-cyber-cyan/10">
                <span className="text-cyber-cyan font-black text-xl flicker tracking-tighter">SH</span>
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyber-cyan"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyber-cyan"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[9px] text-cyber-cyan font-bold tracking-[0.3em] uppercase opacity-60">System Architect</div>
              <div className="text-sm font-bold uppercase tracking-tight">{data.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-green animate-pulse rounded-full"></span>
                Uplink Stable
              </div>
              <div className="h-4 w-px bg-zinc-800"></div>
              <div>Node: 0xBFD{Math.floor(Math.random() * 999)}</div>
            </div>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-3 border border-cyber-cyan/40 px-4 py-2 hover:bg-cyber-cyan hover:text-black transition-all group font-bold text-[10px] uppercase tracking-widest"
            >
              <span className="group-hover:text-black text-cyber-cyan">Mode: {isDark ? 'Stealth' : 'High-Viz'}</span>
              <div className={`w-3 h-3 border border-cyber-cyan ${isDark ? 'bg-cyber-cyan' : 'bg-transparent'}`}></div>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-32 relative">
        
        {/* HERO DASHBOARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-48 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-cyan/30 bg-cyber-cyan/5 text-[10px] text-cyber-cyan font-bold uppercase mb-8">
              <span className="animate-pulse">●</span> Active_Session: {data.title}
            </div>
            
            <h1 className="font-display text-7xl md:text-[10rem] font-black leading-[0.8] uppercase tracking-tighter mb-10">
              BUILDING <br/>
              <span className="text-cyber-cyan text-glow">RELI</span>
              <span className="relative">
                ANCE
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-cyber-magenta/30"></span>
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 max-w-3xl">
              Specialist in <span className="text-white font-bold italic">Digital Forensics</span> and 
              <span className="text-white font-bold"> Infrastructure Defense</span>. Architecting security 
              protocols for Government ICT environments.
            </p>

            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Location_Data</span>
                <span className="text-sm font-bold uppercase tracking-tighter">Dhaka / BD_0x7</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Comms_Protocol</span>
                <a href={`mailto:${data.contact.email}`} className="text-sm font-bold uppercase text-cyber-cyan hover:text-white transition-colors underline underline-offset-4 decoration-cyber-cyan/30">{data.contact.email}</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative group">
            <div className="cyber-border p-3 bg-cyber-cyan/5 cyber-cut relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan/20 animate-scan"></div>
              <img 
                src={profileImg} 
                alt={data.name} 
                className="w-full h-full object-cover grayscale mix-blend-lighten contrast-125 brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/20 to-transparent"></div>
              
              {/* Overlay HUD elements */}
              <div className="absolute bottom-6 right-6 text-right">
                <div className="text-[8px] font-mono text-cyber-cyan/60 uppercase">Identity_Verified</div>
                <div className="text-[8px] font-mono text-cyber-cyan/60 uppercase">Auth_Level: 09</div>
              </div>
            </div>
            {/* Corner labels */}
            <div className="absolute -top-4 -right-4 text-[10px] text-zinc-600 font-mono rotate-90">REF_880_SADDAM</div>
          </div>
        </section>

        {/* LOGS (EXPERIENCE) */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="text-cyber-magenta font-black text-xs uppercase tracking-[0.5em]">01_Deployment_History</div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-magenta/40 to-transparent"></div>
          </div>

          <div className="space-y-32">
            {data.experience.map((exp: any, i: number) => (
              <div key={i} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-1">
                   <div className="text-5xl font-black text-zinc-800 group-hover:text-cyber-cyan/20 transition-colors italic">0{i+1}</div>
                </div>
                <div className="lg:col-span-11 cyber-border p-8 lg:p-12 bg-zinc-900/10 hover:bg-cyber-cyan/[0.02] transition-all">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-12">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-cyber-cyan transition-colors mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-black text-cyber-magenta tracking-[0.2em] uppercase">{exp.company}</p>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-mono opacity-30 mb-1">Time_Period</div>
                       <div className="text-lg font-bold font-mono tracking-tighter">{exp.period}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {exp.responsibilities.map((res: string, j: number) => (
                      <div key={j} className="text-sm font-light leading-relaxed text-zinc-400 flex gap-4">
                        <span className="text-cyber-cyan font-black shrink-0">»</span>
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MATRIX (SKILLS) */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="text-cyber-green font-black text-xs uppercase tracking-[0.5em]">02_Skill_Matrix</div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-green/40 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.skills.map((skill: string, i: number) => (
              <div key={i} className="cyber-border p-6 bg-zinc-900/20 group hover:bg-cyber-green/5 transition-all flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Type__{i.toString().padStart(2, '0')}</span>
                  <div className="w-2 h-2 bg-cyber-green/20 group-hover:bg-cyber-green"></div>
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest group-hover:text-glow group-hover:text-cyber-green transition-all">{skill}</h4>
                <div className="w-full h-1 bg-zinc-800">
                  <div className="h-full bg-cyber-green w-4/5 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & LANGUAGES */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-cyber-yellow text-xl font-black">◈</span>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Academic_Baseline</h2>
            </div>
            <div className="space-y-12">
               {data.education.map((edu: any, i: number) => (
                 <div key={i} className="relative pl-10 border-l border-zinc-800">
                   <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-cyber-yellow"></div>
                   <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{edu.degree}</h3>
                   <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">{edu.institution}</p>
                   <span className="inline-block px-3 py-1 bg-zinc-900 text-[10px] font-mono uppercase tracking-widest">{edu.period}</span>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-cyber-cyan text-xl font-black">◈</span>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Linguistic_Interconnect</h2>
            </div>
            <div className="space-y-8">
               {data.languages.map((lang: string, i: number) => (
                 <div key={i} className="group border-b border-zinc-800 pb-6 flex justify-between items-center">
                   <div>
                     <span className="text-2xl font-bold uppercase tracking-tighter group-hover:text-cyber-cyan transition-colors">{lang.split(' ')[0]}</span>
                     <span className="ml-4 text-[10px] font-mono opacity-40 uppercase tracking-widest">{lang.split(' ')[1]}</span>
                   </div>
                   <div className="flex gap-2">
                      {[1,2,3,4,5,6].map(bar => (
                        <div key={bar} className={`w-1.5 h-4 ${bar <= (lang.includes('Native') ? 6 : 5) ? 'bg-cyber-cyan/50 group-hover:bg-cyber-cyan' : 'bg-zinc-800'}`}></div>
                      ))}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* UPLINK (CONTACT) */}
        <section className="relative group">
           <div className="cyber-border p-12 lg:p-24 bg-cyber-cyan/[0.03] cyber-cut text-center">
              <div className="text-[10px] font-bold text-cyber-cyan uppercase tracking-[0.8em] mb-12 flicker">Establishing_Secure_Connection...</div>
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-none">
                START YOUR <br/>
                <span className="text-cyber-cyan text-glow">TRANS</span>MISSION
              </h2>
              <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
                 <a 
                   href={`mailto:${data.contact.email}`} 
                   className="flex-1 py-6 bg-cyber-cyan text-black font-black uppercase tracking-[0.3em] hover:bg-white transition-all text-sm"
                 >
                   Send_Email
                 </a>
                 <a 
                   href={`https://${data.contact.linkedin}`} 
                   target="_blank"
                   className="flex-1 py-6 border border-cyber-cyan text-cyber-cyan font-black uppercase tracking-[0.3em] hover:bg-cyber-cyan/10 transition-all text-sm"
                 >
                   LinkedIn_Node
                 </a>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-48 pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] font-bold uppercase tracking-[0.5em]">
           <span>&copy; SADDAM_HOWLADER // ARCH_V4.1</span>
           <div className="flex gap-10">
              <a href="#" className="hover:text-cyber-cyan transition-colors">Terminal_Access</a>
              <a href="#" className="hover:text-cyber-cyan transition-colors">System_Logs</a>
              <span>Dhaka_Node_24</span>
           </div>
        </footer>

      </main>

      {/* Decorative Accents */}
      <div className="fixed top-1/2 -left-10 w-24 h-px bg-cyber-cyan/20 -rotate-90 pointer-events-none"></div>
      <div className="fixed top-1/2 -right-10 w-24 h-px bg-cyber-cyan/20 -rotate-90 pointer-events-none"></div>
    </div>
  );
};

export default App;