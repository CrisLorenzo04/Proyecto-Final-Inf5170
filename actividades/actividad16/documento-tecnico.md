# Documento tecnico breve

## Nombre del proyecto

Aula Magna IA: Chatbot Web Inteligente para Consulta del Estatuto Organico de la UASD.

## Tecnologias utilizadas

El proyecto fue desarrollado con HTML5, CSS3, JavaScript y Node.js. La interfaz integra Puter.js AI como proveedor gratuito de inteligencia artificial sin API key propia. El backend sirve la aplicacion y guarda el historial de conversacion en Supabase. El sistema tambien mantiene un motor local de busqueda para responder cuando la IA externa no esta disponible. El deploy de produccion se realizo en Vercel.

## Arquitectura del sistema

La aplicacion esta organizada en los siguientes archivos principales:

- `index.html`: estructura de la interfaz, panel lateral, preguntas sugeridas, area de conversacion, formulario y panel de accesibilidad.
- `styles.css`: diseno visual responsive, modo oscuro, accesibilidad, mensajes, botones y adaptacion movil.
- `app.js`: base de conocimiento, preguntas sugeridas, procesamiento de texto, llamada a Puter.js AI, respaldo local, personalizacion por nombre y guardado de historial.
- `server.js`: servidor Node.js que sirve la aplicacion y expone endpoints para guardar historial en Supabase.
- `vercel.json`: configuracion de deploy en Vercel y reglas de enrutamiento para la aplicacion.
- `.env`: variables de entorno para configurar Supabase y proveedores opcionales.
- `supabase-schema.sql`: script SQL para crear la tabla `chat_history` y sus politicas RLS.

## Integracion de inteligencia artificial

El chatbot utiliza una arquitectura hibrida:

1. Primero analiza la pregunta del usuario con un motor local de busqueda semantica.
2. Recupera la respuesta o evidencia mas relacionada con el Estatuto.
3. Si Puter.js AI esta disponible, envia esa evidencia al proveedor de IA para redactar una respuesta mas natural.
4. Si la IA externa falla o tarda demasiado, responde con el motor local.

El motor local realiza:

- Normalizacion de texto.
- Eliminacion de acentos y signos.
- Tokenizacion de palabras.
- Filtrado de palabras vacias.
- Comparacion con temas del Estatuto.
- Calculo de puntaje de coincidencia.
- Seleccion de la respuesta con mayor evidencia.

Para evitar respuestas inventadas, la IA recibe instrucciones de responder solo con la evidencia recuperada desde la base de conocimiento del Estatuto.

## Funcionamiento del chatbot

El usuario puede escribir su nombre, hacer una pregunta o seleccionar una pregunta sugerida. Si el usuario indica su nombre, el chatbot lo guarda durante la conversacion y lo menciona en sus respuestas. Si el usuario selecciona una pregunta sin dar nombre, el sistema responde normalmente y de forma cortes.

Cuando se genera una respuesta, la interfaz muestra solo el texto final para mantener una experiencia limpia. La referencia interna del Estatuto y el proveedor usado se conservan para el historial en Supabase.

## Integracion con base de datos

El proyecto se integra con Supabase mediante el backend Node.js. El servidor guarda en la tabla `chat_history`:

- nombre del usuario,
- pregunta realizada,
- respuesta generada,
- referencia interna del Estatuto,
- proveedor usado,
- fecha de creacion.

Esto permite demostrar persistencia de datos y revisar posteriormente las consultas realizadas al chatbot.

## Deploy en Vercel

La aplicacion fue desplegada usando Vercel como plataforma de produccion. El archivo `vercel.json` define la configuracion de rutas para servir la aplicacion web y mantener disponibles los endpoints ubicados en `api/`.

Las variables sensibles, como `SUPABASE_URL` y `SUPABASE_KEY`, deben configurarse desde el panel de Vercel para que el entorno de produccion pueda conectarse correctamente con Supabase sin exponer credenciales en el repositorio.

## Accesibilidad

La interfaz incluye un boton flotante de accesibilidad con opciones para:

- activar modo oscuro,
- aumentar el tamano del texto,
- activar alto contraste,
- reducir movimiento.

Tambien incluye foco visible para navegacion con teclado, enlace para saltar directamente al chat y diseno responsive para telefonos.

## Uso del Estatuto Organico como fuente

La base principal de informacion es el Estatuto Organico de la UASD, edicion actualizada 2012, disponible oficialmente en:

https://postgrado.uasd.edu.do/wp-content/uploads/2024/06/ESTATUTO-ORGANICO-UASD.pdf

La base de conocimiento del archivo `app.js` contiene temas como mision, autonomia, fines, funciones, organos de gobierno, Claustro Mayor, Consejo Universitario, Rectoria, Vicerrectorias, Facultades, Escuelas, docentes, estudiantes, investigacion, postgrado, extension, bienestar, regimen disciplinario y patrimonio.

## Manejo de errores

El sistema controla preguntas vacias, limpia el historial visual cuando el usuario lo solicita, filtra lenguaje ofensivo basico y usa un respaldo local si la IA externa no esta disponible. Esto ayuda a evitar respuestas no fundamentadas o ajenas al Estatuto.

## Autor

Nombre: Cristian Junior Lorenzo Abud 
Matricula: 100620581
