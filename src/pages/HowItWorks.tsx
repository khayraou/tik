
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Account",
      description: "Sign up for a free account and get instant access to our platform",
      icon: "👤"
    },
    {
      title: "Choose Package",
      description: "Select a boost package that matches your TikTok growth strategy",
      icon: "🚀"
    },
    {
      title: "Boost Interactions",
      description: "Watch as your likes, comments, and shares increase organically",
      icon: "📈"
    },
    {
      title: "Track Progress",
      description: "Monitor your growth with detailed performance insights",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2A2E3C] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#9b87f5]">
          How TikTok Boost Arena Works
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-[#2A2E3C] border-[#7E69AB]/50 text-center transform transition-all hover:scale-105"
            >
              <CardHeader>
                <div className="text-6xl mb-4">{step.icon}</div>
                <CardTitle className="text-[#9b87f5]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-300 text-xl">
            Our platform is designed to help content creators maximize their TikTok potential 
            through strategic interaction exchanges and professional growth tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
