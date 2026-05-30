import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { ProductCatalogue } from "./pages/ProductCatalogue";
import { ProductDetail } from "./pages/ProductDetail";
import { GrowerRegistration } from "./pages/GrowerRegistration";
import { NewsResources } from "./pages/NewsResources";
import { Campaign } from "./pages/Campaign";
import { Contact } from "./pages/Contact";
import { Reviews } from "./pages/Reviews";
import { Partnerships } from "./pages/Partnerships";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/shop",
    Component: ProductCatalogue,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
  {
    path: "/register",
    Component: GrowerRegistration,
  },
  {
    path: "/news-resources",
    Component: NewsResources,
  },
  {
    path: "/campaign",
    Component: Campaign,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/reviews",
    Component: Reviews,
  },
  {
    path: "/partnerships",
    Component: Partnerships,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);