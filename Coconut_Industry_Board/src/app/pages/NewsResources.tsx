import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import {
  BookOpen,
  Calendar,
  Sprout,
  Shield,
  Droplet,
  Share2,
  Bookmark,
  Phone,
  PlayCircle,
  Video,
} from "lucide-react";

export function NewsResources() {
  const educationContent = [
    {
      title: "Best Planting Times by Region",
      category: "Planting Guide",
      icon: Calendar,
      content:
        "The ideal planting season for coconuts in Jamaica is during the rainy season (May-June and September-October). Coastal regions can plant year-round with proper irrigation.",
      tips: [
        "North Coast: Plant May-June for best results",
        "South Coast: September-October optimal",
        "Ensure soil moisture before planting",
        "Avoid planting during dry spells",
      ],
      color: "bg-[#2A7C3F]",
    },
    {
      title: "Coconut Varieties in Jamaica",
      category: "Varieties",
      icon: Sprout,
      content:
        "Jamaica cultivates three main coconut varieties, each with unique characteristics suitable for different farming goals and conditions.",
      tips: [
        "Tall Variety: Traditional, high yield, long lifespan",
        "Dwarf Variety: Early bearing, compact size",
        "Hybrid: Best of both, disease resistant",
        "Choose based on your farm's climate and goals",
      ],
      color: "bg-[#8B6F47]",
    },
    {
      title: "Tips for New Growers",
      category: "Getting Started",
      icon: BookOpen,
      content:
        "Starting a coconut farm requires proper planning, land preparation, and understanding of best practices. Follow these essential tips for success.",
      tips: [
        "Select quality seedlings from CIB",
        "Prepare land with proper spacing (7-9m)",
        "Test soil pH and drainage",
        "Plan for long-term maintenance",
      ],
      color: "bg-[#F4C430]",
    },
    {
      title: "Seedling Distribution Updates",
      category: "CIB Programs",
      icon: Sprout,
      content:
        "CIB regularly distributes high-quality coconut seedlings to registered growers. Stay updated on availability and application processes.",
      tips: [
        "Check seedling availability monthly",
        "Register early for allocation",
        "Collect certified varieties only",
        "Follow CIB planting guidelines",
      ],
      color: "bg-[#2A7C3F]",
    },
    {
      title: "Disease Prevention & Crop Care",
      category: "Health & Maintenance",
      icon: Shield,
      content:
        "Protect your coconut farm from common diseases and pests. Early detection and proper care ensure healthy, productive trees.",
      tips: [
        "Monitor for red palm weevil regularly",
        "Apply organic pest control methods",
        "Remove diseased fronds immediately",
        "Contact CIB for disease identification help",
      ],
      color: "bg-[#8B6F47]",
    },
    {
      title: "Water Management",
      category: "Farm Management",
      icon: Droplet,
      content:
        "Proper irrigation and water management are crucial for coconut productivity, especially during dry seasons.",
      tips: [
        "Ensure 150-200mm monthly rainfall equivalent",
        "Install drip irrigation in dry areas",
        "Mulch around base to retain moisture",
        "Monitor soil moisture levels weekly",
      ],
      color: "bg-[#2A7C3F]",
    },
  ];

  const videoResources = [
    {
      title: "How to: Establish a Coconut Nursery",
      category: "Training Video",
      description:
        "A CIB-related training video offering step-by-step guidance on establishing a coconut nursery.",
      youtubeUrl: "https://www.youtube.com/watch?v=yiwWzoxOqww",
      thumbnail: "https://img.youtube.com/vi/yiwWzoxOqww/hqdefault.jpg",
    },
    {
      title: "Behind the Scenes of the Coconut Industry Board Operations",
      category: "Social Media Highlight",
      description:
        "A behind-the-scenes look at CIB’s operations and its role in keeping Jamaica’s coconut industry active.",
      youtubeUrl: "https://www.youtube.com/watch?v=tD3jQ6wu7Tc",
      thumbnail: "https://img.youtube.com/vi/tD3jQ6wu7Tc/hqdefault.jpg",
    },
    {
      title: "Steering the Future of Jamaica's Coconut Industry",
      category: "Industry Update",
      description:
        "A video highlighting CIB’s work in supporting sustainable, productive, and profitable coconut farming.",
      youtubeUrl: "https://www.youtube.com/watch?v=P0VufozjcWc",
      thumbnail: "https://img.youtube.com/vi/P0VufozjcWc/hqdefault.jpg",
    },
    {
      title: "How to: Identify Coconut Mother Palms and Seed Nut Selection",
      category: "Training Video",
      description:
        "A coconut production training video focused on identifying mother palms and selecting seed nuts for propagation.",
      youtubeUrl: "https://www.youtube.com/watch?v=8jjgvgYQqVg",
      thumbnail: "https://img.youtube.com/vi/8jjgvgYQqVg/hqdefault.jpg",
    },
  ];

  const cibRole = [
    "Providing high-quality seedlings",
    "Technical support and training",
    "Disease and pest management guidance",
    "Market linkage for coconut products",
    "Research and development programs",
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div
        className="relative bg-cover bg-center py-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 111, 71, 0.9), rgba(139, 111, 71, 0.9)), url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1haWNhbiUyMGZhcm1lciUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3OTg4Mjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white p-3 rounded-full">
            <BookOpen className="h-8 w-8 text-[#8B6F47]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Know Your Coconut</h1>
        </div>
        <p className="text-white/90 leading-relaxed">
          Educational resources, planting tips, training videos, and best practices for coconut farmers in Jamaica.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <div className="grid grid-cols-3 gap-3">
          <Link to="/register">
            <Button
              variant="outline"
              className="w-full border-[#2A7C3F] text-[#2A7C3F] flex-col h-auto py-3"
            >
              <Sprout className="h-5 w-5 mb-1" />
              <span className="text-xs">Register</span>
            </Button>
          </Link>

          <a href="tel:18769261771">
            <Button
              variant="outline"
              className="w-full border-[#2A7C3F] text-[#2A7C3F] flex-col h-auto py-3"
            >
              <Phone className="h-5 w-5 mb-1" />
              <span className="text-xs">Contact</span>
            </Button>
          </a>

          <Button
            variant="outline"
            className="w-full border-[#2A7C3F] text-[#2A7C3F] flex-col h-auto py-3"
          >
            <Share2 className="h-5 w-5 mb-1" />
            <span className="text-xs">Share</span>
          </Button>
        </div>
      </div>

      {/* Educational Content Cards */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-[#2D2416] mb-4">
          Educational Resources
        </h2>

        <div className="space-y-4">
          {educationContent.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={index} className="overflow-hidden">
                <div className={`${item.color} px-4 py-3`}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-white" />
                    <div className="flex-1">
                      <Badge
                        variant="secondary"
                        className="mb-1 bg-white/20 text-white text-xs"
                      >
                        {item.category}
                      </Badge>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.content}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#2D2416] text-sm">
                      Key Tips:
                    </h4>

                    {item.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2A7C3F] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-[#2D2416]">{tip}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#2A7C3F] text-[#2A7C3F]"
                    >
                      <Bookmark className="h-4 w-4 mr-1" />
                      Save Tip
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#2A7C3F] text-[#2A7C3F]"
                    >
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

      {/* Training Videos & Highlights */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#E8F5EC] p-2 rounded-full">
            <Video className="h-5 w-5 text-[#2A7C3F]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2D2416]">
              Training Videos & Highlights
            </h2>
            <p className="text-sm text-muted-foreground">
              Browse CIB-related training videos, industry updates, and social media highlights in a mobile-friendly format.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {videoResources.map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className="relative h-44 bg-cover bg-center"
                style={{ backgroundImage: `url('${video.thumbnail}')` }}
              >
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3">
                    <PlayCircle className="h-10 w-10 text-[#2A7C3F]" />
                  </div>
                </div>

                <Badge className="absolute top-3 left-3 bg-[#F4C430] text-[#2D2416]">
                  {video.category}
                </Badge>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#2D2416] mb-2">
                  {video.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {video.description}
                </p>

                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch Video
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-4 p-4 bg-[#F5F3ED] rounded-xl border border-[#E5E0D3]">
          <p className="text-sm text-[#2D2416] leading-relaxed">
            This section reflects CIB’s original News & Resources structure by including video-style resources, training content, and highlights in a clearer mobile-friendly card layout.
          </p>
        </div>
      </div>

      {/* CIB's Role Section */}
      <div className="px-4 py-6 bg-[#F5F3ED]">
        <Card className="p-6 border-2 border-[#2A7C3F]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#2A7C3F] p-3 rounded-full">
              <Shield className="h-6 w-6 text-white" />
            </div>

            <h2 className="text-xl font-bold text-[#2A7C3F]">
              CIB's Role in Supporting Growers
            </h2>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            The Coconut Industry Board is committed to developing Jamaica's coconut industry through comprehensive grower support.
          </p>

          <div className="space-y-2">
            {cibRole.map((role, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-3 rounded-lg"
              >
                <div className="w-6 h-6 bg-[#E8F5EC] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-[#2A7C3F]">
                    {index + 1}
                  </span>
                </div>

                <span className="text-sm text-[#2D2416]">{role}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="px-4 py-6">
        <Card className="p-6 bg-gradient-to-br from-[#2A7C3F] to-[#1F5D2F] text-white">
          <h3 className="text-xl font-bold mb-2">Ready to Start Growing?</h3>

          <p className="text-white/90 mb-4">
            Register as a grower to access CIB's support programs, seedlings, and training opportunities.
          </p>

          <Link to="/register">
            <Button className="w-full bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]">
              <Sprout className="h-5 w-5 mr-2" />
              Register as a Grower
            </Button>
          </Link>
        </Card>
      </div>

      {/* Contact Support */}
      <div className="px-4 pb-6">
        <Card className="p-4">
          <h3 className="font-semibold text-[#2D2416] mb-3">
            Need More Information?
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            Contact CIB for personalized farming guidance and support.
          </p>

          <div className="space-y-2">
            <a href="tel:18769261771">
              <Button
                variant="outline"
                className="w-full border-[#2A7C3F] text-[#2A7C3F]"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (876) 926-1771
              </Button>
            </a>

            <Link to="/contact">
              <Button
                variant="outline"
                className="w-full border-[#2A7C3F] text-[#2A7C3F]"
              >
                Visit Our Office
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}