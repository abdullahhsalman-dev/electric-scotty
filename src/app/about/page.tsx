"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              About Electric Scotty
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Pioneering the future of urban mobility with innovative electric
              scooters.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Founded in 2018, Electric Scotty began with a simple mission: to
                transform urban transportation with stylish, efficient, and
                eco-friendly electric scooters.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our founder, Alex Scotty, was frustrated with the daily commute
                in congested city streets and the environmental impact of
                traditional vehicles. This led to the creation of our first
                prototype in a small garage in San Francisco.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Today, Electric Scotty has grown into a global brand with a
                presence in over 30 countries, but our commitment to
                sustainability and innovation remains unchanged.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden rounded-xl"
            >
              <Image
                src="/bike.avif?height=800&width=1200"
                alt="Electric Scotty team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              The principles that guide everything we do at Electric Scotty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-500">
                We&apos;re committed to reducing carbon emissions and creating
                products that are environmentally responsible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-500">
                We continuously push the boundaries of what&apos;s possible in
                electric mobility technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-500">
                We build products that bring people together and create a
                community of eco-conscious riders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">
              Meet Our Team
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              The passionate individuals behind Electric Scotty.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/bike.avif?height=300&width=300"
                  alt="Alex Scotty"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Scotty</h3>
              <p className="text-purple-600">Founder & CEO</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/bike.avif?height=300&width=300"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-purple-600">CTO</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/bike.avif?height=300&width=300"
                  alt="Marcus Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Marcus Johnson</h3>
              <p className="text-purple-600">Design Director</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/bike.avif?height=300&width=300"
                  alt="Leila Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Leila Patel</h3>
              <p className="text-purple-600">Marketing Director</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Join Our Mission
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                We&apos;re always looking for talented individuals who are
                passionate about sustainable transportation and innovation.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                <Link href="/contact">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
