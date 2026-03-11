import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type StockStatus = "available" | "low" | "out";

interface FeedItem {
  id: string;
  name: string;
  status: StockStatus;
  image: string;
}

const feedStock: FeedItem[] = [
  {
    id: "roaches",
    name: "Cucarachas",
    status: "available",
    image: "https://images.unsplash.com/photo-1715521565306-839484f887a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FjaGVzJTIwaW5zZWN0cyUyMGZlZWRlcnxlbnwxfHx8fDE3NzIwMzI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "larvae",
    name: "Larvas",
    status: "available",
    image: "https://images.unsplash.com/photo-1767166998528-c1ad5513facb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsd29ybSUyMGxhcnZhZSUyMGluc2VjdHxlbnwxfHx8fDE3NzIwMzI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "crickets",
    name: "Grillos",
    status: "low",
    image: "https://images.unsplash.com/photo-1667311315699-219bcc2a220b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwaW5zZWN0JTIwbWFjcm98ZW58MXx8fHwxNzcxOTI2NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "mice",
    name: "Ratones",
    status: "out",
    image: "https://images.unsplash.com/photo-1614090332617-e7dd5bd107e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1vdXNlJTIwcGV0fGVufDF8fHx8MTc3MjAzMjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function StatusBadge({ status }: { status: StockStatus }) {
  const styles = {
    available: "bg-black text-white border-black",
    low: "bg-white text-black border-black",
    out: "bg-white text-zinc-400 border-zinc-300",
  };

  const labels = {
    available: "Disponible",
    low: "Pocas unidades",
    out: "Agotado",
  };

  return (
    <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export function LiveFeedStock() {
  // Image styling based on stock status
  const getImageStyle = (status: StockStatus): string => {
    switch (status) {
      case "available":
        return ""; // Full color, sharp
      case "low":
        return "saturate-50"; // Slightly desaturated
      case "out":
        return "grayscale opacity-60"; // Black and white, reduced opacity
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Black Background */}
      <div className="bg-black text-white px-6 py-6">
        <h1 className="text-2xl tracking-wide">Alimento Vivo</h1>
        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Disponibilidad Actual</p>
      </div>

      {/* Feed Stock Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        {feedStock.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl border-2 border-zinc-200 hover:border-black transition-colors"
          >
            {/* Image - Visual stock indication */}
            <div className="aspect-square overflow-hidden bg-zinc-100">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className={`w-full h-full object-cover transition-all ${getImageStyle(item.status)}`}
              />
            </div>

            {/* Content */}
            <div className="p-4 bg-white">
              <h3 className="text-base tracking-wide mb-3 text-black">{item.name}</h3>
              <StatusBadge status={item.status} />
            </div>
          </div>
        ))}

        {/* Coming Soon Card */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-200">
          <div className="aspect-square flex items-center justify-center bg-zinc-50">
            <span className="text-zinc-300 text-5xl font-light">+</span>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-base tracking-wide text-zinc-400 mb-3">Más Especies</h3>
            <span className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider border border-zinc-200 text-zinc-400">
              Próximamente
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
