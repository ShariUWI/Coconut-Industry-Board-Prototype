import { MessageCircleQuestion, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function HelpAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: "Ask about products", action: "products" },
    { label: "Grower registration", action: "register" },
    { label: "Get directions", action: "directions" },
    { label: "Opening hours", action: "hours" },
    { label: "Seedling info", action: "seedlings" },
    { label: "Contact a staff member", action: "contact" },
  ];

  return (
    <div className="fixed bottom-20 right-4 z-40">
      {isOpen && (
        <Card className="mb-4 p-4 w-72 shadow-lg border-[#2A7C3F]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-[#2A7C3F]">CIB Help Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">How can we help you today?</p>
          <div className="space-y-2">
            {quickOptions.map((option) => (
              <button
                key={option.action}
                className="w-full text-left text-sm py-2 px-3 rounded-lg hover:bg-[#E8F5EC] transition-colors border border-border"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border space-y-2">
            <a
              href="tel:18769261771"
              className="flex items-center gap-2 text-sm text-[#2A7C3F] hover:underline"
            >
              <Phone className="h-4 w-4" />
              Call Now: (876) 926-1771
            </a>
            <a
              href="https://wa.me/18769261771"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#2A7C3F] hover:underline"
            >
              <MessageCircleQuestion className="h-4 w-4" />
              Message on WhatsApp
            </a>
          </div>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg bg-[#2A7C3F] hover:bg-[#1F5D2F]"
        size="icon"
      >
        <MessageCircleQuestion className="h-6 w-6" />
      </Button>
    </div>
  );
}
