# Quick Start - Copy & Paste Guide

Use this guide to quickly copy all necessary files to your Cursor project.

---

## Installation Commands (Run in Order)

```bash
# 1. Create project
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# 2. Install all dependencies
npm install tailwindcss@next @tailwindcss/vite@next class-variance-authority clsx tailwind-merge @radix-ui/react-slot lucide-react embla-carousel-react react-hook-form@7.55.0
```

---

## Key Files to Download

Download all component files from Figma Make by clicking on each file and copying its content:

### From Figma Make Root:
- `/App.tsx` → Copy to `src/App.tsx`
- `/styles/globals.css` → Copy to `src/styles/globals.css`

### From Components:
- `/components/PressStart.tsx` → `src/components/PressStart.tsx`
- `/components/Header.tsx` → `src/components/Header.tsx`
- `/components/Hero.tsx` → `src/components/Hero.tsx`
- `/components/About.tsx` → `src/components/About.tsx`
- `/components/Skills.tsx` → `src/components/Skills.tsx`
- `/components/Projects.tsx` → `src/components/Projects.tsx`
- `/components/Contact.tsx` → `src/components/Contact.tsx`
- `/components/Footer.tsx` → `src/components/Footer.tsx`

### From UI Components:
- `/components/ui/utils.ts` → `src/components/ui/utils.ts`
- `/components/ui/button.tsx` → `src/components/ui/button.tsx`
- `/components/ui/carousel.tsx` → `src/components/ui/carousel.tsx`
- `/components/ui/card.tsx` → `src/components/ui/card.tsx`
- `/components/ui/input.tsx` → `src/components/ui/input.tsx`
- `/components/ui/textarea.tsx` → `src/components/ui/textarea.tsx`

### From Figma Components:
- `/components/figma/ImageWithFallback.tsx` → `src/components/figma/ImageWithFallback.tsx`

---

## Important: Fix Version-Specific Imports

After copying files, remove version numbers from these imports:

**In `src/components/ui/carousel.tsx`:**
```typescript
// Change FROM:
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from "lucide-react@0.487.0";

// TO:
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
```

**In `src/components/ui/button.tsx`:**
```typescript
// Change FROM:
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

// TO:
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
```

---

## Configuration Files

### vite.config.ts
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

### src/main.tsx
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

### tsconfig.json (Add to compilerOptions)
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

## Folder Structure

```
my-portfolio/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles/
│   │   └── globals.css
│   └── components/
│       ├── PressStart.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── figma/
│       │   └── ImageWithFallback.tsx
│       └── ui/
│           ├── button.tsx
│           ├── card.tsx
│           ├── carousel.tsx
│           ├── input.tsx
│           ├── textarea.tsx
│           └── utils.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Run Your Portfolio

```bash
npm run dev
```

Open `http://localhost:5173` 🎮

---

## Checklist

- [ ] Created Vite React TypeScript project
- [ ] Installed all dependencies
- [ ] Updated vite.config.ts
- [ ] Updated tsconfig.json
- [ ] Created folder structure
- [ ] Copied all component files
- [ ] Copied globals.css
- [ ] Fixed version-specific imports in carousel.tsx and button.tsx
- [ ] Updated main.tsx
- [ ] Ran `npm run dev`
- [ ] Website loads successfully!

---

## Pro Tip: Browser Export Method

If you're having trouble transferring files manually:

1. In your browser on Figma Make, open Developer Tools (F12)
2. Go to the Console tab
3. Run this script to download all files as a ZIP:

```javascript
// This is a conceptual approach - you'll need to manually copy files
// The easiest way is to copy each file one by one from Figma Make
```

**Recommended:** Copy files one by one - it's more reliable and helps you understand the structure!

---

Good luck! Your dark medieval portfolio will look amazing in Cursor! ⚔️🔥
