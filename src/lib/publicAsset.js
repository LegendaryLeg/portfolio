/** Public folder paths for GitHub Pages (respects Vite `base`). */
export const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
