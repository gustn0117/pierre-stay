import ScrollReveal from "./ScrollReveal";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: Props) {
  return (
    <ScrollReveal className="text-center mb-20 md:mb-24">
      <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-warm-500 tracking-wide mb-6">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-4 ornament">
        <div className="w-2 h-2 rotate-45 border border-warm-300" />
      </div>
    </ScrollReveal>
  );
}
