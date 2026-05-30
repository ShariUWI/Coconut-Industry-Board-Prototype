export const WA_NUM = "18769261771";
export const wa = (msg: string) =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;
export const PHONE = "tel:+18769261771";
export const EMAIL = "mailto:cocindbrd@cibja.com";
export const MAPS =
  "https://maps.google.com/?q=18+Waterloo+Road+Kingston+Jamaica";
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.1476937393004!2d-76.79400172536363!3d18.01913498297982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3e4d586bee53%3A0x53ec223aa9890535!2sCoconut%20Industry%20Board!5e1!3m2!1sen!2sjm!4v1733188753235!5m2!1sen!2sjm";

export const LOGO_URL = "https://coconutindustryboard.org/cib-anni.png";
export const BANNER_URL = "https://coconutindustryboard.org/_next/image?url=%2Fanniversary_banner.png&w=1920&q=75";

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/news-resources", label: "News & Resources" },
  { path: "/shop", label: "The Coconut Shop" },
  { path: "/registration", label: "Registration" },
  { path: "/contact", label: "Contact" },
];
