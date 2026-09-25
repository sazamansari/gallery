'use client';

import * as React from 'react';
import {
  ContainerScrollAnimation,
  ContainerScrollInsetX,
  ContainerScrollScale,
  ContainerScrollTranslate,
} from '@/components/ui/scroll-trigger-animations';
import { ExternalLink, Layers, Terminal, Sparkles, Image as ImageIcon } from 'lucide-react';

const IMAGES_1 = [
  encodeURI('/images/md shadab azam ansari1.jpeg'),
  encodeURI('/images/portfolio-gallery-1.png'),
  encodeURI('/images/portfolio-gallery-2.png'),
  encodeURI('/images/portfolio-gallery-3.png'),
  encodeURI('/images/netflix-architecture.png'),
];

const IMAGES_2 = [
  encodeURI('/images/md shadab azam ansari2.jpeg'),
  encodeURI('/images/portfolio-gallery-4.png'),
  encodeURI('/images/portfolio-gallery-5.png'),
  encodeURI('/images/portfolio-gallery-6.png'),
  '/certs/aws-devops-pro.png',
];

const IMAGES_3 = [
  encodeURI('/images/md shadab azam ansari3.jpeg'),
  encodeURI('/images/portfolio-gallery-7.png'),
  encodeURI('/images/portfolio-gallery-8.png'),
  encodeURI('/images/portfolio-gallery-9.png'),
  '/certs/ms-certified-expert.png',
];

export default function GalleryHeroDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Header bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white sm:text-lg">
              Md Shadab Azam Ansari
            </h1>
            <p className="text-xs text-slate-400">
              Cloud DevOps &amp; Software Engineering Showcase Gallery
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://md-shadab-azam-ansari.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400"
          >
            <span>Live Portfolio</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Intro section */}
      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Smooth Lenis + Motion Scroll Interactive Gallery
        </div>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Visual Work &amp; Architecture{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Scroll down through this parallax perspective gallery displaying cloud architectures,
          full-stack engineering milestones, and DevOps infrastructure projects.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" /> AWS &amp; Cloud Infra
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
            <ImageIcon className="h-3.5 w-3.5 text-sky-400" /> Architecture Blueprints
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
            <Layers className="h-3.5 w-3.5 text-blue-400" /> Full-Stack React &amp; Node
          </span>
        </div>
      </section>

      {/* Scroll-Triggered Gallery Component */}
      <section className="relative">
        <ContainerScrollAnimation className="overflow-hidden">
          <ContainerScrollTranslate className="h-dvh relative">
            <ContainerScrollInsetX className="h-full relative">
              <ContainerScrollScale className="flex gap-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-md md:gap-6 md:p-6">
                
                {/* Column 1 */}
                <ContainerScrollTranslate
                  yRange={['0%', '-12%']}
                  className="flex flex-1 flex-col gap-4"
                >
                  {IMAGES_1.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <img
                        className="aspect-[4/2.5] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={imageUrl}
                        alt={`Portfolio Gallery Image ${index + 1}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </ContainerScrollTranslate>

                {/* Column 2 */}
                <ContainerScrollTranslate
                  yRange={['0%', '16%']}
                  className="relative -mt-[15%] flex flex-1 flex-col gap-4"
                >
                  {IMAGES_2.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <img
                        className="aspect-[4/2.5] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={imageUrl}
                        alt={`Portfolio Gallery Image ${index + 1}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </ContainerScrollTranslate>

                {/* Column 3 */}
                <ContainerScrollTranslate
                  yRange={['0%', '-12%']}
                  className="hidden flex-1 flex-col gap-4 md:flex"
                >
                  {IMAGES_3.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <img
                        className="aspect-[4/2.5] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={imageUrl}
                        alt={`Portfolio Gallery Image ${index + 1}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </ContainerScrollTranslate>

              </ContainerScrollScale>
            </ContainerScrollInsetX>
          </ContainerScrollTranslate>
        </ContainerScrollAnimation>
      </section>

      {/* Footer info */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-center text-xs text-slate-500">
        <p>
          Crafted for{' '}
          <a
            href="https://md-shadab-azam-ansari.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Md Shadab Azam Ansari
          </a>{' '}
          • Powered by Next.js, Lenis Smooth Scroll, and Motion
        </p>
      </footer>
    </div>
  );
}
