import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export interface Animal {
  id: string;
  name: string;
  image: string;
  description: string;
  careLevel: "Principiante" | "Intermedio" | "Avanzado";
  availability: string;
}

export const animals: Animal[] = [
  {
    id: "poison-dart-frog",
    name: "Ranas Venenosas",
    image: "https://images.unsplash.com/photo-1755978595406-02221624b9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2lzb24lMjBkYXJ0JTIwZnJvZyUyMGV4b3RpY3xlbnwxfHx8fDE3NzIwMzI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Anfibios vibrantes conocidos por sus colores llamativos y comportamientos fascinantes. Estas pequeñas ranas requieren cuidados especializados incluyendo ambientes de alta humedad y fuentes de alimento vivo.",
    careLevel: "Avanzado",
    availability: "Disponibilidad limitada - Contactar para detalles",
  },
  {
    id: "axolotl",
    name: "Ajolotes",
    image: "https://images.unsplash.com/photo-1763755876890-a3acebd28ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheG9sb3RsJTIwYXF1YXRpYyUyMHBldHxlbnwxfHx8fDE3NzIwMzI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Salamandras acuáticas únicas que conservan sus características larvales durante toda su vida. Requieren agua fría y limpia, y son animales de exhibición fascinantes para cuidadores experimentados.",
    careLevel: "Intermedio",
    availability: "Actualmente disponible",
  },
  {
    id: "tarantula",
    name: "Tarántulas",
    image: "https://images.unsplash.com/photo-1626174004167-69c093c4180d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJhbnR1bGElMjBzcGlkZXIlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjAzMjk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Arácnidos grandes y dóciles que son excelentes animales de exhibición. Varias especies disponibles con diferentes temperamentos y requisitos de cuidado. Bajo mantenimiento y longevas.",
    careLevel: "Principiante",
    availability: "Múltiples especies disponibles",
  },
];

export function ExoticAnimals() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Black Background */}
      <div className="bg-black text-white px-6 py-6">
        <h1 className="text-2xl tracking-wide">Exóticos</h1>
        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Catálogo de Especies Premium</p>
      </div>

      {/* Grid Layout */}
      <div className="p-6 grid grid-cols-2 gap-4">
        {animals.map((animal) => (
          <Link
            key={animal.id}
            to={`/animal/${animal.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-200 hover:border-black transition-all">
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-zinc-100">
                <ImageWithFallback
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="text-sm tracking-wide mb-2 text-black">{animal.name}</h3>
                <div className="flex items-center text-[10px] text-zinc-500 uppercase tracking-wider">
                  <span>Ver detalles</span>
                  <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Coming Soon Card */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-200">
          <div className="aspect-square flex items-center justify-center bg-zinc-50">
            <span className="text-zinc-300 text-5xl font-light">+</span>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-sm tracking-wide text-zinc-400 mb-2">Más Especies</h3>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
