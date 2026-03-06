# Visual Step-by-Step Transfer Guide 🎮

A beginner-friendly guide to transfer your portfolio from Figma Make to Cursor IDE.

---

## 🎯 What You're Doing

You're moving your working portfolio website from Figma Make (browser-based) to Cursor IDE (local development environment) so you can:
- Edit code locally on your computer
- Use version control (Git)
- Deploy to any hosting platform
- Have full control over your project

---

## 📋 Prerequisites

Download and install:
- ✅ [Node.js](https://nodejs.org/) (v18 or higher)
- ✅ [Cursor IDE](https://cursor.sh/)

---

## 🚀 Step-by-Step Process

### STEP 1: Open Cursor IDE Terminal

1. Open Cursor IDE
2. Click `Terminal` in the top menu
3. Click `New Terminal`
4. You'll see a terminal window at the bottom

---

### STEP 2: Create New Project

**In the terminal, type these commands ONE BY ONE:**

```bash
npm create vite@latest my-portfolio -- --template react-ts
```

When prompted:
- Press `Enter` to continue
- Wait for it to finish (you'll see "Done" message)

```bash
cd my-portfolio
```

This moves you into your new project folder.

---

### STEP 3: Install All Dependencies

**Copy and paste this ENTIRE LINE into the terminal:**

```bash
npm install tailwindcss@next @tailwindcss/vite@next class-variance-authority clsx tailwind-merge @radix-ui/react-slot lucide-react embla-carousel-react react-hook-form@7.55.0
```

Press Enter and wait (this might take 1-2 minutes).

---

### STEP 4: Open Project in Cursor

The files should now appear in the left sidebar of Cursor.

You'll see:
```
my-portfolio/
├── node_modules/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── package.json
└── ...
```

---

### STEP 5: Configure Vite

1. **In Cursor's left sidebar**, click on `vite.config.ts`
2. **DELETE all content** in that file
3. **Copy this and paste it:**

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

4. **Save the file** (Ctrl+S or Cmd+S)

---

### STEP 6: Update TypeScript Config

1. Click on `tsconfig.json` in the left sidebar
2. Find the `"compilerOptions": {` section
3. Add these two lines inside it (after the opening `{`):

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

It should look like:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    ...other settings...
  }
}
```

4. Save the file

---

### STEP 7: Create Folder Structure

**In the `src/` folder, create these folders:**

Right-click on `src/` → New Folder:
- Create: `styles`
- Create: `components`

**Inside `components/`, create:**
- Create: `figma`
- Create: `ui`

Your structure should look like:
```
src/
├── styles/
├── components/
│   ├── figma/
│   └── ui/
```

---

### STEP 8: Update main.tsx

1. Click on `src/main.tsx`
2. **Replace ALL content** with:

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

3. Save the file

---

### STEP 9: Copy Files from Figma Make

Now comes the copying part! You need to copy files from your Figma Make project.

**Open two windows side-by-side:**
- Left: Your browser with Figma Make
- Right: Cursor IDE

---

#### Copy globals.css

**In Figma Make:**
1. Click on `/styles/globals.css` in the file tree
2. Select ALL text (Ctrl+A or Cmd+A)
3. Copy (Ctrl+C or Cmd+C)

**In Cursor:**
1. Right-click on `src/styles/` folder
2. Click `New File`
3. Name it: `globals.css`
4. Paste the content (Ctrl+V or Cmd+V)
5. Save (Ctrl+S or Cmd+S)

---

#### Copy App.tsx

**In Figma Make:**
1. Click on `/App.tsx`
2. Select ALL text
3. Copy

**In Cursor:**
1. Click on `src/App.tsx` (it already exists)
2. Select ALL text
3. Paste to replace
4. Save

---

#### Copy Component Files

**Repeat this process for EACH component:**

| Figma Make Path | Cursor Path |
|----------------|-------------|
| `/components/PressStart.tsx` | `src/components/PressStart.tsx` |
| `/components/Header.tsx` | `src/components/Header.tsx` |
| `/components/Hero.tsx` | `src/components/Hero.tsx` |
| `/components/About.tsx` | `src/components/About.tsx` |
| `/components/Skills.tsx` | `src/components/Skills.tsx` |
| `/components/Projects.tsx` | `src/components/Projects.tsx` |
| `/components/Contact.tsx` | `src/components/Contact.tsx` |
| `/components/Footer.tsx` | `src/components/Footer.tsx` |

**For each file:**
1. **In Figma Make:** Open file → Select all → Copy
2. **In Cursor:** Right-click `src/components/` → New File → Name it (e.g., `PressStart.tsx`) → Paste → Save

---

#### Copy UI Component Files

**Repeat for UI components:**

| Figma Make Path | Cursor Path |
|----------------|-------------|
| `/components/ui/utils.ts` | `src/components/ui/utils.ts` |
| `/components/ui/button.tsx` | `src/components/ui/button.tsx` |
| `/components/ui/carousel.tsx` | `src/components/ui/carousel.tsx` |
| `/components/ui/card.tsx` | `src/components/ui/card.tsx` |
| `/components/ui/input.tsx` | `src/components/ui/input.tsx` |
| `/components/ui/textarea.tsx` | `src/components/ui/textarea.tsx` |

---

#### Copy ImageWithFallback

**In Cursor:**
1. Right-click `src/components/figma/` folder
2. New File → `ImageWithFallback.tsx`
3. Paste this code:

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

4. Save

---

### STEP 10: Fix Import Versions

**This is CRITICAL!**

#### Fix button.tsx

1. Open `src/components/ui/button.tsx`
2. Find these lines at the top:

```typescript
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
```

3. Change them to (remove the @version):

```typescript
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
```

4. Save

#### Fix carousel.tsx

1. Open `src/components/ui/carousel.tsx`
2. Find these lines:

```typescript
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from "lucide-react@0.487.0";
```

3. Change to:

```typescript
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
```

4. Save

---

### STEP 11: Run Your Portfolio! 🎉

**In the terminal, type:**

```bash
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:5173/
```

**Click the link or open your browser and go to:**
```
http://localhost:5173
```

---

## ✅ Success Checklist

Your portfolio should now display with:
- ✅ "Press Start" intro screen
- ✅ Dark medieval pixel art styling
- ✅ Smooth animations
- ✅ All sections working (Hero, About, Skills, Projects, Contact)
- ✅ Working carousel on Projects
- ✅ Responsive design

---

## ❌ Common Errors & Fixes

### Error: "Cannot find module..."

**Fix:**
```bash
npm install
```

---

### Error: TypeScript can't find paths

**Fix:**
1. Close Cursor completely
2. Reopen it
3. Run `npm run dev` again

---

### Styles don't look right

**Fix:**
1. Check that `globals.css` is complete
2. Make sure `main.tsx` imports `'./styles/globals.css'`
3. Restart dev server (Ctrl+C in terminal, then `npm run dev`)

---

### Version error with button or carousel

**Fix:**
Make sure you removed `@version` numbers from imports in:
- `src/components/ui/button.tsx`
- `src/components/ui/carousel.tsx`

---

## 🎨 Next Steps

Now that it's working:

1. **Customize content:**
   - Replace "YOUR NAME" in Hero section
   - Update About section text
   - Add your real projects
   - Update contact information

2. **Test responsiveness:**
   - Resize browser window
   - Test on mobile device

3. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel, Netlify, or similar

---

## 📚 File Copying Shortcut

If you're copying many files, here's a quick method:

**Browser Method:**
1. Open Figma Make in browser
2. For each file: Click file → See code → Select all → Copy
3. In Cursor: Create file → Paste → Save

**Repeat for all files!**

---

## 🎯 Summary

You've successfully:
1. ✅ Created a local Vite + React project
2. ✅ Configured Tailwind CSS v4
3. ✅ Set up the project structure
4. ✅ Copied all component files
5. ✅ Fixed import issues
6. ✅ Ran the development server

**Your portfolio is now running locally in Cursor!** 🎮⚔️

---

## 💡 Pro Tips

- **Save often:** Ctrl+S (Cmd+S on Mac)
- **Terminal shortcuts:** 
  - Ctrl+C = Stop server
  - Up arrow = Previous command
- **Search in files:** Ctrl+Shift+F (Cmd+Shift+F)
- **Format code:** Right-click → Format Document

---

**Need help?** Check the troubleshooting section or review the COMPLETE_FILE_CONTENTS.md for detailed file contents.

Happy coding! 🚀
