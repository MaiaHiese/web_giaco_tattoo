"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo<NavItem[]>(
    () => [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contacto", href: "/contacto" },
      { label: "Metodología de trabajo", href: "/metodologia" },
      { label: "FAQs", href: "/faqs" },
      { label: "Cursos", href: "/cursos" },
      // { label: "Sobre el artista", href: "/about" },
      // { label: "Gift Cards", href: "/gift-card" },
      { label: "Shop Art", href: "/shop" },
    ],
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR: Fondo blanco semitransparente, letras negras */}
      <nav className="bg-white/80 backdrop-blur-md text-neutral-900 font-inter tracking-widest uppercase font-bold text-sm h-16 w-full sticky top-0 z-50 grid grid-cols-3 items-center px-8 md:px-16 lg:px-30 rounded-2xl shadow-sm md:rounded-none md:shadow-none mb-8">
        
        <div className="flex justify-start">
          <button aria-label="Menu" onClick={() => setOpen(true)} className="hover:text-neutral-500 transition-colors duration-300 flex items-center justify-center p-2 -ml-2" type="button">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>

        <div className="flex justify-center">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase hover:text-neutral-600 transition-colors duration-300 focus:outline-none whitespace-nowrap">
            GIACO TATTOO
          </Link>
        </div>

        <div className="flex justify-end">
          <button className="hover:text-neutral-500 transition-colors duration-300 hidden md:block">
            BOOK APPOINTMENT
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE (Hamburguesa) - Lo pasamos a fondo blanco también */}
      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <aside className="absolute left-0 top-0 h-full w-[320px] max-w-[85vw] bg-white border-r border-neutral-200 px-6 py-6 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-neutral-900 font-bold tracking-widest uppercase">Menú</div>
              <button type="button" onClick={() => setOpen(false)} className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300 p-2 -mr-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="mt-2 flex flex-col gap-2">
              {items.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-neutral-600 font-medium hover:text-neutral-900 transition-colors duration-300 py-2">
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  )
}