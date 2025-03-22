import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { templates } from "@/utils/template";
import { notFound } from "next/navigation";

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    notFound();
  }

  const relatedTemplates = templates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col gap-2 mb-8">
          <Link
            href="/templates"
            className="text-sm text-muted-foreground hover:underline flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Templates
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter">
            {template.name}
          </h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{template.category}</Badge>
            {template.featured && <Badge variant="outline">Featured</Badge>}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border overflow-hidden">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                width={900}
                height={500}
                className="w-full aspect-video object-cover"
              />
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              </TabsList>
              <TabsContent
                value="overview"
                className="p-4 border rounded-lg mt-4"
              >
                <div className="prose max-w-none">
                  <p>{template.description}</p>
                  <p>
                    This template is perfect for{" "}
                    {template.category.toLowerCase()} websites. It comes with a
                    clean, modern design that's fully responsive and easy to
                    customize to your specific needs.
                  </p>
                  <p>
                    Whether you're a beginner or an experienced developer,
                    you'll find this template straightforward to work with and
                    adapt to your project requirements.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="features"
                className="p-4 border rounded-lg mt-4"
              >
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fully responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dark and light mode support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Customizable components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>SEO optimized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Performance optimized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Accessibility compliant</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="tech" className="p-4 border rounded-lg mt-4">
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Next.js 14</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">shadcn/ui</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Responsive</Badge>
                      <Badge variant="outline">Dark Mode</Badge>
                      <Badge variant="outline">Accessible</Badge>
                      <Badge variant="outline">SEO Optimized</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid sm:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <div className="bg-muted aspect-video"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold">${template.price}</div>
                <Badge variant="secondary">{template.license}</Badge>
              </div>
              <div className="space-y-4">
                <Button className="w-full">Download Template</Button>
                <Button variant="outline" className="w-full">
                  Live Preview
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Downloads</span>
                  <span>{template.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Released</span>
                  <span>
                    {new Date(template.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span>
                    {new Date(template.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Version</span>
                  <span>{template.version}</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-4">Author</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <div className="font-medium">{template.author}</div>
                  <div className="text-sm text-muted-foreground">
                    Template Designer
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Related Templates</h3>
              <div className="grid gap-4">
                {relatedTemplates.map((related) => (
                  <Link
                    key={related.id}
                    href={`/templates/${related.id}`}
                    className="flex gap-3 items-center border rounded-lg p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-16 h-12 bg-muted rounded"></div>
                    <div>
                      <div className="font-medium">{related.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ${related.price}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
