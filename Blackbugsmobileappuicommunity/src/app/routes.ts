import { createBrowserRouter } from "react-router";
import { Home } from "./screens/Home";
import { LiveFeedStock } from "./screens/LiveFeedStock";
import { ExoticAnimals } from "./screens/ExoticAnimals";
import { AnimalDetail } from "./screens/AnimalDetail";
import { Contact } from "./screens/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "live-feed-stock", Component: LiveFeedStock },
      { path: "exotic-animals", Component: ExoticAnimals },
      { path: "animal/:id", Component: AnimalDetail },
      { path: "contact", Component: Contact },
    ],
  },
]);
