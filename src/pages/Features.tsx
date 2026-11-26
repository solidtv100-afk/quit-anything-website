import { ArrowUpRight, Clock3, Flag, CircleDot, Target, Trophy, CircleDollarSign, RotateCcw, Plus, History, EyeOff, WifiOff, ChartNoAxesColumnIncreasing, Flame, CalendarCheck, ListChecks } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageIntro } from '../components/PageIntro'
import { FeatureCard } from '../components/FeatureCard'

const features = [
  { icon: ListChecks, title: 'Independent habit tracking', description: 'Give each habit its own progress record, so one goal can move at its own pace without affecting another.' },
  { icon: Clock3, title: 'Live progress timer', description: 'See the time elapsed since the start of your personal journey at a glance.' },
  { icon: Flag, title: 'Milestone countdown', description: 'Look ahead to personal milestones and mark the moments that matter to you.' },
  { icon: CircleDot, title: 'Progress ring', description: 'A quick visual overview gives your goal a clear, easy-to-read shape.' },
  { icon: Target, title: 'Personal goals', description: 'Set goals that reflect your own intentions. Your journey does not have to match anyone else’s.' },
  { icon: Trophy, title: 'Achievement tracking', description: 'Recognise meaningful effort and celebrate progress along the way.' },
  { icon: CircleDollarSign, title: 'Money saved or kept', description: 'Optionally estimate money kept using the amounts you provide. Figures are estimates, not financial advice.' },
  { icon: RotateCcw, title: 'Setback recording', description: 'Keep an honest progress history, including setbacks, and decide how you want to move forward.' },
  { icon: Plus, title: 'Custom habits', description: 'Create a personalised habit when the available categories do not quite fit.' },
  { icon: History, title: 'Progress history', description: 'Review past entries to reflect on your personal progress over time.' },
  { icon: EyeOff, title: 'Privacy-minded features', description: 'Sensitive habits are personal. Use discreet habit labels and review the app’s privacy settings and policy.' },
  { icon: WifiOff, title: 'Offline-first tracking', description: 'The product is designed to support tracking when you are offline. Confirm storage and sync behaviour for your installed version.' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Progress at a glance', description: 'Understand your ongoing journey with clear visual summaries and personal statistics.' },
  { icon: Flame, title: 'Streaks', description: 'See your current and longest streak as one way of recognising consistency.' },
  { icon: CalendarCheck, title: 'Milestone moments', description: 'Keep track of your personal achievements and the dates you want to remember.' },
]

export function Features() {
  return <><PageIntro eyebrow="Thoughtful tools, personal progress" title="Features that support your next step." description="A closer look at the tools designed to help you follow your habits and reflect on your progress. Your goals and pace are always your own." />
    <section className="section-pad"><div className="container"><div className="feature-page-note"><span className="icon-tile"><Target size={20} /></span><p>Quit Anything is a habit-tracking tool, not a promise of a particular outcome. Feature availability and data behaviour can differ by app version. See our <Link to="/privacy-policy">Privacy Policy</Link> for details that need verification.</p></div><div className="feature-page-grid">{features.map((feature, i) => <FeatureCard key={feature.title} number={String(i + 1).padStart(2, '0')} {...feature} />)}</div></div></section>
    <section className="feature-bottom-cta"><div className="container bottom-cta-inner"><div><span className="eyebrow">Questions about a feature?</span><h2>We're happy to help.</h2><p>Reach out and tell us what you would like to know.</p></div><Link className="button" to="/contact">Contact Support <ArrowUpRight size={16} /></Link></div></section>
  </>
}
