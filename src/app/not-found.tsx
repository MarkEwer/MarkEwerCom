'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="text-8xl font-bold text-violet-600">404</div>
            <CardTitle className="text-3xl text-gray-900">
              Oops! Page Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-lg text-gray-600">
              Looks like this page went on an unplanned vacation! 🏖️
            </p>
            <p className="text-gray-500">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              But don&apos;t worry, there&apos;s plenty of great content to explore!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-600 hover:bg-violet-700">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
