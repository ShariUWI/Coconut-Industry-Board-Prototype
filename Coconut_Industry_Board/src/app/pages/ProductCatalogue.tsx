import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import { Search, MessageCircle, Phone, Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "coconut-water",
    name: "Coconut Water",
    category: "Drinks",
    description: "Fresh, authentic Jamaican coconut water",
    price: "Request Price",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1662364368432-ebea02c6e1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBkcmluayUyMGdsYXNzfGVufDF8fHx8MTc3OTg4Mjk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    category: "Oils",
    description: "Pure, cold-pressed coconut oil",
    price: "$15.00",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwamFyJTIwbmF0dXJhbHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "jelly-coconuts",
    name: "Jelly Coconuts",
    category: "Fresh",
    description: "Young, fresh jelly coconuts",
    price: "$3.50 each",
    availability: "Limited Stock",
    image: "https://images.unsplash.com/photo-1706470884088-7541af068270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1haWNhbiUyMGNvY29udXQlMjBqZWxseXxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-drops",
    name: "Coconut Drops",
    category: "Snacks",
    description: "Traditional Jamaican coconut candy",
    price: "$8.00",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcHJvZHVjdHMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "gizzadas",
    name: "Gizzadas",
    category: "Pastries",
    description: "Traditional coconut tarts",
    price: "$12.00/dozen",
    availability: "Call to Confirm",
    image: "https://images.unsplash.com/photo-1622839144198-63bb83ab8722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-buns",
    name: "Coconut Buns",
    category: "Pastries",
    description: "Soft, sweet coconut-filled buns",
    price: "$10.00",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1622839144198-63bb83ab8722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-vinegar",
    name: "Coconut Vinegar",
    category: "Health & Wellness",
    description: "Natural coconut vinegar with health benefits",
    price: "Request Price",
    availability: "Call to Confirm",
    image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwamFyJTIwbmF0dXJhbHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-flour",
    name: "Coconut Flour",
    category: "Health & Wellness",
    description: "Gluten-free coconut flour for baking",
    price: "$18.00",
    availability: "Limited Stock",
    image: "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcHJvZHVjdHMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-pastries",
    name: "Coconut Pastries",
    category: "Pastries",
    description: "Assorted fresh coconut pastries",
    price: "$14.00",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1622839144198-63bb83ab8722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coconut-snacks",
    name: "Coconut Snacks",
    category: "Snacks",
    description: "Variety pack of coconut-based snacks",
    price: "$12.00",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcHJvZHVjdHMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = ["All", "Drinks", "Oils", "Pastries", "Snacks", "Fresh", "Health & Wellness", "Bulk Orders"];

export function ProductCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-[#2A7C3F] text-white px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">The Coconut Shop Online</h1>
        <p className="text-white/90">Authentic Jamaican Coconut Products</p>
      </div>

      {/* Search and Filter */}
      <div className="px-4 py-4 bg-white border-b border-border sticky top-[57px] z-10">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap ${
                selectedCategory === category 
                  ? "bg-[#2A7C3F] hover:bg-[#1F5D2F]" 
                  : "border-[#2A7C3F] text-[#2A7C3F]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Bulk Order Banner */}
      <div className="px-4 py-4 bg-[#F4C430]/20">
        <Card className="p-4 border-2 border-[#F4C430]">
          <h3 className="font-semibold text-[#2D2416] mb-2">Interested in bulk orders?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            For restaurants, hotels, supermarkets, or events
          </p>
          <Button className="w-full bg-[#8B6F47] hover:bg-[#6B5437]">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Request Bulk Quote
          </Button>
        </Card>
      </div>

      {/* Product Grid */}
      <div className="px-4 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div 
                  className="w-32 h-32 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="flex-1 p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#2D2416]">{product.name}</h3>
                    <Badge 
                      variant={product.availability === "Available" ? "default" : "secondary"}
                      className={product.availability === "Available" ? "bg-[#2A7C3F]" : ""}
                    >
                      {product.availability}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <p className="font-semibold text-[#8B6F47] mb-3">{product.price}</p>
                  
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/18769261771?text=Hello CIB, I would like to ask about ${product.name} availability and pricing.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          WhatsApp
                        </Button>
                      </a>
                      <a href="tel:18769261771" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                      </a>
                    </div>
                    <Link to={`/product/${product.id}`} className="block">
                      <Button size="sm" variant="outline" className="w-full border-[#8B6F47] text-[#8B6F47]">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Footer */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <Card className="p-6">
          <h3 className="font-bold text-[#2A7C3F] mb-3">Need Assistance?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Call us for product availability, pricing, or pickup details.
          </p>
          <div className="flex gap-2">
            <a href="tel:18769261771" className="flex-1">
              <Button variant="outline" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
            </a>
            <a 
              href="https://wa.me/18769261771?text=Hello CIB, I have a question about your products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F]">
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
