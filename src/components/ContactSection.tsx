import { Phone, Mail, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-alt-bg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Contacto</h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Estoy disponible para ayudarte con tus proyectos de análisis de datos, gestión documental y optimización de procesos.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a 
            href="tel:+573105247136"
            className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border card-hover flex items-center gap-4 group"
          >
            <div className="icon-circle group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Teléfono</p>
              <p className="font-semibold text-foreground text-sm">+57 3105247136</p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:alexanderolmedo100@gmail.com"
            className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border card-hover flex items-center gap-4 group"
          >
            <div className="icon-circle group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Correo</p>
              <p className="font-semibold text-foreground text-xs sm:text-sm break-all">alexanderolmedo100@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/sistemas-alex"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border card-hover flex items-center gap-4 group"
          >
            <div className="icon-circle group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Github className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-1 font-medium">GitHub</p>
              <p className="font-semibold text-foreground text-sm">sistemas-alex</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alexanderolmedo/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border card-hover flex items-center gap-4 group"
          >
            <div className="icon-circle group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-1 font-medium">LinkedIn</p>
              <p className="font-semibold text-foreground text-sm">alexanderolmedo</p>
            </div>
          </a>
        </div>

        {/* CTA Principal */}
        <div className="text-center mt-12 pt-8 border-t border-border max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            ¿Listo para optimizar tus procesos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Conversemos sobre cómo puedo aportar valor a tu organización.
          </p>
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
    </section>
  );
};

export default ContactSection;
