import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ThemesSection = () => {
  const themes = [
    {
      title: "Las historias Adventure",
      description: "Disfruta de los espectáculos, los Encuentros con Personajes y las atracciones inspiradas en El Rey Leon, Lilo y Stitch, ¡y mucho más!",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      title: "Princesas Adventure",
      description: "¡Disfruta de momentos únicos de cuento de hadas con Encuentros mágicos, espectáculos, desfiles y más!",
      gradient: "from-pink-100 to-pink-50"
    },
    {
      title: "Mickey y sus Amigos",
      description: "Descubre donde encontrar Espectáculos, Encuentros con Personajes, souvenirs ¡y mucho más!",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      title: "Frozen",
      description: "Sumérgete en la magia de Frozen con Anna, Elsa, Olaf y sus amigos de Arendelle.",
      gradient: "from-cyan-100 to-cyan-50"
    },
    {
      title: "Marvel",
      description: "Te esperan épicas aventuras... ¡Prepárate para comer, dormir y divertirte al más puro estilo MARVEL!",
      gradient: "from-red-100 to-red-50"
    },
    {
      title: "Star Wars",
      description: "Jedi, Padawans, droides, Sith, contrabandistas... ¡están todos invitados a disfrutar con nosotros de Star Wars en el Parque Wonderland!",
      gradient: "from-gray-800 to-gray-700 text-white"
    },
    {
      title: "Pixar",
      description: "¡Descubre experiencias inspiradas en Toy Story, Ratatouille, Buscando a Nemo, Cars y ¡mucho más!",
      gradient: "from-yellow-100 to-yellow-50"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planifica tu día perfecto</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className={`p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer group bg-gradient-to-br ${theme.gradient}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{theme.title}</h3>
                  <p className="text-sm opacity-90">{theme.description}</p>
                </div>
                <ChevronRight className="h-6 w-6 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8 py-6 text-base font-semibold">
            Explora todos nuestros mundos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
