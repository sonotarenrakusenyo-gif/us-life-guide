"use client";

type CopyButtonProps = {
  text: string;
  copyKey: string;
  copiedKey: string | null;
  onCopy: (text: string, key: string) => void;
  label?: string;
};

export function CopyButton({
  text,
  copyKey,
  copiedKey,
  onCopy,
  label = "コピー",
}: CopyButtonProps) {
  const copied = copiedKey === copyKey;

  return (
    <button
      type="button"
      onClick={() => onCopy(text, copyKey)}
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
        copied
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {copied ? "✓ コピー済" : `📋 ${label}`}
    </button>
  );
}
