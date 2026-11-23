const OFFICIAL_SOURCE = "Estatuto Organico de la UASD, edicion actualizada 2012";

const suggestedQuestions = [
  "¿Qué es la Universidad Autónoma de Santo Domingo?",
  "¿Cuál es la misión de la UASD?",
  "¿Cuáles son los fines de la Universidad?",
  "¿Cuáles son las funciones fundamentales de la UASD?",
  "¿Qué establece el Estatuto sobre la autonomía universitaria?",
  "¿Cuáles son los principios que orientan a la Universidad?",
  "¿Cómo está organizada la Universidad?",
  "¿Cuáles son los organismos de gobierno de la UASD?",
  "¿Qué es el Claustro Mayor?",
  "¿Qué es el Claustro Menor?",
  "¿Qué es el Consejo Universitario?",
  "¿Quiénes integran el Consejo Universitario?",
  "¿Cuáles son las atribuciones del Consejo Universitario?",
  "¿Cuáles son las funciones del Rector?",
  "¿Cuáles son las funciones de los Vicerrectores?",
  "¿Qué son las Facultades?",
  "¿Cómo se organizan las Facultades?",
  "¿Qué son los Consejos Directivos de Facultad?",
  "¿Cuáles son las funciones de los Decanos?",
  "¿Qué son las Escuelas?",
  "¿Cuáles son las funciones de los Directores de Escuela?",
  "¿Qué establece el Estatuto sobre los Recintos, Centros y Subcentros Universitarios?",
  "¿Qué establece el Estatuto sobre el personal docente?",
  "¿Cuáles son los derechos del personal docente?",
  "¿Cuáles son los deberes del personal docente?",
  "¿Qué establece el Estatuto sobre los estudiantes?",
  "¿Cuáles son los derechos de los estudiantes?",
  "¿Cuáles son los deberes de los estudiantes?",
  "¿Qué establece el Estatuto sobre la representación estudiantil?",
  "¿Qué establece el Estatuto sobre la investigación?",
  "¿Qué establece el Estatuto sobre el postgrado?",
  "¿Qué establece el Estatuto sobre la extensión universitaria?",
  "¿Qué establece el Estatuto sobre el bienestar universitario?",
  "¿Qué establece el Estatuto sobre el régimen disciplinario?",
  "¿Qué establece el Estatuto sobre el patrimonio universitario?"
];

const knowledgeBase = [
  {
    id: "definicion",
    title: "Definición de la UASD",
    articles: "Artículos 1 y 2",
    keywords: ["universidad autonoma santo domingo", "uasd", "definicion", "institucion", "que es"],
    answer: "La Universidad Autónoma de Santo Domingo es una institución pública de educación superior, continuadora de la tradición universitaria dominicana y orientada al servicio de la sociedad. Su Estatuto la reconoce como una comunidad académica dedicada a la docencia, la investigación y la extensión."
  },
  {
    id: "autonomia",
    title: "Autonomía universitaria",
    articles: "Artículos 3 y 4",
    keywords: ["autonomia", "autonoma", "gobierno propio", "independencia", "libertad academica"],
    answer: "El Estatuto establece que la UASD goza de autonomía para organizarse, elegir sus autoridades, administrar su patrimonio y desarrollar sus funciones académicas. Esa autonomía debe ejercerse con responsabilidad institucional y conforme a las leyes."
  },
  {
    id: "mision",
    title: "Misión de la UASD",
    articles: "Artículo 5",
    keywords: ["mision", "proposito", "formacion", "profesionales", "servicio social"],
    answer: "La misión de la UASD es formar críticamente profesionales, investigadores y técnicos en las ciencias, las humanidades y las artes, con valores, compromiso social y capacidad para aportar soluciones al desarrollo nacional."
  },
  {
    id: "fines",
    title: "Fines de la Universidad",
    articles: "Artículo 6",
    keywords: ["fines", "objetivos", "desarrollo nacional", "cultura", "democracia", "paz"],
    answer: "Entre sus fines, la Universidad procura conservar, acrecentar y difundir el conocimiento, formar recursos humanos, contribuir al desarrollo nacional, promover la cultura, defender la paz, la justicia social, los derechos humanos y el uso responsable de los recursos naturales."
  },
  {
    id: "funciones",
    title: "Funciones fundamentales",
    articles: "Artículos 10, 14, 19 y 21",
    keywords: ["funciones fundamentales", "docencia", "investigacion", "extension", "funcion academica"],
    answer: "Las funciones fundamentales de la UASD son la docencia, la investigación y la extensión. El Estatuto articula estas funciones mediante Facultades, Escuelas, Cátedras, Institutos, Recintos, Centros y Subcentros."
  },
  {
    id: "valores-principios",
    title: "Principios y valores",
    articles: "Artículos 8, 9 y 10",
    keywords: ["principios", "valores", "solidaridad", "transparencia", "verdad", "igualdad", "libertad", "equidad", "tolerancia", "paz"],
    answer: "El Estatuto orienta la vida universitaria hacia la dignidad humana y valores como solidaridad, transparencia, verdad, igualdad, libertad, equidad, tolerancia, paz, responsabilidad y convivencia. También impulsa el rigor científico, la crítica, la creatividad y el compromiso con el ambiente."
  },
  {
    id: "organizacion",
    title: "Organización universitaria",
    articles: "Artículos 12 al 24",
    keywords: ["organizada", "organizacion", "estructura", "academica", "administrativa", "facultades", "recintos", "centros", "subcentros"],
    answer: "La Universidad se organiza en una estructura académica y una estructura administrativa. La función académica se desarrolla principalmente por medio de Facultades, Recintos, Centros, Subcentros, Escuelas, Cátedras, Institutos y unidades de postgrado."
  },
  {
    id: "gobierno",
    title: "Organismos de gobierno",
    articles: "Capítulos IV al XI",
    keywords: ["gobierno", "organismos", "autoridades", "claustro mayor", "claustro menor", "consejo universitario", "rector"],
    answer: "Los principales organismos de gobierno incluyen el Claustro Mayor, el Claustro Menor, el Consejo Universitario, la Rectoría, las Vicerrectorías, las Asambleas y Consejos Directivos de Facultad, los Decanatos y las Direcciones de Escuela."
  },
  {
    id: "claustro-mayor",
    title: "Claustro Mayor",
    articles: "Artículo 25",
    keywords: ["claustro mayor", "autoridad maxima", "integrantes", "profesores", "delegados estudiantiles"],
    answer: "El Claustro Mayor es la autoridad máxima de la UASD. Está integrado por el personal académico activo desde la categoría de Adscrito, profesores meritísimos, delegados estudiantiles y representantes del personal administrativo en las proporciones establecidas por el Estatuto."
  },
  {
    id: "claustro-menor",
    title: "Claustro Menor",
    articles: "Artículos 27 al 31",
    keywords: ["claustro menor", "funciones claustro menor", "autoridades", "doctor honoris causa"],
    answer: "El Claustro Menor es un organismo de gobierno universitario con atribuciones específicas fijadas por el Estatuto. Participa en asuntos institucionales relevantes, como conocer determinadas propuestas y decisiones que no corresponden al Claustro Mayor."
  },
  {
    id: "consejo-universitario",
    title: "Consejo Universitario",
    articles: "Artículos 32 al 34",
    keywords: ["consejo universitario", "integran consejo", "atribuciones consejo", "maximo organismo ejecutivo"],
    answer: "El Consejo Universitario es un órgano superior de dirección y decisión. Entre sus atribuciones están reglamentar y supervisar actividades administrativas y académicas, aprobar presupuesto, resolver conflictos de competencia, representar institucionalmente a la Universidad y tomar decisiones sobre cargos, reglamentos y políticas universitarias."
  },
  {
    id: "rector",
    title: "Rectoría",
    articles: "Artículos 35 al 38",
    keywords: ["rector", "rectora", "funciones rector", "maximo ejecutivo", "representar universidad"],
    answer: "El Rector o Rectora es el máximo ejecutivo de la Universidad y dura cuatro años en sus funciones. Representa a la institución, supervisa la labor universitaria, ejecuta decisiones de los organismos competentes y puede delegar funciones cuando sea necesario."
  },
  {
    id: "vicerrectores",
    title: "Vicerrectorías",
    articles: "Artículos 39 al 43",
    keywords: ["vicerrectores", "vicerrector", "docente", "investigacion", "extension", "administrativo"],
    answer: "El Estatuto contempla Vicerrectorías con funciones especializadas. La Docente coordina asuntos académicos; la de Investigación y Postgrado impulsa investigación y cuarto nivel; la de Extensión articula servicio comunitario y cultura; y la Administrativa supervisa la gestión administrativa, presupuestaria y de personal."
  },
  {
    id: "facultades",
    title: "Facultades",
    articles: "Artículos 14, 53 al 63",
    keywords: ["facultades", "facultad", "organizan facultades", "asamblea de facultad", "consejo directivo facultad"],
    answer: "Las Facultades son unidades académicas fundamentales para organizar la docencia, la investigación y la extensión. Cuentan con autoridades y órganos como la Asamblea de Facultad, el Consejo Directivo de Facultad, el Decanato y las Escuelas adscritas."
  },
  {
    id: "consejos-facultad",
    title: "Consejos Directivos de Facultad",
    articles: "Capítulo XI",
    keywords: ["consejo directivo de facultad", "consejos directivos", "facultad", "organos facultad"],
    answer: "Los Consejos Directivos de Facultad son organismos de dirección dentro de cada Facultad. Participan en la administración académica, conocen asuntos de escuelas y carreras, y elevan decisiones o propuestas a los organismos superiores cuando corresponde."
  },
  {
    id: "decanos",
    title: "Decanos",
    articles: "Capítulo XI",
    keywords: ["decano", "decanos", "funciones decano", "facultad"],
    answer: "Los Decanos dirigen la Facultad que les corresponde, ejecutan las decisiones de sus organismos, coordinan la labor académica y administrativa de la Facultad y la representan ante las instancias universitarias."
  },
  {
    id: "escuelas",
    title: "Escuelas",
    articles: "Artículos 17 y 18",
    keywords: ["escuelas", "escuela", "directores escuela", "carreras", "catedras"],
    answer: "Las Escuelas son unidades académicas adscritas a una Facultad. Administran carreras de grado y del nivel técnico superior, coordinan asignaturas impartidas en distintas Facultades y originan programas de cuarto nivel."
  },
  {
    id: "directores-escuela",
    title: "Directores de Escuela",
    articles: "Capítulo XI",
    keywords: ["director de escuela", "directores de escuela", "funciones directores", "escuela"],
    answer: "Los Directores de Escuela coordinan la gestión académica de su Escuela, dan seguimiento a carreras, asignaturas y cátedras, y ejecutan las decisiones de los órganos competentes de la Facultad y de la Universidad."
  },
  {
    id: "recintos-centros",
    title: "Recintos, Centros y Subcentros",
    articles: "Artículos 14 y 22",
    keywords: ["recintos", "centros", "subcentros", "regionales", "nomenclatura"],
    answer: "El Estatuto reconoce Recintos, Centros y Subcentros como estructuras para desarrollar la función académica y ampliar la presencia universitaria. Estos organismos apoyan la docencia, investigación y extensión según las normas universitarias."
  },
  {
    id: "docentes",
    title: "Personal docente",
    articles: "Capítulo XII",
    keywords: ["personal docente", "profesores", "docente", "carrera academica", "profesor"],
    answer: "El personal docente integra la carrera académica de la Universidad. El Estatuto regula categorías, ingreso, evaluación, derechos, deberes, permisos, licencias y responsabilidades vinculadas a la docencia, la investigación y la extensión."
  },
  {
    id: "derechos-docentes",
    title: "Derechos del personal docente",
    articles: "Capítulo XII",
    keywords: ["derechos docentes", "derechos profesor", "personal docente derechos", "licencias", "permisos"],
    answer: "El Estatuto reconoce al personal docente derechos relacionados con su carrera académica, estabilidad conforme a las normas, participación en organismos universitarios, desarrollo profesional y solicitud de permisos o licencias en los casos establecidos."
  },
  {
    id: "deberes-docentes",
    title: "Deberes del personal docente",
    articles: "Capítulo XII",
    keywords: ["deberes docentes", "obligaciones profesor", "responsabilidades docentes", "asistencia"],
    answer: "Los docentes deben cumplir sus labores académicas, participar en los organismos y actos que correspondan, respetar los reglamentos universitarios y contribuir a la docencia, investigación, extensión y vida institucional."
  },
  {
    id: "estudiantes",
    title: "Estudiantes",
    articles: "Artículos 97 al 101",
    keywords: ["estudiantes", "alumnos", "inscripcion", "matricula", "bachiller"],
    answer: "Para inscribirse en la UASD se requiere título de bachiller o equivalente validado y cumplir los requisitos universitarios. La matrícula puede ser ordinaria o por asignaturas, según los planes y reglamentos aplicables."
  },
  {
    id: "derechos-estudiantes",
    title: "Derechos de los estudiantes",
    articles: "Artículo 100",
    keywords: ["derechos estudiantes", "derechos alumno", "asociacion", "estudiantes derechos"],
    answer: "Además de los derechos fundamentales reconocidos por la Constitución, el Estatuto contempla derechos estudiantiles como la asociación, la participación universitaria y otros beneficios o garantías previstos por los reglamentos internos."
  },
  {
    id: "deberes-estudiantes",
    title: "Deberes de los estudiantes",
    articles: "Capítulo XIII",
    keywords: ["deberes estudiantes", "obligaciones estudiantes", "disciplina estudiantil", "estudiantes deberes"],
    answer: "Los estudiantes deben cumplir los reglamentos universitarios, observar disciplina académica, respetar la vida institucional y asumir sus responsabilidades en los procesos docentes y de participación universitaria."
  },
  {
    id: "representacion-estudiantil",
    title: "Representación estudiantil",
    articles: "Artículo 25 y Capítulo XIII",
    keywords: ["representacion estudiantil", "delegados estudiantiles", "cogobierno", "indice academico", "30 por ciento"],
    answer: "El Estatuto reconoce representación estudiantil en organismos de cogobierno. Para participar como representante se exigen condiciones académicas, como no ser repitiente, haber aprobado el porcentaje de créditos requerido y mantener el índice establecido."
  },
  {
    id: "investigacion",
    title: "Investigación",
    articles: "Artículos 10, 21 y 41",
    keywords: ["investigacion", "institutos", "conocimientos", "tecnologias", "metodo cientifico"],
    answer: "La investigación es una función esencial de la Universidad. Se concibe como medio para la enseñanza, la comprensión de métodos científicos, la búsqueda de la verdad y la generación de nuevos conocimientos y tecnologías."
  },
  {
    id: "postgrado",
    title: "Postgrado",
    articles: "Artículos 13, 18 y 41",
    keywords: ["postgrado", "posgrado", "cuarto nivel", "maestria", "doctorado"],
    answer: "El Estatuto reconoce el nivel de postgrado dentro de la estructura académica. Los programas de cuarto nivel se originan en las Escuelas y se coordinan con las instancias académicas responsables de investigación y postgrado."
  },
  {
    id: "extension",
    title: "Extensión universitaria",
    articles: "Artículos 10 y 42",
    keywords: ["extension", "extension universitaria", "servicio comunitario", "cultura", "comunidad"],
    answer: "La extensión universitaria conecta la Universidad con la sociedad mediante actividades culturales, científicas y de servicio comunitario. El Estatuto ordena articular la extensión con la docencia y la investigación."
  },
  {
    id: "bienestar",
    title: "Bienestar universitario",
    articles: "Artículo 22 y normas complementarias",
    keywords: ["bienestar", "bienestar universitario", "servicios", "comunidad universitaria"],
    answer: "El Estatuto contempla organismos y servicios destinados a complementar la vida universitaria. El bienestar universitario se relaciona con apoyos y condiciones que favorecen el desarrollo de estudiantes, docentes y servidores de la institución."
  },
  {
    id: "regimen-disciplinario",
    title: "Régimen disciplinario",
    articles: "Capítulos XII y XIII",
    keywords: ["regimen disciplinario", "disciplina", "sanciones", "faltas", "ausencias"],
    answer: "El Estatuto establece responsabilidades disciplinarias para los miembros de la comunidad universitaria. Por ejemplo, regula consecuencias por incumplimientos de deberes, ausencias no justificadas y violaciones a normas internas."
  },
  {
    id: "patrimonio",
    title: "Patrimonio universitario",
    articles: "Capítulos administrativos y presupuestarios",
    keywords: ["patrimonio", "presupuesto", "bienes", "recursos", "administracion", "ingresos", "gastos"],
    answer: "El patrimonio universitario comprende bienes, recursos, ingresos y derechos de la institución. Su administración corresponde a los organismos competentes, bajo reglas de presupuesto, fiscalización, transparencia y control institucional."
  }
];

const stopWords = new Set([
  "a", "al", "algo", "ante", "como", "con", "cual", "cuales", "cuando", "de", "del", "el", "en", "entre",
  "es", "esta", "establece", "la", "las", "lo", "los", "para", "por", "que", "se", "segun", "sobre", "son",
  "su", "sus", "un", "una", "unas", "unos", "y"
]);

const blockedWords = new Set([
  "mierda", "maldito", "maldita", "idiota", "estupido", "estupida", "pendejo", "pendeja", "imbecil",
  "cabron", "cabrona", "coño", "carajo", "puta", "puto", "fuck", "shit", "bitch", "asshole"
]);

const questionStarters = new Set([
  "que", "quien", "quienes", "cual", "cuales", "como", "cuando", "donde", "por", "para", "cuanto", "cuantos"
]);

let userName = "";

const messagesEl = document.querySelector("#messages");
const formEl = document.querySelector("#chat-form");
const inputEl = document.querySelector("#question-input");
const suggestionsEl = document.querySelector("#suggestions");
const template = document.querySelector("#message-template");
const clearButton = document.querySelector("#clear-chat");
const themeToggle = document.querySelector("#theme-toggle");
const fontToggle = document.querySelector("#font-toggle");
const contrastToggle = document.querySelector("#contrast-toggle");
const motionToggle = document.querySelector("#motion-toggle");
const accessibilityWidget = document.querySelector("#accessibility-widget");
const accessibilityToggle = document.querySelector("#accessibility-toggle");
const suggestionsToggle = document.querySelector("#suggestions-toggle");
const suggestionsPanel = document.querySelector(".suggestions-panel");
const kbCount = document.querySelector("#kb-count");

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}0-9\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function containsBlockedWord(text) {
  const normalizedWords = normalizeText(text).split(" ");
  return normalizedWords.some((word) => blockedWords.has(word));
}

function formatName(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function extractName(text) {
  const cleanText = text.trim();
  const normalized = normalizeText(cleanText);
  const tokens = normalized.split(" ").filter(Boolean);

  if (!tokens.length || cleanText.includes("?") || questionStarters.has(tokens[0])) return "";

  const explicitMatch = normalized.match(/^(mi nombre es|me llamo|soy)\s+([a-zñ\s]{2,40})$/);
  const candidate = explicitMatch ? explicitMatch[2] : normalized;
  const nameParts = candidate.split(" ").filter(Boolean);

  if (nameParts.length > 2 || nameParts.some((part) => part.length < 2 || blockedWords.has(part))) return "";
  if (!nameParts.every((part) => /^[a-zñ]+$/.test(part))) return "";

  return formatName(candidate);
}

function personalizeAnswer(text) {
  if (!userName) return text;
  return `${userName}, ${text.charAt(0).toLowerCase()}${text.slice(1)}`;
}

function withTimeout(promise, milliseconds) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error("Tiempo de espera agotado")), milliseconds);
    })
  ]);
}

function extractPuterText(answer) {
  if (typeof answer === "string") return answer.trim();
  if (typeof answer?.message?.content === "string") return answer.message.content.trim();
  if (typeof answer?.text === "string") return answer.text.trim();
  if (Array.isArray(answer?.message?.content)) {
    return answer.message.content
      .map((part) => part.text || part.content || "")
      .join(" ")
      .trim();
  }
  return "";
}

async function requestAiAnswer(question, localResult) {
  if (window.puter?.ai?.chat) {
    const prompt = [
      "Eres Aula Magna IA, un chatbot academico para consultar el Estatuto Organico de la UASD.",
      "Responde en espanol claro, breve y formal.",
      "Usa exclusivamente la evidencia entregada. No inventes datos.",
      "Si existe nombre de usuario, mencionalo una vez al inicio.",
      "",
      `Nombre del usuario: ${userName || "No indicado"}`,
      `Pregunta: ${question}`,
      `Evidencia: ${localResult.text}`,
      `Referencia: ${localResult.meta}`,
      "",
      "Respuesta:"
    ].join("\n");

    const answer = await withTimeout(window.puter.ai.chat(prompt), 12000);
    const text = extractPuterText(answer);
    if (!text) throw new Error("La IA no devolvió texto.");

    const saved = await saveAiHistory({
      question,
      answer: text,
      localMeta: localResult.meta,
      provider: "Puter.js AI"
    });

    return {
      text,
      provider: "Puter.js AI",
      model: "browser",
      chatId: saved.chatId
    };
  }

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      localAnswer: localResult.text,
      localMeta: localResult.meta,
      userName
    })
  });

  if (!response.ok) {
    throw new Error("API de IA no disponible");
  }

  return response.json();
}

async function saveAiHistory({ question, answer, localMeta, provider }) {
  const response = await fetch("/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      answer,
      sourceMeta: localMeta,
      provider,
      userName
    })
  });

  if (!response.ok) return { chatId: null };
  return response.json();
}

function scoreEntry(question, entry) {
  const tokens = tokenize(question);
  const query = normalizeText(question);
  const entryText = normalizeText(`${entry.title} ${entry.keywords.join(" ")} ${entry.answer}`);
  let score = 0;

  for (const token of tokens) {
    if (entryText.includes(token)) score += 2;
    if (entry.keywords.some((keyword) => normalizeText(keyword).includes(token))) score += 3;
  }

  for (const keyword of entry.keywords) {
    if (query.includes(normalizeText(keyword))) score += 8;
  }

  return score;
}

function findBestAnswer(question) {
  const ranked = knowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(question, entry) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  const related = ranked.slice(1, 3).filter((item) => item.score >= 5);

  if (!best || best.score < 5) {
    return {
      text: "No encontré información suficiente en la base del Estatuto para responder con seguridad. Puedes preguntar por misión, autonomía, órganos de gobierno, docentes, estudiantes, investigación, extensión, postgrado o patrimonio universitario.",
      meta: "Sin evidencia suficiente en la base local del Estatuto."
    };
  }

  const relatedText = related.length
    ? `\n\nTambién puede relacionarse con: ${related.map((item) => item.entry.title).join(", ")}.`
    : "";

  return {
    text: `${best.entry.answer}${relatedText}`,
    meta: `${OFFICIAL_SOURCE}. Referencia: ${best.entry.articles}. Coincidencia: ${best.score} puntos.`
  };
}

function addMessage(role, text, meta = "") {
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.add(role);
  node.querySelector(".message-text").textContent = text;
  node.querySelector(".message-meta").textContent = meta;
  messagesEl.appendChild(node);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function submitQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;

  addMessage("user", cleanQuestion, "Pregunta del usuario");
  inputEl.value = "";
  inputEl.style.height = "auto";

  window.setTimeout(async () => {
    if (containsBlockedWord(cleanQuestion)) {
      const moderationText = userName
        ? `${userName}, prefiero mantener una conversación respetuosa. Consulta sobre el Estatuto usando un lenguaje adecuado.`
        : "Prefiero mantener una conversación respetuosa. Escribe tu nombre o consulta sobre el Estatuto usando un lenguaje adecuado.";

      addMessage(
        "bot",
        moderationText,
        "Filtro de lenguaje aplicado."
      );
      return;
    }

    if (!userName) {
      const detectedName = extractName(cleanQuestion);

      if (detectedName) {
        userName = detectedName;
        addMessage(
          "bot",
          `Mucho gusto, ${userName}. Ya puedo dirigirme a ti por tu nombre. Ahora puedes preguntarme sobre el Estatuto Orgánico de la UASD o seleccionar una pregunta sugerida.`,
          "Nombre guardado para esta conversación."
        );
        return;
      }
    }

    const result = findBestAnswer(cleanQuestion);

    try {
      const aiResult = await requestAiAnswer(cleanQuestion, result);
      addMessage(
        "bot",
        aiResult.text || personalizeAnswer(result.text)
      );
    } catch (error) {
      saveAiHistory({
        question: cleanQuestion,
        answer: personalizeAnswer(result.text),
        localMeta: result.meta,
        provider: "Motor local"
      }).catch(() => {});
      addMessage("bot", personalizeAnswer(result.text));
    }
  }, 260);
}

function renderSuggestions() {
  const fragment = document.createDocumentFragment();

  suggestedQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.className = "suggestion";
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => submitQuestion(question));
    fragment.appendChild(button);
  });

  suggestionsEl.appendChild(fragment);
}

function resetChat() {
  userName = "";
  messagesEl.innerHTML = "";
  addMessage(
    "bot",
    "Hola. Soy Aula Magna IA, tu asistente para consultar el Estatuto Orgánico de la UASD. ¿Cuál es tu nombre? También puedes seleccionar una pregunta sugerida y te responderé cortésmente sin usar un nombre.",
    "Sistema listo para consultar el Estatuto."
  );
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(inputEl.value);
});

inputEl.addEventListener("input", () => {
  inputEl.style.height = "auto";
  inputEl.style.height = `${Math.min(inputEl.scrollHeight, 140)}px`;
});

clearButton.addEventListener("click", resetChat);

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("aulaMagnaTheme", theme);
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.innerHTML = theme === "dark"
    ? '<span aria-hidden="true">☀</span> Modo claro'
    : '<span aria-hidden="true">◐</span> Modo oscuro';
}

function setFontSizeMode(isLarge) {
  document.body.dataset.font = isLarge ? "large" : "normal";
  localStorage.setItem("aulaMagnaLargeText", String(isLarge));
  fontToggle.setAttribute("aria-pressed", String(isLarge));
}

function setContrastMode(isHighContrast) {
  document.body.dataset.contrast = isHighContrast ? "high" : "normal";
  localStorage.setItem("aulaMagnaHighContrast", String(isHighContrast));
  contrastToggle.setAttribute("aria-pressed", String(isHighContrast));
}

function setMotionMode(isReduced) {
  document.body.dataset.motion = isReduced ? "reduced" : "normal";
  localStorage.setItem("aulaMagnaReducedMotion", String(isReduced));
  motionToggle.setAttribute("aria-pressed", String(isReduced));
}

function closeAccessibilityPanel() {
  accessibilityWidget.classList.remove("open");
  accessibilityToggle.setAttribute("aria-expanded", "false");
}

function toggleAccessibilityPanel() {
  const isOpen = accessibilityWidget.classList.toggle("open");
  accessibilityToggle.setAttribute("aria-expanded", String(isOpen));
}

accessibilityToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAccessibilityPanel();
});

accessibilityWidget.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", closeAccessibilityPanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAccessibilityPanel();
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

fontToggle.addEventListener("click", () => {
  setFontSizeMode(document.body.dataset.font !== "large");
});

contrastToggle.addEventListener("click", () => {
  setContrastMode(document.body.dataset.contrast !== "high");
});

motionToggle.addEventListener("click", () => {
  setMotionMode(document.body.dataset.motion !== "reduced");
});

suggestionsToggle.addEventListener("click", () => {
  const isCollapsed = suggestionsPanel.classList.toggle("collapsed");
  suggestionsToggle.setAttribute("aria-expanded", String(!isCollapsed));
});

const savedTheme = localStorage.getItem("aulaMagnaTheme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));
setFontSizeMode(localStorage.getItem("aulaMagnaLargeText") === "true");
setContrastMode(localStorage.getItem("aulaMagnaHighContrast") === "true");
setMotionMode(localStorage.getItem("aulaMagnaReducedMotion") === "true");

kbCount.textContent = knowledgeBase.length;
renderSuggestions();
resetChat();
