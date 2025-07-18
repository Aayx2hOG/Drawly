import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Pen,
  Square,
  Circle,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Download,
  Star,
  Github,
  Twitter,
  Play,
  Check,
  Sparkles,
  Palette,
  MousePointer,
  Share2
} from 'lucide-react';
import { ModeToggle } from '@/theme-toggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-800">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Pen className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Drawly</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Sparkles className="mr-1 h-3 w-3" />
              New: Real-time collaboration
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Draw, Design, and
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Collaborate
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              The ultimate drawing and diagramming tool for teams. Create beautiful sketches, wireframes,
              and diagrams with an intuitive interface that feels natural.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Start Drawing
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
              </div>
              <div>•</div>
              <div>10,000+ users</div>
              <div>•</div>
              <div>Free & Open Source</div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-card p-2 shadow-2xl ring-1 ring-border">
              <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Drawing Tools</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: Pen, label: 'Pen', active: true },
                        { icon: Square, label: 'Rectangle', active: false },
                        { icon: Circle, label: 'Circle', active: false },
                        { icon: ArrowRight, label: 'Arrow', active: false },
                      ].map(({ icon: Icon, label, active }) => (
                        <div
                          key={label}
                          className={`flex items-center space-x-2 rounded-lg p-3 transition-colors ${active
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'bg-background text-muted-foreground border border-border hover:bg-muted/50'
                            }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="aspect-video rounded-lg bg-background border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
                      <div className="relative z-10 text-center">
                        <MousePointer className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground font-medium">Interactive Canvas</p>
                        <p className="text-sm text-muted-foreground/70">Draw, sketch, and create</p>
                      </div>

                      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-blue-200/50"></div>
                      <div className="absolute bottom-6 right-6 w-8 h-20 bg-purple-200/50 rounded"></div>
                      <div className="absolute top-1/2 left-1/3 w-24 h-1 bg-border rounded transform -rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to create
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed for both beginners and professionals
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Palette,
                  title: 'Intuitive Drawing',
                  description: 'Natural drawing experience with pressure-sensitive tools and smooth curves.',
                },
                {
                  icon: Users,
                  title: 'Real-time Collaboration',
                  description: 'Work together with your team in real-time. See changes as they happen.',
                },
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  description: 'Optimized performance ensures smooth drawing even with complex diagrams.',
                },
                {
                  icon: Share2,
                  title: 'Easy Sharing',
                  description: 'Share your creations with a simple link or export in multiple formats.',
                },
                {
                  icon: Shield,
                  title: 'Privacy First',
                  description: 'Your data stays private. Work offline or choose where to store your files.',
                },
                {
                  icon: Download,
                  title: 'Export Anywhere',
                  description: 'Export to PNG, SVG, PDF, or copy to clipboard with one click.',
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for you and your team
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="border-2 border-border shadow-sm">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">
                    Perfect for personal use and small projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Unlimited drawings',
                    'Basic export options',
                    'Community support',
                    'Up to 3 collaborators',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-8" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">
                    For teams and professional use
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Everything in Free',
                    'Unlimited collaborators',
                    'Advanced export options',
                    'Priority support',
                    'Custom templates',
                    'Version history',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start creating?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of creators who trust Drawly for their visual communication needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                Start Drawing Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <Pen className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">Drawly</span>
              </div>
              <p className="text-gray-400 max-w-md">
                The ultimate drawing and diagramming tool for teams. Create, collaborate, and share your ideas visually.
              </p>
              <div className="flex space-x-4 mt-6">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Drawly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;