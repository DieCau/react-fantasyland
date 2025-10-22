import { Calendar, CreditCard, Shield, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Calendar,
      title: "Reservas flexibles",
      description: "¿Has cambiado de opinión? Cambia o cancela tu reserva sin cargos.",
      bgColor: "bg-pink-500",
      iconBg: "bg-pink-100"
    },
    {
      icon: CreditCard,
      title: "Pago a plazos",
      description: "Paga un depósito al hacer la reserva, y el resto en hasta 5 cuotas.",
      bgColor: "bg-teal-500",
      iconBg: "bg-teal-100"
    },
    {
      icon: Shield,
      title: "Mejor Precio Garantizado",
      description: "Si encuentras un precio más bajo para un paquete Hotel + Entradas, ¡te reembolsaremos la diferencia!",
      bgColor: "bg-blue-500",
      iconBg: "bg-blue-100"
    },
    {
      icon: Info,
      title: "Sin gastos de reserva",
      description: "El precio que ves es el precio que pagarás.",
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-100"
    },
    {
      icon: Check,
      title: "Expertos Adventure a tu lado",
      description: "Planifica tu inolvidable visita con la ayuda de nuestros Expertos.",
      bgColor: "bg-pink-600",
      iconBg: "bg-pink-100"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué comprar tu paquete Hotel + Entradas directamente con Wonderland Adventures?
          </h2>
          <p className="text-lg text-muted-foreground">
            ¡Reserva con tranquilidad al comprar tu paquete a través de WonderlandAdventures.com o con nuestros expertos!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${feature.bgColor} p-4 rounded-2xl inline-block mb-4`}>
                <div className={`${feature.iconBg} p-4 rounded-xl inline-block`}>
                  <feature.icon className="h-12 w-12 text-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-3 font-semibold">
            Descubre nuestras condiciones de reserva
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;