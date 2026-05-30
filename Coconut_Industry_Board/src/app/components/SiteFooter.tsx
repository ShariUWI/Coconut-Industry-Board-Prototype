import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router";
import { EMAIL, LOGO_URL, MAPS, PHONE } from "../lib/constants";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News & Resources", href: "/news-resources" },
  { label: "Shop", href: "/shop" },
  { label: "Registration", href: "/register" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Register as a Grower", href: "/register" },
  { label: "Browse Products", href: "/shop" },
  { label: "Contact CIB", href: "/contact" },
  { label: "Industry News", href: "/news-resources" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#12351D] text-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-[1.25fr_1fr_1fr_1.15fr]">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src={LOGO_URL}
              alt="Coconut Industry Board logo"
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            The Coconut Industry Board supports Jamaica's coconut industry through grower services,
            research, quality planting materials, and industry development.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#F4C430]">
            Pages
          </h2>
          <nav className="flex flex-col gap-2">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-white/78 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#F4C430]">
            Information
          </h2>
          <nav className="flex flex-col gap-2">
            {supportLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-white/78 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#F4C430]">
            Contact
          </h2>
          <div className="space-y-3 text-sm text-white/78">
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#F4C430]" />
              <span>Mon - Sat (8am - 4pm)</span>
            </p>
            <a href={PHONE} className="flex items-start gap-3 transition-colors hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#F4C430]" />
              <span>1 (876) 926-1771</span>
            </a>
            <a href={EMAIL} className="flex items-start gap-3 transition-colors hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F4C430]" />
              <span>cocindbrd@cibja.com</span>
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4C430]" />
              <span>18 Waterloo Road, Kingston</span>
            </a>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-white">Follow us on</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/coconutindustryboardja/"
                target="_blank"
                rel="noreferrer"
                aria-label="Coconut Industry Board on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F4C430] hover:text-[#12351D]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/tcibja"
                target="_blank"
                rel="noreferrer"
                aria-label="Coconut Industry Board on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F4C430] hover:text-[#12351D]"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/CIBJamaica/"
                target="_blank"
                rel="noreferrer"
                aria-label="Coconut Industry Board on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F4C430] hover:text-[#12351D]"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12 bg-[#0D2816]">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-4 text-xs text-white/65 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Coconut Industry Board of Jamaica. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
            <Link to="/news-resources" className="hover:text-white">News & Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
