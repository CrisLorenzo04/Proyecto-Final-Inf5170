const fs = require("fs");
const path = require("path");

function loadEnvFile() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && !process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const AI_PROVIDER = (process.env.AI_PROVIDER || "pollinations").toLowerCase();
const POLLINATIONS_MODEL = process.env.POLLINATIONS_MODEL || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.2";
const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/$/, "");
const SUPABASE_KEY = process.env.SUPABASE_KEY || "";

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 100_000) {
        reject(new Error("La solicitud es demasiado grande."));
        request.destroy();
      }
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function extractOutputText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
      if (content.type === "text" && content.text) chunks.push(content.text);
    }
  }

  return chunks.join("\n").trim();
}

async function askOpenAI({ question, localAnswer, localMeta, userName }) {
  if (!OPENAI_API_KEY) {
    return {
      unavailable: true,
      message: "No hay una OPENAI_API_KEY configurada."
    };
  }

  const instructions = [
    "Eres Aula Magna IA, un chatbot academico para consultar el Estatuto Organico de la UASD.",
    "Responde en espanol claro, breve y formal.",
    "Usa exclusivamente la evidencia entregada por el sistema.",
    "No inventes articulos, datos ni atribuciones.",
    "Si la evidencia no alcanza para responder, dilo con cortesia.",
    "Si existe nombre de usuario, mencionalo una vez al inicio de la respuesta.",
    "No uses lenguaje ofensivo."
  ].join(" ");

  const input = [
    {
      role: "developer",
      content: [
        {
          type: "input_text",
          text: `Evidencia local del Estatuto:\n${localAnswer}\n\nReferencia local:\n${localMeta || "Sin referencia local."}\n\nNombre del usuario: ${userName || "No indicado"}`
        }
      ]
    },
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: question
        }
      ]
    }
  ];

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions,
      input
    })
  });

  const data = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    const detail = data.error?.message || "La API de IA no pudo responder.";
    throw new Error(detail);
  }

  const text = extractOutputText(data);
  if (!text) throw new Error("La API respondio sin texto.");

  return {
    text,
    provider: "OpenAI Responses API",
    model: OPENAI_MODEL
  };
}

async function askPollinations({ question, localAnswer, localMeta, userName }) {
  const prompt = [
    "Eres Aula Magna IA, un chatbot academico para consultar el Estatuto Organico de la UASD.",
    "Responde en espanol claro, breve y formal.",
    "Usa exclusivamente la evidencia entregada. No inventes articulos, datos ni atribuciones.",
    "Si la evidencia no alcanza para responder, dilo con cortesia.",
    "Si existe nombre de usuario, mencionalo una vez al inicio.",
    "",
    `Nombre del usuario: ${userName || "No indicado"}`,
    `Pregunta: ${question}`,
    `Evidencia local del Estatuto: ${localAnswer}`,
    `Referencia local: ${localMeta || "Sin referencia local."}`,
    "",
    "Respuesta:"
  ].join("\n");

  const url = new URL(`https://gen.pollinations.ai/text/${encodeURIComponent(prompt)}`);
  if (POLLINATIONS_MODEL) url.searchParams.set("model", POLLINATIONS_MODEL);

  const apiResponse = await fetch(url);
  const text = (await apiResponse.text()).trim();

  if (!apiResponse.ok) {
    throw new Error(text || "Pollinations no pudo responder.");
  }

  if (!text) throw new Error("Pollinations respondio sin texto.");

  return {
    text,
    provider: "Pollinations AI",
    model: POLLINATIONS_MODEL || "default"
  };
}

async function askAiProvider(context) {
  if (AI_PROVIDER === "openai") return askOpenAI(context);
  return askPollinations(context);
}

async function saveChatHistory({ userName, question, answer, sourceMeta, provider }) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/chat_history`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify({
      user_name: userName || null,
      question,
      answer,
      source_meta: sourceMeta || null,
      provider: provider || "local"
    })
  });

  const data = await response.json().catch(() => []);
  if (!response.ok) {
    console.warn("No se pudo guardar el historial en Supabase:", data.message || response.statusText);
    return null;
  }

  return data[0]?.id || null;
}

module.exports = {
  readRequestBody,
  sendJson,
  askAiProvider,
  saveChatHistory
};
