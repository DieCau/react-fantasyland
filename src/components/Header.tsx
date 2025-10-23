import { Search, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fantasyland
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">ADVENTURES</p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#parques" className="text-sm font-semibold hover:text-primary transition-colors">
              Los 2 Parques
            </a>
            <a href="#alojamientos" className="text-sm font-semibold hover:text-primary transition-colors">
              Alojamientos
            </a>
            <a href="#restaurantes" className="text-sm font-semibold hover:text-primary transition-colors">
              Restaurantes
            </a>
            <a href="#reserva" className="text-sm font-semibold hover:text-primary transition-colors">
              Reserva tu viaje
            </a>
            <a href="#antes" className="text-sm font-semibold hover:text-primary transition-colors">
              Antes de venir
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
              <Clock className="h-5 w-5 text-primary" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
              <User className="h-5 w-5" />
            </button>
            <Button size="sm" className="rounded-full font-semibold">
              Entradas
            </Button>
            <Button size="sm" className="rounded-full font-semibold hidden lg:inline-flex">
              Hotel + Entradas
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
