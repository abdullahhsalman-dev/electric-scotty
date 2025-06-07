"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src="/bike.avif?height=1000&width=1000"
          alt="Electric Scotty Scooter"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Animated elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-[20%] left-[10%] h-16 w-16 rounded-full bg-purple-300/30 backdrop-blur-sm flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-center"
        >
          <div className="font-bold text-purple-700">40+</div>
          <div className="text-xs">Mile Range</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-[60%] right-[15%] h-16 w-16 rounded-full bg-fuchsia-300/30 backdrop-blur-sm flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="text-center"
        >
          <div className="font-bold text-fuchsia-700">25</div>
          <div className="text-xs">MPH</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-[20%] left-[20%] h-16 w-16 rounded-full bg-violet-300/30 backdrop-blur-sm flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="text-center"
        >
          <div className="font-bold text-violet-700">2hr</div>
          <div className="text-xs">Charge</div>
        </motion.div>
      </motion.div>

      {/* Sparkle effects */}
      <SparkleEffect />
    </div>
  );
}

function SparkleEffect() {
  const sparkles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: sparkle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 3 + 1,
          }}
          className="absolute rounded-full bg-white"
          style={{
            height: sparkle.size,
            width: sparkle.size,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${
              sparkle.size / 2
            }px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </>
  );
}
