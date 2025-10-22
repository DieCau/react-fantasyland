import parkMain from "@/assets/park-main.jpg";
import parkStudios from "@/assets/park-studios.jpg";
import parkVillage from "@/assets/park-village.jpg";

const ParksShowcase = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Park 1 */}
          <div className="relative h-96 group overflow-hidden">
            <img 
              src={parkStudios} 
              alt="Adventure Studios Park"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
              <h3 className="text-white text-2xl font-bold">#adventurestudiospark</h3>
            </div>
          </div>

          {/* Park 2 */}
          <div className="relative h-96 group overflow-hidden">
            <img 
              src={parkMain} 
              alt="Wonderland Park"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
              <h3 className="text-white text-2xl font-bold">#wonderlandpark</h3>
            </div>
          </div>

          {/* Park 3 */}
          <div className="relative h-96 group overflow-hidden">
            <img 
              src={parkVillage} 
              alt="Adventure Village"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
              <h3 className="text-white text-2xl font-bold">#adventurevillage</h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            Descubre nuestros dos Parques: <span className="text-primary font-semibold">el Parque Wonderland</span>, <span className="text-primary font-semibold">el Parque Adventure Studios</span> y las tiendas, bares, restaurantes y cines de <span className="text-primary font-semibold">Adventure Village</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParksShowcase;