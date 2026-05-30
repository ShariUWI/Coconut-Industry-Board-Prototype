import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { Sprout, User, MapPin, BarChart3, CheckCircle, Phone, Mail, Save } from "lucide-react";

const steps = [
  { id: 1, name: "Grower Type", icon: User },
  { id: 2, name: "Personal Info", icon: User },
  { id: 3, name: "Contact Details", icon: Phone },
  { id: 4, name: "Property Info", icon: MapPin },
  { id: 5, name: "Production Info", icon: BarChart3 },
  { id: 6, name: "Review & Submit", icon: CheckCircle },
];

export function GrowerRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [growerType, setGrowerType] = useState<"individual" | "company" | null>(null);

  const progress = ((currentStep + 1) / steps.length) * 100;

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
            <Sprout className="h-8 w-8 text-[#2A7C3F]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Register as a Coconut Grower</h1>
        </div>
        <p className="text-white/90 leading-relaxed">
          Complete your registration in simple steps. This helps CIB support growers with guidance, planting material, and industry updates.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-4 border-b border-border sticky top-[57px] z-10">
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#2D2416]">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <p className="text-sm text-[#8B6F47] font-medium">{steps[currentStep].name}</p>
      </div>

      {/* Step Indicators */}
      <div className="px-4 py-4 bg-[#F5F3ED]">
        <div className="flex justify-between gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center min-w-[60px]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors ${
                    isCompleted
                      ? "bg-[#2A7C3F] text-white"
                      : isCurrent
                      ? "bg-[#F4C430] text-[#2D2416]"
                      : "bg-white border-2 border-border text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-center text-muted-foreground">{step.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="px-4 py-6">
        {currentStep === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Select Grower Type</h2>
            
            <button
              onClick={() => setGrowerType("individual")}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                growerType === "individual"
                  ? "border-[#2A7C3F] bg-[#E8F5EC]"
                  : "border-border bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#2A7C3F] p-3 rounded-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2D2416] mb-1">Individual Grower</h3>
                  <p className="text-sm text-muted-foreground">
                    Register as a private individual farmer or smallholder grower
                  </p>
                </div>
                {growerType === "individual" && (
                  <Badge className="bg-[#2A7C3F]">Selected</Badge>
                )}
              </div>
            </button>

            <button
              onClick={() => setGrowerType("company")}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                growerType === "company"
                  ? "border-[#2A7C3F] bg-[#E8F5EC]"
                  : "border-border bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#8B6F47] p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2D2416] mb-1">Company / Organization</h3>
                  <p className="text-sm text-muted-foreground">
                    Register as a registered company, cooperative, or farming organization
                  </p>
                </div>
                {growerType === "company" && (
                  <Badge className="bg-[#2A7C3F]">Selected</Badge>
                )}
              </div>
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Personal Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>

            {growerType === "company" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" placeholder="Enter company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Registration Number</Label>
                  <Input id="registrationNumber" placeholder="Company registration number" />
                </div>
              </>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Contact Details</h2>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="(876) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Mailing Address *</Label>
              <Input id="address" placeholder="Street address" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parish">Parish *</Label>
                <Input id="parish" placeholder="Select parish" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" placeholder="Code" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Property Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="farmLocation">Farm Location *</Label>
              <Input id="farmLocation" placeholder="Farm address or location" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="farmSize">Farm Size (acres) *</Label>
              <Input id="farmSize" type="number" placeholder="Enter size in acres" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ownership">Land Ownership Status</Label>
              <select 
                id="ownership" 
                className="w-full p-2 border border-border rounded-lg bg-input-background"
              >
                <option value="">Select ownership type</option>
                <option value="owned">Owned</option>
                <option value="leased">Leased</option>
                <option value="family">Family Land</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Production Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="coconutTrees">Number of Coconut Trees</Label>
              <Input id="coconutTrees" type="number" placeholder="Approximate number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="varieties">Coconut Varieties Grown</Label>
              <Input id="varieties" placeholder="e.g., Tall, Dwarf, Hybrid" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearStarted">Year Started Growing</Label>
              <Input id="yearStarted" type="number" placeholder="YYYY" />
            </div>

            <div className="space-y-2">
              <Label>Main Products</Label>
              <div className="space-y-2">
                {["Fresh Coconuts", "Coconut Water", "Copra", "Seedlings", "Other"].map((product) => (
                  <label key={product} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">{product}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2D2416] mb-4">Review & Submit</h2>
            
            <Card className="p-4 bg-[#E8F5EC]">
              <h3 className="font-semibold text-[#2A7C3F] mb-3">Registration Summary</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Grower Type:</strong> {growerType === "individual" ? "Individual" : "Company"}</p>
                <p><strong>Status:</strong> Ready to Submit</p>
                <p className="text-muted-foreground pt-2">
                  Please review all information before submitting. You can save your progress and continue later if needed.
                </p>
              </div>
            </Card>

            <div className="bg-[#FFF8E1] border border-[#F4C430] rounded-lg p-4">
              <h4 className="font-semibold text-[#2D2416] mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>CIB will review your registration</li>
                <li>You'll receive confirmation within 3-5 business days</li>
                <li>Access to grower resources and support programs</li>
                <li>Updates on seedlings and training opportunities</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="px-4 pb-6 space-y-3">
        {currentStep < steps.length - 1 ? (
          <>
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === 0 && !growerType}
              className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F] h-12"
            >
              Continue to Next Step
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-[#8B6F47] text-[#8B6F47]"
            >
              <Save className="h-4 w-4 mr-2" />
              Save and Continue Later
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-[#2A7C3F] hover:bg-[#1F5D2F] h-12"
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            Submit Registration
          </Button>
        )}

        {currentStep > 0 && (
          <Button
            variant="ghost"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="w-full text-[#8B6F47]"
          >
            ← Back to Previous Step
          </Button>
        )}
      </div>

      {/* Help Card */}
      <div className="px-4 pb-6">
        <Card className="p-4 border-2 border-[#F4C430]">
          <h3 className="font-semibold text-[#2D2416] mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Contact CIB if you have questions about the registration process.
          </p>
          <div className="flex gap-2">
            <a href="tel:18769261771" className="flex-1">
              <Button variant="outline" size="sm" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
                <Phone className="h-4 w-4 mr-2" />
                Call CIB
              </Button>
            </a>
            <a href="mailto:cocindbrd@cibja.com" className="flex-1">
              <Button variant="outline" size="sm" className="w-full border-[#2A7C3F] text-[#2A7C3F]">
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
