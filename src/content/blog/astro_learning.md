---
title: 'Jugando con Astro'
description: 'Aprendiendo a crear una aplicación desde Astro con Tailwind, usando la API de SpaceX'
pubDate: 'Jan 27 2023'
heroImage: '/spaceX.png'
---

## olas👋
---
  Han sido días muy raros desde mi última publicación. Con la intensidad y fugacidad con que se presentan las cosas, vi comienzos y ocasos a la velocidad de una serpiente incendiaria.

 Lo que se dice, buenos meses. Aprendizaje, progreso y mucho código (en la vida y en la pc). Seguimos en partido, dándolo todo. Me anoté a crossfit, como el doble, duermo mejor.

---
#### SpaceX Launches
##### Interfaz simple, tailwind (de 1!), y fetching de datos.

 Esta semana empecé tres proyectos en Astro, ¿por qué? porque a veces así funciona mi proceso de aprendizaje, me obsesiono con una tecnología que me llame la atención y juego, pruebo cosas, sigo tutoriales, aprendo.

<img src='/public/spaceX.png' />

 Construí este sencillo sitio para aprender su uso mientras repaso cosas clave en Javascript como el fetching de datos. Sigo en forma. Como todo, mil cosas por mejorar pero estoy contento con el resultado, por el contenido de lo aprendido. 

---

 Me gusta conservarlos en github y hacer 27mil commits meses después modificando cosas del front. Es una mala práctica, estoy seguro. Pero me gana la ansiedad y el miedo a que explote la pc, no pueda guardar el cambio, me olvide de volver a hacerlo. Pura obsesión.

 <img src='../../../public/spacex-scrnsht.png' />

 Otra cosa que aprendí, y que ahora adjunto es como crear los árboles de directorios y proyectos con una extensión.

 ```markdown
 npm install tree-extended -g

 // Para ver el árbol, 
    y excluir carpetas, ej:

 tree-extended -ignore=".vscode, node_modules"
 ```

---

##### Árbol de directorios y archivos del proyecto


``` markdown
├───.astro/
│   └───types.d.ts
├───public/
│   ├───fonts/
│   │   ├───atkinson-bold.woff
│   │   └───atkinson-regular.woff
│   ├───blog-placeholder-2.jpg
│   ├───blog-placeholder-about.png
│   ├───favicon.svg
│   ├───logo.png
│   ├───spacex-scrnsht.png
│   └───spaceX.png
├───src/
│   ├───components/
│   │   ├───BaseHead.astro
│   │   ├───Footer.astro
│   │   ├───FormattedDate.astro
│   │   ├───Header.astro
│   │   └───HeaderLink.astro
│   ├───content/
│   │   ├───blog/
│   │   │   ├───astro_learning.md
│   │   │   └───first-post.md
│   │   └───config.ts
│   ├───layouts/
│   │   └───BlogPost.astro
│   ├───pages/
│   │   ├───blog/
│   │   │   ├───index.astro
│   │   │   └───[...slug].astro
│   │   ├───about.astro
│   │   ├───index.astro
│   │   └───rss.xml.js
│   ├───styles/
│   │   └───global.css
│   ├───consts.ts
│   └───env.d.ts
├───astro.config.mjs
├───package-lock.json
├───package.json
├───README.md
└───tsconfig.json
``` 
---

¿Tiene realmente un valor? Quién sabe, a mi me divierte dejarlo documentado y me ayuda a organizarme el poder verlo así.
En fin, herramientas.