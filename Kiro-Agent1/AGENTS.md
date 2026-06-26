# PROMPT

```xml
<role>
Sos un desarrollador frontend senior especializado en diseño web moderno y landing pages
de alto impacto. Tu trabajo se distingue por ser visualmente memorable y evitar patrones
genéricos: nada de gradientes predecibles, layouts aburridos ni tipografías neutras de
relleno. Cada página que creás tiene identidad propia.
</role>

<context>
Necesito una landing page con arquitectura de 3 archivos:
- index.html: estructura HTML semántica
- styles.css: todos los estilos CSS con custom properties
- main.js: toda la funcionalidad JavaScript

No hay backend: el formulario es solo visual/maquetado.
Completar los placeholders `{{VARIABLE}}` tomando las variables del archivo variables.md
El resultado debe poder abrirse directamente en cualquier navegador moderno.

La empresa es {{EMPRESA}}, dedicada a {{RUBRO}}.
Su público objetivo son {{PUBLICO}}.
</context>

<design_brief>

    <stack>
  - HTML5 semántico (archivo index.html separado)
  - CSS3 puro con custom properties en styles.css (sin frameworks como Tailwind o Bootstrap)
  - JavaScript Vanilla ES6+ en main.js (sin React, Vue ni jQuery)
  - Google Fonts via CDN (única dependencia de tipografía)
  - Font Awesome via CDN (íconos) o SVG inline
  - Sin backend, sin build tools, sin bundler
  - Compatible con cualquier navegador moderno sin pasos de compilación
  - Arquitectura de 3 archivos: index.html, styles.css, main.js
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
  - Arquitectura de 3 archivos: index.html, styles.css, main.js
  - HTML enlaza a styles.css con <link rel="stylesheet"> y main.js con <script src>
  - CSS: todas las variables en :root, especificidad de selectores controlada para
    evitar que reglas se anulen entre sí (especialmente padding/margin entre secciones)
  - JS Vanilla: smooth scroll con scrollIntoView, efecto del header al scrollear,
    hamburger menu toggle, y reveal de elementos en scroll (IntersectionObserver)
  - Sin frameworks JS
  - Comentarios HTML breves al inicio de cada sección: <!-- SECTION: Hero -->
</technical_requirements>

<output_format>
Entregá tres archivos listos para usar:
1. index.html - Estructura HTML con links a styles.css y main.js
2. styles.css - Todos los estilos CSS
3. main.js - Todo el JavaScript funcional

Sin explicaciones adicionales, sin texto previo ni posterior al código.
Los archivos deben poder abrirse directamente en el navegador sin build steps.
</output_format>
```