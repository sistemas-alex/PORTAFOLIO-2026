import { Award } from "lucide-react";

const coursesData = [
  {
    title: "Diplomado en Power BI",
    institution: "Universidad Nacional de Colombia",
  },
  {
    title: "Diplomado en Análisis de Datos con Python",
    institution: "Platzi",
  },
  {
    title: "Diplomado en Gestión de la Calidad ISO 9001:2015",
    institution: "SENA",
  },
  {
    title: "Curso de Excel Avanzado para Análisis de Datos",
    institution: "LinkedIn Learning",
  },
  {
    title: "Curso de SQL para Ciencia de Datos",
    institution: "Coursera",
  },
  {
    title: "Fundamentos de Gestión Documental",
    institution: "Archivo General de la Nación",
  },
];

const CoursesSection = () => {
  return (
    <section id="diplomados" className="section-alt-bg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Certificaciones y Cursos</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Formación continua en las herramientas y metodologías más demandadas del mercado.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {coursesData.map((course, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm card-hover border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="icon-circle shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground mb-1.5 text-sm sm:text-base">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {course.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
