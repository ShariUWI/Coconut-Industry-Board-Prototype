import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { LOGO_URL } from "../lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "News & Resources", href: "/news-resources" },
    { label: "Shop", href: "/shop" },
    { label: "Registration", href: "/register" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-[#F5F5F5] border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex min-h-16 items-center justify-between pl-0 pr-8 sm:pl-1 sm:pr-10">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={LOGO_URL}
            alt="Coconut Industry Board logo"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center justify-end gap-2 lg:gap-4 md:mr-8 lg:mr-14">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#2D2416] transition-colors hover:bg-[#E8F5EC] hover:text-[#2A7C3F]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#2A7C3F]" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-[#2A7C3F]">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base py-2 px-3 rounded-lg hover:bg-[#E8F5EC] text-[#2D2416] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
