import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-md min-h-screen flex flex-col relative">
        <main className="flex-1 pb-24 overflow-auto">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}