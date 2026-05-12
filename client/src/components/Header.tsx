import { Menu, X } from "lucide-react";
import { useState } from "react";
import { condominiumData } from "@/lib/data";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF9] border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo and Branding */}
          <div className="flex items-center z-10">
            <img
              src="/images/logo-solidus-transparent.png"
              alt="Solidus Equipe Imobiliária"
              className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain hover:opacity-80 transition-opacity drop-shadow-md"
            />
          </div>

          {/* Branding Title - Centered and Large */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] sm:max-w-none sm:relative sm:left-0 sm:top-0 sm:translate-x-0 sm:translate-y-0 sm:flex-1 flex justify-center">
            <img
              src="/images/title-solidus-riva.png"
              alt="Solidus Riva"
              className="h-24 sm:h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-[2] justify-center">
            <a
              href="#sobre"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </a>
            <a
              href="#galeria"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Galeria
            </a>
            <a
              href="#amenidades"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Lazer
            </a>
            <a
              href="#plantas"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Plantas
            </a>
            <a
              href="#localizacao"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Localização
            </a>
            <a
              href="#empreendimentos"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Empreendimentos
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden z-10">
            <button
              className="p-2 active:scale-90 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border space-y-2">
            <a
              href="#sobre"
              className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#amenidades"
              className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lazer
            </a>
            <a
              href="#plantas"
              className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plantas
            </a>
            <a
              href="#empreendimentos"
              className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Empreendimentos
            </a>
            <a
              href="#contato"
              className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
