# Obed Blankson: Portfolio

Built with React, Tailwind CSS and Vite, following `SPEC.md`.

## Run it in VS Code

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open this folder in VS Code (File > Open Folder).
3. Open the terminal (Ctrl + `) and run:

```bash
npm install
npm run dev
```

4. Open the link it prints (usually http://localhost:5173). The page updates as you save.

## Fill in your content

Everything you write on the site lives in **`src/data.js`**. Open it and fill in:

- `cv` and the remaining empty fields (email, LinkedIn, GitHub and your headshot are already set)
- `cv` is already set to `public/Obed_Blankson_CV.pdf`. To update your CV, replace that file.
- `photo` (put your headshot in `public`, then set e.g. `'/headshot.jpg'`)
- For each project: `role`, `tech`, `live`, `github`, `image` (screenshot in `public`)
- Internship details under `experience`, and `link` for each certification

Anything left empty is hidden, so the site never shows placeholder text.

## Where things are

| File | What it controls |
| --- | --- |
| `src/data.js` | All text, links and lists |
| `src/index.css` | Colours (light and dark) and animations |
| `src/App.jsx` | The order of sections |
| `src/components/` | One file per section (Navbar, Hero, About, ...) |
| `index.html` | Page title, description and social preview |

To change the accent colour, edit `--accent` in `src/index.css` (once for light mode, once under `.dark`).

## Deploy (Vercel or Netlify)

1. Push this folder to a GitHub repository.
2. On vercel.com or netlify.com, import the repository.
3. Build command: `npm run build`. Output folder: `dist`.
4. After the first deploy, update `og:image` in `index.html` to the full URL, e.g. `https://your-site.vercel.app/og-image.png`.

## Before you call it done

See the Definition of Done in `SPEC.md`: test every link, check on your phone, run Lighthouse (Chrome DevTools), and ask a mentor or peer to review.
