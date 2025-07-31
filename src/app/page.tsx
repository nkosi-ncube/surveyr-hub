import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Check, MessageCircle, BarChart, FileText, Bot, Users, PieChart } from 'lucide-react';

const features = [
    {
        Icon: FileText,
        title: "Intuitive Survey Builder",
        description: "Create custom surveys with our easy-to-use drag-and-drop interface. No coding required."
    },
    {
        Icon: BarChart,
        title: "Boosting Live Events",
        description: "Engage your audience in real-time with live polls, Q&A sessions, and interactive feedback."
    },
    {
        Icon: MessageCircle,
        title: "WhatsApp Broadcast",
        description: "Reach thousands of customers directly on WhatsApp with personalized messages and campaigns."
    },
    {
        Icon: PieChart,
        title: "Sentiment Analysis",
        description: "Automatically analyze feedback to understand customer sentiment and identify key trends."
    },
    {
        Icon: Bot,
        title: "ChatGPT Report Authoring",
        description: "Generate insightful, human-like reports from your survey data in seconds with AI."
    },
    {
        Icon: Users,
        title: "TeamBox",
        description: "Collaborate with your team, manage conversations, and assign tasks all in one place."
    },
]

const testimonials = [
    {
        name: 'Dr. Thandiwe Molemo',
        title: 'Lead Organizer, SACC',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'woman portrait',
        text: "Surveyr was a critical tool for monitoring the national elections. Its ability to rapidly collect and analyze feedback from observers on the ground was instrumental to our success."
    },
    {
        name: 'Rev. Umuntu Malebo',
        title: 'Director of Comms, CEYF',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'man portrait',
        text: "It has been a pleasure to work with Surveyr. The platform is clean, scalable and easily handles service delivery to our flock."
    },
    {
        name: 'Mark Masters',
        title: 'Founder, Live Events Inc.',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'man portrait',
        text: "Surveyr is our go-to tool for real-time gig engagement. It has been a game changer for our business, highly recommended!"
    }
]

const faqs = [
    {
        question: "What is Surveyr?",
        answer: "Surveyr is a WhatsApp-driven platform for engaging customer chats, capturing leads, collecting valuable feedback, and boosting live events. It allows businesses and organizations to connect with their audience directly through WhatsApp."
    },
    {
        question: "How can Surveyr help my organization with engagement?",
        answer: "Surveyr offers tools like live polls, Q&A sessions, automated broadcasts, and sentiment analysis to help you interact with your audience in a more meaningful and effective way, all within WhatsApp."
    },
    {
        question: "Can I integrate Surveyr with other business tools?",
        answer: "Yes, Surveyr is designed to be extensible. We are continuously adding integrations with popular business tools and CRMs. Please contact our support team for specific integration requests."
    },
    {
        question: "What type of support can I expect with Surveyr?",
        answer: "We offer comprehensive support to all our users. Depending on your plan, this includes email support, live chat, and a dedicated account manager to help you get the most out of the platform."
    },
]

const pricingTiers = [
    {
        name: "Free",
        price: "R0/pm",
        description: "Get started for free",
        features: ["1 user", "1 survey per month", "100 responses/pm", "Email support"],
        buttonText: "Start For Free",
        href: "/signup?plan=free",
        popular: false
    },
    {
        name: "Pro",
        price: "R800/pm",
        description: "For growing teams",
        features: ["Everything in Free, plus:", "5 users", "Unlimited surveys", "2,500 responses/pm", "WhatsApp Integration", "Live event polls", "Sentiment analysis", "Chat support"],
        buttonText: "Try Pro Free",
        href: "/signup?plan=pro",
        popular: true,
    },
    {
        name: "Business",
        price: "R1500/pm",
        description: "For established businesses",
        features: ["Everything in Pro, plus:", "Unlimited users", "10,000 responses/pm", "Custom branding", "AI Report authoring", "API access", "Priority support"],
        buttonText: "Try Business Free",
        href: "/signup?plan=business",
        popular: false,
    },
    {
        name: "Enterprise",
        price: "On request",
        description: "For large-scale needs",
        features: ["Everything in Business, plus:", "Custom response limits", "Dedicated infrastructure", "SLA & 24/7 support", "On-premise option"],
        buttonText: "Contact Sales",
        href: "/contact-sales",
        popular: false,
    },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                            <path d="M50 0C22.3857 0 0 22.3857 0 50C0 77.6143 22.3857 100 50 100C77.6143 100 100 77.6143 100 50C100 22.3857 77.6143 0 50 0ZM50 87.5C29.325 87.5 12.5 70.675 12.5 50C12.5 29.325 29.325 12.5 50 12.5C70.675 12.5 87.5 29.325 87.5 50C87.5 70.675 70.675 87.5 50 87.5Z" opacity="0.5" />
                            <path d="M50 25C36.2125 25 25 36.2125 25 50C25 63.7875 36.2125 75 50 75C63.7875 75 75 63.7875 75 50C75 36.2125 63.7875 25 50 25Z" />
                        </svg>
                        <span className="font-bold text-xl text-foreground">Surveyr</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
                    <Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                    <Link href="#use-cases" className="text-muted-foreground hover:text-foreground">Use Cases</Link>
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

      <main className="flex-1 flex flex-col items-center animate-in fade-in duration-500 pt-16">
        {/* Hero Section */}
        <section className="text-center py-20 lg:py-28 container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline text-foreground leading-tight">
                        Supercharge your conversations with <span className="text-primary">Surveyr</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                        A WhatsApp driven platform for engaging customer chats, capturing leads, collecting valuable feedback and boosting live events.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button size="lg" asChild>
                            <Link href="/signup">Get Started Free</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#use-cases">See Use Cases</Link>
                        </Button>
                    </div>
                </div>
                <div>
                  <Image src="https://placehold.co/600x400.png" alt="Surveyr platform screenshot" width={600} height={400} className="rounded-lg shadow-2xl" data-ai-hint="hero illustration" />
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-white py-20 lg:py-28">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Testimonials</h2>
                <p className="text-muted-foreground mb-12">What our users are saying</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <Card key={t.name} className="text-left bg-card">
                            <CardContent className="p-6">
                                <blockquote className="italic text-muted-foreground">"{t.text}"</blockquote>
                                <div className="flex items-center gap-4 mt-6">
                                    <Image src={t.avatar} data-ai-hint={t.dataAiHint} alt={t.name} width={48} height={48} className="rounded-full" />
                                    <div>
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.title}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        {/* Features Section */}
        <section id="features" className="py-20 lg:py-28 container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Features</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Surveyr is packed with powerful features to help you engage with your audience.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map(f => (
                    <div key={f.title} className="p-6 rounded-lg text-left">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                            <f.Icon className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-muted-foreground">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="w-full bg-white py-20 lg:py-28">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Pricing</h2>
                <p className="text-muted-foreground mb-12">A day trial on our Pro and Business plans</p>
                 <div className="grid lg:grid-cols-4 gap-8">
                    {pricingTiers.map(tier => (
                        <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary border-2' : ''}`}>
                            <CardHeader className="text-left">
                                <h3 className="text-xl font-bold">{tier.name}</h3>
                                <p className="text-3xl font-bold">{tier.price}</p>
                                <p className="text-sm text-muted-foreground">{tier.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1 text-left">
                                <ul className="space-y-3">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary"/>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6">
                                <Button asChild className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                                    <Link href={tier.href}>{tier.buttonText}</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 lg:py-28 container mx-auto">
            <div className="max-w-3xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map(faq => (
                        <AccordionItem key={faq.question} value={faq.question}>
                            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                               {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>


        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 lg:py-28 container mx-auto text-center w-full bg-primary text-primary-foreground">
             <h2 className="text-3xl md:text-4xl font-bold mb-2">Use Cases</h2>
             <p className="opacity-80 mb-4">Discover how Surveyr is used by others on our WhatsApp platform</p>
             <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <p className="text-sm uppercase tracking-wider mb-2">SOUTH AFRICA, 2024</p>
                        <h3 className="text-2xl font-bold leading-tight">Discover how Surveyr was successfully used by the SACC election observers across South Africa for the 2024 elections.</h3>
                        <Button variant="secondary" asChild className="mt-4">
                            <Link href="/use-cases/sacc-elections">Read the case study</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://placehold.co/400x300.png" alt="SACC Elections Case Study" width={400} height={300} className="rounded-lg" data-ai-hint="elections chart"/>
                    </div>
                </div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {sectors.map((sector) => (
                <SectorCard key={sector.slug} sector={sector} />
                ))}
            </div>
        </section>
      </main>
      <SectorPageFooter />
    </div>
  );
}
