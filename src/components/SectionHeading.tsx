// One heading style for every homepage section.
export default function SectionHeading({ eyebrow, title, emphasis }: { eyebrow?: string; title: string; emphasis?: string }) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.25em] text-ayoya-gold mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-serif text-ayoya-brown">
        {title} {emphasis && <span className="italic">{emphasis}</span>}
      </h2>
      <div className="mx-auto mt-4 h-px w-12 bg-ayoya-gold/60" />
    </div>
  );
}
