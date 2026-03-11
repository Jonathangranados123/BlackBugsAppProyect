import { useParams, Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { animals } from "./ExoticAnimals";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AnimalDetail() {
  const { id } = useParams<{ id: string }>();
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">Especie no encontrada</p>
          <Link to="/exotic-animals" className="text-black underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const careLevelColors = {
    Principiante: "text-black border-black bg-white",
    Intermedio: "text-zinc-700 border-zinc-700 bg-white",
    Avanzado: "text-zinc-500 border-zinc-400 bg-white",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="sticky top-0 bg-white border-b border-zinc-200 z-10">
        <div className="px-6 py-4 flex items-center gap-3">
          <Link to="/exotic-animals" className="p-2 -ml-2 hover:bg-zinc-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-black" />
          </Link>
          <h1 className="text-lg tracking-wide text-black">Detalles de la Especie</h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-square bg-zinc-100">
        <ImageWithFallback
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Name */}
        <div>
          <h2 className="text-3xl tracking-wide mb-2 text-black">{animal.name}</h2>
          <div className="h-px bg-zinc-200" />
        </div>

        {/* Care Level */}
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Nivel de Cuidado</p>
          <div className={`inline-block px-4 py-2 rounded-full text-sm border-2 ${careLevelColors[animal.careLevel]}`}>
            {animal.careLevel}
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Descripción</p>
          <p className="text-sm leading-relaxed text-zinc-700 font-light">{animal.description}</p>
        </div>

        {/* Availability */}
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Disponibilidad</p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
            <p className="text-sm text-zinc-800">{animal.availability}</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-4">
          <Link to="/contact">
            <button className="w-full bg-black text-white py-4 rounded-xl uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors">
              Contactar para consultas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
