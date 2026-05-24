const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="py-24 border-b border-border bg-gradient-to-b from-background to-secondary/20">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Repositorio Profesional de Proyectos
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Desarrollo web, análisis de datos, dashboards Power BI,
            automatización de procesos y soluciones tecnológicas.
          </p>

        </div>

      </section>

      {/* POWER BI */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-14">
            📊 Proyectos Realizados en Power BI
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Proyecto */}
            <div className="
              bg-card
              border
              border-border
              rounded-3xl
              overflow-hidden
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
            ">

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Tablero Informe Financiero
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">

                  <iframe
                    title="Informe Financiero"
                    width="100%"
                    height="400"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZDdmZjNlYmUtODQyZC00M2NiLTgyYjgtNTBjOTc5YWU2YTM5IiwidCI6ImYwNWNiMDJkLTM0OTctNGY2Mi1hNmJjLTI4M2EwMmQyZjZjZCIsImMiOjR9"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>

                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Dashboard financiero desarrollado en Power BI para
                  visualizar ingresos, ventas, rentabilidad y desempeño
                  comercial mediante gráficos interactivos y KPIs.
                </p>

              </div>

            </div>

            {/* Proyecto */}
            <div className="
              bg-card
              border
              border-border
              rounded-3xl
              overflow-hidden
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
            ">

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-5">
                  Tablero Recursos Humanos
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">

                  <iframe
                    title="Recursos Humanos"
                    width="100%"
                    height="400"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMTAyZWMzZWEtMjBlYi00MGViLThmYWYtZDc0MWEyOTFlNTI0IiwidCI6ImYwNWNiMDJkLTM0OTctNGY2Mi1hNmJjLTI4M2EwMmQyZjZjZCIsImMiOjR9"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>

                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Visualización interactiva de indicadores de recursos
                  humanos, rotación de personal, desempeño y análisis
                  organizacional.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DESARROLLO WEB */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-14">
            💻 Desarrollo Web y Sistemas
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Proyecto */}
           <div className="
  bg-card
  border
  border-border
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:shadow-2xl
  transition-all
  duration-300
">

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-5">
      Sistema de Gestión de Activos
    </h3>

    <div className="rounded-2xl overflow-hidden border border-border mb-6">

      <img
        src="/proyectos/activos.png"
        alt="Sistema de Inventario"
        className="w-full h-[400px] object-cover"
      />

    </div>

    <p className="text-muted-foreground leading-relaxed mb-5">
      Sistema web desarrollado en PHP, MySQL, HTML, CSS y JavaScript
      para la gestión de activos fijos, control de usuarios,
      reportes PDF y Excel.
    </p>

    <div className="flex flex-wrap gap-3">

      <a
        href="https://github.com/sistemas-alex/activos"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-xl
          bg-cyan-500
          text-white
          text-sm
          font-medium
          hover:bg-cyan-400
          transition-all
        "
      >
        Ver Código GitHub
      </a>

    </div>

  </div>

</div>
            {/* Proyecto */}

            <div className="
  bg-card
  border
  border-border
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:shadow-2xl
  transition-all
  duration-300
">

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-5">
      Plataforma Sistemas Majovit
    </h3>

    <div className="rounded-2xl overflow-hidden border border-border mb-6">

      <iframe
        title="Sistemas Majovit"
        width="100%"
        height="400"
        src="https://sistemas-majovit.lovable.app"
        frameBorder="0"
      ></iframe>

    </div>

    <p className="text-muted-foreground leading-relaxed">
      Plataforma desarrollada con tecnologías modernas utilizando
      React, TailwindCSS y herramientas de IA para diseño y
      desarrollo web interactivo.
    </p>

  </div>

</div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Projects;