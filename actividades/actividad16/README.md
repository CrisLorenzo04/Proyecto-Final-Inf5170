# Aula Magna IA

Aplicacion web individual para consultar el Estatuto Organico de la Universidad Autonoma de Santo Domingo mediante un chatbot inteligente con busqueda local, IA en el navegador y almacenamiento de historial en Supabase.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- Puter.js AI como proveedor gratuito sin API key propia
- Supabase como base de datos para historial
- Motor local de busqueda semantica como respaldo
- Vercel para el deploy en produccion

## Como ejecutar

1. Instala Node.js si no esta instalado.
2. Ejecuta:

```bash
npm start
```

3. Abre:

```text
http://localhost:3000
```

La app intenta responder con Puter.js AI. Si la IA externa no responde, usa automaticamente el motor local basado en la base de conocimiento del Estatuto.

## Variables de entorno

Configura el archivo `.env` con las variables del proyecto:

```env
AI_PROVIDER=pollinations
POLLINATIONS_MODEL=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.2
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_KEY=tu_publishable_o_anon_key
PORT=3000
```

El proveedor principal actual es Puter.js desde el navegador. Las variables `AI_PROVIDER`, `POLLINATIONS_MODEL`, `OPENAI_API_KEY` y `OPENAI_MODEL` quedan como soporte opcional para proveedores desde backend.

## Deploy

El proyecto fue desplegado en Vercel. La configuracion principal esta en `vercel.json`, que enruta las peticiones de la aplicacion y los endpoints dentro de `api/`.

Para publicar una nueva version en Vercel:

1. Sube los cambios al repositorio conectado con Vercel.
2. Configura en Vercel las variables de entorno necesarias, especialmente:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_KEY=tu_publishable_o_anon_key
```

3. Vercel genera automaticamente el deploy de produccion.

## Funcionalidades

- Interfaz responsive para computadora, tableta y telefono.
- Area de conversacion con historial visual.
- Campo para escribir preguntas.
- Boton de envio y boton para limpiar conversacion.
- 35 preguntas sugeridas en menu desplegable.
- Respuestas basadas en una base de conocimiento del Estatuto Organico de la UASD.
- IA gratuita mediante Puter.js.
- Respaldo local si la IA externa no esta disponible.
- Guardado de historial de conversacion en Supabase.
- Filtro basico de lenguaje ofensivo.
- Personalizacion con nombre del usuario.
- Panel flotante de accesibilidad con modo oscuro, texto grande, alto contraste y reduccion de movimiento.

## Base de datos Supabase

1. Abre Supabase SQL Editor.
2. Ejecuta el contenido de `supabase-schema.sql`.
3. Configura `.env` con:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_KEY=tu_publishable_o_anon_key
```

El sistema guarda automaticamente nombre del usuario, pregunta, respuesta, proveedor usado, referencia interna del Estatuto y fecha.

## Fuente oficial

Estatuto Organico de la UASD:
https://postgrado.uasd.edu.do/wp-content/uploads/2024/06/ESTATUTO-ORGANICO-UASD.pdf

## Autor

Nombre: Cristian Junior Lorenzo Abud
Matricula: 100620581
