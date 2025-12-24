// src/data/galleryData.js

// Vite compatible automatic image import (Vercel safe)
const images = import.meta.glob(
  "../assets/customer/*.{png,jpg,jpeg}",
  { eager: true }
);

// Final gallery array
export const galleryImages = Object.values(images).map(
  (module, index) => ({
    id: index + 1,
    img: module.default,
  })
);
