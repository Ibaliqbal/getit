"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/icon";
import { templates } from "@/utils/template";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="link">
          <Menu />
          <span className="sr-only">Hamburger</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-10">
        <Link
          href={"/"}
          className="text-xl font-semibold flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Logo />
          GetIt
        </Link>
        <ScrollArea className="pb-10 h-[calc(100dvh - 9rem)] my-6">
          <section className="pr-3">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="home">
                <AccordionTrigger>Home</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    <Link href="/about" onClick={() => setOpen(false)}>
                      About
                    </Link>
                    <Link
                      href="/threads/popular"
                      onClick={() => setOpen(false)}
                    >
                      Popular Threads
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="templates">
                <AccordionTrigger>Templates</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {templates.slice(0, 6).map((template) => (
                      <Link
                        href={`/templates/${encodeURIComponent(template.name)}`}
                        onClick={() => setOpen(false)}
                        key={template.name.toLocaleLowerCase()}
                      >
                        {template.name}
                      </Link>
                    ))}
                    <Link href="/templates" onClick={() => setOpen(false)}>
                      Explore more templates
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
