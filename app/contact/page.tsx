"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@treezures.io",
    action: "Send email",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Join our community",
    action: "Open Discord",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Remote-first, Global team",
    action: null,
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have questions about funding, partnerships, or the Treezures ecosystem? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <Card key={method.title}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      {method.action && (
                        <Button variant="link" className="h-auto p-0 text-primary">
                          {method.action}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
                    <p className="mt-2 text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send message"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
