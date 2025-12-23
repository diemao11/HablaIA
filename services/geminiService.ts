
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

/**
 * Generates a creative video script based on user input, 
 * specifically tailored for the Colombian market under the HablaIA brand.
 */
export const generateScript = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("Missing API Key. Ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Eres HablaIA, el experto líder en copywriting para anuncios virales en Colombia. 
    Tu tarea es generar un guion comercial (máximo 150 palabras) optimizado para redes sociales.
    
    ESTRUCTURA:
    1. Hook (Gancho) potente para los primeros 2-3 segundos.
    2. Problema/Necesidad con toque local.
    3. Solución (El producto del usuario).
    4. Beneficios clave.
    5. CTA (Llamado a la acción) directo.
    
    TONO:
    Colombiano, comercial, energético y natural. 
    Incluye siempre sugerencias de acento (Paisa, Rolo, Costeño o Valluno) y aclara que esto es una previsualización conceptual.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Crea un concepto de anuncio ganador para: ${prompt}`,
      config: {
        systemInstruction,
        temperature: 0.8,
      },
    });

    return response.text || "No se pudo generar el guion. Intenta de nuevo.";
  } catch (error) {
    console.error("HablaIA Script Error:", error);
    throw error;
  }
};
