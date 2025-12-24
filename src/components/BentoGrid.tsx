import React from 'react';
import { PortfolioData, SkillGroup } from '../types';
import { 
  MapPin, Phone, Shield, Terminal, Globe, 
  BookOpen, Award, Users, Wrench, Monitor 
} from 'lucide-react';

interface BentoGridProps {
  data: PortfolioData;
}

const BentoGrid: React.FC<BentoGridProps> = ({ data }) => {
  const skills = Array.isArray(data.skills) ? data.skills : [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl group hover:border-cyan-500/50 transition-all">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <Globe className="w-4 h-4 text-cyan-400" />
          <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Identity</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed mb-6 text-left">
          Currently serving as an <span className="text-white font-semibold">{data.title}</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400 text-left">
           <div className="flex items-center gap-3">
             <MapPin className="w-4 h-4 text-cyan-400" />
             <span className="truncate">{data.contact.address.split(',')[0]}</span>
           </div>
           <div className="flex items-center gap-3">
             <Phone className="w-4 h-4 text-pink-400" />
             <span>{data.contact.phone}</span>
           </div>
        </div>
      </div>

      <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden relative backdrop-blur-xl group hover:border-cyan-500/50 transition-all text-left">
        <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Deployment Log</h3>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 group/item">
              <div className="text-[10px] font-bold text-slate-500 mb-1">{exp.period}</div>
              <h4 className="text-white font-bold">{exp.role}</h4>
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all text-left">
        <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Stack</h3>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 8).map((skill: any, i: number) => (
            <span key={i} className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 uppercase">
              {typeof skill === 'string' ? skill : skill.category}
            </span>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-indigo-500/50 transition-all text-left">
        <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Academic</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.education.map((edu, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-white font-bold text-xs leading-tight">{edu.degree}</h4>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;