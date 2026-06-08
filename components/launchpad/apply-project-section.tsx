"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, FileText } from "lucide-react"

export function ApplyProjectSection() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    projectName: "",
    projectEmail: "",
    tokenSymbol: "",
    description: "",
    website: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setFormData({
      projectName: "",
      projectEmail: "",
      tokenSymbol: "",
      description: "",
      website: "",
    })
    setOpen(false)
  }

  return (
    <section className="border-t border-border/40 bg-gradient-to-br from-primary/5 via-transparent to-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Card className="border-primary/20">
          <CardContent className="p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Launch Your Project</h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Are you a blockchain project looking to raise capital? Apply to launch your token on TRZ Launchpad and
                  access our engaged community of supporters.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Funding up to $5M</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Access to 50,000+ verified participants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Marketing & technical support</span>
                  </li>
                </ul>
              </div>

              {/* Right CTA */}
              <div className="flex-shrink-0">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="gap-2">
                      Apply Now
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Apply to TRZ Launchpad</DialogTitle>
                      <DialogDescription>
                        Submit your project details for review. Our team will evaluate your application within 48-72
                        hours.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Project Name */}
                      <div className="space-y-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input
                          id="projectName"
                          name="projectName"
                          placeholder="e.g. OryaSwap"
                          value={formData.projectName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Token Symbol */}
                      <div className="space-y-2">
                        <Label htmlFor="tokenSymbol">Token Symbol</Label>
                        <Input
                          id="tokenSymbol"
                          name="tokenSymbol"
                          placeholder="e.g. ORYA"
                          value={formData.tokenSymbol}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="projectEmail">Contact Email</Label>
                        <Input
                          id="projectEmail"
                          name="projectEmail"
                          type="email"
                          placeholder="team@project.com"
                          value={formData.projectEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Website */}
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="https://project.com"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Tell us about your project in 100-500 words..."
                          value={formData.description}
                          onChange={handleChange}
                          rows={5}
                          required
                        />
                      </div>

                      {/* Disclaimer */}
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/40">
                        <p className="text-xs text-muted-foreground">
                          By submitting this application, you agree to our terms and represent that your project
                          complies with all applicable laws and regulations. TRZ reserves the right to reject any
                          application at our discretion.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
