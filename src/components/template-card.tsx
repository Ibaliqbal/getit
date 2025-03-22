import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
      <div className="aspect-video overflow-hidden">
        <Image
          src={template.image || "/placeholder.svg"}
          alt={template.name}
          width={600}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-1.5 p-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{template.category}</Badge>
          {template.featured && <Badge variant="outline">Featured</Badge>}
        </div>
        <h3 className="font-semibold tracking-tight text-lg mt-2">
          {template.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {template.description}
        </p>
      </div>
      <div className="flex items-center justify-between p-4 pt-0 mt-auto">
        <div className="font-medium">${template.price}</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/templates/${template.id}`}>View</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
