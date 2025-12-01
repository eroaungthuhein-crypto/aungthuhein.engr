import React from 'react';
import { SKILLS, EDUCATION, CERTIFICATIONS, LANGUAGES } from '../constants';
import { GraduationCap, Award, CheckCircle2, Globe } from 'lucide-react';

const SkillsEducation: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Education & Certs */}
          <div className="space-y-12">
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-600" size={28} />
                Education
              </h3>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900">{EDUCATION.degree}</h4>
                <p className="text-blue-700 font-medium">{EDUCATION.institution}</p>
                <p className="text-slate-500 text-sm mt-1">{EDUCATION.year}</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Award className="text-blue-600" size={28} />
                Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                    <div className="p-1 bg-green-100 rounded text-green-600 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-slate-800">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills & Languages */}
          <div className="space-y-12">
            
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Globe className="text-blue-600" size={28} />
                Language Proficiency
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg text-center font-semibold text-slate-700">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;