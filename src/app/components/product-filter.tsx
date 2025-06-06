"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 2000])

  return (
    <div className="space-y-6 p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold">Filter Products</h3>

      <div className="space-y-3">
        <h4 className="font-medium">Price Range</h4>
        <Slider value={priceRange} onValueChange={setPriceRange} max={2000} min={0} step={50} className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Range</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="range-20" />
            <Label htmlFor="range-20">Up to 20 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="range-40" />
            <Label htmlFor="range-40">20-40 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="range-60" />
            <Label htmlFor="range-60">40-60 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="range-60plus" />
            <Label htmlFor="range-60plus">60+ miles</Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Speed</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="speed-15" />
            <Label htmlFor="speed-15">Up to 15 mph</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="speed-25" />
            <Label htmlFor="speed-25">15-25 mph</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="speed-30" />
            <Label htmlFor="speed-30">25+ mph</Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Color</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="color-blue" />
            <Label htmlFor="color-blue">Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-purple" />
            <Label htmlFor="color-purple">Purple</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-green" />
            <Label htmlFor="color-green">Green</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color-red" />
            <Label htmlFor="color-red">Red</Label>
          </div>
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
