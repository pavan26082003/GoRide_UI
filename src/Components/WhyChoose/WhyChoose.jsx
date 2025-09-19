import React from "react";
import { Shield, Clock, DollarSign, Users, MapPin, Headphones } from "lucide-react";
const WhyChoose = () => {
  const features = [
    {
      id: "1",
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description:
        "All our buses are regularly maintained and drivers are thoroughly verified for your safety.",
    },
    {
      id: "2",
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Guarantee",
      description:
        "98% on-time performance with real-time tracking to keep you updated on your journey.",
    },
    {
      id: "3",
      icon: <DollarSign className="w-8 h-8" />,
      title: "Best Prices",
      description:
        "Competitive pricing with no hidden charges. Get the best deals for your travel.",
    },
    {
      id: "4",
      icon: <Users className="w-8 h-8" />,
      title: "Comfortable Seating",
      description:
        "Premium comfortable seats with extra legroom and reclining options for a pleasant journey.",
    },
    {
      id: "5",
      icon: <MapPin className="w-8 h-8" />,
      title: "Wide Network",
      description:
        "Extensive route network covering major cities and towns across the country.",
    },
    {
      id: "6",
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you with bookings and travel queries.",
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-gray-500">
            Why Choose GoRide?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing you with the best travel experience
            with our reliable services and customer-first approach
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="card-feature animate-fade-in-up bg-gray-200  rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-card-gradient rounded-2xl p-8 shadow-medium text-gray-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                1M+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Routes</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-muted-foreground">On-Time Rate</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose
;
