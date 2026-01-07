
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Você é o Assistente Virtual da Clínica Gama Terapias Integradas (localizada na Ilha do Governador, RJ). 
        Sua função é tirar dúvidas básicas sobre os serviços da clínica (Psicologia, ABA, Fonoaudiologia, Terapia Ocupacional, etc.) 
        e incentivar o agendamento de consultas. Seja acolhedor, empático e use um tom profissional e científico. 
        Não forneça diagnósticos médicos, sempre sugira uma consulta com os especialistas da clínica.`
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Desculpe, estou com dificuldades para responder agora. Por favor, tente novamente ou entre em contato com nossa recepção pelo telefone (21) 2271-1800.";
  }
}
