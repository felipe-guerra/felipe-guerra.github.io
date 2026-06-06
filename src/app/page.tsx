export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-24 text-white">
      <div className="text-center z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mx-auto p-8 bg-slate-800 rounded-xl shadow-2xl border border-slate-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            ¡Hola Mundo!
          </h1>
          <p className="text-slate-400 text-base">
            Frontend moderno desarrollado con Next.js, React y Tailwind CSS.
          </p>
          <div className="mt-6 text-xs text-slate-500 font-sans border-t border-slate-700 pt-4">
            Desplegado de forma estática en GitHub Pages
          </div>
        </div>
      </div>
    </main>
  );
}