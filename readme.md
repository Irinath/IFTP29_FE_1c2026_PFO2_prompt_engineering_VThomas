# Práctica Formativa Obligatoria 2 - Individual

## Prompt Engineering en Agentes de IA

### Fechas Importantes

● Lanzamiento: 8/6/26  
● Entrega Final: 26/6/26

### Formato de entrega

Deberán publicar en el foro solo el link al repositorio de github:  
COMISIÓN LUNES→ PLANILLA  
COMISIÓN VIERNES→PLANILLA

---

#### Objetivo  

El estudiante deberá diseñar y estructurar un único prompt inicial de alta precisión basado en
lineamientos oficiales para generar una Landing Page.  
 Este prompt se ejecutará en dos agentes
de desarrollo de software para comparar su capacidad de resolución autónoma. Los agentes a
utilizar pueden ser gratuitos o pagos, seleccionando dos de las siguientes opciones:  
> Agentes de desarrollo:
Cursor, Codex (OpenAI), OpenCode, Claude Code o suscripciones pagas de las plataformas
mencionadas (cuiden sus tokens, recomiendo Codex que está dando un buen margen gratuito).  

El procedimiento exige no modificar el código de forma manual, permitiendo que el agente actúe
de manera autónoma para priorizar el análisis sobre el diseño del prompt inicial en lugar de la
iteración repetitiva. El resultado final de ambos agentes se integrará en un único despliegue con
una portada de acceso.

---

#### Consigna

1. Estructura del Prompt: El prompt debe armarse siguiendo las recomendaciones y buenas prácticas oficiales de diseño de instrucciones de los principales proveedores de IA. Pueden tomar las instrucciones de las siguientes páginas en inglés y volcarlas en su chatbot de preferencia para que los asista en la construcción del prompt definitivo:  

   - Anthropic - Prompt Engineering Guide
   - OpenAI - Prompt Engineering Guide

2. Requisitos mínimos de la Landing Page a generar:  

   - Cabecera (Header con menú de navegación).
   - Hero Section (Sección principal con título impactante y botón de llamada a la acción - CTA).
   - Descripción / Sobre Nosotros.
   - Sección de Servicios o Características principales.
   - Testimonios o Reseñas de clientes.
   - Formulario de contacto (Maquetado visual, no requiere funcionalidad backend).
   - Pie de página (Footer) con enlaces a redes sociales.

3. Desarrollo y Restricciones:

   - Generar la Landing Page utilizando el mismo prompt en los dos agentes elegidos.
   - **Restricción estricta:** No tocar nada de código manualmente. Dejar actuar al agente lo más posible para evaluar la efectividad de la instrucción inicial.

4. Interfaz de Acceso (Portada):  
   El proyecto debe iniciar en una página de portada que contenga tres accesos directos:

   - Link 1: El texto plano del prompt utilizado.
   - Link 2: Landing Page generada por el Primer Agente (especificando nombre del agente y modelo de lenguaje usado).
   - Link 3: Landing Page generada por el Segundo Agente (especificando nombre del agente y modelo de lenguaje usado).

5. Repositorio y Documentación:  
   Subir todo el código del proyecto a un único repositorio de GitHub. El archivo README.md del repositorio debe detallar obligatoriamente la siguiente información de forma clara:

   - [X] Datos del estudiante.
   - [X] Link al deploy unificado (un solo enlace de Vercel que dirija a la portada con las tres opciones).
   - [X] El prompt exacto utilizado.
   - [ ] Capturas de pantalla de ambos sitios web generados.

---

> [!IMPORTANT]  
>
> #### DATOS DEL ESTUDIANTE
>
>- **Nombre:** Valeria
>- **Apellido:** Thomas
>- **Comisión:** "D" Lunes - 1c2026
>- **Materia:** FRONTEND
>- **Instituto:** IFTS 29 - GCBA

#### LINKS DE DEPLIEGUE Y REPOSITORIO

[DEPLOY EN VERCEL](https://iftp-29-fe-1c2026-pfo-2-prompt-engi.vercel.app/)

[REPOSITORIO EN GITHUB](https://github.com/Irinath/IFTP29_FE_1c2026_PFO2_prompt_engineering_VThomas.git)

#### PROMPT UTILIZADO

> [!IMPORTANT]  
> El prompt creado a partir de la aplicación de buenas prácticas de *ingeniería de prompt* donde se asigna un rol, un contexto, se enumera stack tecnológico, se diseña el árbol de carpetas, se asigna una paleta de estilos, se contextualiza dentro de que parámetros puede y en cuales no debe crear el desarrollo.
>

```Markdown

<role>
Sos un desarrollador frontend senior especializado en diseño web moderno y landing pages
de alto impacto. Tu trabajo se distingue por ser visualmente memorable y evitar patrones
genéricos: nada de gradientes predecibles, layouts aburridos ni tipografías neutras de
relleno. Cada página que creás tiene identidad propia.
</role>

<context>
Necesito una landing page completa y autocontenida en un único archivo HTML.
El CSS y el JS van embebidos en sus respectivos tags <style> y <script>.
No hay backend: el formulario es solo visual/maquetado.
Completar los placeholders `{{VARIABLE}}` tomando las variables del archivo variables.md
El resultado debe poder abrirse directamente en cualquier navegador moderno.

La empresa es {{EMPRESA}}, dedicada a {{RUBRO}}.
Su público objetivo son {{PUBLICO}}.
</context>

<design_brief>

## Estructura de carpetas
 
---

todostock-landing/
├── index.html              ← ÚNICO archivo de output; todo el código va aquí
├── assets/
│   ├── img/               ← imágenes estáticas (uso futuro)
│   └── fonts/             ← fuentes locales (uso futuro)
├── prompts/
│   └── landing-page-prompt.md   ← prompt base para claude.ai
├── .opencode/
│   └── AGENTS.md          ← este archivo
└── README.md
---
**Regla de escritura:** todo output (HTML + CSS embebido + JS embebido) va
exclusivamente en `index.html`. No crear archivos adicionales salvo pedido explícito.
---

    <stack>
  - HTML5 semántico (un único archivo index.html)
  - CSS3 puro con custom properties (sin frameworks como Tailwind o Bootstrap)
  - JavaScript Vanilla ES6+ (sin React, Vue ni jQuery)
  - Google Fonts via CDN (única dependencia de tipografía)
  - Font Awesome via CDN (íconos) o SVG inline
  - Sin backend, sin build tools, sin bundler
  - Compatible con cualquier navegador moderno sin pasos de compilación
    </stack>

  <palette>
    Usá EXACTAMENTE estas variables CSS, sin modificar ningún valor:
      --text:       rgb(7, 8, 23);
      --background: rgb(231, 231, 233);
      --primary:    rgb(79, 79, 196);
      --secondary:  rgb(216, 131, 241);
      --accent:     rgb(208, 118, 184);

    Declará las cinco en :root tal como están. Podés derivar variantes para
    hover states, bordes y sombras usando rgba() con opacity sobre estos valores,
    pero nunca introduzcas colores fuera de esta paleta.
  </palette>

  <typography>
    Tipografía: {{TIPOGRAFIA}}.
    Si elegís libremente: usá Google Fonts con una display face característica para
    títulos y una fuente complementaria para cuerpo. Evitá Inter, Roboto o Arial.
    Definí la escala tipográfica como variables CSS.
  </typography>

  <aesthetics>
    RESTRICCIONES ABSOLUTAS:
    - SIN EMOJIS en ninguna parte del HTML visible: ni títulos, ni tarjetas, ni
      íconos decorativos. Usar exclusivamente texto, SVG o Font Awesome.

    RESPONSIVIDAD — 4 breakpoints obligatorios:
    - Mobile:  hasta 480px
    - Tablet:  481px – 768px
    - Desktop: 769px – 1200px
    - Wide:    1201px en adelante
    Los grids y layouts deben reordenarse correctamente en cada uno.

    ANIMACIÓN OBLIGATORIA:
    - Incluir al menos una animación CSS con @keyframes, visible e intencional.
      Opciones válidas: entrada del hero, elemento flotante/pulsante, reveal en
      scroll via JS + clase CSS, o animación de un elemento decorativo de fondo.
      Debe estar justificada por el diseño y ser claramente perceptible.

    NAVEGACIÓN FLUIDA:
    - scroll-behavior: smooth en el elemento html
    - Reforzar con JS scrollIntoView para mayor compatibilidad cross-browser
    - El header sticky debe compensar su altura con scroll-margin-top en cada
      sección, para que los títulos no queden tapados al navegar

    ESTÉTICA:
    - Diseño mobile-first con CSS Grid y Flexbox
    - Micro-interacciones en hover en tarjetas y botones
    - Evitá el aesthetic genérico de IA: apostá por algo visualmente distintivo
    - Un único elemento "firma" memorable (tipográfico, cromático o de layout)
  </aesthetics>

</design_brief>

<task>
Creá la landing page completa con las siguientes secciones en este orden exacto:
</task>

<sections>

  <section id="header">
    <name>Header — Navegación</name>
    <spec>
      - Logo o nombre de marca a la izquierda
      - Menú de navegación con anclas a cada sección
      - Sticky: fijo al hacer scroll
      - Cambio visual sutil (sombra o fondo) cuando el usuario scrollea
      - Hamburger menu en mobile (toggle con JS)
    </spec>
  </section>

  <section id="hero">
    <name>Hero Section</name>
    <spec>
      - Ocupa 100vh completo
      - H1 con título impactante que comunique el valor central de {{EMPRESA}}
      - Subtítulo descriptivo en una o dos líneas
      - Botón CTA prominente con texto "{{CTA_TEXTO}}"
      - Fondo con gradiente o elemento visual fuerte usando la paleta definida
      - Aquí debe vivir la animación @keyframes obligatoria si no tiene mejor lugar
    </spec>
  </section>

  <section id="about">
    <name>Sobre Nosotros</name>
    <spec>
      - Párrafo de presentación de la empresa (2-3 líneas, tono profesional y cercano)
      - Layout de dos columnas en desktop: texto a la izquierda, elemento visual a la derecha
      - 3 tarjetas que destaquen valores o pilares clave de la empresa
    </spec>
  </section>

  <section id="services">
    <name>Servicios o Características</name>
    <spec>
      - Título de sección claro
      - Grid de al menos 6 tarjetas (justificado para el rubro mayorista)
      - Cada tarjeta: ícono SVG inline o Font Awesome, título, descripción breve
      - Efecto hover en las tarjetas
      - Fondo alternativo que separe visualmente esta sección
    </spec>
  </section>

  <section id="testimonials">
    <name>Testimonios</name>
    <spec>
      - Al menos 3 testimonios de clientes ficticios pero verosímiles para el rubro
      - Cada uno: avatar circular con iniciales (sin imagen externa), nombre, cargo y empresa
      - Cita visual destacada con comillas grandes o bloque de color
      - Valoración visual de 5 estrellas (caracteres unicode o SVG, no emojis)
      - Layout tipo cards en grid
    </spec>
  </section>

  <section id="contact">
    <name>Formulario de Contacto</name>
    <spec>
      - Título invitando al contacto
      - Campos: Nombre completo, Email, Asunto, Mensaje (textarea)
      - Botón de envío estilizado con --primary
      - Focus states visibles y estilizados con CSS
      - Sin funcionalidad backend: solo maquetado visual
      - Columna lateral con datos de contacto ficticios (dirección, teléfono, email)
    </spec>
  </section>

  <section id="footer">
    <name>Footer</name>
    <spec>
      - Fondo oscuro usando --text como base
      - Logo o nombre de la empresa
      - Íconos SVG inline de redes sociales: LinkedIn, Instagram, Twitter/X, Facebook
      - Links de navegación rápida (mismas anclas que el header)
      - Texto de copyright: © 2025 {{EMPRESA}}. Todos los derechos reservados.
    </spec>
  </section>

</sections>

<technical_requirements>
  - Un único archivo .html, sin archivos externos excepto Google Fonts y Font Awesome CDN
  - CSS: todas las variables en :root, especificidad de selectores controlada para
    evitar que reglas se anulen entre sí (especialmente padding/margin entre secciones)
  - JS Vanilla: smooth scroll con scrollIntoView, efecto del header al scrollear,
    hamburger menu toggle, y reveal de elementos en scroll (IntersectionObserver)
  - Sin frameworks JS
  - Comentarios HTML breves al inicio de cada sección: <!-- SECTION: Hero -->
</technical_requirements>

<output_format>
Entregá únicamente el código HTML completo listo para usar.
Sin explicaciones, sin texto previo ni posterior al código.
El archivo debe poder guardarse como index.html y abrirse directamente en el navegador.
</output_format>
```

---

#### CAPTURA DE PANTALLA DE AMBOS SITIOS WEB GENERADOS

>[!IMPORTANT]
>
>| KIRO - CLAUDE SONET 4.5      | OPENCODE - BIG PICKLE (OPENCODE ZEN) |
>| :--------------------------: | :----------------------------------: |
>| CAPTURA DE PANTALLA           | CAPTURA DE PANTALLA                  |
>| ![KIRO-1200PX](./images/Captura%20de%20pantalla%202026-06-27%20015542.png) | ![OPENCODE-1200PX](./images/Captura%20de%20pantalla%202026-06-27%20031113.png) |
>| ![KIRO-NOSOTROS](./images/Captura%20de%20pantalla%202026-06-27%20015603.png) | ![OPENCODE-NOSOTROS](./images/Captura%20de%20pantalla%202026-06-27%20022738.png) |
>| ![KIRO-SERVICIOS](./images/Captura%20de%20pantalla%202026-06-27%20015636.png)| ![OPENCODE-SERVICIOS](./images/Captura%20de%20pantalla%202026-06-27%20022553.png) |
>| ![KIRO-TESTIMONIOS](./images/Captura%20de%20pantalla%202026-06-27%20015717.png) | ![OPENCODE-TESTIMONIOS](./images/Captura%20de%20pantalla%202026-06-27%20033639.png)|
>|![KIRO-CONTACTO](./images/Captura%20de%20pantalla%202026-06-27%20015730.png) |![OPENCODE-CONTACTO](./images/Captura%20de%20pantalla%202026-06-27%20034340.png) |
>|![KIRO-FOOTER](./images/Captura%20de%20pantalla%202026-06-27%20015748.png) |![OPENCODE-FOOTER](./images/Captura%20de%20pantalla%202026-06-27%20034612.png) |
>| | |
