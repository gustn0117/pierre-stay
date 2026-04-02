interface PlaceholderImageProps {
  className?: string;
  label?: string;
}

export default function PlaceholderImage({
  className = "",
  label,
}: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image group ${className}`}>
      {label && (
        <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.15em] text-warm-500 bg-warm-50/70 backdrop-blur-sm px-3 py-1.5 rounded-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}
    </div>
  );
}
