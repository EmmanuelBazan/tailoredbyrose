# Tailoredbyrose — sitio web

Código del portafolio de Rose Meza (tailoredbyrose.com). Astro estático, sin CMS.

## Comandos

| Comando          | Acción                                             |
| ----------------- | --------------------------------------------------- |
| `npm install`      | Instala dependencias                                |
| `npm run dev`       | Servidor local en `localhost:4321`                  |
| `npm run build`     | Compila a `./dist/`                                 |
| `npm run preview`   | Previsualiza el build antes de publicar             |
| `npx astro check`   | Revisa tipos y errores en archivos `.astro`         |

## Cómo se edita el contenido

**Decisión (2026-08-23):** no hay panel de administración. Rose edita cada par de meses,
así que el contenido vive directo en el repositorio y lo actualiza Emmanuel.

- **Trabajos de la galería:** un archivo por pieza en `src/content/work/*.md`. Copiar
  cualquiera de los existentes como plantilla — `order`, `name`, `context`, `brand`,
  `piece`, `alterations`, `tags` e `images` (rutas relativas a `src/assets/work/`).
- **Textos generales** (hero, about, contacto, footer): `src/data/site.ts`.
- **Imágenes:** van en `src/assets/work/` o `src/assets/site/`. Astro las optimiza y
  convierte a WebP automáticamente en el build — no hace falta comprimirlas a mano.

Después de editar, correr `npm run build` y volver a publicar (push a `main` si el
repositorio está conectado a Cloudflare Pages).

## Pendiente antes de publicar

- [x] **Formulario de contacto:** cuenta creada en Web3Forms, access key configurada
      y probada — el correo llega correctamente.
- [ ] **Agenda de citas (Cal.com):** aún sin confirmar por la clienta — no está
      implementada. Cuando se confirme, agregar el embed en la sección de contacto.
- [ ] **Español:** la arquitectura de i18n ya está configurada en `astro.config.mjs`
      (`en` default, `es` con fallback a inglés), pero las páginas en español todavía
      no existen. Se agregan en la siguiente fase con `src/pages/es/index.astro`.
- [ ] Conectar este repositorio a **Cloudflare Pages** (build command `npm run build`,
      output directory `dist`).

## Estructura

```
src/
├── components/     Header, Hero, Marquee, Work, WorkItem, About, Contact, Footer
├── content/work/   Un .md por pieza de la galería
├── data/site.ts    Textos y datos globales del sitio
├── layouts/        Layout base (fuentes, meta tags, SEO)
└── pages/          Rutas — index.astro es la página única por ahora
```
