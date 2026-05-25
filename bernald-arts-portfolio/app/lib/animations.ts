/**
 * Animation utilities and constants
 */

export const animations = {
  // Fade animations
  fadeIn: "animate-fade-in",
  fadeOut: "animate-fade-out",
  fadeInUp: "animate-fade-in-up",
  fadeInDown: "animate-fade-in-down",

  // Scale animations
  scaleIn: "animate-scale-in",
  scaleOut: "animate-scale-out",

  // Slide animations
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  slideInUp: "animate-slide-in-up",
  slideInDown: "animate-slide-in-down",

  // Duration classes
  duration200: "duration-200",
  duration300: "duration-300",
  duration500: "duration-500",
  duration700: "duration-700",

  // Ease classes
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
};

/**
 * Animation variants for Framer Motion or similar libraries
 */
export const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  },
};

/**
 * Apply animation on scroll
 */
export function observeOnScroll(
  element: HTMLElement,
  callback: () => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1,
    ...options,
  });

  observer.observe(element);
  return observer;
}
