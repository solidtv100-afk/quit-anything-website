import { ArrowRight, Mail, Settings2, Trash2, CircleCheck, Info } from 'lucide-react'
import { PageIntro } from '../components/PageIntro'

const steps = [
  { icon: Settings2, title: 'Open Quit Anything.', text: 'Open the installed app on your device.' },
  { icon: Settings2, title: 'Navigate to Settings.', text: 'Look for the settings area in the app.' },
  { icon: Trash2, title: 'Find “Delete All My Data”, if available.', text: 'The option and its location may differ in your installed app version.' },
  { icon: Info, title: 'Review the deletion information.', text: 'Read what the app says will be deleted before proceeding.' },
  { icon: CircleCheck, title: 'Confirm the action.', text: 'If you decide to continue, confirm only after understanding the effect.' },
]

export function DataDeletion() {
  return <><PageIntro eyebrow="Your choices matter" title="Your Data. Your Choice." description="Here is general guidance for managing and deleting information associated with Quit Anything." />
    <section className="section-pad"><div className="container deletion-layout"><div className="deletion-main"><div className="deletion-intro"><span className="icon-tile"><Trash2 size={21} /></span><div><h2>How to delete app data</h2><p>Use the in-app controls when they are available. Follow the specific confirmation and information shown in your version of Quit Anything.</p></div></div><div className="deletion-steps">{steps.map((step, index) => <article className="deletion-step" key={step.title}><span className="deletion-step-icon"><step.icon size={18} /></span><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>{index < steps.length - 1 && <span className="step-connector" />}</article>)}</div><div className="legal-warning deletion-warning"><b>Deletion behaviour depends on implementation</b><p>The exact deletion behaviour depends on the app's actual storage, synchronization and backup implementation. This guide does not promise server-side deletion, permanent removal from backups, or deletion of information held by third parties. Check the in-app explanation and contact support if you need clarification.</p></div></div><aside className="deletion-help"><span className="eyebrow">Need a hand?</span><h2>We're here to help you understand your options.</h2><p>Contact us if you cannot find a deletion option or have a privacy question.</p><a href="mailto:solid.tv.100@gmail.com" className="button">Email Support <Mail size={16} /></a><a className="deletion-email" href="mailto:solid.tv.100@gmail.com">solid.tv.100@gmail.com <ArrowRight size={14} /></a></aside></div></section>
  </>
}
