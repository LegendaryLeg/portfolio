# Personal Portfolio - Raiyan

A modern, responsive personal portfolio website built with React and Vite.

## Features

- ⚛️ Built with React 18
- 🚀 Fast development with Vite
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🧩 Component-based architecture
- 🎯 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/     # React components
  │   ├── Navbar.jsx
  │   ├── Hero.jsx
  │   ├── About.jsx
  │   ├── Projects.jsx
  │   ├── Skills.jsx
  │   ├── Contact.jsx
  │   └── Footer.jsx
  ├── styles/         # CSS files
  │   ├── index.css
  │   ├── App.css
  │   └── [component].css
  ├── App.jsx         # Main app component
  └── main.jsx        # Entry point
```

## Customization

### Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Content

- Update component files in `src/components/` to change content
- Modify styles in `src/styles/` to change appearance

## Matching Figma Design

To match your Figma design:
1. Export assets (images, icons) from Figma
2. Place them in the `public/` directory
3. Update component styles to match Figma colors, fonts, and spacing
4. Replace placeholder content with your actual content

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT
