"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Our Electric Scooters
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Find the perfect electric scooter to match your lifestyle and
              commuting needs.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilter />
            </div>
            <div className="lg:col-span-3">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All Models</TabsTrigger>
                  <TabsTrigger value="commuter">Commuter</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="offroad">Off-Road</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Lite"
                        price={499}
                        image="/placeholder.svg?height=400&width=400"
                        color="Blue"
                        range="25 miles"
                        speed="15 mph"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Pro"
                        price={799}
                        image="/placeholder.svg?height=400&width=400"
                        color="Purple"
                        range="40 miles"
                        speed="22 mph"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Ultra"
                        price={1299}
                        image="/placeholder.svg?height=400&width=400"
                        color="Green"
                        range="60 miles"
                        speed="28 mph"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Fold"
                        price={699}
                        image="/placeholder.svg?height=400&width=400"
                        color="Orange"
                        range="30 miles"
                        speed="18 mph"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Mini"
                        price={399}
                        image="/placeholder.svg?height=400&width=400"
                        color="Teal"
                        range="20 miles"
                        speed="12 mph"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <ProductCard
                        name="Scotty Max"
                        price={1499}
                        image="/placeholder.svg?height=400&width=400"
                        color="Red"
                        range="70 miles"
                        speed="30 mph"
                      />
                    </motion.div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="commuter">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      name="Scotty Lite"
                      price={499}
                      image="/placeholder.svg?height=400&width=400"
                      color="Blue"
                      range="25 miles"
                      speed="15 mph"
                    />
                    <ProductCard
                      name="Scotty Fold"
                      price={699}
                      image="/placeholder.svg?height=400&width=400"
                      color="Orange"
                      range="30 miles"
                      speed="18 mph"
                    />
                    <ProductCard
                      name="Scotty Mini"
                      price={399}
                      image="/placeholder.svg?height=400&width=400"
                      color="Teal"
                      range="20 miles"
                      speed="12 mph"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="performance">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      name="Scotty Pro"
                      price={799}
                      image="/placeholder.svg?height=400&width=400"
                      color="Purple"
                      range="40 miles"
                      speed="22 mph"
                    />
                    <ProductCard
                      name="Scotty Ultra"
                      price={1299}
                      image="/placeholder.svg?height=400&width=400"
                      color="Green"
                      range="60 miles"
                      speed="28 mph"
                    />
                    <ProductCard
                      name="Scotty Max"
                      price={1499}
                      image="/placeholder.svg?height=400&width=400"
                      color="Red"
                      range="70 miles"
                      speed="30 mph"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="offroad">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      name="Scotty Ultra"
                      price={1299}
                      image="/placeholder.svg?height=400&width=400"
                      color="Green"
                      range="60 miles"
                      speed="28 mph"
                    />
                    <ProductCard
                      name="Scotty Max"
                      price={1499}
                      image="/placeholder.svg?height=400&width=400"
                      color="Red"
                      range="70 miles"
                      speed="30 mph"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
