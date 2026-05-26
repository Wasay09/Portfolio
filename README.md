# Wasayuddin Syed — Portfolio

Personal portfolio website built with **Next.js 14**, **React 18**, and **Tailwind CSS v3**.

## Tech Stack

| Layer      | Tool                        |
|------------|-----------------------------|
| Framework  | Next.js 14 (App Router)     |
| UI         | React 18                    |
| Styling    | Tailwind CSS v3             |
| Fonts      | Syne + DM Mono (next/font)  |
| Language   | JavaScript                  |

## Project Structure

```
wasay-portfolio/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json          ← @ path alias
├── package.json
└── src/
    ├── app/
    │   ├── layout.js      ← root layout, fonts, metadata
    │   ├── page.js        ← home page, composes all sections
    │   └── globals.css    ← Tailwind + global styles
    ├── data/
    │   └── portfolio.js   ← ALL your content lives here
    └── components/
        ├── RevealInit.js  ← client component: scroll-reveal observer
        ├── Nav.js
        ├── Hero.js
        ├── StatsBar.js
        ├── SectionHeader.js
        ├── Skills.js
        ├── Experience.js
        ├── ProjectCard.js
        ├── Projects.js
        ├── Education.js
        ├── Contact.js
        └── Footer.js
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Updating Your Content

Everything — skills, projects, experience, courses, stats — lives in **`src/data/portfolio.js`**.  
Edit that file and the whole site updates automatically. No need to touch any component.

## Deploying

### Vercel (recommended, free)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import project → select your repo
3. Click Deploy — done. Vercel auto-detects Next.js.

### Netlify
```bash
npm run build
# Upload the .next folder via Netlify's Next.js integration
```
