import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Work Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="h-full">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900">{job.role}</h4>
                  <div className="flex items-center gap-2 text-blue-700 font-medium mt-1">
                    <Briefcase size={16} />
                    {job.company}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6 border-b border-slate-100 pb-4">
                   <span className="inline-flex items-center gap-1 text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>

                <ul className="space-y-3 flex-1">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;