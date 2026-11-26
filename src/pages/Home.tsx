import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleDollarSign, Clock3, Flame, Heart, Medal, ShieldCheck, Sparkles, Target, TrendingUp, Wind, Cigarette, Wine, Gamepad2, Brain, EyeOff, Wallet, Sun, Plus, CalendarDays, History, WifiOff } from 'lucide-react'
import { CategoryCard } from '../components/CategoryCard'
import { FeatureCard } from '../components/FeatureCard'

const categories = [
  { icon: Cigarette, title: 'Smoking & Nicotine', description: 'Track progress towards a smoke-free lifestyle.', tint: 'blue' },
  { icon: Wine, title: 'Alcohol & Substances', description: 'Monitor your personal journey towards reducing or avoiding unwanted habits.', tint: 'rose' },
  { icon: Gamepad2, title: 'Gaming & Entertainment', description: 'Build a healthier relationship with gaming, streaming and screen entertainment.', tint: 'violet' },
  { icon: Brain, title: 'Personal & Behaviour', description: 'Work on procrastination, nail biting, overthinking and other personal behaviours.', tint: 'amber' },
  { icon: EyeOff, title: 'Adult & Private', description: 'Discreet, private tracking of sensitive personal habits.', tint: 'slate' },
  { icon: Wallet, title: 'Money & Risky Activities', description: 'Track progress with gambling, betting, impulsive spending and similar behaviours.', tint: 'green' },
  { icon: Sun, title: 'Lifestyle & Routine', description: 'Develop better sleep, exercise, time management and daily routines.', tint: 'cyan' },
  { icon: Plus, title: 'Custom Habits', description: 'Create and track your own personalised habits.', tint: 'blue' },
]
const highlights = [
  { icon: Clock3, title: 'Live Progress Timer', description: 'See how long you have been working towards your chosen goal.' },
  { icon: Wind, title: 'Multiple Habit Tracking', description: 'Keep separate progress journeys for the habits that matter to you.' },
  { icon: Medal, title: 'Recovery Milestones', description: 'Mark meaningful moments along your personal timeline.' },
  { icon: Sparkles, title: 'Achievement Badges', description: 'Recognise your effort with milestones worth celebrating.' },
  { icon: Flame, title: 'Current & Longest Streaks', description: 'Reflect on your current run and personal best.' },
  { icon: History, title: 'Setback History', description: 'Record setbacks as part of an honest, ongoing progress history.' },
  { icon: CircleDollarSign, title: 'Money Saved Tracking', description: 'Estimate money kept based on the values you choose.' },
  { icon: Target, title: 'Personal Goals', description: 'Set a goal that feels meaningful and personal to you.' },
  { icon: WifiOff, title: 'Offline-First Experience', description: 'Track your journey even when you are away from a connection.' },
]

function DashboardArt() {
  return <div className="dashboard-art" aria-label="Illustration of a sample habit-tracking dashboard, not an actual app screenshot" role="img">
    <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
    <div className="floating-badge badge-left"><span className="mini-icon"><Flame size={16} /></span><span><b>12 days</b><small>and counting</small></span></div>
    <div className="dashboard-window">
      <div className="dash-header"><span className="dash-mark"><span /></span><span>YOUR PROGRESS</span><span className="dash-dots">•••</span></div>
      <div className="dash-greeting"><small>MONDAY, MAY 20</small><h3>A little better, every day.</h3></div>
      <div className="progress-layout"><div className="progress-ring"><div><b>12</b><span>DAYS</span></div></div><div className="progress-copy"><small>SMOKE-FREE JOURNEY</small><b>You're building<br />momentum.</b><span className="dash-positive"><TrendingUp size={13} /> Moving forward</span></div></div>
      <div className="dash-stats"><div><span className="stat-dot blue-dot" /><small>Current streak</small><b>12 days</b></div><div><span className="stat-dot green-dot" /><small>Personal goal</small><b>30 days</b></div></div>
      <div className="dash-chart"><div className="chart-caption"><span>YOUR LAST 7 DAYS</span><span>+ progress</span></div><div className="chart-bars">{[32, 46, 38, 62, 54, 80, 68].map((height, i) => <span key={i} style={{ height: `${height}%` }} className={i === 5 ? 'bar-current' : ''} />)}</div><div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
    </div>
    <div className="floating-badge badge-right"><span className="check-circle"><Check size={15} /></span><span><b>One day at a time</b><small>Progress is personal</small></span></div>
    <div className="art-caption">Concept illustration · Not an app screenshot</div>
  </div>
}

export function Home() {
  return <>
    <section className="hero-section"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot" /> A gentler way forward</span><h1>Take Back Control <span>of Your Habits.</span></h1><p>Quit Anything helps you track your progress, overcome unwanted habits, celebrate milestones and build a healthier lifestyle — one day at a time.</p><div className="hero-actions"><Link className="button" to="/features">Explore Features <ArrowRight size={16} /></Link><Link className="button button-outline" to="/contact">Contact Support</Link></div><div className="hero-trust"><span><ShieldCheck size={16} /> Your journey, your pace</span><span className="trust-divider" /><span>Small steps count</span></div></div><DashboardArt /></div><a className="scroll-hint" href="#introduction"><span>Discover more</span><ArrowDown size={15} /></a></section>
    <section className="intro-section section-pad" id="introduction"><div className="container intro-grid"><div><span className="eyebrow">A tool for your journey</span><h2>One App. Every Habit. <span>A Better You.</span></h2></div><div><p>Whether you want to quit an unwanted habit, reduce unhealthy behaviours or build better daily routines, Quit Anything provides a simple way to monitor your personal journey.</p><Link to="/about" className="text-link">Get to know us <ArrowUpRight size={15} /></Link></div></div></section>
    <section className="why-section section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">Made for real life</span><h2>Progress that feels like yours.</h2></div><p>Personal change isn't always a straight line. Keep your focus on what matters and acknowledge every step.</p></div><div className="why-grid"><FeatureCard icon={TrendingUp} number="01" title="Track Your Progress" description="Get a clearer view of your time, streaks and personal progress—without losing sight of the bigger picture." /><FeatureCard icon={Heart} number="02" title="Celebrate Milestones" description="Give yourself credit for the moments that mark your effort, whether big or small." /><FeatureCard icon={Target} number="03" title="Build Better Habits" description="Set goals that feel right for you and create a routine that supports the life you want." /></div></div></section>
    <section className="category-section section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">Your life, your goals</span><h2>One place for every kind of change.</h2></div><p>Choose a focus that fits your life—or make your own. There is no one-size-fits-all path.</p></div><div className="category-grid">{categories.map((category) => <CategoryCard key={category.title} {...category} />)}</div></div></section>
    <section className="highlights-section section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">Tools for your next step</span><h2>Everything you need to keep going.</h2></div><Link to="/features" className="text-link">View all features <ArrowUpRight size={15} /></Link></div><div className="highlights-grid">{highlights.slice(0, 6).map((feature, i) => <FeatureCard key={feature.title} number={`0${i + 1}`} {...feature} />)}</div><p className="feature-availability-note">Feature descriptions reflect the product information provided and may vary by app version.</p></div></section>
    <section className="steps-section section-pad"><div className="container steps-layout"><div className="steps-heading"><span className="eyebrow">A simple place to start</span><h2>Three steps.<br /><span>Your own pace.</span></h2><p>Meaningful change starts with a decision—not perfection.</p><Link to="/features" className="text-link">Explore the app <ArrowUpRight size={15} /></Link></div><div className="steps-list"><article><span className="step-number">01</span><div><h3>Choose a habit.</h3><p>Pick a focus from the categories or create one that fits your life.</p></div></article><article><span className="step-number">02</span><div><h3>Set your personal goal.</h3><p>Choose a starting time and a goal that feels meaningful to you.</p></div></article><article><span className="step-number">03</span><div><h3>Track and celebrate.</h3><p>Check in with your progress and recognise each milestone along the way.</p></div></article></div></div></section>
    <section className="final-cta-section"><div className="container final-cta"><div className="cta-sparkle"><Sparkles size={23} /></div><span className="eyebrow">Your next step starts here</span><h2>Every Small Step Counts.</h2><p>Your journey towards positive change starts with one decision.</p><Link to="/features" className="button button-white">Explore Quit Anything <ArrowRight size={16} /></Link></div></section>
  </>
}
