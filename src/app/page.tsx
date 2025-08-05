
'use client';

import { useState } from 'react';
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
import { CheckCircle, DraftingCompass, Gauge, Megaphone, TrendingUp, FileSignature, Inbox } from 'lucide-react';
import { SectorSelectionPopup } from '@/components/SectorSelectionPopup';

const testimonials = [
  {
    name: 'Dr. Thando Molefe',
    title: 'Lead Pastor, GraceHill Church',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote: 'Surveyr has revolutionized how we connect with our congregation. The ability to send daily devotionals and gather prayer requests on a platform everyone uses has deepened our community bond significantly.',
  },
  {
    name: 'Jabu Mthembu',
    title: 'Event Coordinator, Spark Live',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote: 'The live polling and Q&A features are game-changers for audience engagement. We get real-time feedback that helps us make every event better than the last. The platform is incredibly reliable.',
  },
  {
    name: 'Aisha Patel',
    title: 'Owner, The Daily Grind Cafe',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote: "As a small business, customer relationships are everything. Surveyr helps us offer instant support and send targeted promotions that our customers actually see and appreciate. It's an invaluable tool.",
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
    { question: "What is Surveyr?", answer: "Surveyr is a WhatsApp-driven platform for engaging customer chats, capturing leads, collecting valuable feedback, and boosting live events. We specialize in research and quantitative surveys." },
    { question: "How can Surveyr help my business or organization?", answer: "Surveyr helps you connect with your audience on a platform they use daily, increasing engagement, gathering insights, and improving communication for research and feedback." },
    { question: "Can I integrate Surveyr with other business tools?", answer: "Yes, our Enterprise plan offers custom integrations with your existing business tools and systems to streamline your workflow." },
    { question: "What types of surveys can I create with Surveyr?", answer: "You can create a wide variety of surveys, from simple polls and quizzes for engagement to detailed feedback forms and quantitative market research questionnaires." },
    { question: "How secure is the data we collect through Surveyr?", answer: "We take data security very seriously. All data is encrypted and stored securely, and we comply with all relevant data protection regulations." },
    { question: "What support options are available if I need help using Surveyr?", answer: "We offer email support for all our users. Our Pro and Enterprise plans include priority support and a dedicated success manager." },
];


export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [intent, setIntent] = useState<'research' | 'feedback' | null>(null);

  const handleButtonClick = (selectedIntent: 'research' | 'feedback') => {
    setIntent(selectedIntent);
    setPopupOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground animate-in fade-in duration-500">
       <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2">
                         <Image src="https://ik.imagekit.io/qamfbdbzl/surveyr-logo-small.fc888627a6e32ae314b0.png" alt="Surveyr Logo" width={150} height={36} />
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
                        <Link href="/signup">Start Free Trial</Link>
                    </Button>
                </div>
            </div>
        </div>
      </header>
      
      <SectorSelectionPopup 
        isOpen={popupOpen} 
        setIsOpen={setPopupOpen} 
        intent={intent}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background pt-2">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                     <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground !leading-tight">
                        Supercharge your conversations
                     </h1>
                     <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mt-6">
                        A WhatsApp driven platform for engaging customer chats, capturing leads, collecting valuable feedback and boosting live events.
                     </p>
                     <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="px-8 py-7 text-lg" onClick={() => handleButtonClick('research')}>
                          For Quantitative Research
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 py-7 text-lg" onClick={() => handleButtonClick('feedback')}>
                          For Feedback Collection
                        </Button>
                     </div>
                </div>
                <div className="relative">
                     <Image
                        src="https://ik.imagekit.io/qamfbdbzl/ChatGPT%20Image%20Jul%2031,%202025,%2006_17_30%20AM.png"
                        alt="Surveyr Platform Illustration"
                        width={600}
                        height={500}
                        priority
                        className="mx-auto animate-float"
                     />
                </div>
             </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-muted-foreground font-medium mb-6">Trusted by organizations focused on impact</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Leaders Choose Surveyr</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Hear what our clients have to say about their success.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card text-left p-6 flex flex-col border shadow-none rounded-xl">
                    <CardContent className="flex-grow p-0">
                        <p className="text-muted-foreground mb-6 text-base">"{testimonial.quote}"</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Effective Research</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Surveyr provides a comprehensive suite of features to design, distribute, and analyze your surveys.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 bg-background border-border/50 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <feature.Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold pt-2">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground pl-16">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the plan that fits your needs. No hidden fees.</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {pricingTiers.map((tier, index) => (
                        <Card key={index} className={`flex flex-col text-left rounded-xl shadow-sm ${tier.popular ? 'border-2 border-primary relative' : 'border'}`}>
                            {tier.popular && <div className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Most Popular</div>}
                            <CardHeader>
                                <h3 className="text-xl font-semibold">{tier.name}</h3>
                                <p className="text-3xl font-bold pt-2">{tier.price}</p>
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
                                <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>{tier.buttonText}</Button>
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
                             <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl mb-4 px-6 border">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2 text-base text-left">
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
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Sector</h2>
                 <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Discover how Surveyr drives results across different industries. How can we help you today?</p>
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
