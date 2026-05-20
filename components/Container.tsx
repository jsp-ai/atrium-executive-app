/**
 * Centered, responsively-padded content column for marketing pages.
 * Anchors content on the viewport centerline so whitespace is symmetric
 * at every width.
 *
 * width: "text" 760 · "mid" 880 · "wide" 1040
 */
export default function Container({
  children,
  width = "text",
  className = "",
}: {
  children: React.ReactNode;
  width?: "text" | "mid" | "wide";
  className?: string;
}) {
  const w =
    width === "wide"
      ? "max-w-[1040px]"
      : width === "mid"
        ? "max-w-[880px]"
        : "max-w-[760px]";
  return (
    <div className={`mx-auto w-full ${w} px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}
