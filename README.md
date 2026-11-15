# Portafolio Profesional — Alexander Olmedo

Aplicación web de portafolio profesional desarrollada para presentar mi perfil técnico, formación académica, certificaciones, tableros de análisis de datos en Power BI y proyectos de desarrollo web y automatización.

- **Sitio en vivo:** [alexanderolmedo.vercel.app](https://alexanderolmedo.vercel.app/)
- **Repositorio:** [github.com/sistemas-alex/PORTAFOLIO-2026](https://github.com/sistemas-alex/PORTAFOLIO-2026)

---

## Características Principales

- **Perfil y Trayectoria:** Presentación profesional, formación en Ingeniería de Sistemas y Gestión Contable/Financiera, experiencia laboral y certificaciones técnicas.
- **Analítica de Datos (Power BI):** Integración interactiva de dashboards ejecutivos (Informe Financiero y Recursos Humanos) mediante iframes embebidos.
- **Vitrina de Desarrollo Web y Automatización:** Catálogo con vistas previas en vivo, descripción técnica, stack utilizado y enlaces directos al código fuente de proyectos propios:
  - **InventarioPro:** Sistema CRUD de gestión y valorización de stock con exportación CSV.
  - **GestiónDoc:** Tablero Kanban de trazabilidad documental con Drag & Drop y consumo de API REST.
  - **FinanCalc Pro:** Simulador financiero bajo Sistema Francés con conversión de tasas y gráficos Chart.js.
  - **Automatizador ETL en Python:** Script de limpieza, validación con Regex y auditoría de bases de datos CSV.
  - **Landing Page Corporativa:** Sitio responsivo *Mobile-First* con filtrado de servicios e integración con WhatsApp.
  - **Sistema de Gestión de Activos:** Plataforma web en PHP y MySQL para control de activos fijos y reportes.
- **Contacto Directo:** Formulario y canales directos de comunicación profesional.

---

## Stack Tecnológico

- **Frontend:** React 18, TypeScript, Vite
- **Estilos y UI:** Tailwind CSS, shadcn/ui, Lucide Icons
- **Enrutamiento:** React Router DOM
- **Despliegue Continuo (CI/CD):** Vercel conectado a GitHub

---

## Estructura del Proyecto

```text
├── public/                 # Recursos estáticos e imágenes de proyectos
├── src/
│   ├── components/         # Secciones modulares (Header, Hero, Skills, Contact, Footer, etc.)
│   ├── pages/              # Vistas principales (Index, Projects, NotFound)
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Utilidades y configuración de clases
│   ├── App.tsx             # Configuración de rutas
│   └── index.css           # Variables de diseño y estilos globales Tailwind
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts

