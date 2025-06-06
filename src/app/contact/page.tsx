"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h2>
                <p className="text-gray-500 md:text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 lg:pl-10"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-gray-500">123 Electric Avenue, San Francisco, CA 94107</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-gray-500">info@electricscotty.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-500">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-500">Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold tracking-tighter mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.09854887883!2d-122.43913217070312!3d37.77492951405734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a253%3A0x70b8c1b4e71be321!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Find answers to common questions about Electric Scotty.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 mt-12">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">What is the warranty period for Electric Scotty scooters?</h3>
              <p className="text-gray-500">
                All Electric Scotty scooters come with a standard 2-year warranty on the frame and a 1-year warranty on
                electrical components.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">How long does it take to fully charge an Electric Scotty?</h3>
              <p className="text-gray-500">
                Charging time varies by model, but typically ranges from 3-6 hours for a full charge.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-500">
                Yes, we ship to over 30 countries worldwide. Shipping costs and delivery times vary by location.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">Are replacement parts available?</h3>
              <p className="text-gray-500">
                Yes, we offer a full range of replacement parts for all our models. You can order them directly from our
                website or contact our customer service team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
