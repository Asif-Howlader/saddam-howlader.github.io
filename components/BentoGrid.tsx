import React from 'react';
import { PortfolioData, SkillGroup } from '../types';

interface BentoGridProps {
  data: PortfolioData;
}

const BentoGrid: React.FC<BentoGridProps> = ({ data }) => {
  // Safe skill extraction
  const flatSkills = Array.isArray(data.skills) 
    ? (typeof data.skills[0] === 'string' 
        ? (data.skills as string[]) 
        : (data.skills as SkillGroup[]).flatMap(s => s.skills))
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      
      {/* Bio / About - Medium Span */}
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl">
        <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Location & Identity</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Based in <span className="text-white font-semibold">Bangladesh</span>. 
          Currently serving as an <span className="text-white font-semibold">{data.title}</span> for high-impact projects, specialized in <span className="text-cyan-400">Digital Forensics</span> and <span className="text-pink-500">Cybersecurity</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">📍</div>
             <span className="truncate">{data.contact.address.split('.')[0]}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">📞</div>
             <span>{data.contact.phone}</span>
           </div>
        </div>
      </div>

      {/* Experience - Large Span */}
      <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden relative backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/10 blur-3xl rounded-full"></div>
        <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Deployment History</h3>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 group">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-700 group-hover:bg-cyan-500 transition-colors"></div>
              <div className="text-[10px] font-bold text-slate-500 mb-1">{exp.period}</div>
              <h4 className="text-white font-bold">{exp.role}</h4>
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">{exp.company}</p>
              <div className="flex flex-wrap gap-1">
                {exp.responsibilities.slice(0, 2).map((r, j) => (
                  <span key={j} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills - Square */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
        <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {flatSkills.slice(0, 8).map((skill, i) => (
            <span key={i} className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 uppercase tracking-tighter">
              {skill}
            </span>
          ))}
          {flatSkills.length > 8 && <span className="text-[10px] text-slate-500 mt-1 italic">+{flatSkills.length - 8} more</span>}
        </div>
      </div>

      {/* Education - Large */}
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
        <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.education.map((edu, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-xs">
                {edu.period.split(' ')[0]}
              </div>
              <div>
                <h4 className="text-white font-bold text-xs leading-tight">{edu.degree}</h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="md:col-span-1 lg:col-span-1 bg-zinc-900 border border-white/10 p-8 rounded-3xl">
        <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Toolkit</h3>
        <div className="space-y-4">
           {data.toolsets?.slice(0, 2).map((ts, i) => (
             <div key={i}>
                <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">{ts.category}</div>
                <div className="flex flex-wrap gap-1">
                  {ts.items.map((item, j) => (
                    <span key={j} className="text-[10px] text-slate-300">{item}{j < ts.items.length - 1 ? ',' : ''}</span>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>

       {/* Training Count */}
       <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center backdrop-blur-xl">
        <div className="text-4xl font-black text-cyan-400 mb-1">{data.training?.length || 0}</div>
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Certifications</div>
      </div>

      {/* Reference Snippet */}
      <div className="md:col-span-2 lg:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">References</h3>
        {data.references && data.references[0] && (
          <>
            <p className="text-[10px] text-slate-400 italic">"Highly recommended for complex IT infrastructure projects."</p>
            <div className="mt-4 pt-4 border-t border-white/5">
               <div className="text-xs font-bold text-white">{data.references[0].name}</div>
               <div className="text-[9px] text-slate-500 uppercase">{data.references[0].role}</div>
            </div>
          </>
        )}
      </div>

      {/* Languages */}
      <div className="lg:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl">
         <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Linguistic</h3>
         <div className="space-y-2">
            {data.languages.map((lang, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase">
                <span className="text-white">{lang.split(' ')[0]}</span>
                <span className="text-cyan-500">{lang.split(' ')[1] || 'Expert'}</span>
              </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default BentoGrid;