import Image from "next/image";

const portfolioData = [
  { id: 1, title: "Blackwork Yisus", src: "/portfolio/1.png" },
  { id: 2, title: "Realismo Bichinho", src: "/portfolio/2.png" },
  { id: 3, title: "Retrato bebita", src: "/portfolio/3.png" },
  { id: 4, title: "El Diegote", src: "/portfolio/4.png" },
  { id: 5, title: "Pulpo", src: "/portfolio/5.png" },
  { id: 6, title: "El Diegote de nuevo", src: "/portfolio/6.png" },
];

export default function PortfolioPage() {
  return (
    // 1. Cambiamos md:px-8 por md:px-16 para que coincida EXACTO con el Navbar
    <main className="flex-1 pt-8 pb-16 px-4 md:px-16 flex flex-col items-center">
      
      {/* 2. Borramos el max-w-[1000px] para que ocupe todo el espacio disponible respetando el px-16 */}
      <div className="w-full">
        
        {/* Este título ahora va a quedar en la misma línea vertical que la hamburguesa */}
        <h1 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12 text-center md:text-left">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {portfolioData.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              
              {/* 3. Ajustamos a md:px-0 para que en PC el texto quede bien al ras de la foto */}
              <h2 className="text-neutral-300 text-sm md:text-base font-medium uppercase tracking-widest px-4 md:px-0">
                {item.title}
              </h2>

              <div className="relative w-full aspect-4/5 bg-neutral-900 overflow-hidden group rounded-sm">
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}