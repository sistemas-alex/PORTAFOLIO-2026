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
            {/* Proyecto Power BI 1 */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
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
                  Dashboard financiero desarrollado en Power BI para visualizar
                  ingresos, ventas, rentabilidad y desempeño comercial mediante
                  gráficos interactivos y KPIs.
                </p>
              </div>
            </div>

            {/* Proyecto Power BI 2 */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
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
                  Visualización interactiva de indicadores de recursos humanos,
                  rotación de personal, desempeño y análisis organizacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESARROLLO WEB Y AUTOMATIZACIÓN */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-14">
            💻 Desarrollo Web, Sistemas y Automatización
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Proyecto Destacado: Sistema de Conciliación Bancaria */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Sistema de Conciliación Bancaria Automática
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Sistema de Conciliación Bancaria Automática"
                    width="100%"
                    height="400"
                    src="https://sistemas-alex.github.io/Sistema-de-Conciliaci-n-Bancaria-Automatica/"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Aplicación web contable que cruza extractos bancarios y libros
                  auxiliares (.xlsx/.csv) en el navegador mediante 5 reglas de
                  auditoría, cálculo exacto en centavos, gráficas Chart.js y
                  exportación a Excel y PDF.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-alex.github.io/Sistema-de-Conciliaci-n-Bancaria-Automatica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                  <a
                    href="https://github.com/sistemas-alex/Sistema-de-Conciliaci-n-Bancaria-Automatica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 1: InventarioPro CRUD */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  InventarioPro — Sistema CRUD de Stock
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Sistema CRUD de Gestión de Inventario"
                    width="100%"
                    height="400"
                    src="https://sistemas-alex.github.io/gestion-inventario/"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Aplicación web en JavaScript ES6+, HTML5 y CSS3 para control
                  de inventario en tiempo real con validación de SKUs únicos,
                  cálculo automático de KPIs, persistencia en LocalStorage y
                  exportación a Excel (CSV).
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-alex.github.io/gestion-inventario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                  <a
                    href="https://github.com/sistemas-alex/gestion-inventario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Tablero Kanban & API */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  GestiónDoc — Tablero Kanban de Trámites
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Tablero Kanban de Control de Trámites"
                    width="100%"
                    height="400"
                    src="https://sistemas-alex.github.io/control-tramites/"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Panel operativo de trazabilidad documental con flujo de 4
                  estados arrastrable (HTML5 Drag & Drop), consumo asíncrono de
                  API REST, historial de auditoría por radicado y modo oscuro.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-alex.github.io/control-tramites/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                  <a
                    href="https://github.com/sistemas-alex/control-tramites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Simulador Financiero */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  FinanCalc Pro — Simulador de Amortización
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Simulador Financiero y Amortización"
                    width="100%"
                    height="400"
                    src="https://sistemas-alex.github.io/simulador-financiero/"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Calculadora financiera desarrollada con JavaScript y Chart.js
                  bajo Sistema Francés, conversión de tasas (EA a MV),
                  cronograma dinámico mes a mes, gráficos interactivos y
                  exportación CSV.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-alex.github.io/simulador-financiero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                  <a
                    href="https://github.com/sistemas-alex/simulador-financiero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 4: Landing Page Servicios Digitales */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Landing Page — Soluciones Digitales
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Landing Page Servicios Digitales"
                    width="100%"
                    height="400"
                    src="https://sistemas-alex.github.io/servicios-digitales/"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Sitio web corporativo responsivo (Mobile-First) con filtrado
                  interactivo de servicios, validación de formularios en tiempo
                  real e integración directa con la API de WhatsApp.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-alex.github.io/servicios-digitales/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                  <a
                    href="https://github.com/sistemas-alex/servicios-digitales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 5: Automatizador ETL en Python */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Automatizador y Validador ETL en Python
                </h3>

                <div className="rounded-2xl border border-border bg-zinc-950 text-emerald-400 font-mono text-xs sm:text-sm p-6 mb-6 h-[400px] overflow-y-auto flex flex-col justify-between">
                  <div>
                    <p className="text-zinc-400 mb-3">
                      $ python procesador_datos.py
                    </p>
                    <p className="mb-2">
                      [INFO] Iniciando auditoría ETL sobre datos_crudos.csv...
                    </p>
                    <p className="mb-2">
                      [OK] Normalización de nombres, cargos y correos
                      completada.
                    </p>
                    <p className="mb-2">
                      [OK] Validación Regex de documentos y salarios aplicada.
                    </p>
                    <p className="text-amber-400 mb-2">
                      [WARN] 2 registros duplicados o inconsistentes aislados.
                    </p>
                    <p className="text-cyan-400 mb-4">
                      [EXPORT] Generados: registros_limpios.csv y
                      registros_rechazados.csv
                    </p>
                  </div>
                  <div className="border-t border-zinc-800 pt-3 text-zinc-400 text-xs">
                    Stack: Python 3 • Módulo CSV • Expresiones Regulares (re) •
                    Auditoría de Datos para Excel y Power BI
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Script ETL desarrollado en Python puro para limpieza,
                  deduplicación y validación de bases de datos administrativas
                  en CSV, generando reportes auditados listos para Power BI.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/sistemas-alex/reportes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto Existente: Sistema de Gestión de Activos */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Ver Código GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto Existente: Plataforma Sistemas Majovit */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Plataforma Sistemas Majovit
                </h3>

                <div className="rounded-2xl overflow-hidden border border-border mb-6">
                  <iframe
                    title="Sistemas Majovit"
                    width="100%"
                    height="400"
                    src="https://sistemas-majovit.vercel.app"
                    frameBorder="0"
                  ></iframe>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Plataforma desarrollada con tecnologías modernas utilizando
                  React, TailwindCSS y herramientas de IA para diseño y
                  desarrollo web interactivo.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sistemas-majovit.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    Abrir Aplicación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


