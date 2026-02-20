# dreamorigintech-home

The home page of the org. Built with **React**, **Vite**, **react-router-dom**, and **Shadcn/ui** components.

## Tech stack

- **React 18** – UI library  
- **Vite** – build tool and dev server  
- **react-router-dom** – client-side routing  
- **TypeScript** – type safety  
- **Tailwind CSS** – styling  
- **Shadcn/ui** – UI components (Radix UI + Tailwind)  
- **Lucide React** – icons  

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `npm run dev` – start dev server (Vite)
- `npm run build` – TypeScript check + production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint  

## Project structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation (Shadcn Nav, Sheet, Button)
│   ├── Hero.tsx        # Hero section (Shadcn Tabs, Button)
│   ├── Layout.tsx      # Root layout with Header + Outlet
│   └── ui/             # Shadcn components (button, tabs, sheet, navigation-menu)
├── lib/
│   └── utils.ts        # cn() and helpers
├── pages/
│   └── Home.tsx        # Home page (Hero)
├── App.tsx             # Router setup and routes
├── main.tsx            # Entry (BrowserRouter, App)
└── index.css           # Tailwind + Shadcn CSS variables
```

## Adding Shadcn components

Use the Shadcn CLI (with `components.json` pointing at `src/`):

```bash
npx shadcn@latest add <component>
```

Components are added under `src/components/ui/`.
