'use client';

import React from 'react';
import MasonryGrid from '@/components/ui/masonry-grid';
import {
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Terminal,
  Server,
  Cloud,
  Layers,
  Cpu,
  Globe,
  Database,
  Code2,
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Complete 1 to 12 showcase items matching Md Shadab Azam Ansari 1 through 12
const portfolioGalleryItems = [
  {
    id: 1,
    title: 'Cloud DevOps & Engineering Lead',
    tag: 'Profile',
    category: 'Engineering Lead',
    src: encodeURI('/images/Md Shadab Azam Ansari1.jpeg'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[3/4]',
    icon: Cloud,
    badgeColor: 'bg-amber-400 text-slate-950',
    description: 'Specializing in AWS, Azure, Terraform, Kubernetes, Node.js & React architecture.',
  },
  {
    id: 2,
    title: 'Technical Trainer & Cloud Consultant',
    tag: 'Leadership',
    category: 'Consulting',
    src: encodeURI('/images/Md Shadab Azam Ansari2.jpeg'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[3/4]',
    icon: Cpu,
    badgeColor: 'bg-emerald-400 text-slate-950',
    description: 'Mentoring engineering teams in Kubernetes adoption, cloud migration, and SRE principles.',
  },
  {
    id: 3,
    title: 'Infrastructure as Code & Cloud Automation',
    tag: 'DevOps & SRE',
    category: 'Md Shadab Azam Ansari',
    src: encodeURI('/images/Md Shadab Azam Ansari3.jpeg'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[3/4]',
    icon: Terminal,
    badgeColor: 'bg-sky-400 text-slate-950',
    description: 'Continuous integration, delivery pipelines, Docker containers, and GitOps workflows.',
  },
  {
    id: 4,
    title: 'Interactive Portfolio Experience',
    tag: 'Frontend & UI',
    category: 'Production Web App',
    src: encodeURI('/images/Md Shadab Azam Ansari4.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Globe,
    badgeColor: 'bg-cyan-500 text-slate-950',
    description: 'Modern developer portfolio with smooth animations and responsive interface.',
  },
  {
    id: 5,
    title: 'Cloud Architecture & Infrastructure Blueprints',
    tag: 'Cloud & IaC',
    category: 'Terraform & AWS',
    src: encodeURI('/images/Md Shadab Azam Ansari5.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Cloud,
    badgeColor: 'bg-purple-500 text-white',
    description: 'Automated infrastructure deployments with Terraform, VPC networking, and security.',
  },
  {
    id: 6,
    title: 'Microservices & Distributed Systems',
    tag: 'Architecture',
    category: 'System Design',
    src: encodeURI('/images/Md Shadab Azam Ansari6.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Server,
    badgeColor: 'bg-indigo-500 text-white',
    description: 'High-throughput microservices architecture with resilient caching and API gateways.',
  },
  {
    id: 7,
    title: 'Full-Stack Showcase & Observability Stack',
    tag: 'Full-Stack',
    category: 'Metrics & Observability',
    src: encodeURI('/images/Md Shadab Azam Ansari7.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Layers,
    badgeColor: 'bg-pink-500 text-white',
    description: 'Prometheus, Grafana telemetry with distributed tracing and incident observability.',
  },
  {
    id: 8,
    title: 'Modern Developer Workflow & Terminal CLI',
    tag: 'IaC & CLI',
    category: 'Developer Tooling',
    src: encodeURI('/images/Md Shadab Azam Ansari8.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Code2,
    badgeColor: 'bg-amber-500 text-slate-950',
    description: 'Command line workflows, Git automation, Bash scripting, and cloud automation.',
  },
  {
    id: 9,
    title: 'Continuous Integration & GitOps Delivery',
    tag: 'CI / CD',
    category: 'Automation Pipeline',
    src: encodeURI('/images/Md Shadab Azam Ansari9.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Award,
    badgeColor: 'bg-emerald-500 text-slate-950',
    description: 'Automated testing, container builds, and deployment gates for zero-downtime releases.',
  },
  {
    id: 10,
    title: 'System Performance & Observability Telemetry',
    tag: 'Observability',
    category: 'Cloud Monitoring',
    src: encodeURI('/images/Md Shadab Azam Ansari10.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Database,
    badgeColor: 'bg-violet-500 text-white',
    description: 'Real-time telemetry, server health metrics, and automated cluster alerting.',
  },
  {
    id: 11,
    title: 'Enterprise Multi-Cloud Infrastructure Security',
    tag: 'Cloud Security',
    category: 'Compliance & IAM',
    src: encodeURI('/images/Md Shadab Azam Ansari11.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: ShieldCheck,
    badgeColor: 'bg-teal-500 text-white',
    description: 'IAM policies, role-based access control, network segmentation, and encryption in transit.',
  },
  {
    id: 12,
    title: 'High-Availability Kubernetes Deployment Matrix',
    tag: 'Containers',
    category: 'Kubernetes & Docker',
    src: encodeURI('/images/Md Shadab Azam Ansari12.png'),
    link: 'https://md-shadab-azam-ansari.vercel.app/',
    aspect: 'aspect-[16/10]',
    icon: Server,
    badgeColor: 'bg-blue-500 text-white',
    description: 'Zero-downtime rolling deployments, autoscaling pods, and ingress controller tuning.',
  },
];

export default function MasonryGridDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 shadow-lg shadow-cyan-500/20">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white sm:text-base">
                  Md Shadab Azam Ansari
                </span>
                <span className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300 sm:inline-block">
                  All 12 Showcase Items
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Software Engineer &amp; Cloud DevOps Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sazamansari"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://md-shadab-azam-ansari.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/30"
            >
              <span>Visit Portfolio</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative mx-auto max-w-5xl px-4 pt-14 pb-10 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur mb-4">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Complete 1 to 12 Showcase Gallery
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          Cloud, Architecture &amp;{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            DevOps Showcase
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Interactive 3D parallax masonry featuring all 12 photos and architectural projects from{' '}
          <a
            href="https://md-shadab-azam-ansari.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline font-medium"
          >
            Md Shadab Azam Ansari’s Portfolio
          </a>
          .
        </p>

        {/* Quick pill stats */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <Cloud className="h-3.5 w-3.5 text-cyan-400" /> AWS &amp; Azure Certified
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <Terminal className="h-3.5 w-3.5 text-sky-400" /> Terraform &amp; Kubernetes
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <Globe className="h-3.5 w-3.5 text-blue-400" /> Full-Stack Node.js &amp; React
          </span>
        </div>
      </section>

      {/* Masonry Grid with 1 to 12 items */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <MasonryGrid
          items={portfolioGalleryItems}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
          gap="1.25rem"
          staggerDelay={0.05}
          renderItem={(item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <div className={`relative w-full overflow-hidden ${item.aspect} bg-slate-950 flex items-center justify-center`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                </div>

                {/* Bottom details card */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                      <Icon className="h-3 w-3" />
                      #{item.id} • {item.tag}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 backdrop-blur transition-colors group-hover:bg-cyan-500 group-hover:text-slate-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h2 className="text-sm font-bold text-white drop-shadow leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          }}
        />
      </section>

      {/* Connected Profile CTA / Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <Terminal className="h-6 w-6" />
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Want to see the full production portfolio?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Explore live deployments, architecture case studies, certifications, and technical experience on Md Shadab Azam Ansari’s official site.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://md-shadab-azam-ansari.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              <span>Launch md-shadab-azam-ansari.vercel.app</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://github.com/sazamansari"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 text-xs font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-800"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub @sazamansari</span>
            </a>
          </div>

          <div className="mt-12 border-t border-slate-800/60 pt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} Md Shadab Azam Ansari • Connected to{' '}
            <a
              href="https://md-shadab-azam-ansari.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              md-shadab-azam-ansari.vercel.app
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
