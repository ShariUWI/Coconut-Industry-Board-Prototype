import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, MessageSquare, ThumbsUp, User, MapPin } from "lucide-react";

export function Reviews() {
  const googleRating = 4.7;
  const totalReviews = 142;

  const customerReviews = [
    {
      name: "Sarah Johnson",
      location: "Kingston",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best coconut water I've ever tasted! Fresh, authentic, and the staff at Waterloo Road are so friendly. I come here every week now.",
      verified: true,
    },
    {
      name: "Marcus Brown",
      location: "Montego Bay",
      rating: 5,
      date: "1 month ago",
      comment: "The coconut oil is amazing quality. I use it for cooking and skincare. Great prices too!",
      verified: true,
    },
    {
      name: "Jennifer Campbell",
      location: "Spanish Town",
      rating: 4,
      date: "1 month ago",
      comment: "Love the gizzadas and coconut drops. Reminds me of my grandmother's cooking. Only wish they had longer opening hours.",
      verified: true,
    },
    {
      name: "David Thompson",
      location: "Portmore",
      rating: 5,
      date: "2 months ago",
      comment: "As a restaurant owner, I order bulk coconut products from CIB. Always fresh, reliable delivery, and excellent customer service.",
      verified: true,
    },
  ];

  const farmerTestimonials = [
    {
      name: "Winston Palmer",
      role: "Coconut Grower, St. Elizabeth",
      comment: "CIB has been instrumental in helping me expand my coconut farm. The seedlings they provide are high quality, and their technical support is invaluable.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1haWNhbiUyMGZhcm1lciUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3OTg4Mjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Grace Williams",
      role: "Small-scale Farmer, Clarendon",
      comment: "The grower registration process was simple, and now I have access to training programs and market information. CIB truly supports local farmers.",
      image: "https://images.unsplash.com/photo-1609554259885-d5a52e01e83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwZmFybSUyMHRyb3BpY2FsJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3Nzk4ODI5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const partnerReviews = [
    {
      organization: "Caribbean Resort & Spa",
      type: "Hotel Partner",
      comment: "We source all our coconut products from CIB. Their consistency in quality and reliability make them our preferred supplier.",
    },
    {
      organization: "Fresh Foods Supermarket",
      type: "Retail Partner",
      comment: "CIB coconut products are customer favorites. The authentic Jamaican quality speaks for itself.",
    },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-[#2A7C3F] text-white px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Customer Reviews & Testimonials</h1>
        <p className="text-white/90">See what our customers and partners are saying</p>
      </div>

      {/* Google Rating Summary */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-bold text-[#2D2416]">{googleRating}</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(googleRating)
                            ? "fill-[#F4C430] text-[#F4C430]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on {totalReviews} reviews
                  </p>
                </div>
              </div>
            </div>
            <Badge className="bg-[#2A7C3F]">Google Reviews</Badge>
          </div>
          
          <Button className="w-full bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]">
            <Star className="h-4 w-4 mr-2" />
            Leave a Review
          </Button>
        </Card>
      </div>

      {/* Customer Reviews */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {customerReviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-[#E8F5EC] p-3 rounded-full">
                  <User className="h-6 w-6 text-[#2A7C3F]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-[#2D2416]">{review.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{review.location}</span>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs border-[#2A7C3F] text-[#2A7C3F]">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-[#F4C430] text-[#F4C430]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {review.comment}
                  </p>
                  
                  <Button size="sm" variant="ghost" className="text-[#2A7C3F]">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4 border-[#2A7C3F] text-[#2A7C3F]">
          <MessageSquare className="h-4 w-4 mr-2" />
          Read More Customer Stories
        </Button>
      </div>

      {/* Farmer Success Stories */}
      <div className="px-4 py-6 bg-[#F5F3ED]">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Farmer Success Stories</h2>
        <div className="space-y-4">
          {farmerTestimonials.map((farmer, index) => (
            <Card key={index} className="overflow-hidden">
              <div 
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: `url('${farmer.image}')` }}
              />
              <div className="p-6">
                <h3 className="font-semibold text-[#2D2416] mb-1">{farmer.name}</h3>
                <p className="text-sm text-[#8B6F47] mb-3">{farmer.role}</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{farmer.comment}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Partner Testimonials */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Partner Testimonials</h2>
        <div className="space-y-4">
          {partnerReviews.map((partner, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-[#F4C430]">
              <div className="flex items-start gap-3">
                <div className="bg-[#F4C430] p-2 rounded-lg">
                  <Star className="h-5 w-5 text-[#2D2416]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2D2416] mb-1">{partner.organization}</h3>
                  <Badge variant="outline" className="mb-3 text-xs border-[#8B6F47] text-[#8B6F47]">
                    {partner.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{partner.comment}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Leave Review CTA */}
      <div className="px-4 pb-6">
        <Card className="p-6 bg-gradient-to-br from-[#2A7C3F] to-[#1F5D2F] text-white">
          <h3 className="text-xl font-bold mb-2">Share Your Experience</h3>
          <p className="text-white/90 mb-4">
            Help others discover the freshness of CIB coconut products. Leave us a review!
          </p>
          <Button className="w-full bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]">
            <Star className="h-5 w-5 mr-2" />
            Write a Review
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
}
