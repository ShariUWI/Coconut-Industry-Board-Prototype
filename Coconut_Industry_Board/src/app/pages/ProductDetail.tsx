import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useParams, Link } from "react-router";
import { MessageCircle, Phone, MapPin, Clock, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("Regular");

  // Sample product data
  const product = {
    id: "coconut-water",
    name: "Coconut Water",
    description: "Fresh, authentic Jamaican coconut water harvested from our local farms. Rich in electrolytes and natural nutrients, our coconut water is the perfect refreshing drink for any time of day.",
    fullDescription: "Our coconut water is sourced directly from carefully selected Jamaican coconut farms, ensuring the highest quality and freshness. Each bottle is filled with pure, natural coconut water with no added sugars or preservatives. Perfect for hydration, post-workout recovery, or simply enjoying the taste of the tropics.",
    price: "Request Price",
    sizes: ["Small (250ml)", "Regular (500ml)", "Large (1L)"],
    availability: "Available",
    image: "https://images.unsplash.com/photo-1662364368432-ebea02c6e1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBkcmluayUyMGdsYXNzfGVufDF8fHx8MTc3OTg4Mjk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    benefits: [
      "100% Natural",
      "No Added Sugar",
      "Rich in Electrolytes",
      "Locally Sourced",
      "Fresh Daily"
    ]
  };

  const whatsappMessage = encodeURIComponent(
    `Hello CIB, I would like to ask about ${product.name} availability and pickup options.\n\nSize: ${selectedSize}`
  );

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-white border-b border-border px-4 py-3 sticky top-[57px] z-10">
        <Link to="/shop" className="flex items-center gap-2 text-[#2A7C3F]">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Shop</span>
        </Link>
      </div>

      {/* Product Image */}
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
      />

      {/* Product Info */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h1 className="text-2xl font-bold text-[#2D2416] mb-2">{product.name}</h1>
            <p className="text-lg font-semibold text-[#8B6F47]">{product.price}</p>
          </div>
          <Badge className="bg-[#2A7C3F]">
            {product.availability}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-6">{product.description}</p>

        {/* Size Options */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#2D2416] mb-3">Select Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-2 rounded-lg border-2 transition-all text-sm ${
                  selectedSize === size
                    ? "border-[#2A7C3F] bg-[#E8F5EC] text-[#2A7C3F] font-medium"
                    : "border-border text-muted-foreground"
                }`}
              >
                {size.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#2D2416] mb-3">Product Benefits</h3>
          <div className="grid grid-cols-2 gap-2">
            {product.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 bg-[#E8F5EC] p-2 rounded-lg">
                <div className="w-2 h-2 bg-[#2A7C3F] rounded-full" />
                <span className="text-sm text-[#2D2416]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#2D2416] mb-3">About This Product</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.fullDescription}
          </p>
        </div>
      </div>

      {/* Pickup Information */}
      <div className="px-4 pb-6">
        <Card className="p-4 bg-[#F5F3ED]">
          <h3 className="font-semibold text-[#2D2416] mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#2A7C3F]" />
            Pickup Location
          </h3>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-[#2D2416]">
              <strong>Address:</strong> 18 Waterloo Road, Kingston
            </p>
            <div className="flex items-center gap-2 text-sm text-[#2D2416]">
              <Clock className="h-4 w-4 text-[#8B6F47]" />
              <span><strong>Hours:</strong> Mon–Sat, 8 AM–4 PM</span>
            </div>
          </div>
          <Link to="/contact">
            <Button variant="outline" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
              <MapPin className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
          </Link>
        </Card>
      </div>

      {/* WhatsApp Order Preview */}
      <div className="px-4 pb-6">
        <Card className="p-4 border-2 border-[#2A7C3F]">
          <h3 className="font-semibold text-[#2A7C3F] mb-3">WhatsApp Order Message</h3>
          <div className="bg-[#E8F5EC] p-3 rounded-lg mb-4">
            <p className="text-sm text-[#2D2416] italic">
              "Hello CIB, I would like to ask about {product.name} availability and pickup options."
            </p>
            <p className="text-sm text-[#2D2416] italic mt-2">
              Size: {selectedSize}
            </p>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Tap the button below to send this message via WhatsApp. Our team will confirm availability and provide pickup details.
          </p>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-6 space-y-3">
        <a 
          href={`https://wa.me/18769261771?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F] h-12">
            <MessageCircle className="h-5 w-5 mr-2" />
            Order on WhatsApp
          </Button>
        </a>
        
        <a href="tel:18769261771">
          <Button variant="outline" className="w-full border-[#2A7C3F] text-[#2A7C3F] h-12">
            <Phone className="h-5 w-5 mr-2" />
            Call to Confirm Availability
          </Button>
        </a>
      </div>

      {/* Related Products */}
      <div className="px-4 pb-6 bg-[#E8F5EC] pt-6">
        <h3 className="font-semibold text-[#2D2416] mb-4">You May Also Like</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Coconut Oil", price: "$15.00", image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwamFyJTIwbmF0dXJhbHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
            { name: "Coconut Drops", price: "$8.00", image: "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcHJvZHVjdHMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
          ].map((relatedProduct) => (
            <Link key={relatedProduct.name} to="/shop">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url('${relatedProduct.image}')` }}
                />
                <div className="p-3">
                  <h4 className="font-medium text-[#2D2416] text-sm mb-1">{relatedProduct.name}</h4>
                  <p className="text-sm text-[#8B6F47] font-semibold">{relatedProduct.price}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
