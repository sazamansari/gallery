'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import Lenis from 'lenis';

interface UseSmoothScrollOptions {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  easing?: (t: number) => number;
}
const defaultOptions: UseSmoothScrollOptions = {
  duration: 0.08,
  lerp: 0.1,
  smoothWheel: true,
  touchMultiplier: 2,
  infinite: false,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const lenisRef = React.useRef<Lenis | null>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    // If user prefers reduced motion, do not initialize smooth inertia scroll
    if (shouldReduceMotion) return;

    const mergedOptions = { ...defaultOptions, ...options };

    lenisRef.current = new Lenis({
      duration: mergedOptions.duration,
      lerp: mergedOptions.lerp,
      smoothWheel: mergedOptions.smoothWheel,
      touchMultiplier: mergedOptions.touchMultiplier,
      infinite: mergedOptions.infinite,
      orientation: mergedOptions.orientation,
      gestureOrientation: mergedOptions.gestureOrientation,
      easing: mergedOptions.easing,
    });

    let rafId: number;
    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [options, shouldReduceMotion]);

  return {
    lenis: lenisRef.current,
  };
}

interface ContainerScrollAnimationContextValue {
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}
const ContainerScrollAnimationContext = React.createContext<
  ContainerScrollAnimationContextValue | undefined
>(undefined);

export function useContainerScrollAnimationContext() {
  const context = React.useContext(ContainerScrollAnimationContext);
  if (!context) {
    throw new Error(
      'useContainerScrollAnimationContext must be used within a ContainerScrollAnimationContextProvider',
    );
  }
  return context;
}

export function ContainerScrollAnimation({
  spacerClass,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { spacerClass?: string }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });
  return (
    <ContainerScrollAnimationContext.Provider value={{ scrollYProgress, shouldReduceMotion }}>
      <div ref={scrollRef} className={cn('relative', className)} {...props}>
        {children}
        <div className={cn('w-full h-96', spacerClass)} />
      </div>
    </ContainerScrollAnimationContext.Provider>
  );
}

export function ContainerScrollInsetX({
  insetRange = [48, 0],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { insetRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const xInset = useTransform(scrollYProgress, inputRange, insetRange);
  const dynamicClipPath = useMotionTemplate`inset(0px ${xInset}px)`;
  const clipPath = shouldReduceMotion ? 'inset(0px 0px)' : dynamicClipPath;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollInsetY({
  insetRange = [48, 0],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { insetRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const yInset = useTransform(scrollYProgress, inputRange, insetRange);
  const dynamicClipPath = useMotionTemplate`inset(${yInset}px 0px)`;
  const clipPath = shouldReduceMotion ? 'inset(0px 0px)' : dynamicClipPath;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollInset({
  inputRange = [0, 1],
  insetRangeY = [45, 0],
  insetXRange = [45, 0],
  roundednessRange = [16, 16],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  inputRange?: number[];
  insetRangeY?: number[];
  insetXRange?: number[];
  roundednessRange?: number[];
}) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const insetY = useTransform(scrollYProgress, inputRange, insetRangeY);
  const insetX = useTransform(scrollYProgress, inputRange, insetXRange);
  const roundedness = useTransform(
    scrollYProgress,
    inputRange,
    roundednessRange,
  );

  const dynamicClipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`;
  const clipPath = shouldReduceMotion ? 'inset(0% 0% 0% 0% round 16px)' : dynamicClipPath;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollTranslate({
  yRange = [0, 384],
  inputRange = [0, 1],
  style,
  className,
  ...props
}: HTMLMotionProps<'div'> & { yRange?: (number | string)[]; inputRange?: number[] }) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const y = useTransform(scrollYProgress, inputRange, yRange);
  return (
    <motion.div
      style={shouldReduceMotion ? style : { y, ...style }}
      className={cn('relative', className)}
      {...props}
    />
  );
}

export function ContainerScrollScale({
  scaleRange = [1.2, 1],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { scaleRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const scale = useTransform(scrollYProgress, inputRange, scaleRange);
  return (
    <motion.div
      className={className}
      style={shouldReduceMotion ? style : { scale, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollRadius({
  radiusRange = [9999, 16],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  radiusRange?: number[];
  inputRange?: number[];
}) {
  const { scrollYProgress, shouldReduceMotion } = useContainerScrollAnimationContext();
  const borderRadius = useTransform(scrollYProgress, inputRange, radiusRange);
  return (
    <motion.div
      layout
      className={className}
      style={shouldReduceMotion ? style : { borderRadius, ...style }}
      {...props}
    />
  );
}
