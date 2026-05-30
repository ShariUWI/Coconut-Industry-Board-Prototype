import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Link } from "react-router";
import { Home, ShoppingBag, Phone } from "lucide-react";

export function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-[#E8F5EC] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🥥</span>
            </div>
            <h1 className="text-3xl font-bold text-[#2D2416] mb-2">404</h1>
            <h2 className="text-xl font-semibold text-[#2A7C3F] mb-2">Page Not Found</h2>
            <p className="text-muted-foreground">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F]">
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            
            <Link to="/shop">
              <Button variant="outline" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Browse Products
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline" className="w-full border-[#8B6F47] text-[#8B6F47]">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
