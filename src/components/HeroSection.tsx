import { MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-alexander-olmedo.png";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 pb-12 bg-background relative"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent" />
      
      {/* Contenido */}
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Logo protagonista */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Alexander Olmedo - Sistemas de Información y Analista de Datos" 
              className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto"
            />
          </div>
          
          {/* Título y descripción orientados a beneficios */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Transformo datos en decisiones estratégicas para tu negocio
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desarrollador Web y Analista de Datos con experiencia en gestión de la información y normas ISO 9001. Desarrollo soluciones digitales y dashboards que optimizan procesos y mejoran la toma de decisiones.
            </p>

            {/* Propuesta de valor */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
              {["Análisis de Datos", "Gestión Documental", "ISO 9001", "Power BI"].map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA único */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/573105247136" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-btn group"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
