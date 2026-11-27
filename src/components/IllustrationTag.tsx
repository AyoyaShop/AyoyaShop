// The dojo images are AI-generated; they must always be labelled as illustrations.
export default function IllustrationTag({ className = '' }: { className?: string }) {
  return (
    <span className={`absolute bottom-2 right-2 rounded bg-black/55 px-2 py-0.5 text-xs text-white ${className}`}>
      Ảnh minh họa
    </span>
  );
}
