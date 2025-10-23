import { Smartphone, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Smartphone,
      title: "¡Accede a la fila rápida con Premier Access!",
      description: "¡Accede a la fila rápida y adelanta la fila habitual de algunas de nuestras atracciones más populares!",
      buttonText: "Más información",
      bgColor: "bg-green-100"
    },
    {
      icon: Users,
      title: "Comidas con Personajes",
      description: "¡Disfruta de una comida única y divertida con los entrañables Personajes! Reserva ahora y añade a tu visita un momento inolvidable y lleno de magia.",
      buttonText: "¡No te lo pierdas!",
      bgColor: "bg-orange-100"
    },
    {
      icon: Sparkles,
      title: "Deslumbrantes espectáculos y cabalgatas",
      description: "No te pierdas los espectáculos inmersivos y los impresionantes desfiles... ¡una parte esencial de cualquier visita a Fantasyland Adventures!",
      buttonText: "Saber más",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La experiencia de Fantasyland Adventures</h2>
          <p className="text-lg text-muted-foreground">
            ¡Disfruta de increíbles espectáculos, cabalgatas, encuentros con Personajes y un sinfín de actividades para todas las edades y todos los gustos!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${exp.bgColor} h-48 flex items-center justify-center rounded-t-3xl`}>
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                  <exp.icon className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                <Button variant="outline" className="rounded-full font-semibold">
                  {exp.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8 py-6 text-base font-semibold">
            Descubre la experiencia de Fantasyland Adventures
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;