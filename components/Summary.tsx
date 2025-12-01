import React from 'react';
import { SUMMARY, PERSONAL_DETAILS } from '../constants';

const Summary: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Summary */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-600 inline-block pb-2">
              Professional Summary
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              {SUMMARY}
            </p>
          </div>

          {/* Personal Details Card */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
              Personal Details
            </h3>
            <ul className="space-y-4">
              {PERSONAL_DETAILS.map((detail, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-500 font-medium text-sm">{detail.label}</span>
                  <span className="text-slate-900 font-semibold">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Summary;