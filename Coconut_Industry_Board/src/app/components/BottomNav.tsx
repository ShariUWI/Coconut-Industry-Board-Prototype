import { Home, ShoppingBag, MessageCircle, UserPlus, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: ShoppingBag, label: "Shop", href: "/shop" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/18769261771", external: true },
    { icon: UserPlus, label: "Register", href: "/register" },
    { icon: MapPin, label: "Directions", href: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 pb-safe">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[60px]"
              >
                <Icon className="h-5 w-5 text-[#2A7C3F]" />
                <span className="text-xs text-[#2A7C3F]">{item.label}</span>
              </a>
            );
          }
          
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[60px] ${
                isActive ? "bg-[#E8F5EC]" : ""
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-[#2A7C3F]" : "text-[#8B6F47]"}`} />
              <span className={`text-xs ${isActive ? "text-[#2A7C3F] font-medium" : "text-[#8B6F47]"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
