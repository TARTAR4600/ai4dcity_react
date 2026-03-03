import React from 'react';
import { Mail, Linkedin, GraduationCap, MapPin } from 'lucide-react';
import { TEAM_DATA } from '../data/team';
import { FadeInSection } from './FadeInSection';

// 内部小组件：成员卡片
const MemberCard = ({ member, isAlumni = false }) => (
  <FadeInSection className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group">
    {!isAlumni && (
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-50 border-4 border-white shadow-sm">
        <img 
          src={member.img || '/images/people/profile.png'} 
          alt={member.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          onError={(e) => { e.target.src = '/images/people/profile.png'; }}
        />
      </div>
    )}
    
    {member.homepage ? (
      <a href={member.homepage} target="_blank" rel="noreferrer" className="font-bold text-lg hover:text-blue-600 transition-colors">
        {member.name}
      </a>
    ) : (
      <span className="font-bold text-lg text-gray-800">{member.name}</span>
    )}
    
    <p className="text-xs font-medium text-gray-500 mt-1 mb-3 min-h-[32px]">{member.role}</p>
    
    {member.email && (
      <a href={`mailto:${member.email}`} className="text-xs text-blue-500 flex items-center gap-1 hover:underline">
        <Mail size={12} /> Email
      </a>
    )}
  </FadeInSection>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-8 pl-4 border-l-4 border-blue-600">{children}</h2>
);

/**
 * 团队页面组件
 * 使用命名导出，匹配 App.jsx 中的 { TeamPage } 引入
 */
export const TeamPage = () => {
  // 注意：此处解构的键名必须与 team.js 中的 export const TEAM_DATA 一致
  // 根据你的截图，应为 postdoc 而非 postphd
  const { pi, postdoc, phd, mst, ra, vst, vsc, alu } = TEAM_DATA;

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <FadeInSection>
        <h1 className="text-5xl md:text-7xl font-bold mb-16">Meet our team</h1>
      </FadeInSection>

      {/* PI Section */}
      {pi && (
        <FadeInSection className="bg-slate-50 p-8 md:p-16 rounded-[2.5rem] border border-slate-200 flex flex-col md:flex-row gap-12 mb-24">
          <div className="md:w-1/3 flex flex-col items-center">
            <img 
              src={pi.img} 
              alt={pi.name} 
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-8 border-white mb-8" 
              onError={(e) => { e.target.src = '/images/people/profile.png'; }}
            />
            <div className="space-y-4 w-full px-4">
              <a href="mailto:wufanzhao@hkust-gz.edu.cn" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} /> <span className="text-sm">Email Me</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={20} /> <span className="text-sm">HKUST(GZ) E1 L4 408</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-2">{pi.name}</h2>
            <p className="text-blue-600 font-medium mb-6 text-xl">{pi.role}</p>
            <p className="text-gray-600 leading-relaxed text-justify mb-8">{pi.bio}</p>
            
            <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">Service</h3>
                <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4">
                  {pi.edu && pi.edu.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">Teaching</h3>
                <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4">
                  {pi.Awards && pi.Awards.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      )}

      {/* 学生与研究人员分类渲染 */}
      {[
        { title: "Postdoc Researchers", data: postdoc },
        { title: "Ph.D. Students", data: phd },
        { title: "Master Students", data: mst },
        { title: "Research Assistants", data: ra },
        { title: "Visiting Students", data: vst },
        { title: "Visiting Scholars", data: vsc },
      ].map(section => section.data && section.data.length > 0 && (
        <div key={section.title} className="mb-20">
          <SectionTitle>{section.title}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.data.map((member, i) => <MemberCard key={i} member={member} />)}
          </div>
        </div>
      ))}

      {/* Alumni Section */}
      {alu && alu.length > 0 && (
        <div className="mb-20">
          <SectionTitle>Alumni</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {alu.map((member, i) => <MemberCard key={i} member={member} isAlumni={true} />)}
          </div>
        </div>
      )}
    </div>
  );
};