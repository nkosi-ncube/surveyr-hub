import type { LucideIcon } from 'lucide-react';
import {
  Church,
  Ticket,
  Store,
  HeartPulse,
  School,
  ShoppingCart,
  BookOpen,
  MessagesSquare,
  CalendarDays,
  BarChart,
  ClipboardList,
  ThumbsUp,
  MessageCircle,
  Percent,
  CalendarPlus,
  CalendarCheck,
  BellRing,
  Megaphone,
  AlarmClock,
  Notebook,
  Tag,
  HelpCircle,
  Package,
} from 'lucide-react';

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export interface Sector {
  name: string;
  slug: string;
  Icon: LucideIcon;
  cardDescription: string;
  heroTitle: string;
  heroDescription: string;
  features: Feature[];
  heroImage: string;
  dataAiHint: string;
}

export const sectors: Sector[] = [
  {
    name: 'Churches',
    slug: 'churches',
    Icon: Church,
    cardDescription: 'Daily devotionals, events, tithes & more.',
    heroTitle: 'Engage your congregation on WhatsApp',
    heroDescription:
      'Send devotionals, collect prayer requests, manage events in one click.',
    features: [
      {
        Icon: BookOpen,
        title: 'Automated Daily Devotionals',
        description: 'Schedule once, deliver forever to keep your community engaged.',
      },
      {
        Icon: MessagesSquare,
        title: 'Collect Prayer Requests',
        description: 'A dedicated, private channel for members to share and connect.',
      },
      {
        Icon: CalendarDays,
        title: 'Manage Events',
        description: 'Effortlessly organize and remind your congregation about services and events.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'church interior',
  },
  {
    name: 'Event Companies',
    slug: 'events',
    Icon: Ticket,
    cardDescription: 'Live polls, quizzes, instant feedback.',
    heroTitle: 'Boost live interaction & feedback at your events',
    heroDescription:
      'Turn attendees into active participants with live polls, Q&A, and real-time feedback collection.',
    features: [
      {
        Icon: BarChart,
        title: 'Live Polls & Q&A',
        description: "Capture the audience's pulse and increase engagement instantly.",
      },
      {
        Icon: ClipboardList,
        title: 'Interactive Quizzes',
        description: 'Gamify your event content and create memorable, fun experiences.',
      },
      {
        Icon: ThumbsUp,
        title: 'Instant Feedback',
        description: 'Collect valuable insights on speakers and sessions as they happen.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'concert crowd',
  },
  {
    name: 'Small Businesses',
    slug: 'small-business',
    Icon: Store,
    cardDescription: 'Instant support & promotions.',
    heroTitle: 'Build customer relationships that last',
    heroDescription:
      'Deliver instant customer support, send targeted promotions, and manage bookings effortlessly.',
    features: [
      {
        Icon: MessageCircle,
        title: 'Instant Support',
        description: 'Resolve customer queries in real-time on the platform they use most.',
      },
      {
        Icon: Percent,
        title: 'Targeted Promotions',
        description: "Drive sales by sending exclusive offers directly to your customers' phones.",
      },
      {
        Icon: CalendarPlus,
        title: 'Appointment Management',
        description: 'Simplify booking and reduce no-shows with automated reminders.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'small cafe',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    Icon: HeartPulse,
    cardDescription: 'Appointment booking & patient follow-ups.',
    heroTitle: 'Improve patient communication and care',
    heroDescription:
      'Streamline appointment booking, automate patient follow-ups, and send critical health reminders.',
    features: [
      {
        Icon: CalendarCheck,
        title: 'Streamlined Booking',
        description: 'Allow patients to book and manage appointments with ease.',
      },
      {
        Icon: ClipboardList,
        title: 'Automated Follow-ups',
        description: 'Ensure better patient outcomes with scheduled post-visit check-ins.',
      },
      {
        Icon: BellRing,
        title: 'Health Reminders',
        description: 'Send timely reminders for medication, appointments, and check-ups.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'doctor patient',
  },
  {
    name: 'Schools',
    slug: 'schools',
    Icon: School,
    cardDescription: 'Parent comms & homework reminders.',
    heroTitle: 'Connect your entire school community',
    heroDescription:
      'Keep parents informed, send homework reminders, and communicate emergency alerts instantly.',
    features: [
      {
        Icon: Megaphone,
        title: 'Parent Communication',
        description: 'Bridge the gap between school and home with direct, reliable messaging.',
      },
      {
        Icon: AlarmClock,
        title: 'Homework Reminders',
        description: 'Help students stay on track with automated assignment and deadline alerts.',
      },
      {
        Icon: Notebook,
        title: 'Urgent Alerts',
        description: 'Instantly notify all parents and staff in case of emergencies or closures.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'classroom students',
  },
  {
    name: 'Retail',
    slug: 'retail',
    Icon: ShoppingCart,
    cardDescription: 'Personalised offers & quick queries.',
    heroTitle: 'Drive sales and delight shoppers',
    heroDescription:
      'Send personalized offers, answer customer questions instantly, and notify them about new stock.',
    features: [
      {
        Icon: Tag,
        title: 'Personalized Offers',
        description: 'Increase customer loyalty and sales with tailored promotions.',
      },
      {
        Icon: HelpCircle,
        title: 'Quick Product Queries',
        description: 'Provide instant answers about products, availability, and store hours.',
      },
      {
        Icon: Package,
        title: 'Back-in-Stock Alerts',
        description: 'Automatically notify customers when their desired items are available again.',
      },
    ],
    heroImage: 'https://placehold.co/1200x400.png',
    dataAiHint: 'clothing store',
  },
];
