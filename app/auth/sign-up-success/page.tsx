import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 pt-24">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>We've sent you a confirmation link</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm text-muted-foreground">
              Please check your email and click the confirmation link to complete your registration. Once confirmed,
              you'll be able to access your dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
