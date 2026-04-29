"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages1 = [
  "/metodologia/1.jpg",
  "/metodologia/2.png",
  "/metodologia/3.png",
  "/metodologia/4.png",
];

const carouselImages2 = [
  "/metodologia/5.jpg",
  "/metodologia/6.jpg",
  "/metodologia/7.png",
  "/metodologia/8.png",
];

export default function MetodologiaPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 pt-0 pb-16 px-4 md:px-24 lg:px-32 flex flex-col items-center">
      <div className="w-full">
        
        <h1 className="text-neutral-900 text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-5 text-center md:text-left">
          Metodología de trabajo
        </h1>

        <div className="flex flex-col gap-8 md:gap-10">

          {/* BLOQUE 1: El Proceso (Imagen Izq) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-2 relative w-full aspect-square md:aspect-auto md:h-full bg-neutral-200 overflow-hidden rounded-lg shadow-md">
              {carouselImages1.map((src, index) => (
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

            <div className="md:col-span-3 bg-white rounded-lg shadow-md p-5 md:px-8 md:py-4 flex flex-col justify-center h-full gap-2">
              <h2 className="text-neutral-900 text-base md:text-lg font-bold mb-0">
                UNA VISIÓN INTEGRAL DEL CUERPO Y EL DISEÑO 
              </h2>
              <div className="text-neutral-700 font-normal leading-snug space-y-2 text-[13px] text-justify hyphens-auto">
                <p>
                  El tatuaje es mucho más que tinta en la piel; es historia, identidad y estilo. Bajo esta premisa, cada proyecto se concibe como una pieza única, diseñada exclusivamente para habitar un cuerpo específico.
                </p>
                <p>
                  Mi enfoque es integral: considero la anatomía como un lienzo vivo donde la armonía es fundamental. Por ello, te asesoraré sobre cómo tu nuevo diseño convivirá con tus tatuajes previos y cómo fluirá de manera orgánica con tus movimientos y formas naturales.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 2: El Proceso (Imagen Der) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-3 bg-white rounded-lg shadow-md p-5 md:px-8 md:py-3 flex flex-col justify-center h-full gap-2 order-2 md:order-1">
              <h2 className="text-neutral-900 text-base md:text-lg font-bold mb-0">
                EL PROCESO CREATIVO 
              </h2>
              <p className="text-neutral-700 font-normal leading-snug mb-0.5 text-[13px] text-justify hyphens-auto">
                Para asegurar la excelencia y la exclusividad en cada obra, sigo un proceso cuidado de principio a fin:
              </p>
              <ol className="space-y-1.5 text-neutral-700 font-normal text-[13px] text-justify hyphens-auto">
                <li className="flex gap-2">
                  <span className="font-bold text-neutral-900">1.</span>
                  <div><strong className="text-neutral-900 font-bold">La Consulta:</strong> Todo comienza con tu idea. Me compartes tus referencias y el concepto que buscas.</div>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-neutral-900">2.</span>
                  <div><strong className="text-neutral-900 font-bold">La Propuesta:</strong> Analizamos juntos el tamaño y la ubicación ideal basada en tu anatomía.</div>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-neutral-900">3.</span>
                  <div><strong className="text-neutral-900 font-bold">La Reserva:</strong> Una vez confirmada la seña, el proceso de diseño final cobra vida.</div>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-neutral-900">4.</span>
                  <div><strong className="text-neutral-900 font-bold">La Sesión:</strong> Materializamos el proyecto en un entorno profesional y cuidado.</div>
                </li>
              </ol>
            </div>

            <div className="md:col-span-2 relative w-full aspect-square md:aspect-auto md:h-full bg-neutral-200 overflow-hidden rounded-lg shadow-md order-1 md:order-2">
              {carouselImages2.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Proceso creativo ${index + 5}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* BLOQUE 3: Sobre el Artista (Imagen Izq) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            {/* Imagen Fija */}
            <div className="md:col-span-2 relative w-full aspect-square md:aspect-auto md:h-full bg-neutral-200 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/metodologia/9.png"
                alt="Franco Giacomino"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto del Artista */}
            <div className="md:col-span-3 bg-white rounded-lg shadow-md p-5 md:px-8 md:py-4 flex flex-col justify-center h-full gap-3">
              <h2 className="text-neutral-900 text-base md:text-lg font-bold mb-0">
                FRANCO GIACOMINO
              </h2>
              <div className="text-neutral-700 font-normal leading-snug space-y-2 text-[13px] text-justify hyphens-auto">
                <p>
                  Mi camino en las artes visuales comenzó hace más de quince años, cuando el dibujo se convirtió en mi lenguaje principal para interpretar el mundo. Desde 2019, esa búsqueda encontró un nuevo soporte en la piel, permitiéndome especializarme en el realismo blackwork, con un enfoque particular en la profundidad de los retratos y la naturaleza.
                </p>
                <p>
                  Entiendo el arte como una herramienta de exploración social y personal. Mi objetivo es que cada pieza deje una huella que trascienda lo estético: una reflexión, una emoción o un nuevo sentido para quien la lleva. Transformando una visión compartida en una obra con identidad propia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}