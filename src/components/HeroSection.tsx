import { MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo2.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-12 bg-background relative"
    >
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Alexander Olmedo"
              className="h-24 sm:h-32 md:h-40 lg:h-44 w-auto"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">

            
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
               Portfolio Profesional
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Desarrollador Web & Analista de Datos
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desarrollador Web apasionado por el análisis de datos,
              la automatización y la creación de soluciones tecnológicas
              que optimizan procesos y generan valor para las organizaciones.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
              {[
                "Análisis de Datos",
                "Power BI",
                "Dashboards",
                "Automatización",
                "Desarrollo Web",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Botón */}
          <div className="pt-8 flex items-center justify-center">
            <a
              href="https://wa.me/573105247136"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn group"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbeme por WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;