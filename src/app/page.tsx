import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectorDropdown } from '@/components/SectorDropdown';
import { CheckCircle, DraftingCompass, Gauge, Megaphone, TrendingUp, FileSignature, Inbox, ArrowRight } from 'lucide-react';


//hhhh
const testimonials = [
  {
    name: 'Dr. Thando Molefe',
    title: 'Lead Pastor',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote: 'As a church, Surveyr allows us to meet our congregation where they are. Since we onboarded Surveyr, it has helped us increase our engagement by over 300%!',
  },
  {
    name: 'Rev. Unundo Mateo',
    title: 'Event Coordinator',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote: 'It has been a pleasure to work with Surveyr. The platform is robust, very reliable and easily handles surveys with over fifty thousand people.',
  },
  {
    name: 'Mark Lieshere',
    title: 'Business Owner',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote: "Surveyr is our go-to tool for managing company events. It has been a game-changer for our business. Highly recommended.",
  },
];

const features = [
    { Icon: DraftingCompass, title: "Intuitive Survey Builder", description: "Create engaging and interactive surveys in minutes with our easy-to-use survey builder." },
    { Icon: Gauge, title: "Boosting live Events", description: "Increase audience engagement and participation with live polls, Q&As, and real-time feedback." },
    { Icon: Megaphone, title: "WhatsApp Broadcast", description: "Reach a wider audience with targeted WhatsApp broadcasts for announcements and promotions." },
    { Icon: TrendingUp, title: "Sentiment Analysis", description: "Gain valuable insights from customer feedback with our advanced sentiment analysis tools." },
    { Icon: FileSignature, title: "ChatGPT Report Authoring", description: "Generate detailed and insightful reports from your survey data with the power of ChatGPT." },
    { Icon: Inbox, title: "TeamBox", description: "Manage all your survey responses and team collaboration in one centralized inbox." },
];

const pricingTiers = [
    {
        name: "Free",
        price: "$0/mo",
        features: ["1 Active Survey", "100 Responses", "1 Seat", "24-hour Power Down", "Email support"],
        buttonText: "Start For Free",
        buttonVariant: "outline",
    },
    {
        name: "Basic",
        price: "R800 p/m",
        features: ["Everything in Free plus:", "Multiple Active Surveys", "2,500 Responses", "3 Seats / Survey", "1 Custom Survey", "Sentiment Analysis", "AI-assisted Survey"],
        buttonText: "Buy Now",
        buttonVariant: "outline",
    },
    {
        name: "Pro",
        price: "R1500 p/m",
        features: ["Everything in Basic plus:", "10,000 Responses", "5 Seats / Survey", "Custom Onboarding", "Sentiment Analysis", "Survey Data Download", "2022 Post-event Survey", "GenAI Prompts"],
        buttonText: "Buy Now",
        buttonVariant: "default",
        popular: true
    },
    {
        name: "Enterprise",
        price: "On request",
        features: ["Everything in Pro plus:", "Unlimited Responses", "Custom Seats / Survey", "Priority Support", "Dedicated Success Manager", "Custom SLAs", "Custom Integrations"],
        buttonText: "Contact Us",
        buttonVariant: "outline",
    }
];

const faqItems = [
    { question: "What is Surveyr?", answer: "Surveyr is a WhatsApp-driven platform for engaging customer chats, capturing leads, collecting valuable feedback, and boosting live events." },
    { question: "How can Surveyr help my business or organization?", answer: "Surveyr helps you connect with your audience on a platform they use daily, increasing engagement, gathering insights, and improving communication." },
    { question: "Can I integrate Surveyr with other business tools?", answer: "Yes, our Enterprise plan offers custom integrations with your existing business tools and systems." },
    { question: "What types of surveys can I create with Surveyr?", answer: "You can create a wide variety of surveys, from simple polls and quizzes to detailed feedback forms and market research questionnaires." },
    { question: "How secure is the data we collect through Surveyr?", answer: "We take data security very seriously. All data is encrypted and stored securely, and we comply with all relevant data protection regulations." },
    { question: "What support options are available if I need help using Surveyr?", answer: "We offer email support for all our users. Our Pro and Enterprise plans include priority support and a dedicated success manager." },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
       <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2">
                        <Image src="https://ik.imagekit.io/qamfbdbzl/surveyr-logo-small.fc888627a6e32ae314b0.png" alt="Surveyr Logo" width={130} height={32} />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                    <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link>
                    <Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                    <Link href="#use-cases" className="text-muted-foreground hover:text-foreground">Use Cases</Link>
                    <Link href="/contact-us" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Try for free</Link>
                    </Button>
                </div>
            </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background pt-12 pb-20 md:pt-16 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground !leading-tight">
                  Supercharge your conversations with <span className="text-white bg-primary px-2 rounded-md">Surveyr</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mt-6">
                  A WhatsApp driven platform for engaging customer chats, <span className="highlight">capturing leads</span>, <span className="highlight">collecting valuable feedback</span> and <span className="highlight">boosting live events</span>.
                </p>
                <div className="mt-8">
                  <SectorDropdown />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <Image
                  src="https://ik.imagekit.io/qamfbdbzl/ChatGPT%20Image%20Jul%2031,%202025,%2006_17_30%20AM.png"
                  alt="Surveyr Platform Illustration"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-muted-foreground font-medium mb-6">Trusted by these organisations</h3>
                <div className="flex justify-center items-center gap-12 flex-wrap">
                    <Image src="https://placehold.co/150x50.png" alt="Client Logo 1" width={150} height={50} data-ai-hint="company logo" className="opacity-60" />
                    <Image src="https://placehold.co/150x50.png" alt="Client Logo 2" width={150} height={50} data-ai-hint="company logo" className="opacity-60" />
                    <Image src="https://placehold.co/150x50.png" alt="Client Logo 3" width={150} height={50} data-ai-hint="company logo" className="opacity-60" />
                    <Image src="https://placehold.co/150x50.png" alt="Client Logo 4" width={150} height={50} data-ai-hint="company logo" className="opacity-60" />
                    <Image src="https://placehold.co/150x50.png" alt="Client Logo 5" width={150} height={50} data-ai-hint="company logo" className="opacity-60" />
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">What our clients are saying about us</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-secondary text-left p-6 flex flex-col">
                    <CardContent className="flex-grow p-0">
                        <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-auto">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint={testimonial.dataAiHint} />
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Surveyr provides you with a variety of features to engage with your audience.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 bg-background border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <feature.Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">A day left in our discount bonanza. Grab it now.</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {pricingTiers.map((tier, index) => (
                        <Card key={index} className={`flex flex-col text-left ${tier.popular ? 'border-primary shadow-2xl relative -translate-y-4' : 'border-border/50'}`}>
                            {tier.popular && <div className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Popular</div>}
                            <CardHeader>
                                <h3 className="text-xl font-semibold">{tier.name}</h3>
                                <p className="text-3xl font-bold">{tier.price}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0 mt-6">
                                <Button className="w-full" variant={tier.buttonVariant as any}>{tier.buttonText}</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                             <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg mb-4 px-6 border-border/50">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
                 <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Discover how Surveyr is used by others on our WhatsApp platform</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                     <div className="md:col-span-2 lg:col-span-2 rounded-lg bg-primary text-primary-foreground p-8 flex flex-col justify-between text-left">
                        <div>
                           <p className="text-sm font-semibold mb-2 text-primary-foreground/80">TASK-A-TASK, 2024</p>
                           <h3 className="text-2xl font-bold mb-4">Discover how Surveyr was successfully used by the SACC election observers across South Africa for the 2024 elections.</h3>
                        </div>
                         <Button variant="secondary" asChild>
                             <Link href="#">Read the case study <ArrowRight className="ml-2" /></Link>
                         </Button>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 rounded-lg bg-black p-8 flex items-center justify-center">
                         <Image src="https://ik.imagekit.io/qamfbdbzl/sacc-election-logo.png" alt="SACC Election Observation" width={300} height={150} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector) => (
                        <SectorCard key={sector.slug} sector={sector} />
                    ))}
                </div>
            </div>
        </section>

      </main>
      <SectorPageFooter />
    </div>
  );
}
