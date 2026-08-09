import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import mapleAwardsImage from "/mapleaward.webp";

const MapleAwardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            <Sparkles size={16} />
            Featured Event
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The{" "}
            <span className="relative inline-block">
              {/* Glow */}
              <span className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />

              {/* Text */}
              <span className="relative text-gradient">Maple Awards</span>
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Celebrating innovation, creativity, and breakthrough ideas in
            Artificial Intelligence and Robotics.
          </p>
        </div>

        {/* Event Card */}
        <div
          ref={sectionRef}
          className={`group relative max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-[0.97]"
          }`}
        >
          {/* Glow */}
          <div
            className={`absolute -inset-1 rounded-[28px] bg-primary/20 blur-2xl transition-opacity duration-1000 ${
              isVisible ? "opacity-60" : "opacity-0"
            }`}
          />

          {/* Card */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            {/* Image */}
            <div
              className={`relative aspect-[4/5] lg:aspect-auto lg:min-h-[650px] overflow-hidden transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <img
                src={mapleAwardsImage}
                alt="The Maple Awards"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.009]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-black shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Featured Event
                </span>
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-primary font-semibold mb-3">
                International Awards
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Maple Awards is an international awards program dedicated to
                recognizing breakthrough innovations in Artificial Intelligence
                and Robotics. It brings together researchers, startups,
                universities, companies, and innovators from around the world.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold">AI</p>
                  <p className="text-sm text-muted-foreground">
                    Artificial Intelligence
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold">Robotics</p>
                  <p className="text-sm text-muted-foreground">
                    Future Technologies
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://themapleawards.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex w-fit items-center gap-3 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                Explore The Maple Awards
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapleAwardsSection;
