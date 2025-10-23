import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Legal Info */}
          <div>
            <h3 className="font-bold mb-4">INFORMACIÓN LEGAL</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-primary">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-primary">Privacidad en R.U. y en la U.E.</a></li>
              <li><a href="#" className="hover:text-primary">Sobre privacidad en Wonderland</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">AYUDA</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Política de cookies</a></li>
              <li><a href="#" className="hover:text-primary">Gestionar tu configuración de cookies</a></li>
              <li><a href="#" className="hover:text-primary">Video Protection</a></li>
              <li><a href="#" className="hover:text-primary">Fotografías en los tornos del Parque</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">MÁS SOBRE WONDERLAND</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Reglamento Interno de los Parques</a></li>
              <li><a href="#" className="hover:text-primary">Reglamento interno de los Hoteles</a></li>
              <li><a href="#" className="hover:text-primary">Reglamento Interno de Adventure Village</a></li>
              <li><a href="#" className="hover:text-primary">Reglamento interno del centro de cuidado de animales</a></li>
            </ul>
          </div>

          {/* Related Sites */}
          <div>
            <h3 className="font-bold mb-4">SITIOS WEB RELACIONADOS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Reglamento Interno del Parking de Visitantes</a></li>
              <li><a href="#" className="hover:text-primary">Información legal y Condiciones del sitio web</a></li>
              <li><a href="#" className="hover:text-primary">Copyrights</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div>
              <p className="font-semibold mb-3">Sigue conectado</p>
              <div className="flex gap-3">
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                ¿Tienes alguna pregunta sobre los productos y ofertas disponibles?
              </p>
              <p className="text-sm text-muted-foreground">
                Pídele asesoramiento a uno de nuestros expertos con sede en el corazón de los Parques. Contacta con ellos llamando al{" "}
                <span className="font-bold">381 3156 288</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Precio de una llamada local desde una línea fija. El precio de las llamadas desde una línea móvil puede variar dependiendo de su compañía telefónica.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground mt-8 pt-8 border-t border-border">
          <p>En Fantasyland Adventures aplicamos medidas sanitarias y de seguridad mejoradas para proteger a nuestros Visitantes y Empleados.</p>
          <p className="mt-2">© Adventure • Pixar & TM Lucasfilm Ltd. MARVEL. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;