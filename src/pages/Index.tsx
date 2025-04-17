
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2A2E3C] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#9b87f5]">
            Boost Your TikTok Interactions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Exchange and amplify your TikTok presence with our professional interaction marketplace
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button variant="default" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              Start 3-Day Free Trial
            </Button>
            <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF]/20">
              Learn How It Works
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#2A2E3C] border-[#7E69AB]/50">
            <CardHeader>
              <CardTitle className="text-[#9b87f5]">Interaction Exchange</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Seamlessly trade likes, views, and engagements to grow your TikTok presence
            </CardContent>
          </Card>
          
          <Card className="bg-[#2A2E3C] border-[#7E69AB]/50">
            <CardHeader>
              <CardTitle className="text-[#9b87f5]">Professional Marketplace</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              A curated platform designed to help content creators expand their reach
            </CardContent>
          </Card>
          
          <Card className="bg-[#2A2E3C] border-[#7E69AB]/50">
            <CardHeader>
              <CardTitle className="text-[#9b87f5]">Flexible Packages</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Choose from various interaction packages tailored to your growth strategy
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
