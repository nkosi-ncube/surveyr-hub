import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Check, MessageCircle, BarChart, FileText, Bot, Users, PieChart, Headphones, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
       <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2">
                        <Image src="https://ik.imagekit.io/qamfbdbzl/surveyr-logo-small.fc888627a6e32ae314b0.png" alt="Surveyr Logo" width={36} height={36} />
                        <span className="text-2xl font-bold text-foreground">surveyr</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                    <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link>
                    <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
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

      <main className="flex-1 flex flex-col items-center pt-20">
        {/* Hero Section */}
        <section className="text-center py-10 container mx-auto w-full relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-headline text-foreground leading-tight">
                        Supercharge your conversations with <span className="text-gradient">Surveyr</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                        A WhatsApp driven platform for engaging customer chats, <span className="highlight">capturing leads</span>, <span className="highlight">collecting valuable feedback</span> and boosting live events.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                   <Image 
                        src="https://ik.imagekit.io/qamfbdbzl/hero-illustration.2f5a342402434b9ade75.png"
                        alt="Surveyr Platform Illustration"
                        width={600}
                        height={500}
                        priority
                   />
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 lg:py-28 container mx-auto text-center w-full">
             <h2 className="text-3xl md:text-4xl font-bold mb-2">Use Cases</h2>
             <p className="text-muted-foreground mb-12">Discover how Surveyr is used by others on our WhatsApp platform</p>
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
