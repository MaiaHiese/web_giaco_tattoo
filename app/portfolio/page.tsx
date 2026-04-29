import Image from "next/image";

// 1. Modificamos los datos para separar "Título" y "Descripción"
const portfolioData = [
  { id: 1, title: "JESÚS", description: "Realismo en B & W. Foco en luces y sombras.", src: "/portfolio/1.png" },
  { id: 2, title: "BICHINHO", description: "Retrato de mascota con detalles finos.", src: "/portfolio/2.png" },
  { id: 3, title: "BEBITA", description: "Líneas suaves y sombreado delicado.", src: "/portfolio/3.png" },
  { id: 4, title: "EL DIEGOTE", description: "Retrato realista con alto contraste.", src: "/portfolio/4.png" },
  { id: 5, title: "PULPO", description: "Blackwork con texturas orgánicas.", src: "/portfolio/5.png" },
  { id: 6, title: "EL DIEGOTE II", description: "Pieza a gran escala en realismo puro.", src: "/portfolio/6.png" },
];

export default function PortfolioPage() {
  return (
    <main className="flex-1 pt-4 pb-16 px-4 md:px-24 lg:px-32 flex flex-col items-center">
      <div className="w-full">
        
        <h1 className="text-neutral-900 text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-12 text-center md:text-left">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {portfolioData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              
              <div className="relative w-full aspect-[4/5] bg-neutral-200">
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* 2. Contenedor flex-col para apilar el título y la descripción */}
              <div className="px-4 py-3 flex flex-col justify-center items-start border-t border-neutral-100 gap-0.5">
                
                {/* 3a. Título: Negrita, compacto (text-xs) y oscuro */}
                <h2 className="text-neutral-900 text-xs font-bold tracking-widest">
                  {item.title}
                </h2>
                
                {/* 3b. Descripción: Letra muy fina y delicada (text-[11px]), color gris sutil */}
                <p className="text-neutral-500 text-[11px] font-light leading-snug">
                  {item.description}
                </p>
                
              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}