const { readRequestBody, sendJson, askAiProvider, saveChatHistory } = require("./helpers");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Metodo no permitido" }));
    return;
  }

  try {
    const body = await readRequestBody(req);
    const payload = JSON.parse(body || "{}");
    const question = String(payload.question || "").trim();
    const localAnswer = String(payload.localAnswer || "").trim();
    const localMeta = String(payload.localMeta || "").trim();
    const userName = String(payload.userName || "").trim();

    if (!question || !localAnswer) {
      sendJson(res, 400, { error: "Faltan la pregunta o la evidencia local." });
      return;
    }

    const result = await askAiProvider({ question, localAnswer, localMeta, userName });
    if (result.unavailable) {
      sendJson(res, 503, result);
      return;
    }

    const chatId = await saveChatHistory({
      userName,
      question,
      answer: result.text,
      sourceMeta: localMeta,
      provider: `${result.provider}${result.model ? ` (${result.model})` : ""}`
    });

    sendJson(res, 200, { ...result, chatId });
  } catch (error) {
    sendJson(res, 500, {
      error: "No fue posible generar la respuesta con la API de IA.",
      detail: error.message
    });
  }
};
