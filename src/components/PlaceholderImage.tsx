interface PlaceholderImageProps {
  className?: string;
  label?: string;
  style?: React.CSSProperties;
}

export default function PlaceholderImage({
  className = "",
  label,
  style,
}: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image group ${className}`} style={style}>
      {label && (
        <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.15em] text-warm-500 bg-warm-50/70 backdrop-blur-sm px-3 py-1.5 rounded-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}
    </div>
  );
}
