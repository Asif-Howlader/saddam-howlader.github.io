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
      
      {/* CYBER HUD HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 border-b border-cyber-cyan/30 bg-black/90 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-12 h-12 border border-cyber-cyan flex items-center justify-center bg-cyber-cyan/10">
                <span className="text-cyber-cyan font-black text-xl tracking-tighter animate-pulse">SH</span>
              </div>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[9px] text-cyber-cyan font-bold tracking-[0.4em] uppercase opacity-60">Auth::System_Architect</div>
              <div className="text-sm font-bold uppercase tracking-tight text-glow">{data.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold text-zinc-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-green rounded-full shadow-[0_0_8px_#39ff14]"></span>
                Status: Secure_Uplink
              </div>
              <div className="h-4 w-px bg-zinc-800"></div>
              <div>Buffer: 0x{Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()}</div>
            </div>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-3 border border-cyber-cyan/40 px-5 py-2 hover:bg-cyber-cyan hover:text-black transition-all group font-bold text-[10px] uppercase tracking-widest"
            >
              <span className="group-hover:text-black text-cyber-cyan">Grid_{isDark ? 'Stealth' : 'Light'}</span>
              <div className={`w-3 h-3 border border-cyber-cyan ${isDark ? 'bg-cyber-cyan' : 'bg-transparent'}`}></div>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-32 relative">
        
        {/* HERO TERMINAL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-cyan/30 bg-cyber-cyan/5 text-[10px] text-cyber-cyan font-bold uppercase mb-10">
              <span className="animate-hud-pulse text-cyber-magenta">●</span> Remote_Session::Active
            </div>
            
            <h1 className="font-display text-7xl md:text-[9rem] font-black leading-[0.8] uppercase tracking-tighter mb-12">
              <span className="glitch-text">DEFENDING</span><br/>
              <span className="text-cyber-cyan text-glow">INFRA</span>STRUCTURE
            </h1>

            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-14 max-w-3xl">
              Strategic <span className="text-white font-bold">{data.title}</span> specializing in 
              <span className="text-cyber-magenta font-bold"> Digital Forensics</span> and 
              <span className="text-white font-bold"> Government ICT Defense</span>. Operating at the core of technical resilience.
            </p>

            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-3">Node_Location</span>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Dhaka_Region_BD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-3">Encryption_Link</span>
                <a href={`mailto:${data.contact.email}`} className="text-sm font-bold uppercase text-cyber-cyan hover:text-white transition-colors underline underline-offset-8 decoration-cyber-cyan/30">{data.contact.email}</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative group">
            <div className="cyber-border p-3 bg-black/40 cyber-cut relative overflow-hidden group">
              <img 
                src={profileImg} 
                alt={data.name} 
                className="w-full h-full object-cover grayscale mix-blend-screen contrast-125 brightness-110 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/30 to-transparent pointer-events-none"></div>
              
              {/* Overlay HUD elements */}
              <div className="absolute top-6 left-6 flex flex-col gap-1">
                <div className="w-10 h-1 bg-cyber-cyan"></div>
                <div className="w-6 h-1 bg-cyber-cyan/40"></div>
              </div>
              <div className="absolute bottom-8 right-8 text-right">
                <div className="text-[9px] font-mono text-cyber-cyan font-bold uppercase tracking-widest">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase">Signal_Verified</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 text-[10px] text-zinc-700 font-mono rotate-90 tracking-[0.5em]">SYSTEM_REF::SADDAM</div>
          </div>
        </section>

        {/* DATA BLADES (EXPERIENCE) */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="text-cyber-magenta font-black text-xs uppercase tracking-[0.6em]">System_Deployment_Logs</div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-magenta/50 to-transparent"></div>
          </div>

          <div className="space-y-24">
            {data.experience.map((exp: any, i: number) => (
              <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                <div className="lg:col-span-1 hidden lg:block">
                   <div className="text-6xl font-black text-zinc-900 group-hover:text-cyber-cyan/10 transition-colors italic">0{i+1}</div>
                </div>
                <div className="lg:col-span-11 cyber-border p-8 lg:p-12 bg-zinc-900/10 hover:bg-cyber-magenta/[0.03] transition-all relative">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 mb-12">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-glow group-hover:text-cyber-cyan transition-all mb-3">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-black text-cyber-magenta tracking-[0.3em] uppercase">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-cyber-cyan/20 px-6">
                       <div className="text-[10px] font-mono opacity-40 uppercase mb-2">Duration_Period</div>
                       <div className="text-xl font-bold font-mono tracking-tighter text-zinc-300">{exp.period}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    {exp.responsibilities.map((res: string, j: number) => (
                      <div key={j} className="text-sm font-light leading-relaxed text-zinc-400 flex gap-5 group/item">
                        <span className="text-cyber-cyan font-black shrink-0 transition-transform group-hover/item:translate-x-1">»</span>
                        {res}
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative corner tag */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                    <div className="absolute top-4 right-4 text-[8px] font-mono text-zinc-700 uppercase tracking-widest -rotate-45">Log_Entry</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILL MATRIX */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="text-cyber-green font-black text-xs uppercase tracking-[0.6em]">Core_Skillset_Index</div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-green/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.skills.map((skill: string, i: number) => (
              <div key={i} className="cyber-border p-8 bg-zinc-900/30 group hover:bg-cyber-green/10 transition-all flex flex-col justify-between h-48 border-zinc-800">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Module_{i.toString().padStart(2, '0')}</span>
                  <div className="w-2 h-6 bg-cyber-green/20 group-hover:bg-cyber-green transition-all shadow-cyber-green"></div>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-widest group-hover:text-glow group-hover:text-cyber-green transition-all leading-tight">{skill}</h4>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-green w-4/5 group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMICS & COMMS */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="cyber-border p-10 bg-zinc-900/20">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-cyber-yellow text-2xl font-black flicker">◈</span>
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-500">Academic_Repository</h2>
            </div>
            <div className="space-y-16">
               {data.education.map((edu: any, i: number) => (
                 <div key={i} className="relative pl-12 border-l-2 border-zinc-800 group hover:border-cyber-yellow transition-colors">
                   <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-cyber-yellow shadow-[0_0_10px_#f4f20e] opacity-40 group-hover:opacity-100"></div>
                   <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-zinc-200">{edu.degree}</h3>
                   <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">{edu.institution}</p>
                   <span className="inline-block px-4 py-1.5 bg-black border border-zinc-800 text-[10px] font-mono uppercase tracking-[0.4em] text-cyber-yellow">{edu.period}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="cyber-border p-10 bg-zinc-900/20">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-cyber-cyan text-2xl font-black flicker">◈</span>
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-500">Linguistic_Interconnect</h2>
            </div>
            <div className="space-y-12">
               {data.languages.map((lang: string, i: number) => (
                 <div key={i} className="group border-b border-zinc-800/50 pb-8 flex justify-between items-center">
                   <div>
                     <span className="text-3xl font-bold uppercase tracking-tighter text-zinc-300 group-hover:text-cyber-cyan transition-colors">{lang.split(' ')[0]}</span>
                     <span className="ml-5 text-[10px] font-mono opacity-40 uppercase tracking-[0.4em] italic">{lang.split(' ')[1]}</span>
                   </div>
                   <div className="flex gap-2">
                      {[1,2,3,4,5,6].map(bar => (
                        <div key={bar} className={`w-2 h-5 ${bar <= (lang.includes('Native') ? 6 : 4) ? 'bg-cyber-cyan/30 group-hover:bg-cyber-cyan' : 'bg-zinc-800'}`}></div>
                      ))}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* UPLINK (CONTACT) */}
        <section className="relative overflow-hidden">
           <div className="cyber-border p-12 lg:p-24 bg-cyber-cyan/[0.04] cyber-cut text-center">
              <div className="text-[10px] font-bold text-cyber-cyan uppercase tracking-[1em] mb-12 animate-pulse">Establishing_Secure_Connection...</div>
              <h2 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-none">
                INITIATE<br/>
                <span className="text-cyber-cyan text-glow">UPLINK</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
                 <a 
                   href={`mailto:${data.contact.email}`} 
                   className="flex-1 py-8 bg-cyber-cyan text-black font-black uppercase tracking-[0.4em] hover:bg-white transition-all text-sm shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                 >
                   Send_Transmission
                 </a>
                 <a 
                   href={`https://${data.contact.linkedin}`} 
                   target="_blank"
                   className="flex-1 py-8 border border-cyber-cyan text-cyber-cyan font-black uppercase tracking-[0.4em] hover:bg-cyber-cyan/10 transition-all text-sm"
                 >
                   LinkedIn_Node
                 </a>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-48 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center opacity-30 text-[10px] font-bold uppercase tracking-[0.6em] gap-8">
           <span>&copy; SADDAM_HOWLADER // ARCH_V5.0_STABLE</span>
           <div className="flex gap-12">
              <a href="#" className="hover:text-cyber-cyan transition-colors">Forensic_Logs</a>
              <a href="#" className="hover:text-cyber-cyan transition-colors">Asset_Mgmt</a>
              <span>UTC_2024</span>
           </div>
        </footer>

      </main>

      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyber-magenta/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};

export default App;