export default function MetodologiaPage() {
  return (
    // Aplicamos la regla de oro: px-4 en celu y px-16 en PC para alinear con el Navbar
    <main className="flex-1 pt-8 pb-16 px-4 md:px-16 flex flex-col items-center">
      
      {/* El contenedor w-full sin max-w nos asegura usar todo el espacio disponible dentro del margen */}
      <div className="w-full">
        
        {/* Título idéntico al de Portfolio para mantener consistencia visual */}
        <h1 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12 text-center md:text-left">
          Metodología de trabajo
        </h1>

        {/* Acá abajo empezaremos a meter los bloques de texto, fotos o videos */}
        
      </div>
    </main>
  );
}