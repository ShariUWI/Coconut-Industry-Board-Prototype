import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Phone, Mail, MapPin, Clock, Navigation, MessageCircle, Facebook, Instagram } from "lucide-react";

export function Contact() {
  const contactInfo = {
    phone: "1 (876) 926-1771",
    phoneLink: "18769261771",
    email: "cocindbrd@cibja.com",
    address: "18 Waterloo Road, Kingston",
    hours: "Monday–Saturday, 8:00 AM–4:00 PM",
    sunday: "Closed",
  };

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=18+Waterloo+Road+Kingston+Jamaica";

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-[#2A7C3F] text-white px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Contact CIB</h1>
        <p className="text-white/90">Get in touch with the Coconut Industry Board</p>
      </div>

      {/* Quick Action Buttons */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <div className="grid grid-cols-2 gap-3">
          <a href={`tel:${contactInfo.phoneLink}`}>
            <Button className="w-full h-20 flex flex-col gap-2 bg-[#2A7C3F] hover:bg-[#1F5D2F]">
              <Phone className="h-6 w-6" />
              <span className="text-xs">Call Now</span>
            </Button>
          </a>
          
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-20 flex flex-col gap-2 bg-[#8B6F47] hover:bg-[#6B5437]">
              <Navigation className="h-6 w-6" />
              <span className="text-xs">Get Directions</span>
            </Button>
          </a>
          
          <a href={`https://wa.me/${contactInfo.phoneLink}`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-20 flex flex-col gap-2 bg-[#25D366] hover:bg-[#1FB855]">
              <MessageCircle className="h-6 w-6" />
              <span className="text-xs">WhatsApp</span>
            </Button>
          </a>
          
          <a href={`mailto:${contactInfo.email}`}>
            <Button className="w-full h-20 flex flex-col gap-2 bg-[#F4C430] hover:bg-[#D4A420] text-[#2D2416]">
              <Mail className="h-6 w-6" />
              <span className="text-xs">Send Email</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="px-4 py-6 space-y-4">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Contact Information</h2>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8F5EC] p-3 rounded-xl">
              <Phone className="h-6 w-6 text-[#2A7C3F]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#2D2416] mb-1">Phone</h3>
              <a href={`tel:${contactInfo.phoneLink}`} className="text-[#2A7C3F] hover:underline">
                {contactInfo.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Call us for product inquiries, grower support, or general information
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8F5EC] p-3 rounded-xl">
              <Mail className="h-6 w-6 text-[#2A7C3F]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#2D2416] mb-1">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-[#2A7C3F] hover:underline break-all">
                {contactInfo.email}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Send us an email for detailed inquiries
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8F5EC] p-3 rounded-xl">
              <MapPin className="h-6 w-6 text-[#2A7C3F]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#2D2416] mb-1">Address</h3>
              <p className="text-[#2D2416] mb-2">{contactInfo.address}</p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-[#2A7C3F] text-[#2A7C3F]">
                  <Navigation className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8F5EC] p-3 rounded-xl">
              <Clock className="h-6 w-6 text-[#2A7C3F]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#2D2416] mb-2">Opening Hours</h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[#2D2416]">{contactInfo.hours.split(',')[0]}</span>
                  <span className="text-[#8B6F47] font-medium">{contactInfo.hours.split(',')[1]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2D2416]">Sunday</span>
                  <span className="text-destructive font-medium">{contactInfo.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Map Placeholder */}
      <div className="px-4 pb-6">
        <Card className="overflow-hidden">
          <div 
            className="h-64 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537191072641-5e19cc173c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNvY29udXQlMjBwYWxtJTIwdHJlZXxlbnwxfHx8fDE3Nzk4ODI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[#2A7C3F] hover:bg-white/90">
                  <MapPin className="h-5 w-5 mr-2" />
                  View on Google Maps
                </Button>
              </a>
            </div>
          </div>
          <div className="p-4 bg-[#F5F3ED]">
            <p className="text-sm text-muted-foreground text-center">
              <strong>The Coconut Shop</strong> • 18 Waterloo Road, Kingston, Jamaica
            </p>
          </div>
        </Card>
      </div>

      {/* Directions Information */}
      <div className="px-4 pb-6">
        <Card className="p-6 bg-[#E8F5EC]">
          <h3 className="font-semibold text-[#2D2416] mb-3">How to Find Us</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Located on Waterloo Road in Kingston</p>
            <p>• Accessible by public transportation</p>
            <p>• Parking available on-site</p>
            <p>• Look for the CIB signage at the entrance</p>
          </div>
        </Card>
      </div>

      {/* Social Media */}
      <div className="px-4 pb-6">
        <h3 className="font-semibold text-[#2D2416] mb-4">Connect on Social Media</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2D2416]">Instagram</h4>
              <p className="text-xs text-muted-foreground">@cibjamaica</p>
            </div>
          </Card>
          
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1877F2] p-3 rounded-xl">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2D2416]">Facebook</h4>
              <p className="text-xs text-muted-foreground">CIBJamaica</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Support */}
      <div className="px-4 pb-6">
        <Card className="p-6 border-2 border-[#F4C430]">
          <h3 className="font-semibold text-[#2D2416] mb-2">Need Immediate Assistance?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For urgent product inquiries or grower support, contact us via phone or WhatsApp during business hours.
          </p>
          <div className="flex gap-2">
            <a href={`tel:${contactInfo.phoneLink}`} className="flex-1">
              <Button className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a href={`https://wa.me/${contactInfo.phoneLink}`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-[#25D366] hover:bg-[#1FB855]">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
