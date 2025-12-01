import { GoogleGenAI } from "@google/genai";
import { SUMMARY, EXPERIENCE, EDUCATION, SKILLS, PERSONAL_DETAILS, CONTACT_INFO } from '../constants';

const formatResumeData = (): string => {
  return `
    NAME: Aung Thu Hein
    ROLE: Project Engineer
    SUMMARY: ${SUMMARY}
    CONTACT: ${CONTACT_INFO.email}, ${CONTACT_INFO.phoneLabel}, ${CONTACT_INFO.location}
    
    PERSONAL DETAILS:
    ${PERSONAL_DETAILS.map(d => `- ${d.label}: ${d.value}`).join('\n')}
    
    SKILLS: ${SKILLS.join(', ')}
    
    EDUCATION: ${EDUCATION.degree} at ${EDUCATION.institution} (${EDUCATION.year})
    
    EXPERIENCE:
    ${EXPERIENCE.map(exp => `
      Role: ${exp.role} at ${exp.company} (${exp.location})
      Period: ${exp.period}
      Responsibilities:
      ${exp.description.map(d => `- ${d}`).join('\n')}
    `).join('\n')}
  `;
};

export const generateResumeResponse = async (userQuery: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I cannot answer right now as the API key is missing. Please contact Aung directly via email.";
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const resumeContext = formatResumeData();
    const systemInstruction = `
      You are an AI assistant for Aung Thu Hein, a professional Project Engineer. 
      Your goal is to answer questions from recruiters or potential employers based strictly on his resume data provided below.
      
      Tone: Professional, confident, and helpful. 
      Point of view: Refer to Aung Thu Hein in the third person (e.g., "Aung has experience in...", "He is skilled in...").
      
      If the user asks for contact info, provide it clearly.
      If the user asks something not in the resume, politely say you don't have that information and suggest contacting him directly.
      
      RESUME DATA:
      ${resumeContext}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 300,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI service. Please try again later or contact Aung directly.";
  }
};