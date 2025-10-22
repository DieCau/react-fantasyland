import { Calendar, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PlanningSection = () => {
  const planningCards = [
    {
      icon: Calendar,
      bgColor: "bg-blue-600",
      title: "Encuentra la mejor fecha tu visita",
      description: "¡Compara diferentes fechas y encuentra el momento perfecto para visitar el corazón de la magia con nuestro calendario estimado de precios !",
      buttonText: "Ver más"
    },
    {
      icon: MapPin,
      bgColor: "bg-cyan-600",
      title: "A poco minutos de París",
      description: "Si viajas a París este otoño, añade una visita a los Parques Wonderland y dale un toque de magia a tu escapada.",
      buttonText: "Más información"
    },
    {
      icon: CreditCard,
      bgColor: "bg-blue-500",
      title: "Descubre el pago a plazos",
      description: "Paga tu paquete de Hotel + Entradas en hasta 6 plazos: paga un depósito del 15 % al hacer la reserva, y el resto en hasta 5 cuotas. ¡Flexible, seguro y sin ningún cargo!",
      buttonText: "Saber más"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planifica tu viaje a Wonderland Adventures</h2>
          <p className="text-lg text-muted-foreground">Descubre cuál es el mejor momento para tu visita y cómo aprovechar al máximo tus vacaciones.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {planningCards.map((card, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${card.bgColor} h-48 flex items-center justify-center rounded-t-3xl`}>
                <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-sm">
                  <card.icon className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{card.description}</p>
                <Button variant="outline" className="rounded-full font-semibold">
                  {card.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;