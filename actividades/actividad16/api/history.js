const { readRequestBody, sendJson, saveChatHistory } = require("./helpers");

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
    const answer = String(payload.answer || "").trim();
    const sourceMeta = String(payload.sourceMeta || "").trim();
    const provider = String(payload.provider || "local").trim();
    const userName = String(payload.userName || "").trim();

    if (!question || !answer) {
      sendJson(res, 400, { error: "Faltan la pregunta o la respuesta." });
      return;
    }

    const chatId = await saveChatHistory({
      userName,
      question,
      answer,
      sourceMeta,
      provider
    });

    sendJson(res, chatId ? 200 : 503, { chatId });
  } catch (error) {
    sendJson(res, 500, {
      error: "No fue posible guardar el historial.",
      detail: error.message
    });
  }
};
