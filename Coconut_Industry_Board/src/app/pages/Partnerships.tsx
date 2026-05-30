import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { Handshake, Users, Building2, GraduationCap, Store, Utensils, ShoppingCart, Phone, Mail } from "lucide-react";

export function Partnerships() {
  const partnerCategories = [
    {
      title: "Local Farmers",
      icon: Users,
      description: "Supporting coconut growers across Jamaica",
      partners: ["Individual Growers", "Farming Cooperatives", "Family Farms"],
      color: "bg-[#2A7C3F]",
    },
    {
      title: "Government & Agriculture",
      icon: Building2,
      description: "Collaborating with national organizations",
      partners: ["Ministry of Agriculture", "JAMPRO", "Agro-Invest", "Rural Agricultural Development Authority"],
      color: "bg-[#8B6F47]",
    },
    {
      title: "Hotels & Restaurants",
      icon: Utensils,
      description: "Supplying fresh coconut products to hospitality",
      partners: ["Caribbean Resorts", "Local Restaurants", "Hotel Chains", "Catering Services"],
      color: "bg-[#F4C430]",
    },
    {
      title: "Supermarkets & Retailers",
      icon: ShoppingCart,
      description: "Distribution through major retail channels",
      partners: ["Supermarket Chains", "Health Food Stores", "Local Shops", "Online Retailers"],
      color: "bg-[#2A7C3F]",
    },
    {
      title: "Educational Institutions",
      icon: GraduationCap,
      description: "Training and research partnerships",
      partners: ["Agricultural Colleges", "Universities", "Technical Schools", "Training Programs"],
      color: "bg-[#8B6F47]",
    },
    {
      title: "Processing Partners",
      icon: Building2,
      description: "Industrial and manufacturing collaborations",
      partners: ["Seprod Limited", "Food Processors", "Coconut Oil Producers", "Value-Added Manufacturers"],
      color: "bg-[#F4C430]",
    },
  ];

  const partnershipBenefits = {
    growers: [
      "Access to quality seedlings",
      "Technical support and training",
      "Market linkage opportunities",
      "Industry updates and research",
    ],
    businesses: [
      "Reliable supply of fresh products",
      "Bulk order discounts",
      "Consistent quality standards",
      "Flexible delivery options",
    ],
    institutions: [
      "Research collaboration",
      "Educational resources",
      "Industry expertise",
      "Student placement opportunities",
    ],
  };

  return (
    <PageLayout>
      {/* Header */}
      <div 
        className="relative bg-cover bg-center py-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 124, 63, 0.9), rgba(42, 124, 63, 0.9)), url('https://images.unsplash.com/photo-1609554259885-d5a52e01e83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwZmFybSUyMHRyb3BpY2FsJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3Nzk4ODI5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white p-3 rounded-full">
            <Handshake className="h-8 w-8 text-[#2A7C3F]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Growing Jamaica's Coconut Industry Together</h1>
        </div>
        <p className="text-white/90 leading-relaxed">
          Building strong partnerships to support farmers, businesses, and communities across Jamaica.
        </p>
      </div>

      {/* Partnership Categories */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Our Partners</h2>
        <div className="space-y-4">
          {partnerCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <div className={`${category.color} px-4 py-3`}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-white" />
                    <h3 className="font-semibold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.partners.map((partner, pIndex) => (
                      <Badge key={pIndex} variant="outline" className="border-[#2A7C3F] text-[#2A7C3F]">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Partnership Benefits</h2>
        
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold text-[#2A7C3F] mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              For Growers
            </h3>
            <div className="space-y-2">
              {partnershipBenefits.growers.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2A7C3F] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#2D2416]">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#2A7C3F] mb-3 flex items-center gap-2">
              <Store className="h-5 w-5" />
              For Businesses
            </h3>
            <div className="space-y-2">
              {partnershipBenefits.businesses.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2A7C3F] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#2D2416]">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#2A7C3F] mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              For Institutions
            </h3>
            <div className="space-y-2">
              {partnershipBenefits.institutions.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2A7C3F] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#2D2416]">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Sections */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Partner with CIB</h2>
        
        <div className="space-y-3">
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#2A7C3F]">
            <div className="flex items-start gap-4">
              <div className="bg-[#2A7C3F] p-3 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2D2416] mb-2">Become a Registered Grower</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Join our network of coconut farmers and access CIB's support programs
                </p>
                <Link to="/register">
                  <Button className="bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#8B6F47]">
            <div className="flex items-start gap-4">
              <div className="bg-[#8B6F47] p-3 rounded-xl">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2D2416] mb-2">Request Bulk Supply</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For restaurants, hotels, supermarkets, and wholesale orders
                </p>
                <Link to="/shop">
                  <Button className="bg-[#8B6F47] hover:bg-[#6B5437]">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#F4C430]">
            <div className="flex items-start gap-4">
              <div className="bg-[#F4C430] p-3 rounded-xl">
                <GraduationCap className="h-6 w-6 text-[#2D2416]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2D2416] mb-2">Educational Partnership</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Collaborate with CIB on research, training, or student programs
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#F4C430] text-[#2D2416]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="px-4 pb-6">
        <Card className="p-6 bg-gradient-to-br from-[#2A7C3F] to-[#1F5D2F] text-white">
          <h3 className="text-xl font-bold mb-2">Interested in Partnering?</h3>
          <p className="text-white/90 mb-4">
            Contact us to discuss partnership opportunities and how we can work together to grow Jamaica's coconut industry.
          </p>
          <div className="flex gap-2">
            <a href="tel:18769261771" className="flex-1">
              <Button className="w-full bg-white text-[#2A7C3F] hover:bg-white/90">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </a>
            <a href="mailto:cocindbrd@cibja.com" className="flex-1">
              <Button className="w-full bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
