import type { LucideIcon } from 'lucide-react'

export function PageIntro({ eyebrow, title, description, icon: Icon }: { eyebrow: string; title: string; description: string; icon?: LucideIcon }) {
  return <section className="page-intro"><div className="container page-intro-inner"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{Icon && <div className="page-intro-icon" aria-hidden="true"><Icon size={34} strokeWidth={1.6} /></div>}</div></section>
}
