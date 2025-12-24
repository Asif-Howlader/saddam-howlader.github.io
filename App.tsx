
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [imgError, setImgError] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('./_data/cv.json');
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw new Error('Local fallback');
        }
      } catch (err) {
        import('./data').then(mod => {
          setData(mod.portfolioData);
        });
      }
    };
    loadData();
  }, []);

  if (!data) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#020617]">
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-500 animate-[loading_2s_infinite]"></div>
      </div>
      <span className="mt-4 font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase">Initializing System...</span>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );

  const profileImg = data.profile_image || data.profileImage;

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header Info Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <span className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">System Status: Active</span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[11px] text-slate-500">
            <span className="hidden md:inline">LOC: 23.8103° N, 90.4125° E</span>
            <span className="text-slate-300 font-bold">{currentTime}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12 lg:pt-20">
        
        {/* PROFILE HEADER MODULE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[2rem] opacity-20 group-hover:opacity-100 blur transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[1.8rem] overflow-hidden border border-white/10 tech-card">
                {!imgError ? (
                  <img 
                    src={profileImg} 
                    alt={data.name} 
                    className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition duration-500"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900">
                    <span className="text-8xl mb-4">👤</span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Image Data Offline</span>
                  </div>
                )}
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_indigo] animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Verified Identity // 01001011
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-4 drop-shadow-2xl">
                {data.name.split(' ')[0]}<span className="text-indigo-500">.</span>{data.name.split(' ')[1]}
              </h1>
              <h2 className="text-xl md:text-2xl font-mono text-slate-400 font-bold uppercase tracking-wider">
                &lt;{data.title} /&gt;
              </h2>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Specializing in <span className="text-white font-bold">IT Infrastructure & Cybersecurity</span>. Architecting secure networks and managing critical government ICT assets with a focus on Digital Forensics.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${data.contact.email}`} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-600/20">
                Secure Message
              </a>
              <a href={`https://${data.contact.linkedin}`} target="_blank" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg transition-all">
                LinkedIn Directory
              </a>
            </div>
          </div>
        </section>

        {/* CORE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* EXPERTISE BOX */}
          <div className="md:col-span-8 tech-card p-10 rounded-3xl">
            <h3 className="font-mono text-[10px] font-black uppercase text-indigo-400 tracking-[0.3em] mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-indigo-500/50"></span> Expertise_Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.skills.map((skill: string, i: number) => (
                <div key={i} className="flex flex-col gap-2 group cursor-default">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors"></span>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                  </div>
                  <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500/50 w-[85%] group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="tech-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-black text-white glow-text mb-1 tracking-tighter">06+</span>
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">Years Active</span>
            </div>
            <div className="tech-card p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-indigo-600/10 border-indigo-500/30">
              <span className="text-5xl font-black text-indigo-400 glow-text mb-1 tracking-tighter">12+</span>
              <span className="font-mono text-[10px] font-bold text-indigo-500/60 uppercase tracking-widest">Project Nodes</span>
            </div>
          </div>

          {/* EXPERIENCE LOG */}
          <div className="md:col-span-12 tech-card p-10 md:p-14 rounded-[2.5rem] mt-4">
             <h3 className="font-mono text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-16 text-center">Operation_History</h3>
             <div className="space-y-16">
               {data.experience.map((exp: any, i: number) => (
                 <div key={i} className="relative grid md:grid-cols-4 gap-8">
                   <div className="md:col-span-1">
                     <span className="font-mono text-[12px] font-bold text-indigo-400 mb-2 block tracking-tighter">{exp.period}</span>
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{exp.location}</div>
                   </div>
                   <div className="md:col-span-3 border-l border-white/5 pl-8 md:pl-12 relative">
                     <div className="absolute top-1.5 left-[-5px] w-[10px] h-[10px] rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
                     <h4 className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-tight">{exp.role}</h4>
                     <p className="text-sm font-bold text-indigo-500/80 mb-6 uppercase tracking-[0.15em]">{exp.company}</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {exp.responsibilities.map((res: string, j: number) => (
                         <li key={j} className="flex gap-3 text-slate-400">
                           <svg className="w-4 h-4 text-indigo-500/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                           <span className="text-sm leading-relaxed">{res}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* ACADEMICS & LANGUAGES */}
          <div className="md:col-span-7 tech-card p-10 rounded-3xl">
             <h3 className="font-mono text-[10px] font-black uppercase text-indigo-400 tracking-[0.3em] mb-10">Academic_Records</h3>
             <div className="space-y-10">
               {data.education.map((edu: any, i: number) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-indigo-500/30 transition-all">
                     <svg className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                   </div>
                   <div>
                     <h4 className="text-lg font-black text-white leading-tight uppercase mb-1">{edu.degree}</h4>
                     <p className="text-xs font-bold text-slate-500 tracking-wider mb-2">{edu.institution}</p>
                     <span className="font-mono text-[10px] text-indigo-500/60">{edu.period}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="tech-card p-8 rounded-3xl flex-1">
              <h3 className="font-mono text-[10px] font-black uppercase text-indigo-400 tracking-[0.3em] mb-6">Language_Protocols</h3>
              <div className="space-y-4">
                {data.languages.map((lang: string, i: number) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-widest text-xs">{lang.split(' ')[0]}</span>
                    <span className="font-mono text-[10px] text-indigo-500/80 bg-indigo-500/10 px-2 py-0.5 rounded">{lang.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tech-card p-8 rounded-3xl bg-slate-950/50 flex flex-col justify-center items-center text-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Ready for Tasking</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Currently processing inquiries via encrypted channels.</p>
            </div>
          </div>

        </div>

        {/* FOOTER DASHBOARD */}
        <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-10 opacity-60 hover:opacity-100 transition-opacity">
          <div className="space-y-4">
            <div className="font-black text-4xl text-white tracking-tighter">Saddam<span className="text-indigo-500"></span>Howlader</div>
            <div className="font-mono text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">
              Digital Artifact v4.0.0 &bull; 2024 Build<br/>
              Security Clearance: Administrator
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
               {['LN', 'X', 'GH', 'FB'].map((social) => (
                 <div key={social} className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center font-mono text-[10px] hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                   {social}
                 </div>
               ))}
            </div>
            <div className="text-[10px] font-mono text-indigo-500/50 uppercase tracking-widest">End of Transmission</div>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App;
