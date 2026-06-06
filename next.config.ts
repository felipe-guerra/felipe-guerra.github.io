import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Le dice a Next.js que compile a HTML, CSS y JS puros
  basePath: '/felipe-guerra.github.io', // Configura la subruta correcta para tu repositorio
  images: {
    unoptimized: true, // Desactiva la optimización dinámica de imágenes en servidor (GitHub Pages no la soporta)
  },
};

export default nextConfig;