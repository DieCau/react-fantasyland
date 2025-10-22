import { Calendar, Users, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              ¡Vive la magia de <span className="italic text-yellow-300">La Navidad Encantada</span>!
            </h2>
          </div>

          {/* Booking Card */}
          <Card className="bg-white p-6 rounded-2xl shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Hotel + Entradas</p>
                  <p className="text-sm text-muted-foreground">Precio de</p>
                  <p className="text-sm text-muted-foreground">referencia</p>
                  <p className="text-3xl font-bold text-primary">128€</p>
                  <p className="text-sm text-muted-foreground">pers./ noche</p>
                </div>
                <Button className="rounded-full px-8 py-6 text-base font-semibold">
                  Reserva ahora
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Estancia 4 días y 3 noches en el Hotel Cheyenne con entradas incluidas para 2 adultos y 2 niños. Para llegadas en ciertas fechas del 09 al 17 de diciembre de 2025. Precio referencia garantizado hasta el 26 de octubre de 2025. Sujeto a disponibilidad.
              </p>
            </div>
          </Card>
        </div>

        {/* Booking Form */}
        <Card className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto mt-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Tabs */}
            <div className="flex gap-2 mb-4 w-full">
              <Button variant="default" size="sm" className="rounded-full gap-2">
                <Hotel className="h-4 w-4" />
                Hotel + Entradas
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                Entradas
              </Button>
            </div>

            {/* Form Fields */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-semibold block mb-2">Elige Fechas</label>
              <div className="flex gap-2">
                <div className="flex-1 border border-input rounded-lg p-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Fecha de llegada</span>
                </div>
                <div className="flex-1 border border-input rounded-lg p-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Fecha de salida</span>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-semibold block mb-2">Hoteles y Resorts</label>
              <div className="border border-input rounded-lg p-3">
                <span className="text-sm">Todos los Hoteles</span>
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-semibold block mb-2">Habitaciones y Huéspedes</label>
              <div className="border border-input rounded-lg p-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">1 Habitación / 2 Huéspede</span>
              </div>
            </div>

            <Button className="rounded-full px-8 h-12 font-semibold mt-auto">
              Reservar
            </Button>
          </div>

          <p className="text-center text-sm text-primary mt-4">
            ¿Buscas el momento ideal para venir? <span className="underline cursor-pointer">¡Compara diferentes períodos!</span>
          </p>
        </Card>
      </div>

      {/* Curva inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,186.7C1120,192,1280,192,1360,192L1440,192V320H0Z"
        />
      </svg>
    </section>
  );
};

export default Hero;