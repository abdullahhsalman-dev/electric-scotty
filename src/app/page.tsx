import Link from "next/link";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAnimation from "./components/hero-animation";
import ProductCard from "./components/product-card";
import FeatureSection from "./components/feature-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 overflow-hidden">
        <div className=" px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-white font-medium flex items-center gap-1">
                  <Zap className="h-4 w-4" /> New Models Available
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Ride the Future with Electric Scotty
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Experience the thrill of eco-friendly urban mobility with our
                premium electric scooters. Designed for style, built for
                performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90"
                >
                  <Link href="/products">
                    Explore Models <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-purple-600 text-white hover:bg-white/10"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-repeat"></div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Featured Models
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Electric Fleet
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Discover our range of electric scooters designed for every
                lifestyle and need.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProductCard
              name="Scotty Lite"
              price={499}
              image="/placeholder.svg?height=400&width=400"
              color="Blue"
              range="25 miles"
              speed="15 mph"
            />
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
          </div>
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-600 hover:bg-purple-50"
            >
              <Link href="/products">
                View All Models <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Our Riders Say
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Join thousands of satisfied Electric Scotty riders around the
                world.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Chen</h4>
                  <p className="text-sm text-gray-500">San Francisco</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;My Electric Scotty has completely transformed my daily
                commute. It&apos;s fast, reliable, and so much fun to
                ride!&quot;
              </p>
              <div className="flex text-yellow-400 mt-3">{"★".repeat(5)}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-500">Los Angeles</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Love the design and performance! Perfect for city riding
                and the battery life is amazing.&quot;
              </p>
              <div className="flex text-yellow-400 mt-3">{"★".repeat(5)}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jordan Smith</h4>
                  <p className="text-sm text-gray-500">New York</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Best investment I&apos;ve made! Eco-friendly, stylish, and
                saves me so much time getting around the city.&quot;
              </p>
              <div className="flex text-yellow-400 mt-3">{"★".repeat(5)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Join the Electric Revolution?
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Get exclusive offers, eco-friendly tips, and be the first to
                know about new models.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
