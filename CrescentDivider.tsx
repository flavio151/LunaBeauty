interface CrescentDividerProps {
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Semnătura vizuală a brandului: o semilună subțire, desenată ca traseu SVG.
 * Marchează tranziția dintre secțiuni — ecoul discret al numelui „Luna".
 */
export default function CrescentDivider({
  tone = "dark",
  className = "",
}: CrescentDividerProps) {
  const stroke = tone === "light" ? "#D9BC85" : "#C6A15B";

  return (
    <div
      className={`flex items-center justify-center py-2 ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <svg width="72" height="24" viewBox="0 0 72 24" fill="none">
        <path
          d="M4 12 Q 18 -2 32 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M27 8 A 8 8 0 1 0 27 16 A 6.4 6.4 0 1 1 27 8 Z"
          fill={stroke}
        />
        <path
          d="M40 12 Q 54 -2 68 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
