'use client';

import * as React from 'react';
import {
  ContainerScrollAnimation,
  ContainerScrollInsetX,
  ContainerScrollScale,
  ContainerScrollTranslate,
} from '@/components/ui/scroll-trigger-animations';
import {
  ArrowRight,
  ArrowDown,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Server,
  Terminal,
  Activity,
} from 'lucide-react';

// Cloud, DevOps & Engineering Visual Assets
const COLUMN_1_ITEMS = [
  {
    title: 'Cloud DevOps & Engineering Lead',
    badge: 'Md Shadab Azam Ansari',
    image: encodeURI('/images/Md Shadab Azam Ansari1.jpeg'),
  },
  {
    title: 'Developer Portfolio Experience',
    badge: 'Production Web App',
    image: encodeURI('/images/Md Shadab Azam Ansari4.png'),
  },
  {
    title: 'Cloud Architecture & Infrastructure',
    badge: 'AWS & Microservices',
    image: encodeURI('/images/Md Shadab Azam Ansari5.png'),
  },
  {
    title: 'Distributed System Topology',
    badge: 'Netflix Architecture Blueprint',
    image: encodeURI('/images/netflix-architecture.png'),
  },
];

const COLUMN_2_ITEMS = [
  {
    title: 'Cloud Architect & Technical Trainer',
    badge: 'Md Shadab Azam Ansari',
    image: encodeURI('/images/Md Shadab Azam Ansari2.jpeg'),
  },
  {
    title: 'AWS Certified DevOps Engineer Pro',
    badge: 'Professional Credential',
    image: '/certs/aws-devops-pro.png',
  },
  {
    title: 'Full-Stack Portfolio Showcase',
    badge: 'Interactive UI & Features',
    image: encodeURI('/images/Md Shadab Azam Ansari7.png'),
  },
  {
    title: 'Modern Developer Workflow',
    badge: 'Terminal & IaC',
    image: encodeURI('/images/Md Shadab Azam Ansari8.png'),
  },
];

const COLUMN_3_ITEMS = [
  {
    title: 'Infrastructure as Code Specialist',
    badge: 'Md Shadab Azam Ansari',
    image: encodeURI('/images/Md Shadab Azam Ansari3.jpeg'),
  },
  {
    title: 'Microsoft Certified DevOps Expert',
    badge: 'Expert Certification',
    image: '/certs/ms-certified-expert.png',
  },
  {
    title: 'System Performance & Observability',
    badge: 'Metrics & Cloud Monitoring',
    image: encodeURI('/images/Md Shadab Azam Ansari10.png'),
  },
  {
    title: 'Container & Kubernetes Clusters',
    badge: 'High Availability Production',
    image: encodeURI('/images/Md Shadab Azam Ansari12.png'),
  },
];

export default function PremiumPlatformShowcase() {
  const scrollToGallery = () => {
    const el = document.getElementById('scroll-gallery-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#FACC15] selection:text-[#111111]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111111] text-[#FACC15] shadow-xs">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight text-[#111111]">
                Md Shadab Azam Ansari
              </span>
              <span className="ml-2 hidden rounded-full border border-[#E5E5E5] bg-[#FEF9C3] px-2 py-0.5 text-[10px] font-medium text-[#713F12] sm:inline-block">
                Cloud &amp; DevOps
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://md-shadab-azam-ansari.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-xs font-medium text-[#111111] transition-colors hover:border-[#111111] hover:bg-[#F9FAFB] focus:outline-hidden focus:ring-2 focus:ring-[#FACC15]"
            >
              <span>Portfolio</span>
              <ExternalLink className="h-3 w-3 text-[#525252]" />
            </a>

            <a
              href="#explore"
              onClick={(e) => {
                e.preventDefault();
                scrollToGallery();
              }}
              className="hidden items-center gap-1.5 rounded-lg bg-[#111111] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#FACC15] sm:inline-flex"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="h-3 w-3 text-[#FACC15]" />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation Anchor */}
      <div id="scroll-gallery-section" />

      {/* Full-Screen Scroll Driven Visual Experience */}
      <section
        id="scroll-gallery-section"
        aria-label="Interactive Systems & Architecture Gallery"
        className="relative border-t border-[#E5E5E5] bg-[#FAFAFA]"
      >
        {/* Subtle section label */}
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-xs font-medium text-[#525252] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#FACC15]" />
            <span>Interactive Parallax Perspective Experience</span>
          </div>
        </div>

        <ContainerScrollAnimation className="overflow-hidden">
          <ContainerScrollTranslate className="h-dvh relative">
            <ContainerScrollInsetX className="h-full relative">
              <ContainerScrollScale className="flex gap-4 overflow-hidden rounded-3xl border border-[#E5E5E5] bg-white p-4 shadow-xl md:gap-6 md:p-6">
                
                {/* Column 1 - Negative Translate */}
                <ContainerScrollTranslate
                  yRange={['0%', '-12%']}
                  className="flex flex-1 flex-col gap-4 md:gap-6"
                >
                  {COLUMN_1_ITEMS.map((item, index) => (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-xs transition-all duration-300 hover:border-[#111111] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/2.6] overflow-hidden bg-neutral-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-[#111111]/10 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="inline-block rounded-md bg-[#FACC15] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#111111]">
                            {item.badge}
                          </span>
                          <h2 className="mt-1 text-sm font-semibold tracking-tight text-white drop-shadow-xs sm:text-base">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </article>
                  ))}
                </ContainerScrollTranslate>

                {/* Column 2 - Offset Positive Translate */}
                <ContainerScrollTranslate
                  yRange={['0%', '16%']}
                  className="relative -mt-[14%] flex flex-1 flex-col gap-4 md:gap-6"
                >
                  {COLUMN_2_ITEMS.map((item, index) => (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-xs transition-all duration-300 hover:border-[#111111] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/2.6] overflow-hidden bg-neutral-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-[#111111]/10 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="inline-block rounded-md bg-[#FACC15] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#111111]">
                            {item.badge}
                          </span>
                          <h2 className="mt-1 text-sm font-semibold tracking-tight text-white drop-shadow-xs sm:text-base">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </article>
                  ))}
                </ContainerScrollTranslate>

                {/* Column 3 - Responsive Hidden on Mobile, Negative Translate */}
                <ContainerScrollTranslate
                  yRange={['0%', '-12%']}
                  className="hidden flex-1 flex-col gap-4 md:flex md:gap-6"
                >
                  {COLUMN_3_ITEMS.map((item, index) => (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-xs transition-all duration-300 hover:border-[#111111] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/2.6] overflow-hidden bg-neutral-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-[#111111]/10 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="inline-block rounded-md bg-[#FACC15] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#111111]">
                            {item.badge}
                          </span>
                          <h2 className="mt-1 text-sm font-semibold tracking-tight text-white drop-shadow-xs sm:text-base">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </article>
                  ))}
                </ContainerScrollTranslate>

              </ContainerScrollScale>
            </ContainerScrollInsetX>
          </ContainerScrollTranslate>
        </ContainerScrollAnimation>
      </section>

      {/* Bottom CTA / Footer Section */}
      <footer className="border-t border-[#E5E5E5] bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#FACC15] shadow-xs">
            <Terminal className="h-6 w-6" />
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
            Ready to scale your next-generation cloud infrastructure?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#525252]">
            Connect with Md Shadab Azam Ansari for cloud architecture consulting, Kubernetes migration,
            or full-stack engineering collaborations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://md-shadab-azam-ansari.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] px-6 py-3 text-xs font-semibold text-[#111111] shadow-xs transition hover:bg-[#EAB308]"
            >
              <span>Visit Portfolio Profile</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/sazamansari"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-6 py-3 text-xs font-semibold text-[#111111] transition hover:border-[#111111] hover:bg-[#F9FAFB]"
            >
              <span>GitHub Profile</span>
            </a>
          </div>

          <div className="mt-12 border-t border-[#E5E5E5] pt-8 text-xs text-[#525252]">
            © {new Date().getFullYear()} Md Shadab Azam Ansari • Built with Next.js, Lenis, Motion &amp; Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
