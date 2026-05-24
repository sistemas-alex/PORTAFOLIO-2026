import { Briefcase, MessageCircle } from "lucide-react";

const experienceData = [
  {
    company: "Freelance – Soporte Administrativo Digital y Análisis de Información",
    period: "2024 – Presente",
    responsibilities: [
      "Elaboración de reportes administrativos, informes ejecutivos y análisis de datos en Excel avanzado y Power BI.",
      "Organización, validación y presentación de información para apoyar procesos de control y toma de decisiones.",
      "Desarrollo de landing pages informativas utilizando HTML y CSS.",
      "Gestión autónoma de proyectos, cumpliendo plazos y estándares de calidad.",
    ],
  },
  {
    company: "Teleperformance Colombia S.A.S.",
    period: "Enero 2025 – Junio 2025",
    responsibilities: [
      "Gestioné y atendí solicitudes de clientes a través de canales digitales, garantizando tiempos de respuesta y calidad en el servicio.",
      "Verifiqué y validé información conforme a procedimientos y estándares establecidos.",
      "Utilicé herramientas digitales para el seguimiento, control y cierre de casos.",
      "Redacté comunicaciones escritas claras y precisas, orientadas a la solución efectiva de requerimientos.",
    ],
  },
  {
    company: "Asociación Colombiana de Ciudades Capitales – ASOCAPITALES",
    period: "Agosto 2018 – Agosto 2024",
    responsibilities: [
      "Brindé soporte técnico especializado a usuarios internos y externos, resolviendo incidencias de sistemas, software y herramientas tecnológicas.",
      "Desarrollé y mantuve aplicaciones y sistemas de información orientados a la optimización de procesos, gestión documental y análisis de datos.",
      "Realicé análisis de información y elaboración de reportes, dashboards e indicadores para la toma de decisiones gerenciales.",
      "Administré y actualicé bases de datos y plataformas digitales, garantizando la integridad, calidad y disponibilidad de la información.",
      "Instalé, configuré y realicé mantenimiento de hardware y software, asegurando la continuidad operativa de los sistemas.",
      "Apoyé procesos de gestión documental digital, organización y control de la información institucional.",
      "Asesoré en la adquisición de soluciones tecnológicas, validando requerimientos técnicos y funcionales.",
      "Coordiné el uso de herramientas colaborativas (Microsoft Teams, Zoom) para la gestión eficiente de información y trabajo remoto.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Experiencia Profesional</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Más de 6 años optimizando procesos, analizando datos y gestionando información para organizaciones de alto impacto.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-0">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border ml-4 sm:ml-6 card-hover">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="icon-circle shrink-0 hidden sm:flex">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 lg:gap-3 mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap border border-primary/20">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li 
                          key={respIndex} 
                          className="text-muted-foreground text-sm sm:text-base leading-relaxed flex items-start gap-2 sm:gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA de sección */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Buscas un profesional con experiencia comprobada?</p>
          <a 
            href="https://wa.me/573105247136" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Hablemos de cómo puedo ayudarte
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
