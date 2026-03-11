import { Link } from "react-router";
import { Bug, Users, MessageCircle, ChevronRight } from "lucide-react";

interface CommunityPost {
  id: string;
  userName: string;
  userAvatar: string;
  title: string;
  preview: string;
  commentCount: number;
}

const communityPosts: CommunityPost[] = [
  {
    id: "1",
    userName: "Carlos M.",
    userAvatar: "CM",
    title: "Configuración de terrario para ajolotes",
    preview: "Comparto mi experiencia después de 2 años manteniendo ajolotes. La temperatura del agua es crítica...",
    commentCount: 12,
  },
  {
    id: "2",
    userName: "Ana Torres",
    userAvatar: "AT",
    title: "Mejores prácticas para alimentar tarántulas",
    preview: "He notado que mis tarántulas responden mejor cuando los grillos están...",
    commentCount: 8,
  },
  {
    id: "3",
    userName: "Miguel S.",
    userAvatar: "MS",
    title: "Cría de cucarachas: resultados del primer mes",
    preview: "Después de implementar las recomendaciones de la comunidad, la colonia ha crecido...",
    commentCount: 15,
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black Background */}
      <div className="bg-black text-white pt-12 pb-10 px-6">
        {/* Logo Placeholder */}
        <div className="mb-6 flex justify-center">
          <div className="w-48 h-20 border-2 border-white/30 rounded-xl flex items-center justify-center">
            <span className="text-xl font-light tracking-[0.3em] uppercase">
              Black Bugs
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-xs tracking-[0.2em] uppercase text-zinc-400 font-light">
          Alimento Vivo Premium y Especies Exóticas
        </p>
      </div>

      {/* Navigation Cards - White Background */}
      <div className="px-6 py-6 space-y-3">
        <Link to="/live-feed-stock">
          <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-black p-6 transition-all hover:bg-black hover:text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl border-2 border-black group-hover:border-white transition-colors">
                <Bug className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl tracking-wide mb-1">Alimento Vivo</h2>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 font-light tracking-wide">
                  Ver disponibilidad actual
                </p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
          </div>
        </Link>

        <Link to="/exotic-animals">
          <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-black p-6 transition-all hover:bg-black hover:text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl border-2 border-black group-hover:border-white transition-colors">
                <Users className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl tracking-wide mb-1">Catálogo Exóticos</h2>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 font-light tracking-wide">
                  Explorar especies disponibles
                </p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
          </div>
        </Link>
      </div>

      {/* Community Section */}
      <div className="px-6 py-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg tracking-wide text-black">Comunidad BLACK BUGS</h3>
            <p className="text-xs text-zinc-500 mt-1">Conversaciones entre criadores</p>
          </div>
        </div>

        {/* Community Posts */}
        <div className="space-y-3 mb-4">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-zinc-200 rounded-xl p-4 hover:border-zinc-400 transition-colors"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                  {post.userAvatar}
                </div>
                <span className="text-sm text-zinc-900 font-medium">{post.userName}</span>
              </div>

              {/* Post Content */}
              <h4 className="text-sm font-medium text-black mb-2 tracking-wide">
                {post.title}
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed mb-3 line-clamp-2">
                {post.preview}
              </p>

              {/* Comment Count */}
              <div className="flex items-center gap-1.5 text-zinc-500">
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs">{post.commentCount} comentarios</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Community Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-zinc-800 transition-colors">
          Ver comunidad
        </button>
      </div>

      {/* Footer Spacer */}
      <div className="h-8" />
    </div>
  );
}
