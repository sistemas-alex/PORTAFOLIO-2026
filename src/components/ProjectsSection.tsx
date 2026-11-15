import React from "react";

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  demoUrl: string;
  demoLabel: string;
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: "InventarioPro — Sistema CRUD de Stock",
    category: "Full-Stack Logic / CRUD",
    year: "2026",
    description:
      "Aplicación web para gestión integral de inventarios con validación de SKUs únicos, cálculo automático de KPIs, filtros multicriterio y exportación de reportes a Excel (CSV).",
    tags: ["JavaScript ES6+", "HTML5", "CSS3", "LocalStorage"],
    demoUrl: "https://sistemas-alex.github.io/gestion-inventario/",
    demoLabel: "Ver Demo",
    repoUrl: "https://github.com/sistemas-alex/gestion-inventario",
  },
  {
    title: "GestiónDoc — Tablero Kanban de Trámites",
    category: "API REST & Drag & Drop",
    year: "2026",
    description:
      "Panel operativo con flujo de estados arrastrable (HTML5 Drag & Drop), consumo asíncrono de API REST, historial de auditoría por radicado y modo oscuro persistente.",
    tags: ["JavaScript", "Fetch / Async-Await", "Drag & Drop API", "CSS Variables"],
    demoUrl: "https://sistemas-alex.github.io/control-tramites/",
    demoLabel: "Ver Demo",
    repoUrl: "https://github.com/sistemas-alex/control-tramites",
  },
  {
    title: "FinanCalc Pro — Simulador de Amortización",
    category: "Lógica Financiera & Data Viz",
    year: "2026",
    description:
      "Calculadora financiera bajo Sistema Francés con conversión equivalente de tasas (EA a MV), cronograma dinámico mes a mes, gráficos interactivos y exportación CSV.",
    tags: ["JavaScript", "Chart.js", "Matemática Financiera", "CSS Grid"],
    demoUrl: "https://sistemas-alex.github.io/simulador-financiero/",
    demoLabel: "Ver Demo",
    repoUrl: "https://github.com/sistemas-alex/simulador-financiero",
  },
  {
    title: "Automatizador y Validador ETL en Python",
    category: "Automatización & Datos",
    year: "2026",
    description:
      "Script CLI que depura bases de datos administrativas en CSV, elimina duplicados, valida documentos y correos con expresiones regulares y genera informes ejecutivos.",
    tags: ["Python 3", "ETL", "Regex", "CSV / Auditoría"],
    demoUrl: "https://github.com/sistemas-alex/reportes#instalación-y-uso-local",
    demoLabel: "Documentación",
    repoUrl: "https://github.com/sistemas-alex/reportes",
  },
  {
    title: "Landing Page — Soluciones Digitales",
    category: "Frontend & Conversión",
    year: "2026",
    description:
      "Sitio web corporativo responsivo (Mobile-First) con filtrado interactivo de servicios, validación de formularios en tiempo real e integración directa con WhatsApp.",
    tags: ["HTML5 Semántico", "CSS Grid / Flexbox", "JavaScript Vanilla", "WhatsApp API"],
    demoUrl: "https://sistemas-alex.github.io/servicios-digitales/",
    demoLabel: "Ver Demo",
    repoUrl: "https://github.com/sistemas-alex/servicios-digitales",
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
          Portafolio Técnico
        </span>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Proyectos Desarrollados
        </h2>
        <p className="text-muted-foreground text-base">
          Aplicaciones web y herramientas de automatización construidas con código limpio, arquitectura modular y enfoque en optimización operativa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-primary">
                  {project.category}
                </span>
                <span className="font-mono text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{project.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>
            </div>

            <div>
              <ul className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 px-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {project.demoLabel}
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 px-3 rounded-lg text-sm font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  Código GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

