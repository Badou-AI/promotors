'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-[#161616] py-20">
      <div className="container max-w-3xl">
        <h2 className="font-chakra-petch text-5xl font-bold text-white mb-6">
          REQUEST AN APPOINTMENT ONLINE
        </h2>
        <p className="text-[#EDEDED] mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white uppercase">Your Name</label>
              <Input
                id="name"
                placeholder="Enter Your Name"
                className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060]"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-white uppercase">Your Phone</label>
              <Input
                id="phone"
                placeholder="Enter Your Phone"
                className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060]"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-white uppercase">Select Date</label>
              <Input
                id="date"
                type="date"
                placeholder="Select Date"
                className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060] text-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-white uppercase">Select Time</label>
              <Input
                id="time"
                type="time"
                placeholder="Select Time"
                className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060] text-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-white uppercase">Your Message</label>
            <Textarea
              id="message"
              placeholder="Describe Your Problem"
              className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060] min-h-[100px]"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>
          <Button 
            type="submit"
            className="bg-[#D16527] hover:bg-[#D16527]/90 text-white px-8 py-6"
          >
            SEND
          </Button>
        </form>
      </div>
    </section>
  )
}
