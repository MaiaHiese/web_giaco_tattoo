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
    <main className="flex-1 pt-4 pb-16 px-4 md:px-24 lg:px-32 flex flex-col items-center">
      <div className="w-full">
        
        <h1 className="text-neutral-900 text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12 text-center md:text-left">
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

              <div className="px-5 py-3 flex items-center justify-start border-t border-neutral-100">
                <h2 className="text-neutral-700 text-sm font-medium">
                  {item.title}
                </h2>
              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}