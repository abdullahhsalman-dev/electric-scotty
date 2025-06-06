"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  color: string;
  range: string;
  speed: string;
}

export default function ProductCard({
  name,
  price,
  image,
  color,
  range,
  speed,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain p-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-purple-600/10 flex items-center justify-center"
        >
          <Button
            size="sm"
            className="bg-white text-purple-600 hover:bg-gray-50"
          >
            Quick View
          </Button>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {color}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>Range: {range}</span>
          <span>Speed: {speed}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${price}</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </motion.div>
  );
}
