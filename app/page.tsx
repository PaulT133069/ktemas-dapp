export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <div className="text-center max-w-2xl">
        {/* Logo (tu pourras mettre une image plus tard) */}
        <div className="mb-8 flex justify-center">
          <h1 className="text-6xl font-bold tracking-tighter">
            Ktemas
          </h1>
        </div>
        
        <p className="text-2xl text-zinc-500 mb-12 font-light">
          Le coffre-fort numérique de la nouvelle génération.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-black hover:bg-zinc-800 text-white font-medium rounded-full transition-all">
            Lancer l'App
          </button>
          <button className="px-8 py-4 border border-zinc-200 hover:border-zinc-400 text-black font-medium rounded-full transition-all">
            Documentation
          </button>
        </div>
      </div>
    </main>
  );
}