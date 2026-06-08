import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 text-center lg:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to grow your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join us building Web3 projects that have access to non-dilutive capital through Treezures Labs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" >
              Apply for funding
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className=" bg-transparent" >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
