"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Gallery data ─── */
export interface GalleryItem {
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

interface GalleryCarouselProps {
  items: GalleryItem[];
  autoIntervalMs?: number;
}

/* ─── Vector helper ─── */
class Vec2 {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  lerpTo(v: Vec2, t: number) {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
  }
}

/* ─── RAF loop ─── */
class Raf {
  private rafId = 0;
  private callbacks: { callback: (ctx: { id: string }) => void; id: string }[] = [];
  private counter = 0;

  constructor() {
    this.tick = this.tick.bind(this);
    this.start();
  }

  start() {
    this.tick();
  }

  stop() {
    cancelAnimationFrame(this.rafId);
  }

  private tick() {
    this.callbacks.forEach(({ callback, id }) => callback({ id }));
    this.rafId = requestAnimationFrame(this.tick);
  }

  add(callback: (ctx: { id: string }) => void, id?: string) {
    const finalId = id ?? String(this.counter++);
    this.callbacks.push({ callback, id: finalId });
  }

  remove(id: string) {
    this.callbacks = this.callbacks.filter((c) => c.id !== id);
  }
}

/* ─── Tilt effect ─── */
function attachTilt(
  raf: Raf,
  node: HTMLElement,
  targets: HTMLElement[]
): () => void {
  let lerpAmt = 0.06;
  const rotDeg = { current: new Vec2(), target: new Vec2() };
  const bgPos = { current: new Vec2(), target: new Vec2() };
  let rafId = "";

  function ticker({ id }: { id: string }) {
    rafId = id;
    rotDeg.current.lerpTo(rotDeg.target, lerpAmt);
    bgPos.current.lerpTo(bgPos.target, lerpAmt);
    for (const el of targets) {
      el.style.setProperty("--rotX", rotDeg.current.y.toFixed(2) + "deg");
      el.style.setProperty("--rotY", rotDeg.current.x.toFixed(2) + "deg");
      el.style.setProperty("--bgPosX", bgPos.current.x.toFixed(2) + "%");
      el.style.setProperty("--bgPosY", bgPos.current.y.toFixed(2) + "%");
    }
  }

  const onMove = (e: MouseEvent) => {
    lerpAmt = 0.1;
    const ox = (e.offsetX - node.clientWidth * 0.5) / (Math.PI * 3);
    const oy = -(e.offsetY - node.clientHeight * 0.5) / (Math.PI * 4);
    rotDeg.target.set(ox, oy);
    bgPos.target.set(-ox * 0.3, oy * 0.3);
  };

  const onLeave = () => {
    lerpAmt = 0.06;
    rotDeg.target.set(0, 0);
    bgPos.target.set(0, 0);
  };

  node.addEventListener("mousemove", onMove);
  node.addEventListener("mouseleave", onLeave);
  raf.add(ticker);

  return () => {
    node.removeEventListener("mousemove", onMove);
    node.removeEventListener("mouseleave", onLeave);
    raf.remove(rafId);
  };
}

/* ─── Component ─── */
export default function GalleryCarousel({
  items,
  autoIntervalMs = 4000,
}: GalleryCarouselProps) {
  const total = items.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTransitioningRef = useRef(false);

  /* ── Slide navigation ── */
  const changeSlide = useCallback(
    (direction: 1 | -1) => {
      const el = containerRef.current;
      if (!el || isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 800);

      const nextIndex =
        (currentIndexRef.current + direction + total) % total;
      currentIndexRef.current = nextIndex;

      const prevIndex = (nextIndex - 1 + total) % total;
      const afterIndex = (nextIndex + 1) % total;

      const applyAttrs = (
        selector: string,
        currentIdx: number,
        prevIdx: number,
        nextIdx: number
      ) => {
        el.querySelectorAll<HTMLElement>(selector).forEach((node, i) => {
          node.removeAttribute("data-current");
          node.removeAttribute("data-previous");
          node.removeAttribute("data-next");
          if (i === currentIdx) node.setAttribute("data-current", "");
          else if (i === prevIdx) node.setAttribute("data-previous", "");
          else if (i === nextIdx) node.setAttribute("data-next", "");
        });
      };

      applyAttrs(".slide", nextIndex, prevIndex, afterIndex);
      applyAttrs(".slide__bg", nextIndex, prevIndex, afterIndex);
      applyAttrs(".slide-info", nextIndex, prevIndex, afterIndex);

      el.querySelectorAll<HTMLElement>(".gallery-progress__dot").forEach(
        (dot, i) => {
          dot.removeAttribute("data-active");
          if (i === nextIndex) dot.setAttribute("data-active", "");
        }
      );
      
      // Play only the current video, pause the rest
      el.querySelectorAll<HTMLVideoElement>(".slide video").forEach((video, i) => {
        if (i === nextIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    [total]
  );

  /* ── Auto-scroll ── */
  const startAutoScroll = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => changeSlide(1), autoIntervalMs);
  }, [changeSlide, autoIntervalMs]);

  const resetAutoScroll = useCallback(() => {
    startAutoScroll();
  }, [startAutoScroll]);

  /* ── Init tilt + button handlers ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const raf = new Raf();
    const tiltCleanups: (() => void)[] = [];

    const slides = [...el.querySelectorAll<HTMLElement>(".slide")];
    const slidesInfo = [...el.querySelectorAll<HTMLElement>(".slide-info")];

    slides.forEach((slide, i) => {
      const inner = slide.querySelector<HTMLElement>(".slide__inner");
      const infoInner = slidesInfo[i]?.querySelector<HTMLElement>(
        ".slide-info__inner"
      );
      if (inner && infoInner) {
        tiltCleanups.push(attachTilt(raf, slide, [inner, infoInner]));
      }
    });

    startAutoScroll();

    /* Button handlers */
    const btnPrev = el.querySelector<HTMLElement>(".slider--btn__prev");
    const btnNext = el.querySelector<HTMLElement>(".slider--btn__next");

    const handlePrev = () => {
      changeSlide(-1);
      resetAutoScroll();
    };
    const handleNext = () => {
      changeSlide(1);
      resetAutoScroll();
    };

    btnPrev?.addEventListener("click", handlePrev);
    btnNext?.addEventListener("click", handleNext);

    return () => {
      raf.stop();
      tiltCleanups.forEach((d) => d());
      btnPrev?.removeEventListener("click", handlePrev);
      btnNext?.removeEventListener("click", handleNext);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [changeSlide, resetAutoScroll, startAutoScroll]);

  /* ── Attribute helpers for initial render ── */
  const getAttr = (index: number) => {
    if (index === 0) return { "data-current": "" };
    if (index === 1) return { "data-next": "" };
    if (index === total - 1) return { "data-previous": "" };
    return {};
  };

  /* ── Render ── */
  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Blurred background layers */}
      {items.map((item, i) => {
        const isVideo = /\.(mp4|webm|ogg)$/i.test(item.src);
        return (
          <div
            key={`bg-${i}`}
            className="slide__bg"
            style={!isVideo ? { "--bg": `url(${item.src})` } as React.CSSProperties : { background: "#000" }}
            {...getAttr(i)}
          />
        );
      })}

      <div className="slider">
        <button
          className="slider--btn slider--btn__prev"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="slides__wrapper">
          {/* Card slides */}
          <div className="slides">
            {items.map((item, i) => {
              const isVideo = /\.(mp4|webm|ogg)$/i.test(item.src);
              return (
                <div key={`slide-${i}`} className="slide" {...getAttr(i)}>
                  <div className="slide__inner">
                    <div className="slide--image__wrapper">
                      {isVideo ? (
                        <video
                          className="slide--image"
                          src={item.src}
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          className="slide--image"
                          src={item.src}
                          alt={item.title}
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text info */}
          <div className="slides--infos">
            {items.map((item, i) => (
              <div key={`info-${i}`} className="slide-info" {...getAttr(i)}>
                <div className="slide-info__inner">
                  <div className="slide-info--text__wrapper">
                    <div data-title="" className="slide-info--text">
                      <span>{item.title}</span>
                    </div>
                    <div data-subtitle="" className="slide-info--text">
                      <span>{item.subtitle}</span>
                    </div>
                    <div data-description="" className="slide-info--text">
                      <span>{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider--btn slider--btn__next"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Progress dots */}
      <div className="gallery-progress" aria-hidden="true">
        {items.map((_, i) => (
          <div
            key={`dot-${i}`}
            className="gallery-progress__dot"
            {...(i === 0 ? { "data-active": "" } : {})}
          />
        ))}
      </div>
    </div>
  );
}
