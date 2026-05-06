import { Menu, X } from "lucide-react";
import { useState } from "react";
import { condominiumData } from "@/lib/data";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF9] border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Branding */}
          <div className="flex-1 flex items-center gap-2 sm:gap-4">
            <img 
              src="/images/logo-solidus-transparent.png" 
              alt="Solidus Equipe Imobiliária" 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain hover:opacity-80 transition-opacity drop-shadow-md"
            />
          </div>

          {/* Branding Title - Centered on mobile */}
          <div className="flex-1 flex justify-center">
            <img 
              src="/images/title-solidus-riva.png" 
              alt="Solidus Riva" 
              className="h-14 sm:h-12 md:h-14 object-contain hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-[2] justify-center">
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-smooth">
              Galeria
            </a>
            <a href="#amenidades" className="text-foreground hover:text-primary transition-smooth">
              Lazer
            </a>
            <a href="#plantas" className="text-foreground hover:text-primary transition-smooth">
              Plantas
            </a>
            <a href="#localizacao" className="text-foreground hover:text-primary transition-smooth">
              Localização
            </a>
            <a href="#empreendimentos" className="text-foreground hover:text-primary transition-smooth">
              Empreendimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>



          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              className="p-3 active:scale-90 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border space-y-2">
            <a href="#sobre" className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre
            </a>
            <a href="#amenidades" className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Lazer
            </a>
            <a href="#plantas" className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Plantas
            </a>
            <a href="#empreendimentos" className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Empreendimentos
            </a>
            <a href="#contato" className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
