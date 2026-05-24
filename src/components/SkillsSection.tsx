import { Code, Users, MessageCircle } from "lucide-react";

const technicalSkills = [
  {
    category: "Análisis de datos",
    skills: "Power BI (dashboards, KPIs), Python (Pandas, Matplotlib), Excel avanzado",
  },
  {
    category: "Bases de datos",
    skills: "MySQL, SQL Server, MongoDB",
  },
  {
    category: "Gestión de la información",
    skills: "Limpieza, transformación y análisis descriptivo de datos",
  },
  {
    category: "Visualización de datos",
    skills: "Diseño de reportes ejecutivos para la toma de decisiones",
  },
  {
    category: "Gestión documental",
    skills: "Organización, digitalización y control de información",
  },
];

const softSkills = [
  "Pensamiento analítico",
  "Organización y atención al detalle",
  "Comunicación escrita clara",
  "Orientación a resultados y mejora continua",
  "Resolución de problemas",
  "Trabajo en equipo",
  "Gestión del tiempo",
  "Atención al usuario",
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Competencias</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Habilidades técnicas y blandas que garantizan resultados de calidad en cada proyecto.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-circle">
                <Code className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Habilidades Técnicas
              </h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((item, index) => (
                <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-foreground mb-1.5 text-sm sm:text-base">
                    {item.category}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-circle">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Habilidades Blandas
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-badge text-xs sm:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA de sección */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Estas competencias se alinean con lo que buscas?</p>
          <a 
            href="https://wa.me/573105247136" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Contáctame para más detalles
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
