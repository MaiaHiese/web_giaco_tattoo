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
      {/* NAVBAR: Reducido a h-16 y con Grid de 3 columnas para centrado perfecto */}
      <nav className="bg-neutral-950 text-neutral-400 font-inter tracking-widest uppercase font-light text-sm h-16 border-b border-neutral-900 w-full sticky top-0 z-50 grid grid-cols-3 items-center px-8 md:px-16">
        
        {/* Columna 1: Botón hamburguesa */}
        <div className="flex justify-start">
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="hover:text-white transition-colors duration-300 flex items-center justify-center p-2 -ml-2"
            type="button"
          >
            <span className="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
        </div>

        {/* Columna 2: Logo centrado (SIN clases absolute) */}
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-medium tracking-tighter text-white uppercase hover:text-neutral-300 transition-colors duration-300 focus:outline-none whitespace-nowrap"
          >
            GIACO TATTOO
          </Link>
        </div>

        {/* Columna 3: CTA derecho */}
        <div className="flex justify-end">
          <button className="hover:text-white transition-colors duration-300 hidden md:block">
            BOOK APPOINTMENT
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE (Hamburguesa) */}
      {open ? (
        <div className="fixed inset-0 z-60">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          <aside
            id="site-menu"
            className="absolute left-0 top-0 h-full w-[320px] max-w-[85vw] bg-neutral-950 border-r border-neutral-900 px-6 py-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-white font-medium tracking-widest uppercase">
                Menú
              </div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors duration-300 p-2 -mr-2"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="mt-2 flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}