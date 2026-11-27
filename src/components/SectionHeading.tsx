import type { ReactNode } from 'react';

// One heading style for every homepage section: a small label with a gold rule, then the title.
export default function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-9 max-w-2xl text-center">
      {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
      <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-tight">{title}</h2>
      {children && <p className="mt-2 opacity-80">{children}</p>}
    </div>
  );
}
