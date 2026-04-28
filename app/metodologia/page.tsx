"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  "/metodologia/1.jpg",
  "/metodologia/2.png",
  "/metodologia/3.png",
  "/metodologia/4.png",
];

export default function MetodologiaPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 pt-8 pb-16 px-4 md:px-16 flex flex-col items-center">
      <div className="w-full">
        
        <h1 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-8 text-center md:text-left">
          Metodología de trabajo
        </h1>

        {/* Achicamos el gap (de gap-12 a gap-8) para acercar el texto a la imagen */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* ==========================================
              COLUMNA IZQ (40%): md:col-span-2. 
              ========================================== */}
          <div className="md:col-span-2 relative w-full aspect-4/5 bg-neutral-900 overflow-hidden rounded-sm md:sticky md:top-24">
            {carouselImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Fran trabajando ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* ==========================================
              COLUMNA DER (60%): md:col-span-3
              ========================================== */}
          <div className="md:col-span-3 flex flex-col gap-8">
            
            {/* BLOQUE 1: Visión Integral */}
            <section>
              <h2 className="text-white text-lg md:text-xl font-bold mb-3">
                Una visión integral del cuerpo y el diseño
              </h2>
              {/* Aplicamos text-[13px], text-justify y leading-normal */}
              <div className="text-neutral-300 font-light leading-normal space-y-3 text-[13px] text-justify hyphens-auto">
                <p>
                  El tatuaje es mucho más que tinta en la piel; es historia, identidad y estilo. Bajo esta premisa, cada proyecto se concibe como una pieza única, diseñada exclusivamente para habitar un cuerpo específico.
                </p>
                <p>
                  Mi enfoque es integral: considero la anatomía como un lienzo vivo donde la armonía es fundamental. Por ello, te asesoraré sobre cómo tu nuevo diseño convivirá con tus tatuajes previos y cómo fluirá de manera orgánica con tus movimientos y formas naturales. El profesionalismo, para mí, reside en el equilibrio entre una técnica impecable y la capacidad de interpretar lo que tu piel necesita contar.
                </p>
              </div>
            </section>

            {/* BLOQUE 2: Proceso Creativo */}
            <section>
              <h2 className="text-white text-lg md:text-xl font-bold mb-3">
                El Proceso Creativo (Paso a paso)
              </h2>
              {/* Aplicamos text-[13px], text-justify y leading-normal */}
              <p className="text-neutral-300 font-light leading-normal mb-5 text-[13px] text-justify hyphens-auto">
                Para asegurar la excelencia y la exclusividad en cada obra, sigo un proceso cuidado de principio a fin:
              </p>
              
              <ol className="space-y-4 text-neutral-300 font-light text-[13px] text-justify hyphens-auto">
                <li className="flex gap-3">
                  <span className="font-bold text-white">1.</span>
                  <div>
                    <strong className="text-white font-medium">La Consulta: </strong> 
                    Todo comienza con tu idea. Me compartes tus referencias, el concepto que buscas y la zona del cuerpo que quieres intervenir.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white">2.</span>
                  <div>
                    <strong className="text-white font-medium">La Propuesta: </strong> 
                    Analizamos juntos el tamaño y la ubicación ideal. En esta etapa, basándome en las características de tu cuerpo, te presento una propuesta conceptual y el presupuesto correspondiente.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white">3.</span>
                  <div>
                    <strong className="text-white font-medium">La Reserva y el Diseño: </strong> 
                    Una vez confirmada la seña, el proceso de diseño final cobra vida. Aquí es donde la técnica y tu historia se fusionan para crear el arte definitivo.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white">4.</span>
                  <div>
                    <strong className="text-white font-medium">La Sesión: </strong> 
                    Coordinamos el día y horario para materializar el proyecto en un entorno profesional y cuidado.
                  </div>
                </li>
              </ol>
            </section>

          </div>
        </div>

      </div>
    </main>
  );
}