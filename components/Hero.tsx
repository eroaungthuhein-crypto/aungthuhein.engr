import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  useEffect(() => {
    const generateAvatar = async () => {
      try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
          console.warn("API Key missing, using fallback image.");
          setIsLoadingImage(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              { text: 'A high-quality 3D animated cartoon style portrait of a friendly professional male engineer of Asian descent. He is wearing a white safety helmet (hard hat) and a smart engineering outfit. The background is a clean, professional gradient of dark blue. Pixar or Disney style 3D render, distinct facial features, warm lighting.' }
            ]
          }
        });

        let foundImage = false;
        if (response.candidates && response.candidates[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64EncodeString = part.inlineData.data;
                    setProfileImage(`data:image/png;base64,${base64EncodeString}`);
                    foundImage = true;
                    break;
                }
            }
        }
        
        if (!foundImage) {
            console.warn("No image data found in response");
        }

      } catch (error) {
        console.error("Failed to generate AI avatar:", error);
      } finally {
        setIsLoadingImage(false);
      }
    };

    generateAvatar();
  }, []);

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image Wrapper */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden relative bg-slate-800 flex items-center justify-center group">
            
            {isLoadingImage ? (
              <div className="flex flex-col items-center gap-2 text-blue-200">
                <Loader2 size={32} className="animate-spin" />
                <span className="text-xs font-medium tracking-wide">Generating AI Avatar...</span>
              </div>
            ) : (
              <img 
                src={profileImage || "https://picsum.photos/400/400?grayscale"} 
                alt="Aung Thu Hein" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* AI Badge */}
            {!isLoadingImage && profileImage && (
              <div className="absolute bottom-4 right-4 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
                AI GENERATED
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              Aung Thu Hein
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 font-medium tracking-wide">
              PROJECT ENGINEER (ELV & Security Systems)
            </h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-slate-300">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              {CONTACT_INFO.email}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href={`https://wa.me/${CONTACT_INFO.phone.replace('+', '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} />
              {CONTACT_INFO.phoneLabel}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {CONTACT_INFO.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;