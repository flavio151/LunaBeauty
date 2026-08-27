export default function MoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.8 2.2A7 7 0 1 0 15.8 15.8 8.6 8.6 0 0 1 11.8 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
