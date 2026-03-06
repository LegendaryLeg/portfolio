# Portfolio Transfer Guide - Figma Make to Cursor IDE

This guide will help you transfer your dark medieval pixel art portfolio from Figma Make to Cursor IDE.

---

## Prerequisites

- Node.js 18+ installed
- Cursor IDE installed
- Basic knowledge of terminal/command line

---

## Step 1: Create New React + Vite Project

Open terminal in Cursor and run:

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
```

---

## Step 2: Install Dependencies

Install all required packages:

```bash
# Core dependencies
npm install

# Tailwind CSS v4 (latest)
npm install tailwindcss@next @tailwindcss/vite@next

# UI utilities
npm install class-variance-authority clsx tailwind-merge

# Radix UI components for shadcn/ui
npm install @radix-ui/react-slot

# Icons
npm install lucide-react

# Carousel
npm install embla-carousel-react

# Form handling
npm install react-hook-form@7.55.0
```

---

## Step 3: Configure Vite

Replace `vite.config.ts` content:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

## Step 4: Update TypeScript Config

Add path mapping to `tsconfig.json` (merge with existing config):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Also update `tsconfig.app.json` if it exists:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Step 5: Create Folder Structure

Create the following folder structure inside `src/`:

```
src/
├── App.tsx
├── main.tsx
├── styles/
│   └── globals.css
└── components/
    ├── PressStart.tsx
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── figma/
    │   └── ImageWithFallback.tsx
    └── ui/
        ├── button.tsx
        ├── card.tsx
        ├── carousel.tsx
        ├── input.tsx
        ├── textarea.tsx
        └── utils.ts
```

---

## Step 6: Update main.tsx

Replace `src/main.tsx` with:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## Step 7: Copy Files

Now copy each file from the sections below. Create the files in your Cursor project and paste the exact content.

### 📄 src/styles/globals.css

See the GLOBALS_CSS.md file for the complete CSS.

### 📄 src/App.tsx

```tsx
import { useState } from 'react';
import { PressStart } from './components/PressStart';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <PressStart onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

### 📄 src/components/ui/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 📄 src/components/figma/ImageWithFallback.tsx

```tsx
import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="w-full h-full bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </>
  );
}
```

---

## Step 8: Copy Component Files

Copy all component files from your Figma Make project to `src/components/`:

- PressStart.tsx
- Header.tsx
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Contact.tsx
- Footer.tsx

Copy UI components to `src/components/ui/`:

- button.tsx
- carousel.tsx
- card.tsx
- input.tsx
- textarea.tsx

**Important:** Update all import paths in these files:
- Change `'./ui/button'` to `'./ui/button'` (already correct)
- Change `'./components/...'` to just `'./components/...'` (remove leading ./)
- Update any other relative imports as needed

---

## Step 9: Fix Import Versions

The carousel and button components have version-specific imports. Update them:

**In `src/components/ui/carousel.tsx`:**

```typescript
// Change these lines:
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from "lucide-react@0.487.0";

// To:
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
```

**In `src/components/ui/button.tsx`:**

```typescript
// Change:
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

// To:
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
```

---

## Step 10: Run the Project

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## Common Issues & Solutions

### Issue: "Cannot find module" errors

**Solution:** Make sure all dependencies are installed:
```bash
npm install
```

### Issue: Import path errors

**Solution:** Double-check that:
1. All import paths use `./` for relative imports
2. The `@` alias is configured in `vite.config.ts` and `tsconfig.json`

### Issue: Tailwind styles not working

**Solution:** 
1. Verify `globals.css` is imported in `main.tsx`
2. Ensure `@tailwindcss/vite` is in the Vite plugins array

### Issue: Components not rendering

**Solution:** Check browser console for errors and verify all component files are created

---

## Customization

### Update Portfolio Content

1. **Hero Section:** Edit `src/components/Hero.tsx` - change "YOUR NAME"
2. **About Section:** Edit `src/components/About.tsx` 
3. **Skills Section:** Edit `src/components/Skills.tsx` - add your skills
4. **Projects:** Edit `src/components/Projects.tsx` - update project data
5. **Contact:** Edit `src/components/Contact.tsx` - add your contact info
6. **Footer:** Edit `src/components/Footer.tsx` - update social links

### Change Colors

Edit color variables in `src/styles/globals.css` under the `:root` section.

---

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

---

## Next Steps

1. Replace placeholder content with your actual information
2. Add real project images and descriptions
3. Configure contact form backend (EmailJS, Formspree, etc.)
4. Test responsiveness on different devices
5. Deploy to production!

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are created in the correct locations
3. Ensure all dependencies are installed
4. Check that import paths match your file structure

Good luck with your portfolio! 🎮⚔️
