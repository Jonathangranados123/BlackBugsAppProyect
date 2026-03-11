import { Home, Bug, Users, Mail } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();
  
  const tabs = [
    { path: "/", icon: Home, label: "Inicio" },
    { path: "/live-feed-stock", icon: Bug, label: "Alimento" },
    { path: "/exotic-animals", icon: Users, label: "Exóticos" },
    { path: "/contact", icon: Mail, label: "Contacto" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center shadow-lg">
      <div className="w-full max-w-md flex justify-around items-center py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path || 
            (tab.path !== "/" && location.pathname.startsWith(tab.path));
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center gap-1 px-4 py-1 transition-colors ${
                isActive ? "text-black" : "text-zinc-400"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] uppercase tracking-wider">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}