import type { LucideIcon } from 'lucide-react'

export function CategoryCard({ icon: Icon, title, description, tint = 'blue' }: { icon: LucideIcon; title: string; description: string; tint?: string }) {
  return <article className="category-card"><span className={`category-icon tint-${tint}`}><Icon size={21} strokeWidth={1.7} /></span><div><h3>{title}</h3><p>{description}</p></div></article>
}
