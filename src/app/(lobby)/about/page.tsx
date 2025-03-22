import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Award,
  ArrowRight,
  Sparkles,
  History,
  Lightbulb,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          {/* SVG patterns */}
          <svg
            className="absolute top-20 right-[10%] text-primary/10 w-24 h-24 animate-float"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="8"
              stroke="currentColor"
              fill="none"
            />
          </svg>
          <svg
            className="absolute bottom-20 left-[15%] text-primary/10 w-16 h-16 animate-float-delayed"
            viewBox="0 0 100 100"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              strokeWidth="8"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <Users className="w-3.5 h-3.5 mr-2" />
              <span>Our Story</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About GetIt
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We're on a mission to provide high-quality website templates for
              developers and businesses
            </p>
          </div>

          <div className="grid gap-12 lg:gap-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  <History className="w-3.5 h-3.5 mr-2" />
                  <span>Our Journey</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    GetIt was founded in 2023 with a simple goal: to make web
                    development faster and more accessible for everyone. We
                    noticed that many developers were spending countless hours
                    building the same components and layouts over and over
                    again.
                  </p>
                  <p>
                    Our team of experienced designers and developers decided to
                    create a collection of high-quality, customizable templates
                    that could serve as a starting point for any web project.
                    This would allow developers to focus on the unique aspects
                    of their projects rather than reinventing the wheel.
                  </p>
                  <p>
                    Today, GetIt offers a wide range of templates for various
                    purposes, from simple landing pages to complex e-commerce
                    platforms. Our templates are built with the latest
                    technologies and best practices, ensuring that they are not
                    only beautiful but also performant and accessible.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-muted rounded-lg"></div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary/10 rounded-full animate-pulse delay-300"></div>

                  {/* Animated dots pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-100"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-200"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-300"></div>
                  </div>

                  {/* Timeline dots */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                    <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="absolute top-1/4 right-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>

                    {/* Connecting lines */}
                    <div className="absolute top-[12%] left-[12%] w-[76%] h-[76%] border-2 border-dashed border-primary/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-muted rounded-lg"></div>

                  {/* Target visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-full border-2 border-primary/10 animate-pulse"></div>
                    <div className="absolute w-[60%] h-[60%] rounded-full border-2 border-primary/20 animate-pulse delay-100"></div>
                    <div className="absolute w-[40%] h-[40%] rounded-full border-2 border-primary/30 animate-pulse delay-200"></div>
                    <div className="absolute w-[20%] h-[20%] rounded-full bg-primary/40 animate-pulse delay-300"></div>

                    {/* Direction arrows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 19V5M5 12l7-7 7 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12l7 7 7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  <Target className="w-3.5 h-3.5 mr-2" />
                  <span>Our Purpose</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At GetIt, our mission is to empower developers and
                    businesses to create beautiful, functional websites without
                    starting from scratch. We believe that everyone should have
                    access to high-quality design and code, regardless of their
                    skill level or budget.
                  </p>
                  <p>
                    We're committed to staying at the forefront of web
                    development trends and technologies, ensuring that our
                    templates are always up-to-date and built with the best
                    practices in mind. We also prioritize accessibility and
                    performance, making sure that our templates work well for
                    everyone, on any device.
                  </p>
                  <p>
                    Our goal is to save you time and effort, allowing you to
                    focus on what matters most: creating unique, valuable
                    experiences for your users. Whether you're a freelancer, a
                    startup, or an established business, we're here to help you
                    succeed online.
                  </p>
                </div>

                <div className="pt-4 mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 p-4 rounded-lg border bg-background/50 group hover:border-primary/50 transition-colors">
                    <div className="rounded-full p-1.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Innovation</h3>
                      <p className="text-xs text-muted-foreground">
                        Constantly exploring new technologies and design trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border bg-background/50 group hover:border-primary/50 transition-colors">
                    <div className="rounded-full p-1.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Quality</h3>
                      <p className="text-xs text-muted-foreground">
                        Committed to excellence in design and code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  <Users className="w-3.5 h-3.5 mr-2" />
                  <span>Meet the Team</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Our Team
                </h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground">
                  Our talented team of designers and developers are passionate
                  about creating high-quality templates that help you succeed.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg border bg-background/50 hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-24 h-24 rounded-full bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">Team Member {i + 1}</h3>
                      <p className="text-sm text-muted-foreground">Position</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-muted/60 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-muted/60 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-muted/60 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-70"></div>

          {/* Animated elements */}
          <div className="absolute top-10 left-[10%] animate-float">
            <svg
              className="w-6 h-6 text-primary/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div className="absolute bottom-10 right-[10%] animate-float-delayed">
            <svg
              className="w-8 h-8 text-primary/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20"></div>
              <div className="absolute inset-[30%] rounded-full bg-primary/20 animate-pulse"></div>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              <span>Start Building Today</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Ready to Get Started?
            </h2>
            <p className="max-w-[600px] mx-auto mb-8 text-muted-foreground">
              Browse our collection and find the perfect template for your next
              project. Save time and launch your website faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/templates" className="inline-flex items-center">
                  Explore Templates
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
