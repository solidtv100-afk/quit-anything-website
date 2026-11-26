import type { LucideIcon } from 'lucide-react'

export function FeatureCard({ icon: Icon, title, description, number }: { icon: LucideIcon; title: string; description: string; number?: string }) {
  return <article className="feature-card"><div className="feature-card-top"><span className="icon-tile"><Icon size={21} strokeWidth={1.8} /></span>{number && <span className="card-number">{number}</span>}</div><h3>{title}</h3><p>{description}</p></article>
}
