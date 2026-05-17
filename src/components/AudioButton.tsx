"use client";

type AudioButtonProps = {
  label: string;
  onClick: () => void;
  size?: "sm" | "md";
};

export function AudioButton({ label, onClick, size = "md" }: AudioButtonProps) {
  const sizeClass =
    size === "sm"
      ? "h-9 w-9 text-base"
      : "h-11 w-11 text-lg";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`${sizeClass} flex shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-md shadow-sky-200 transition active:scale-95 hover:bg-sky-600`}
    >
      🔊
    </button>
  );
}
