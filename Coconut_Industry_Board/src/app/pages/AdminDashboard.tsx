import { PageLayout } from "../components/PageLayout";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MessageCircle, ShoppingBag, UserPlus, Star, Eye, TrendingUp, Calendar, Package } from "lucide-react";

export function AdminDashboard() {
  const stats = [
    { label: "WhatsApp Inquiries", value: "24", change: "+12%", icon: MessageCircle, color: "bg-[#25D366]" },
    { label: "Product Views", value: "1,247", change: "+28%", icon: Eye, color: "bg-[#2A7C3F]" },
    { label: "Grower Registrations", value: "8", change: "+3", icon: UserPlus, color: "bg-[#8B6F47]" },
    { label: "Customer Reviews", value: "142", change: "+5", icon: Star, color: "bg-[#F4C430]" },
  ];

  const recentInquiries = [
    {
      id: 1,
      customer: "Sarah Johnson",
      product: "Coconut Water",
      platform: "WhatsApp",
      time: "10 minutes ago",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Marcus Brown",
      product: "Bulk Order - Coconut Oil",
      platform: "WhatsApp",
      time: "1 hour ago",
      status: "Responded",
    },
    {
      id: 3,
      customer: "Jennifer Campbell",
      product: "Gizzadas",
      platform: "Phone",
      time: "2 hours ago",
      status: "Completed",
    },
  ];

  const registrations = [
    {
      name: "Winston Palmer",
      type: "Individual Grower",
      location: "St. Elizabeth",
      date: "Today",
      status: "Under Review",
    },
    {
      name: "Grace Williams",
      type: "Individual Grower",
      location: "Clarendon",
      date: "Yesterday",
      status: "Approved",
    },
    {
      name: "Green Valley Farms Ltd.",
      type: "Company",
      location: "Manchester",
      date: "2 days ago",
      status: "Under Review",
    },
  ];

  const topProducts = [
    { name: "Coconut Water", views: 342, orders: 28 },
    { name: "Coconut Oil", views: 298, orders: 24 },
    { name: "Jelly Coconuts", views: 187, orders: 16 },
    { name: "Coconut Drops", views: 156, orders: 12 },
    { name: "Gizzadas", views: 143, orders: 11 },
  ];

  const campaignMetrics = [
    { metric: "Instagram Reach", value: "5,420", trend: "+18%" },
    { metric: "Facebook Engagement", value: "2,340", trend: "+24%" },
    { metric: "Campaign Shares", value: "487", trend: "+32%" },
    { metric: "Website Visits", value: "3,891", trend: "+41%" },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2A7C3F] to-[#1F5D2F] text-white px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">CIB Admin Dashboard</h1>
        <p className="text-white/90">Monitor customer engagement, registrations, and campaign performance</p>
      </div>

      {/* Stats Overview */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <h2 className="text-lg font-semibold text-[#2D2416] mb-4">Overview (Last 7 Days)</h2>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-4">
                <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-[#2D2416] mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <Badge variant="outline" className="text-xs border-[#2A7C3F] text-[#2A7C3F]">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent WhatsApp Inquiries */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#2D2416]">Recent Inquiries</h2>
          <Badge className="bg-[#25D366]">
            <MessageCircle className="h-3 w-3 mr-1" />
            Live
          </Badge>
        </div>
        <div className="space-y-3">
          {recentInquiries.map((inquiry) => (
            <Card key={inquiry.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-[#2D2416] text-sm">{inquiry.customer}</h3>
                  <p className="text-xs text-muted-foreground">{inquiry.product}</p>
                </div>
                <Badge 
                  variant={inquiry.status === "Pending" ? "default" : "secondary"}
                  className={inquiry.status === "Pending" ? "bg-[#F4C430] text-[#2D2416]" : ""}
                >
                  {inquiry.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MessageCircle className="h-3 w-3" />
                <span>{inquiry.platform}</span>
                <span>•</span>
                <span>{inquiry.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Grower Registrations */}
      <div className="px-4 py-6 bg-[#F5F3ED]">
        <h2 className="text-lg font-semibold text-[#2D2416] mb-4">Grower Registrations</h2>
        <div className="space-y-3">
          {registrations.map((registration, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-[#2D2416] text-sm">{registration.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Badge variant="outline" className="text-xs">
                      {registration.type}
                    </Badge>
                    <span>{registration.location}</span>
                  </div>
                </div>
                <Badge 
                  variant={registration.status === "Approved" ? "default" : "secondary"}
                  className={registration.status === "Approved" ? "bg-[#2A7C3F]" : ""}
                >
                  {registration.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                <Calendar className="h-3 w-3" />
                <span>{registration.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Products */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold text-[#2D2416] mb-4">Most Viewed Products</h2>
        <div className="space-y-2">
          {topProducts.map((product, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E8F5EC] w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-[#2A7C3F]">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2416] text-sm">{product.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{product.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ShoppingBag className="h-3 w-3" />
                        <span>{product.orders} orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="px-4 py-6 bg-[#E8F5EC]">
        <h2 className="text-lg font-semibold text-[#2D2416] mb-4">Campaign Performance</h2>
        <Card className="p-4 mb-4 border-2 border-[#F4C430]">
          <h3 className="font-semibold text-[#2D2416] mb-2">#ClaimTheFreshness Campaign</h3>
          <p className="text-xs text-muted-foreground mb-3">Active since May 1, 2026</p>
          <div className="grid grid-cols-2 gap-3">
            {campaignMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">{metric.metric}</p>
                <p className="text-lg font-bold text-[#2D2416]">{metric.value}</p>
                <Badge variant="outline" className="text-xs border-[#2A7C3F] text-[#2A7C3F] mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.trend}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Customer Reviews Summary */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-semibold text-[#2D2416] mb-4">Customer Reviews Summary</h2>
        <Card className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Average Rating</p>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-[#F4C430] text-[#F4C430]" />
                <span className="text-2xl font-bold text-[#2D2416]">4.7</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Reviews</p>
              <p className="text-2xl font-bold text-[#2D2416]">142</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-12">5 star</span>
                <div className="flex-1 h-2 bg-[#E8F5EC] rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4C430] w-[78%]" />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">78%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-12">4 star</span>
                <div className="flex-1 h-2 bg-[#E8F5EC] rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4C430] w-[15%]" />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">15%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-12">3 star</span>
                <div className="flex-1 h-2 bg-[#E8F5EC] rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4C430] w-[5%]" />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">5%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-6">
        <Card className="p-6 bg-gradient-to-br from-[#2A7C3F] to-[#1F5D2F] text-white">
          <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg text-sm transition-colors">
              <Package className="h-4 w-4 mx-auto mb-1" />
              Update Products
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg text-sm transition-colors">
              <UserPlus className="h-4 w-4 mx-auto mb-1" />
              Review Registrations
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg text-sm transition-colors">
              <MessageCircle className="h-4 w-4 mx-auto mb-1" />
              View All Inquiries
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg text-sm transition-colors">
              <Star className="h-4 w-4 mx-auto mb-1" />
              Manage Reviews
            </button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
