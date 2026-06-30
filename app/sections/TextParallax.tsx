"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { spaceGrotesk } from "@/app/lib/fonts";

export default function TextParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white border-t border-neutral-900 py-16 md:py-24 z-10">
      <div ref={container} className="flex flex-col gap-6 md:gap-10">
        <Slide
          src="/images/gallery/image01.jpg"
          direction="left"
          left="-40%"
          progress={scrollYProgress}
          text="BERNALD ARTS"
        />
        <Slide
          src="/images/gallery/image02.jpg"
          direction="right"
          left="-25%"
          progress={scrollYProgress}
          text="BERNALD ARTS"
        />
        <Slide
          src="/images/gallery/image04.jpg"
          direction="left"
          left="-75%"
          progress={scrollYProgress}
          text="BERNALD ARTS"
        />
      </div>
    </section>
  );
}

const Slide = (props: {
  src: string;
  direction: "left" | "right";
  left: string;
  progress: MotionValue<number>;
  text: string;
}) => {
  const direction = props.direction === "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
    </motion.div>
  );
};

const Phrase = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="px-3 md:px-5 flex gap-3 md:gap-5 items-center">
      <p className={`text-[9vw] md:text-[7.5vw] font-black uppercase tracking-wider leading-none text-white/90 ${spaceGrotesk.className}`}>
        {text}
      </p>
      <span className="relative h-[8vw] md:h-[6vw] aspect-[4/2] rounded-full overflow-hidden shrink-0 border-[2px] border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <Image
          className="object-cover transition-transform duration-700 hover:scale-110"
          src={src}
          alt="Parallax art showcase"
          fill
          sizes="(max-width: 768px) 30vw, 20vw"
        />
      </span>
    </div>
  );
};
