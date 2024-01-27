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

<img src='https://raw.githubusercontent.com/na7hk3r/astro_blog/main/public/spaceX.png' />

 Construí este sencillo sitio para aprender su uso mientras repaso cosas clave en Javascript como el fetching de datos. Sigo en forma. Como todo, mil cosas por mejorar pero estoy contento con el resultado, por el contenido de lo aprendido. 

---

 Me gusta conservarlos en github y hacer 27mil commits meses después modificando cosas del front. Es una mala práctica, estoy seguro. Pero me gana la ansiedad y el miedo a que explote la pc, no pueda guardar el cambio, me olvide de volver a hacerlo. Pura obsesión.

 <img src='https://raw.githubusercontent.com/na7hk3r/astro_blog/main/public/spacex-scrnsht.png' />

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
├───public/
│   └───favicon.svg
├───src/
│   ├───components/
│   │   ├───CardLaunch.astro
│   │   ├───Header.astro
│   │   ├───HeaderButton.astro
│   │   └───Launches.astro
│   ├───layouts/
│   │   └───Layout.astro
│   ├───pages/
│   │   ├───blog/
│   │   │   └───mi-primer-articulo.md
│   │   ├───launch/
│   │   │   └───[id].astro
│   │   ├───404.astro
│   │   ├───about.astro
│   │   ├───example.html
│   │   └───index.astro
│   ├───services/
│   │   └───spacex.ts
│   ├───types/
│   │   └───api.ts
│   └───env.d.ts
├───astro.config.mjs
├───package-lock.json
├───package.json
├───README.md
├───tailwind.config.mjs
└───tsconfig.json
``` 
---

¿Tiene realmente un valor? Quién sabe, a mi me divierte dejarlo documentado y me ayuda a organizarme el poder verlo así.
En fin, herramientas.
