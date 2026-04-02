interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute! inset-0 placeholder-image [&::after]:content-none" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/70" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 md:left-14 w-12 h-12 border-l border-t border-white/20" />
      <div className="absolute bottom-8 right-8 md:right-14 w-12 h-12 border-r border-b border-white/20" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pb-16">
        <p className="text-[10px] tracking-[0.6em] uppercase text-white/50 mb-4 hero-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          {label}
        </p>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-wide text-white hero-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-white/60 mt-4 tracking-wide font-light hero-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
            {subtitle}
          </p>
        )}
        <div className="h-px bg-white/20 mt-8 hero-expand" style={{ animationDelay: "1s", width: 0 }} />
      </div>
    </section>
  );
}
