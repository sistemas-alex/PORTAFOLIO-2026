import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-alexander-olmedo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Educación", id: "educacion" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Habilidades", id: "habilidades" },

    {
    label: "Proyectos",
    link: "/proyectos",
    },

    { label: "Contacto", id: "contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Alexander Olmedo - Sistemas de Información y Analista de Datos" 
              className="h-10 md:h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
               
                onClick={() => {
                  if ("link" in item) {
                    window.open(item.link, "_blank");
                  } else {
                    scrollToSection(item.id);
                  }
                }}

                className="nav-link py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  

                  onClick={() => {
                    if ("link" in item) {
                      window.open(item.link, "_blank");
                    } else {
                      scrollToSection(item.id);
                    }
                  }}

                  className="text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
