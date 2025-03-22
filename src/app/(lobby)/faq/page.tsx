import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of templates do you offer?",
      answer:
        "We offer a wide range of templates including landing pages, e-commerce sites, portfolios, blogs, dashboards, and business websites. All our templates are built with modern technologies like Next.js, React, and Tailwind CSS.",
    },
    {
      question: "Can I customize the templates?",
      answer:
        "Yes, all our templates are fully customizable. You can modify colors, fonts, layouts, and functionality to match your specific needs. The templates are built with clean, well-documented code to make customization straightforward.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee. If you're not satisfied with your purchase, you can request a refund within 14 days of the purchase date. Please contact our support team to initiate the refund process.",
    },
    {
      question: "What license do the templates come with?",
      answer:
        "Our templates come with either a Standard or Extended license. The Standard license allows you to use the template for a single project, while the Extended license allows for multiple projects and commercial applications. You can find the specific license details on each template's page.",
    },
    {
      question: "Do you provide support for the templates?",
      answer:
        "Yes, we provide technical support for all our templates. If you encounter any issues or have questions about implementation, you can contact our support team through the contact page or by emailing support@getit.com.",
    },
    {
      question: "How often are templates updated?",
      answer:
        "We regularly update our templates to ensure they remain compatible with the latest technologies and best practices. Major updates are typically released quarterly, with minor updates and bug fixes released as needed.",
    },
    {
      question: "Can I use the templates for client projects?",
      answer:
        "Yes, you can use our templates for client projects. If you plan to use a template for multiple clients, you'll need to purchase the Extended license. The Standard license is suitable for a single client project.",
    },
    {
      question: "Do you offer custom template development?",
      answer:
        "Yes, we offer custom template development services. If you need a specialized template that isn't available in our collection, please contact us with your requirements, and we'll provide a quote for custom development.",
    },
  ];

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about our templates and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
