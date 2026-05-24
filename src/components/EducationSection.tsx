import { GraduationCap, Award, MessageCircle } from "lucide-react";

const formalEducation = [
  {
    institution: "Fundación de Educación Superior San José",
    degree: "Tecnólogo en Sistemas de la Información",
    year: "2024",

        certificate:"/certificados/01-Estudios_profesionales/03-Acta_Diploma_Tecnologo.pdf",


  },


  {
    institution: "TEINCO – Corporacion tecnologica Colombiana",
    degree: "Técnico Profesional en Programcion Web y Multimedia",
    year: "2022",

    certificate:"/certificados/01-Estudios_profesionales/02-Acta_Diploma_Teinco.pdf",

  },


  {
    institution: "SENA – Servicio Nacional de Aprendizaje",
    degree: "Técnico Profesional Integral en Asistencia en Organización de Archivos",
    year: "2021",

    certificate:"/certificados/01-Estudios_profesionales/005-Acta_Diploma_SENA.pdf",

  },

  {
    institution: "Institución Tecnisistemas",
    degree: "Técnico Laboral por Competencias en Manejo de Sistemas de la Información",
    year: "2019",

    certificate:"/certificados/01-Estudios_profesionales/01-Acta_Diploma_Tecnisistemas.pdf",

  },
];

const certifications = [

  
 
 {
    title: "Diplomado en Habilidades en Programación con énfasis en aplicaciones WEB",
    institution: "Universidad de Caldas",
    year: "2022",
    category: "Desarrollo Web",
     certificate:"/certificados/02-Diplomado/01-Diplomado_Universidad_de_Caldas2022.pdf",
  },
  
  
  {
    title: "Documentación De Un Sistema De Gestión De La Calidad - NTC ISO 9001",
    institution: "SENA",
    year: "2019",
    category: "Gestión y Calidad",
    certificate:"/certificados/03-Cursos-sistemas/02-Documentacion_Sistema_de_Gestion_Calidad_9001.pdf",
  },


  {
    title: "Curso en Desarrollo Front-End",
    institution: "Fundacion Carlos Slim",
    year: "2022",
    category: "Desarrollo Web",
    certificate:"/certificados/03-Cursos-sistemas/10-from-end.pdf",
  },


  {
    title: "Curso WordPress Profesional",
    institution: "Udemy",
    year: "2023",
    category: "Desarrollo Web",
    certificate:"/certificados/03-Cursos-sistemas/05-wp.pdf",
  },


  {
    title: "Certificado Profesional en línea IBM Full-Stack JavaScript Developer",
    institution: "Coursera – IBM",
    year: "2024",
    category: "Desarrollo Web",
    certificate:"/certificados/03-Cursos-sistemas/06-IBM_ Full-Stack_ JavaScript.pdf",
  },


  {
    title: "Certificado Profesional en línea IBM IT Scrum Master",
    institution: "Coursera SkillUp – IBM",
    year: "2025",
     category: "Gestión y Calidad",
    certificate:"/certificados/03-Cursos-sistemas/09-IBM_IT_Scrum_Master.pdf",
  },

  
  {
    title: "Curso en Desarrollo Front-End con HTML, CSS y JavaScript",
    institution: "Universidad de los Andes",
    year: "2025",
    category: "Desarrollo Web",
    certificate:"/certificados/03-Cursos-sistemas/11-Desarrollo_web.pdf",
  },

    
  {
    title: "Análisis de Datos – Nivel Intermedio",
    institution: "Corporación Metropolitana de Educación CIME",
    year: "2023",
    category: "Análisis de Datos",
    certificate:"/certificados/04-Cursos-Datos/001-Analisis_de_Datos_Intermedio.pdf",
  },


  {
    title: "Ciencia de Datos – Nivel Intermedio",
    institution: "BD Guidance Inc",
    year: "2023",
    category: "Análisis de Datos",
    certificate:"/certificados/04-Cursos-Datos/002-Ciencia_de_Datos .pdf",
  },
  

  {
    title: "Programa Especializado en Ciencia de Datos",
    institution: "Coursera – Universidad de los Andes",
    year: "2024",
    category: "Análisis de Datos",
    certificate:"/certificados/04-Cursos-Datos/003-Ciencia_de_datos.pdf",
  },
  
  
  {
    title: "Certificado Profesional Google Data Analytics",
    institution: "Coursera – Google",
    year: "2024",
    category: "Análisis de Datos",
    certificate:"/certificados/04-Cursos-Datos/004-Google_Data_Analytics.pdf",
  },
  
  
  {
    title: "Certificado Profesional Google Advanced Data Analytics",
    institution: "Coursera – Google",
    year: "2024",
    category: "Análisis de Datos",
    certificate:"/certificados/04-Cursos-Datos/005-Google_Advanced_Data_Analytics.pdf",
  },
  
  
  
];

const EducationSection = () => {
  return (
    <section id="educacion" className="section-alt-bg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Formación Académica</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Preparación sólida en tecnología, gestión de información y análisis de datos, orientada a ofrecer soluciones eficientes, seguras y basadas en datos para las organizaciones.
          </p>
        </div>

        {/* Educación Formal */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Educación Formal
          </h3>
          <div className="grid gap-5 max-w-4xl mx-auto">
            {formalEducation.map((edu, index) => (
            
          <a
  key={index}
  href={edu.certificate}
  target="_blank"
  rel="noopener noreferrer"
  className="
    block
    bg-card
    rounded-xl
    p-6
    sm:p-8
    shadow-sm
    card-hover
    border
    border-border
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:shadow-cyan-500/20
  "
>
            
            
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="icon-circle shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-foreground">
                        {edu.institution}
                      </h4>
                      <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit border border-primary/20">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{edu.degree}</p>
                  </div>
                </div>



              </a>



))}
          </div>
        </div>

        {/* Otros Estudios y Certificaciones */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Otros Estudios y Certificaciones
          </h3>



          <h4 className="text-2xl font-bold text-cyan-400 mb-5 mt-8 text-center">
          💻 Desarrollo Web
          </h4>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          
            {certifications
  .filter(cert => cert.category === "Desarrollo Web")
  .map((cert, index) => (
             
             <a
  key={index}
  href={cert.certificate}
  target="_blank"
  rel="noopener noreferrer"
  className="
    block
    bg-card
    rounded-xl
    p-6
    shadow-sm
    card-hover
    border
    border-border
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:shadow-cyan-500/20
  "
>
             
                <div className="flex items-start gap-4">
                  <div className="icon-circle shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit border border-primary/20 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                  </div>
                </div>


              </a>

            ))}
          </div>


              {/* Análisis de Datos */}

<h4 className="text-2xl font-bold text-cyan-400 mb-5 mt-8 text-center">
  📊 Análisis de Datos
</h4>


<div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">

  {certifications
    .filter(cert => cert.category === "Análisis de Datos")
    .map((cert, index) => (

      <a
        key={index}
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          bg-card
          rounded-xl
          p-6
          shadow-sm
          card-hover
          border
          border-border
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-cyan-500/20
        "
      >

        <div className="flex items-start gap-4">
          <div className="icon-circle shrink-0">
            <Award className="w-5 h-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">

              <h4 className="font-bold text-foreground text-sm sm:text-base">
                {cert.title}
              </h4>

              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit border border-primary/20 shrink-0">
                {cert.year}
              </span>

            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              {cert.institution}
            </p>
          </div>
        </div>

      </a>

    ))}
</div>

{/* Gestión y Calidad */}

<h4 className="text-2xl font-bold text-cyan-400 mb-5 mt-8 text-center">
  📁 Gestión y Calidad
</h4>

<div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">

  {certifications
    .filter(cert => cert.category === "Gestión y Calidad")
    .map((cert, index) => (

      <a
        key={index}
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          bg-card
          rounded-xl
          p-6
          shadow-sm
          card-hover
          border
          border-border
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-cyan-500/20
        "
      >

        <div className="flex items-start gap-4">
          <div className="icon-circle shrink-0">
            <Award className="w-5 h-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">

              <h4 className="font-bold text-foreground text-sm sm:text-base">
                {cert.title}
              </h4>

              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit border border-primary/20 shrink-0">
                {cert.year}
              </span>

            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              {cert.institution}
            </p>
          </div>
        </div>

      </a>

    ))}
</div>  


          
        </div>

        {/* CTA de sección */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Necesitas apoyo en gestión de información o análisis de datos?</p>
          <a 
            href="https://wa.me/573105247136" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Conversemos sobre tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


