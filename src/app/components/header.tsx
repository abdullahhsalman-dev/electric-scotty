"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
              repeatDelay: 5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Zap className="h-6 w-6 text-purple-600" />
          </motion.div>
          <span className="text-xl font-bold">Electric Scotty</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-purple-600">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-purple-600">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-600">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-purple-600">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Support</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-10">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium transition-colors hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Support
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
