import { Camera } from "./icons";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "4/3",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 transition-colors hover:border-slate-400 ${className}`}
      style={{ aspectRatio }}
    >
      <Camera className="text-slate-400" size={40} />
      <span className="px-4 text-center text-sm text-slate-500">{label}</span>
    </div>
  );
}
