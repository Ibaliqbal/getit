"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { templates } from "@/utils/template";
import {
  LayoutDashboard,
  Layers,
  Palette,
  Code,
  ShoppingCart,
  BookOpen,
  FileText,
  ArrowRight,
} from "lucide-react";

// Get 5 template categories for the menu
const templateCategories = [
  {
    title: "Landing Page",
    href: "/templates?category=landing",
    description: "Professional landing pages for products and services.",
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    title: "E-Commerce",
    href: "/templates?category=ecommerce",
    description:
      "Complete online store templates with product listings and checkout.",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
  },
  {
    title: "Portfolio",
    href: "/templates?category=portfolio",
    description: "Showcase your work with these elegant portfolio templates.",
    icon: <Layers className="h-4 w-4 mr-2" />,
  },
  {
    title: "Blog",
    href: "/templates?category=blog",
    description: "Share your content with these well-designed blog templates.",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    title: "Dashboard",
    href: "/templates?category=dashboard",
    description:
      "Admin dashboards with charts, tables, and data visualization.",
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
];

const categories = Array.from(new Set(templates.map((t) => t.category)));

export function MainNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      GetIt Templates
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      High-quality website templates for developers and
                      businesses
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/#featured"
                title="Featured Templates"
                icon={<Palette className="h-4 w-4 mr-2" />}
              >
                Our handpicked selection of the best templates
              </ListItem>
              <ListItem
                href="/#recent"
                title="Recently Added"
                icon={<Code className="h-4 w-4 mr-2" />}
              >
                Check out our latest additions to the collection
              </ListItem>
              <ListItem
                href="/about"
                title="About Us"
                icon={<BookOpen className="h-4 w-4 mr-2" />}
              >
                Learn more about our team and mission
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {templateCategories.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
              <ListItem
                title="Explore Templates"
                href="/templates"
                icon={<ArrowRight className="h-4 w-4 mr-2" />}
              >
                Browse our complete collection of templates
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.slice(0, 5).map((category) => {
                const count = templates.filter(
                  (t) => t.category === category
                ).length;
                return (
                  <ListItem
                    key={category}
                    title={category}
                    href={`/templates?category=${category.toLowerCase()}`}
                    icon={<Layers className="h-4 w-4 mr-2" />}
                  >
                    {count} template{count !== 1 ? "s" : ""}
                  </ListItem>
                );
              })}
              <ListItem
                title="All Categories"
                href="/categories"
                icon={<ArrowRight className="h-4 w-4 mr-2" />}
              >
                Browse all template categories
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
