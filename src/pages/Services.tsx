
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const Services = () => {
  const packages = [
    {
      title: "Starter Pack",
      description: "Perfect for new creators looking to boost initial engagement",
      price: 9.99,
      features: [
        "100 Likes",
        "50 Comments",
        "25 Shares"
      ]
    },
    {
      title: "Pro Boost",
      description: "Accelerate your growth with comprehensive interaction package",
      price: 29.99,
      features: [
        "500 Likes",
        "250 Comments",
        "100 Shares",
        "Priority Support"
      ]
    },
    {
      title: "Ultimate Viral",
      description: "Maximize your TikTok potential with our most comprehensive package",
      price: 49.99,
      features: [
        "1000 Likes",
        "500 Comments",
        "250 Shares",
        "Premium Support",
        "Weekly Performance Report"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2A2E3C] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#9b87f5]">
          Choose Your TikTok Boost Package
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className="bg-[#2A2E3C] border-[#7E69AB]/50 transform transition-all hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-[#9b87f5] text-2xl">{pkg.title}</CardTitle>
                <p className="text-gray-300">{pkg.description}</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#9b87f5] mb-4">
                  ${pkg.price}/month
                </div>
                <ul className="space-y-2 text-gray-300">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#9b87f5]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the power of our 3-day free trial. No credit card required. 
            Unlock your TikTok potential and see real growth in just days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
