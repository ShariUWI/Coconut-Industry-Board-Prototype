import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { Heart, Share2, Instagram, Facebook, Video, ChefHat, Sparkles, Users, MessageCircle } from "lucide-react";

export function Campaign() {
  const campaignContent = [
    {
      title: "Influencer Taste Test",
      type: "Video",
      description: "Watch local influencers try our authentic coconut products for the first time!",
      hashtags: ["#ClaimTheFreshness", "#CocoJammin"],
      image: "https://images.unsplash.com/photo-1662364368432-ebea02c6e1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBkcmluayUyMGdsYXNzfGVufDF8fHx8MTc3OTg4Mjk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Video,
    },
    {
      title: "Cooking with Coconut",
      type: "Recipe",
      description: "Traditional Jamaican recipes featuring coconut products from CIB",
      hashtags: ["#ShareTheCocoLove", "#CocoJammin"],
      image: "https://images.unsplash.com/photo-1622839144198-63bb83ab8722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: ChefHat,
    },
    {
      title: "Coconut Skincare & Wellness",
      type: "Wellness",
      description: "Discover the natural benefits of coconut oil for your health and beauty routine",
      hashtags: ["#CIB_CocoLove", "#KnowYourCoconut"],
      image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsJTIwamFyJTIwbmF0dXJhbHxlbnwxfHx8fDE3Nzk4ODI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Sparkles,
    },
    {
      title: "What's Cracking at Waterloo?",
      type: "Behind the Scenes",
      description: "Take a tour of our shop and see how we prepare fresh coconut products daily",
      hashtags: ["#ClaimTheFreshness", "#CocoJammin"],
      image: "https://images.unsplash.com/photo-1537191072641-5e19cc173c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNvY29udXQlMjBwYWxtJTIwdHJlZXxlbnwxfHx8fDE3Nzk4ODI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Video,
    },
    {
      title: "Customer Review Spotlight",
      type: "Testimonial",
      description: "Hear what our customers are saying about The Coconut Shop",
      hashtags: ["#ShareTheCocoLove", "#CIB_CocoLove"],
      image: "https://images.unsplash.com/photo-1655299417498-52f3a304c2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvY29udXQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Heart,
    },
    {
      title: "Farmer Success Story",
      type: "Story",
      description: "Meet the growers behind our fresh coconuts and learn their journey",
      hashtags: ["#KnowYourCoconut", "#ClaimTheFreshness"],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1haWNhbiUyMGZhcm1lciUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3OTg4Mjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Users,
    },
  ];

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, handle: "@cibjamaica", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Facebook", icon: Facebook, handle: "CIBJamaica", color: "bg-[#1877F2]" },
    { name: "TikTok", icon: Video, handle: "@cibjamaica", color: "bg-black" },
  ];

  return (
    <PageLayout>
      {/* Hero Header */}
      <div 
        className="relative bg-cover bg-center py-16 px-4"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(42, 124, 63, 0.95), rgba(244, 196, 48, 0.95)), url('https://images.unsplash.com/photo-1655299417498-52f3a304c2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvY29udXQlMjBjYXJpYmJlYW4lMjBiZWFjaHxlbnwxfHx8fDE3Nzk4ODI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-3">#ClaimTheFreshness</h1>
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            Fresh Jamaican coconut products, farmer stories, recipes, and wellness tips — all from the Coconut Industry Board
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-white/20 text-white border-white/40">#ShareTheCocoLove</Badge>
            <Badge className="bg-white/20 text-white border-white/40">#CIB_CocoLove</Badge>
            <Badge className="bg-white/20 text-white border-white/40">#CocoJammin</Badge>
            <Badge className="bg-white/20 text-white border-white/40">#KnowYourCoconut</Badge>
          </div>
        </div>
      </div>

      {/* Campaign Description */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-[#2A7C3F] mb-3">About the Campaign</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Join us in celebrating Jamaica's coconut industry! Our #ClaimTheFreshness campaign showcases authentic Jamaican coconut products, shares inspiring farmer stories, and brings you delicious recipes and wellness tips.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you're health-conscious, love cooking, or simply appreciate fresh local products, this campaign is for you. Follow along on social media and become part of The Coconut Collective!
          </p>
        </Card>
      </div>

      {/* Campaign Content Grid */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Featured Campaign Content</h2>
        <div className="space-y-4">
          {campaignContent.map((content, index) => {
            const Icon = content.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${content.image}')` }}
                >
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-[#2A7C3F]">
                      <Icon className="h-3 w-3 mr-1" />
                      {content.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-[#2D2416] mb-2">{content.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.hashtags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-[#2A7C3F] text-[#2A7C3F]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-[#2A7C3F] text-[#2A7C3F]">
                      <Heart className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-[#2A7C3F] text-[#2A7C3F]">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Interactive CTAs */}
      <div className="px-4 py-6 bg-[#F5F3ED]">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Get Involved</h2>
        
        <div className="space-y-3">
          <Link to="/shop">
            <Card className="p-4 hover:shadow-lg transition-shadow border-l-4 border-l-[#2A7C3F]">
              <div className="flex items-center gap-4">
                <div className="bg-[#2A7C3F] p-3 rounded-xl">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2D2416]">Shop The Coconut Collective</h3>
                  <p className="text-sm text-muted-foreground">Explore our fresh coconut products</p>
                </div>
              </div>
            </Card>
          </Link>

          <Card className="p-4 hover:shadow-lg transition-shadow border-l-4 border-l-[#F4C430]">
            <div className="flex items-center gap-4">
              <div className="bg-[#F4C430] p-3 rounded-xl">
                <ChefHat className="h-6 w-6 text-[#2D2416]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2D2416]">Share Your Coconut Recipe</h3>
                <p className="text-sm text-muted-foreground">Tag us with #CocoJammin</p>
              </div>
            </div>
          </Card>

          <Link to="/shop">
            <Card className="p-4 hover:shadow-lg transition-shadow border-l-4 border-l-[#8B6F47]">
              <div className="flex items-center gap-4">
                <div className="bg-[#8B6F47] p-3 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2D2416]">Visit The Coconut Shop</h3>
                  <p className="text-sm text-muted-foreground">18 Waterloo Road, Kingston</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>

      {/* Social Media Follow */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">Follow Us on Social Media</h2>
        <div className="space-y-3">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card key={platform.name} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`${platform.color} p-3 rounded-xl`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2D2416]">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.handle}</p>
                  </div>
                  <Button size="sm" className="bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                    Follow
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Campaign Goals */}
      <div className="px-4 pb-6">
        <Card className="p-6 bg-gradient-to-br from-[#2A7C3F] to-[#1F5D2F] text-white">
          <h3 className="text-xl font-bold mb-3">Why #ClaimTheFreshness?</h3>
          <div className="space-y-2 text-white/90 text-sm">
            <p>✓ Support local Jamaican farmers and growers</p>
            <p>✓ Discover authentic, fresh coconut products</p>
            <p>✓ Learn healthy recipes and wellness tips</p>
            <p>✓ Connect with a community that loves coconuts</p>
            <p>✓ Celebrate 80 years of CIB excellence</p>
          </div>
          <div className="mt-6">
            <Link to="/shop">
              <Button className="w-full bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]">
                Shop Now & Join the Movement
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
