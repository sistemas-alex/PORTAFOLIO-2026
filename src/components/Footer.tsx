import logo from "@/assets/logo-alexander-olmedo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Alexander Olmedo" 
              className="h-10 sm:h-12 w-auto brightness-0 invert"
            />
          </div>
          
          <p className="text-xs sm:text-sm text-primary-foreground/70 text-center">
            © {currentYear} Alexander Olmedo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
