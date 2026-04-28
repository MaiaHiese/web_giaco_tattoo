import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 pt-8 pb-16 px-8 flex flex-col items-center">
      {/* Agrandamos un poco el max-w para que las 3 columnas respiren bien en PC */}
      <div className="w-full max-w-[800px] mx-auto">
        
        <div className="bg-white p-px">
          {/* Cambiamos grid-cols-2 a grid-cols-2 md:grid-cols-3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white">
            
            <Link // PORTFOLIO
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/portfolio"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Portfolio
              </span>
            </Link>

            <Link // CONTACTO
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/contacto"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Contacto
              </span>
            </Link>

            <Link // METODOLOGÍA DE TRABAJO
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/metodologia"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Metodología
                <br />
                de trabajo
              </span>
            </Link>

            <Link // FAQS
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/faqs"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                FAQs
              </span>
            </Link>

            <Link // CURSOS
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/cursos"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Cursos
              </span>
            </Link>

            <Link // SHOP ART
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/shop"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Shop Art
              </span>
            </Link>

            {/* ====================================================
                ENLACES OCULTOS (Comentados para no borrarlos)
                Si alguna vez querés que vuelvan, solo borrá la 
                llave y la barra de la línea anterior y la de abajo de todo.
                ==================================================== */}
            {/* <Link // SOBRE EL ARTISTA
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/about"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Sobre el
                <br />
                artista
              </span>
            </Link>

            <Link // GIFT CARDS
              className="group aspect-square bg-black flex flex-col items-center justify-center relative overflow-hidden text-white no-underline focus:outline-none"
              href="/gift-card"
            >
              <span className="inline-block font-extrabold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:bg-white px-6 py-2 rounded-md uppercase tracking-tight transition-all duration-300 text-center leading-none">
                Gift Cards
              </span>
            </Link>
            */}

          </div>
        </div>
      </div>
    </main>
  );
} 