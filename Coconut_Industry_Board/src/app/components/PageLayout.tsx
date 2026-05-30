import { ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import { HelpAssistant } from "./HelpAssistant";
import { SiteFooter } from "./SiteFooter";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <main>{children}</main>
      <SiteFooter />
      <HelpAssistant />
    </div>
  );
}
