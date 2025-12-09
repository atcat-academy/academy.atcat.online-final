import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, Building2, Plane } from 'lucide-react'

export default function HeroCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            <Plane className="h-4 w-4" />
            <span>Industry-Leading Air Traffic Control Solutions</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Master Air Traffic Control
            <span className="block text-primary mt-2">Your Way</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're an aspiring controller or managing a training organization, 
            we have the perfect solution for your needs.
          </p>
        </div>

        {/* Two-Column CTA Section */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* B2C - ATCAT Academy */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative h-full bg-card border-2 border-border hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 mb-6">
                <GraduationCap className="h-7 w-7" />
              </div>

              {/* Badge */}
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  FOR INDIVIDUALS
                </span>
              </div>

              {/* Content */}
              <h2 className="text-3xl font-playfair-display font-bold mb-4 ">What our students say</h2>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed font-inter ">
                Start your journey to becoming an air traffic controller. 
                Access comprehensive training materials, practice assessments, 
                and expert-designed courses.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <span>Self-paced learning modules</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <span>ATCAT practice tests & simulations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <span>Progress tracking & certification</span>
                </li>
              </ul>

              {/* CTA */}
              <Button asChild size="lg" className="w-full group/btn bg-blue-600 hover:bg-blue-700">
                <Link href="https://academy.atcat.online">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Start learning today • No credit card required
              </p>
            </div>
          </div>

          {/* B2B - Training & Assessment Tools */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative h-full bg-card border-2 border-border hover:border-emerald-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 mb-6">
                <Building2 className="h-7 w-7" />
              </div>

              {/* Badge */}
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  FOR ORGANIZATIONS
                </span>
              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold mb-4">Training & Assessment Tools</h2>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                Empower your training organization with enterprise-grade tools. 
                Manage trainees, create assessments, and track performance at scale.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Custom training program builder</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Team management & analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Compliance & reporting tools</span>
                </li>
              </ul>

              {/* CTA */}
              <Button asChild size="lg" className="w-full group/btn bg-emerald-600 hover:bg-emerald-700">
                <Link href="/business">
                  Take a Tour
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Schedule a personalized demo • Talk to our team
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by training organizations and aspiring controllers worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-muted-foreground font-semibold">10,000+ Students</div>
            <div className="h-8 w-px bg-border" />
            <div className="text-muted-foreground font-semibold">500+ Organizations</div>
            <div className="h-8 w-px bg-border" />
            <div className="text-muted-foreground font-semibold">95% Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

