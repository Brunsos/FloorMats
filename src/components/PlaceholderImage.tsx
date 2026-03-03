import { Camera } from "./icons";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-3 bg-slate-200 ${className}`}
      style={{ aspectRatio }}
    >
      <Camera className="text-slate-400" size={36} />
      <span className="px-4 text-center text-sm font-medium text-slate-400">
        {label}
      </span>
    </div>
  );
}
