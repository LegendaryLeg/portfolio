# Complete File Contents for Cursor Transfer

This document contains ALL the file contents you need to copy. Simply copy each section to the corresponding file in your Cursor project.

---

## 🎯 Quick Navigation

1. [Installation Steps](#installation-steps)
2. [Configuration Files](#configuration-files)
3. [Main Files](#main-files)
4. [Component Files](#component-files)
5. [UI Component Files](#ui-component-files)
6. [Utility Files](#utility-files)

---

## Installation Steps

### 1. Create Project
```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
```

### 2. Install ALL Dependencies at Once
```bash
npm install tailwindcss@next @tailwindcss/vite@next class-variance-authority clsx tailwind-merge @radix-ui/react-slot lucide-react embla-carousel-react react-hook-form@7.55.0
```

---

## Configuration Files

### 📄 `vite.config.ts`

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

### 📄 `tsconfig.json` (Modify existing)

Add this to the `compilerOptions` section:
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

### 📄 `tsconfig.app.json` (If it exists, modify it too)

Add the same path mapping as above.

---

## Main Files

### 📄 `src/main.tsx`

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

### 📄 `src/App.tsx`

```typescript
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

### 📄 `src/styles/globals.css`

**⚠️ IMPORTANT:** This is a LARGE file. Copy it exactly as shown from the Figma Make project at `/styles/globals.css`. It contains all the custom CSS variables and Tailwind configurations.

You can find the complete content by viewing the `/styles/globals.css` file in Figma Make.

The file includes:
- Font imports (Press Start 2P)
- CSS custom properties (color variables)
- Tailwind theme configuration
- Custom utility classes (pixel-font, pixel-corners, gold-glow, etc.)
- Animations (fadeIn, flicker)

---

## Component Files

### 📄 `src/components/PressStart.tsx`

Copy from `/components/PressStart.tsx` in Figma Make.

### 📄 `src/components/Header.tsx`

Copy from `/components/Header.tsx` in Figma Make.

### 📄 `src/components/Hero.tsx`

Copy from `/components/Hero.tsx` in Figma Make.

### 📄 `src/components/About.tsx`

Copy from `/components/About.tsx` in Figma Make.

### 📄 `src/components/Skills.tsx`

Copy from `/components/Skills.tsx` in Figma Make.

### 📄 `src/components/Projects.tsx`

Copy from `/components/Projects.tsx` in Figma Make.

**⚠️ NOTE:** Remove version numbers from imports:
```typescript
// Change these imports in Projects.tsx:
import { ImageWithFallback } from './figma/ImageWithFallback'; // Keep as-is
```

### 📄 `src/components/Contact.tsx`

Copy from `/components/Contact.tsx` in Figma Make.

### 📄 `src/components/Footer.tsx`

Copy from `/components/Footer.tsx` in Figma Make.

---

## UI Component Files

### 📄 `src/components/ui/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 📄 `src/components/ui/button.tsx`

Copy from `/components/ui/button.tsx` in Figma Make.

**⚠️ IMPORTANT - Fix imports:**
```typescript
// Change FROM:
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

// TO:
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
```

### 📄 `src/components/ui/carousel.tsx`

Copy from `/components/ui/carousel.tsx` in Figma Make.

**⚠️ IMPORTANT - Fix imports:**
```typescript
// Change FROM:
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from "lucide-react@0.487.0";

// TO:
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
```

### 📄 `src/components/ui/card.tsx`

Copy from `/components/ui/card.tsx` in Figma Make.

### 📄 `src/components/ui/input.tsx`

Copy from `/components/ui/input.tsx` in Figma Make.

### 📄 `src/components/ui/textarea.tsx`

Copy from `/components/ui/textarea.tsx` in Figma Make.

---

## Utility Files

### 📄 `src/components/figma/ImageWithFallback.tsx`

```typescript
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

## 📂 Complete Folder Structure

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
├── tsconfig.app.json
└── package.json
```

---

## ✅ Post-Copy Checklist

After copying all files:

1. ✅ All files created in correct locations
2. ✅ Removed @version numbers from imports in `button.tsx` and `carousel.tsx`
3. ✅ Updated `vite.config.ts`
4. ✅ Updated `tsconfig.json` with path mappings
5. ✅ Updated `main.tsx`
6. ✅ Copied complete `globals.css`
7. ✅ All component files copied
8. ✅ All UI component files copied
9. ✅ Created `ImageWithFallback.tsx`
10. ✅ Run `npm install` if not already done

---

## 🚀 Run the Project

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🎨 Customization Points

### Personal Information
- **Name:** `src/components/Hero.tsx` - Line 44
- **Email:** `src/components/Contact.tsx` - Line 35
- **Phone:** `src/components/Contact.tsx` - Line 42
- **Location:** `src/components/Contact.tsx` - Line 49
- **Social Links:** `src/components/Footer.tsx` - Lines 6-11

### Content
- **About Text:** `src/components/About.tsx` - Lines 32-41
- **Skills:** `src/components/Skills.tsx` - Lines 4-33
- **Projects:** `src/components/Projects.tsx` - Lines 13-74

### Styling
- **Colors:** `src/styles/globals.css` - Lines 5-54
- **Fonts:** `src/styles/globals.css` - Line 1

---

## 🐛 Troubleshooting

### TypeScript Errors
If you see path resolution errors:
```bash
# Make sure you've updated tsconfig.json
# Restart your Cursor IDE
# Run: npm run dev
```

### Missing Dependencies
```bash
npm install
```

### Styles Not Loading
Ensure `globals.css` is imported in `main.tsx`:
```typescript
import './styles/globals.css'
```

### Version Conflicts
Check that you removed `@version` numbers from:
- `src/components/ui/button.tsx`
- `src/components/ui/carousel.tsx`

---

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder
```

---

## 🎯 Summary

You now have all the files you need! The key steps are:

1. Create Vite project
2. Install dependencies
3. Configure vite.config.ts and tsconfig.json
4. Copy ALL files from this document
5. Fix version-specific imports
6. Run `npm run dev`

Good luck with your dark medieval portfolio! ⚔️🔥
