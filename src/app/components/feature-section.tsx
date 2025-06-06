"use client";

import { motion } from "framer-motion";
import { Battery, Zap, Shield, Smartphone } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: Battery,
      title: "Long-lasting Battery",
      description:
        "Advanced lithium-ion batteries with up to 70 miles of range on a single charge.",
    },
    {
      icon: Zap,
      title: "Fast Charging",
      description:
        "Quick charge technology gets you back on the road in just 2-4 hours.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Built-in LED lights, reflective strips, and advanced braking systems for maximum safety.",
    },
    {
      icon: Smartphone,
      title: "Smart Connectivity",
      description:
        "Connect to our mobile app for GPS tracking, ride statistics, and remote diagnostics.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-50 to-fuchsia-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose Electric Scotty?
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Experience the perfect blend of performance, style, and
            sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
