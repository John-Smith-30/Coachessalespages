import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, Users, TrendingUp, Clock, Target, Zap, Shield } from "lucide-react"
import ApplicationModal from "@/components/application-modal"
import BackToTop from "@/components/back-to-top"
import StickyMobileCTA from "@/components/sticky-mobile-cta"
import TypewriterText from "@/components/typewriter-text"
import ScrollIndicator from "@/components/scroll-indicator"
import FadeInSection from "@/components/fade-in-section"
import LiveCounter from "@/components/live-counter"
import FunnelForm from "@/components/funnel-form"

export default function ClarityMethodSalesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#D72638] rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-[#D72638] rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-[#D72638] rounded-full blur-3xl"></div>
      </div>

      {/* Sticky CTA Bar - Hidden on mobile */}
      <div className="fixed top-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 py-3 px-4 z-50 text-center hidden md:block">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium">
            The Clarity Method™ - Only <LiveCounter /> spots open per quarter
          </span>
          <ApplicationModal>
            <Button
              size="sm"
              className="premium-button bg-[#D72638] hover:bg-white hover:text-[#D72638] hover:border-[#D72638] border border-transparent transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              APPLY NOW
            </Button>
          </ApplicationModal>
        </div>
      </div>

      <ScrollIndicator />

      {/* Hero Section */}
      <FadeInSection>
        <section className="pt-8 md:pt-28 pb-12 md:pb-20 px-4 bg-[#0D0D0D] relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D] to-[#1a0a0a] opacity-80"></div>
          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Hero Content */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="mb-6">
                  <Badge
                    variant="outline"
                    className="mb-4 text-[#D72638] border-[#D72638] text-xs sm:text-sm glow-text animate-fade-in"
                  >
                    PREMIUM 1:1 MENTORSHIP
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                  Build a <span className="text-[#D72638] glow-text">$10K/month</span> business
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>without burning out.
                </h1>

                <div className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  <TypewriterText text="A private 12-week mentorship for solo coaches, consultants, and service providers ready to scale with systems — not chaos." />
                </div>

                <ApplicationModal>
                  <Button
                    size="lg"
                    className="premium-button w-full sm:w-auto bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 uppercase tracking-wider font-medium transition-all duration-300 mb-8 hover:scale-105 hover:shadow-glow animate-pulse-glow"
                  >
                    APPLY FOR COACHING →
                  </Button>
                </ApplicationModal>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 animate-fade-in-delayed">
                  <span className="flex items-center gap-2 hover:text-[#D72638] transition-colors duration-300">
                    <Users className="w-4 h-4 text-[#D72638]" />
                    100+ founders helped
                  </span>
                  <span className="flex items-center gap-2 hover:text-[#D72638] transition-colors duration-300">
                    <Star className="w-4 h-4 text-[#D72638]" />
                    Client revenue: $3M+
                  </span>
                  <span className="flex items-center gap-2 hover:text-[#D72638] transition-colors duration-300">
                    <TrendingUp className="w-4 h-4 text-[#D72638]" />
                    Featured on IndieHackers, X
                  </span>
                </div>
              </div>

              {/* Funnel Form */}
              <div className="lg:col-span-2">
                <FunnelForm className="animate-fade-in-delayed" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Core Problem Section */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#0D0D0D] to-[#1a0a0a] border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 italic text-[#D72638] px-4 glow-text">
              "You didn't quit your job to become your worst boss."
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
              You deserve systems that scale — without selling your soul to hustle culture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <Card className="glass-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D72638]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-3">The Overwork Trap</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    You're working 50+ hour weeks, juggling everything manually, and still hitting income plateaus. The
                    harder you work, the more scattered you feel.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D72638]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-3">
                    The Inconsistency Cycle
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    One month you make $7K, the next it's $2K. You're tired of the feast-or-famine rollercoaster and
                    ready for predictable revenue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Big Promise Section */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 relative bg-[#0D0D0D]">
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent top-0"></div>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#D72638]/10 text-[#D72638] text-xs sm:text-sm px-4 py-2 uppercase tracking-wider border border-[#D72638]/30">
              The Clarity Method™
            </Badge>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 relative inline-block px-4">
              This is the exact roadmap I've used to help 100+ founders go from scattered service provider → structured
              business owner
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              With consistent $8K–$12K months, without the chaos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                { icon: Target, title: "A single, scalable offer", desc: "Stop juggling 5 different services" },
                { icon: Zap, title: "A sales system that fits your energy", desc: "No more pushy tactics or burnout" },
                {
                  icon: TrendingUp,
                  title: "A lead flow without daily content",
                  desc: "Attract clients while you sleep",
                },
                { icon: Shield, title: "SOPs for everything", desc: "Onboarding, delivery, and boundaries" },
                { icon: Clock, title: "25–30 hour work weeks", desc: "More income, less overwhelm" },
                { icon: CheckCircle, title: "No burnout", desc: "Sustainable growth that lasts" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="feature-card text-left bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D72638]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#D72638] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif font-semibold text-[#F5F5F5] mb-2 text-sm sm:text-base group-hover:text-[#D72638] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ApplicationModal>
              <Button
                size="lg"
                className="premium-button w-full sm:w-auto bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                APPLY FOR COACHING →
              </Button>
            </ApplicationModal>
          </div>
        </section>
      </FadeInSection>

      {/* Program Breakdown */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#0D0D0D] to-[#1a0a0a] border-t border-white/10 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative inline-block">
              Your 12-Week Transformation
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <div className="grid gap-6 sm:gap-8 relative">
              {/* Timeline line - hidden on mobile */}
              <div className="absolute left-[20px] md:left-[30px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D72638] via-[#D72638]/50 to-[#D72638] hidden sm:block"></div>

              {[
                {
                  weeks: "WEEK 1–2",
                  title: "Offer Refinement & Pricing Clarity",
                  desc: "Transform your scattered services into one premium, scalable offer that clients actually want to buy.",
                },
                {
                  weeks: "WEEK 3–4",
                  title: "Messaging That Attracts Inbound Leads",
                  desc: "Craft positioning that makes prospects say 'this is exactly what I need' before they even book a call.",
                },
                {
                  weeks: "WEEK 5–6",
                  title: "Creating Your Signature Sales Method",
                  desc: "Build a consultation process that feels natural, converts consistently, and aligns with your values.",
                },
                {
                  weeks: "WEEK 7–8",
                  title: "Building Delivery Systems That Run Smooth",
                  desc: "Create client onboarding and project workflows that wow clients while saving you 10+ hours per week.",
                },
                {
                  weeks: "WEEK 9–10",
                  title: "Thought Leadership & Authority Building",
                  desc: "Position yourself as the go-to expert in your niche without becoming a full-time content creator.",
                },
                {
                  weeks: "WEEK 11–12",
                  title: "Scaling With Ease & Boundaries",
                  desc: "Set up systems for consistent lead flow and premium pricing while protecting your energy and time.",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 relative z-10 timeline-item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0D0D0D] border-2 border-[#D72638] flex items-center justify-center shrink-0 text-xs sm:text-sm font-bold shadow-glow">
                    {index + 1}
                  </div>
                  <Card className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D72638]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-6 sm:p-8">
                      <div>
                        <Badge
                          variant="outline"
                          className="text-[#D72638] border-[#D72638] mb-2 uppercase tracking-wider text-xs"
                        >
                          {phase.weeks}
                        </Badge>
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">{phase.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 p-6 sm:p-8 glass-card bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-4 sm:mb-6">
                What You Get Each Week:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Weekly 1:1 Zoom calls",
                  "Voxer voice/text coaching between sessions",
                  "Templates + custom Notion workspace",
                  "Client copy review / offer audit",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 hover:text-[#D72638] transition-colors duration-300"
                  >
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#D72638] shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Who This Is For */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-[#0D0D0D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative inline-block">
              This Is Perfect For You If...
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[
                "You're a solo coach, consultant, or creative making $2K–$5K/month",
                "You've sold offers but feel stuck, scattered, or manual",
                "You want structure — without becoming a 'full-time marketer'",
                "You're craving clarity, simplicity, and actual business flow",
                "You're ready to invest in premium mentorship (not another course)",
                "You want to work with someone who's been where you are",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 glass-card bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-[#D72638]/50 transition-all duration-300 hover:transform hover:scale-105 checklist-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#D72638] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <ApplicationModal>
                <Button
                  size="lg"
                  className="premium-button w-full sm:w-auto bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  APPLY FOR COACHING →
                </Button>
              </ApplicationModal>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About the Coach */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#0D0D0D] to-[#1a0a0a] border-t border-white/10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 order-1 lg:order-1">
                <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-square glass-card bg-white/5 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
                </div>
              </div>

              <div className="lg:col-span-3 order-2 lg:order-2 text-center lg:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-[#D72638] glow-text">
                  Meet Alex Rivera
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  I built my first $120K/year business with no team, no paid ads, and no chaos. After burning out once,
                  I rebuilt with clarity, structure, and automation — and helped 100+ clients do the same.
                </p>

                <div className="italic font-serif text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 border-l-2 border-[#D72638] pl-4 quote-highlight">
                  "My mission is to help solo service providers build businesses that serve their lives — not consume
                  them."
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { number: "100+", label: "Service businesses coached" },
                    { number: "$3M+", label: "Revenue generated by clients" },
                    { number: "Featured", label: "IndieHackers, Copy MBA" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 glass-card bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-[#D72638]/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-[#D72638] glow-text">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative inline-block">
              What Clients Are Saying
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  quote:
                    "This program helped me double my revenue with half the hours. The clarity I gained changed my business forever.",
                  name: "MELANIE R.",
                  title: "Content Strategist",
                },
                {
                  quote:
                    "It's the only coaching I've done that actually gave me a system, not fluff. Best decision I made this year.",
                  name: "AARON C.",
                  title: "Funnel Consultant",
                },
                {
                  quote:
                    "Alex helped me go from $3K months to consistent $8K months in just 8 weeks. The systems work.",
                  name: "SARAH M.",
                  title: "Brand Designer",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="testimonial-card border-2 border-[#D72638]/30 bg-white/5 backdrop-blur-md hover:border-[#D72638] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-[#D72638] text-[#D72638]" />
                      ))}
                    </div>
                    <p className="font-serif text-gray-200 mb-4 sm:mb-6 italic text-base sm:text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#D72638]/20 border border-[#D72638] flex items-center justify-center text-sm sm:text-base font-bold text-[#D72638]">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#D72638] text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What's Inside */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#0D0D0D] to-[#1a0a0a] border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative inline-block">
              Everything You Get
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <Card className="offer-stack border-2 border-[#D72638] bg-white/5 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#D72638] to-[#D72638]/80 text-white py-3 sm:py-4 px-6 sm:px-8 font-serif text-lg sm:text-xl font-bold">
                YOU'LL GET:
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "12 weekly 1:1 sessions (90 minutes each)",
                      "Notion business dashboard & templates",
                      "Voice memo support (Voxer access)",
                      "All templates and swipe files",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 hover:text-[#D72638] transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#D72638] shrink-0" />
                        <span className="text-sm sm:text-base text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Offer builder + sales SOPs",
                      "Client onboarding system",
                      "Lifetime access to materials",
                      "Email & LinkedIn templates",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 hover:text-[#D72638] transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#D72638] shrink-0" />
                        <span className="text-sm sm:text-base text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 p-6 sm:p-8 border border-[#D72638] rounded-lg text-center glass-card bg-white/5 backdrop-blur-md">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2">Investment</div>
                  <div className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                    Starts at $3,500 – payment plans available
                  </div>
                  <ApplicationModal>
                    <Button
                      size="lg"
                      className="premium-button w-full sm:w-auto bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    >
                      APPLY FOR COACHING →
                    </Button>
                  </ApplicationModal>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeInSection>

      {/* FAQs */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-[#0D0D0D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72638] to-transparent"></span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Will this work for me if I'm not a coach?",
                  answer:
                    "Absolutely. This method works for any solo service provider — consultants, designers, copywriters, strategists, freelancers. The principles of clarity, systems, and scaling apply across all service-based businesses.",
                },
                {
                  question: "What if I'm not at $5K/month yet?",
                  answer:
                    "If you're making at least $2K/month consistently, you're ready. We'll work together to identify what's keeping you stuck and build the systems to break through to your next level.",
                },
                {
                  question: "What if I've already bought courses?",
                  answer:
                    "This isn't another course. It's private 1:1 mentorship tailored specifically to your business. We'll take what you've learned and actually implement it with accountability and personalized guidance.",
                },
                {
                  question: "Is this a group program or 1:1?",
                  answer:
                    "This is completely 1:1 private mentorship. Every session, every template, every piece of feedback is customized for your specific business and goals.",
                },
                {
                  question: "Can I do this with a full-time job?",
                  answer:
                    "Yes, many of my clients start while working full-time. We'll design systems that work with your schedule and help you transition when you're ready.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="faq-item border border-white/10 rounded-lg px-4 sm:px-6 hover:border-[#D72638]/50 transition-all duration-300 glass-card bg-white/5 backdrop-blur-md"
                >
                  <AccordionTrigger className="text-left font-serif py-4 text-base sm:text-lg group min-h-[48px] hover:text-[#D72638] transition-colors duration-300">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-300 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection>
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#0D0D0D] via-[#1a0a0a] to-[#0D0D0D] border-t border-white/10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4 glow-text">
              If you've been stuck in the same revenue loop for months — it's not your skills, it's your systems.
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4">
              Ready to finally systemize your income? This is your path to $10K/month clarity.
            </p>

            <ApplicationModal>
              <Button
                size="lg"
                className="premium-button w-full sm:w-auto bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 mb-6 sm:mb-8 uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow animate-pulse-glow"
              >
                APPLY NOW FOR THE CLARITY METHOD →
              </Button>
            </ApplicationModal>

            <p className="text-sm sm:text-base text-gray-400">
              📆 Only <LiveCounter /> spots open per quarter
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 text-center text-gray-500 border-t border-white/10">
        <p className="text-sm">&copy; 2024 The Clarity Method. All rights reserved.</p>
      </footer>

      {/* Mobile Components */}
      <StickyMobileCTA />
      <BackToTop />
    </div>
  )
}
