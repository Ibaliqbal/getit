"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { templates } from "@/utils/template";

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    router.push(`/templates/${id}`);
  };

  return (
    <>
      <Button
        variant="outline"
        className="w-full md:w-[260px] justify-between text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center">
          <Search className="mr-2 h-4 w-4" />
          <span>Search templates...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search templates..." />
        <CommandList>
          <CommandEmpty>No templates found.</CommandEmpty>
          <CommandGroup heading="Templates">
            {templates.map((template) => (
              <CommandItem
                key={template.id}
                value={template.id}
                onSelect={() => handleSelect(template.id)}
              >
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-col">
                    <span>{template.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {template.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium">${template.price}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Categories">
            {Array.from(new Set(templates.map((t) => t.category))).map(
              (category) => (
                <CommandItem
                  key={category}
                  value={`category-${category}`}
                  onSelect={() => {
                    setOpen(false);
                    router.push(
                      `/templates?category=${category.toLowerCase()}`
                    );
                  }}
                >
                  <span>{category}</span>
                </CommandItem>
              )
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
