import Link from "next/link";
import { Button } from "@/components/ui/button";
import { templates } from "@/utils/template";

export default function CategoriesPage() {
  const categories = Array.from(new Set(templates.map((t) => t.category)));

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Template Categories
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Browse our templates by category to find the perfect match for
              your project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const count = templates.filter(
                (t) => t.category === category
              ).length;

              return (
                <Link
                  key={category}
                  href={`/templates?category=${category.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{category}</h2>
                    <p className="text-muted-foreground mb-4">
                      {count} template{count !== 1 ? "s" : ""}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Browse {category}
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
