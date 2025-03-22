import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TemplateCard } from "@/components/template-card";
import { templates } from "@/utils/template";
import {
  Code,
  Layers,
  Palette,
  Sparkles,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Download,
  Clock,
  Shield,
} from "lucide-react";

export default function Home() {
  const featuredTemplates = templates
    .filter((template) => template.featured)
    .slice(0, 3);
  const recentTemplates = [...templates]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 6);

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

          {/* Floating icons */}
          <div className="absolute top-32 left-[20%] text-primary/20 animate-float">
            <Code size={28} />
          </div>
          <div className="absolute top-40 right-[30%] text-primary/20 animate-float-delayed">
            <Layers size={24} />
          </div>
          <div className="absolute bottom-32 right-[25%] text-primary/20 animate-bounce-slow">
            <Palette size={20} />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                <span>Premium Website Templates</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Find the Perfect Website Template
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Browse our collection of high-quality website templates for any
                project. Modern, responsive, and easy to customize.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="group" asChild>
                  <Link href="/templates" className="inline-flex items-center">
                    Explore Templates
                    <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/categories">View Categories</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4 mt-4 border-t">
                <div>
                  <div className="text-2xl font-bold">{templates.length}+</div>
                  <div className="text-sm text-muted-foreground">Templates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10k+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-lg overflow-hidden border shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>

                {/* Animated dots pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-100"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-200"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-300"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-6 w-full">
                    {featuredTemplates.map((template, index) => (
                      <div
                        key={template.id}
                        className={`bg-background/80 backdrop-blur-sm rounded-md shadow-sm border p-2 transition-all hover:scale-105 ${
                          index === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <div className="w-full h-16 bg-muted/80 rounded-sm flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {template.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Featured Templates
            </h2>
            <p className="text-muted-foreground">
              Our handpicked selection of the best templates
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/templates">View All Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">
              Recently Added
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Check out our latest additions to the template collection
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

          {/* SVG patterns */}
          <svg
            className="absolute top-20 left-[10%] text-primary/10 w-16 h-16 animate-float"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,10 90,90 10,90"
              strokeWidth="8"
              stroke="currentColor"
              fill="none"
            />
          </svg>
          <svg
            className="absolute bottom-20 right-[15%] text-primary/10 w-20 h-20 animate-float-delayed"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="20"
              strokeWidth="8"
              stroke="currentColor"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <Star className="w-3.5 h-3.5 mr-2" />
                <span>Premium Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Why Choose Our Templates?
              </h2>
              <ul className="grid gap-6">
                <li className="flex gap-4 items-start group">
                  <div className="rounded-full p-1.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Responsive Design
                      <span className="ml-2 inline-block w-8 h-px bg-primary/30"></span>
                    </h3>
                    <p className="text-muted-foreground">
                      All templates are fully responsive and work on all devices
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="rounded-full p-1.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Modern Technologies
                      <span className="ml-2 inline-block w-8 h-px bg-primary/30"></span>
                    </h3>
                    <p className="text-muted-foreground">
                      Built with the latest frameworks and best practices
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="rounded-full p-1.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Palette className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Easy Customization
                      <span className="ml-2 inline-block w-8 h-px bg-primary/30"></span>
                    </h3>
                    <p className="text-muted-foreground">
                      Simple to modify and adapt to your specific needs
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Download className="h-4 w-4 text-primary" />
                  <span>Easy Installation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Regular Updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure Code</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative grid grid-cols-2 gap-4 w-full max-w-[500px]">
                <div className="col-span-2 aspect-video bg-muted rounded-lg border shadow-sm overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="aspect-square bg-muted rounded-lg border shadow-sm overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="aspect-square bg-muted rounded-lg border shadow-sm overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Animated dots */}
                <div className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-primary/40 animate-ping"></div>
                <div className="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-primary/40 animate-ping delay-300"></div>
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

          {/* Dots pattern */}
          <div className="absolute inset-0 grid grid-cols-10 gap-4 opacity-10">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary"></div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20"></div>
              <div className="absolute inset-[30%] rounded-full bg-primary/20 animate-pulse"></div>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="w-3.5 h-3.5 mr-2" />
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
                  Explore All Templates
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/categories">View by Category</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Joined by 2,000+ developers
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
