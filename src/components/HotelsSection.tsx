import { Star, MapPin, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";

const HotelsSection = () => {
  const hotels = [
    {
      name: "Wonderland Hotel",
      stars: 5,
      image: hotel1,
      badge: "En la entrada del Parque Wonderland",
      description: "Celebra la magia de las historias de la realeza... ¡y escribe la tuya propia!",
      features: ["10 min a pie"],
      buttonText: "Descubrir el Hotel"
    },
    {
      name: "Adventure Hotel New York - The Art of Marvel",
      stars: 4,
      image: hotel2,
      description: "Siéntete un Superhéroe en este Hotel cosmopolita ambientado en Nueva York.",
      features: ["10 min a pie", "Servicio de autobús gratuito"],
      buttonText: "Conocer el Hotel"
    },
    {
      name: "Adventure Newport Bay Club",
      stars: 4,
      image: hotel3,
      description: "Despierta en un espléndido ambiente marinero que hace alusión a las aventuras marítimas de Mickey.",
      features: ["15 min a pie", "Servicio de autobús gratuito"],
      buttonText: "Conocer el Hotel"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Descubre la magia de los Hoteles Wonderland!</h2>
          <p className="text-lg text-muted-foreground">
            Cada Hotel te sumergirá en una temática emblemática con una historia propia para contar. Te esperan mundos maravillosos para todas las edades, presupuestos y sueños.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <div className="flex">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                {hotel.badge && (
                  <div className="inline-flex items-center gap-1 border border-border rounded-full px-3 py-1 text-xs mb-3">
                    <MapPin className="h-3 w-3" />
                    {hotel.badge}
                  </div>
                )}

                <p className="text-sm text-muted-foreground mb-3">{hotel.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.features.map((feature, i) => (
                    <div key={i} className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                      {feature.includes("autobús") ? <Bus className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full rounded-full font-semibold">
                  {hotel.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8 py-6 text-base font-semibold">
            Ver todos los hoteles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
