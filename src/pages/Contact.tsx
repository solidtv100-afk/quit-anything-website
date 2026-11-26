import { Mail, ShieldCheck, Clock3 } from 'lucide-react'
import { PageIntro } from '../components/PageIntro'
import { ContactForm } from '../components/ContactForm'

export function Contact() {
  return <><PageIntro eyebrow="Contact us" title="We're Here to Help." description="Have a question, suggestion or need assistance with Quit Anything? We would love to hear from you." />
    <section className="section-pad"><div className="container contact-layout"><ContactForm /><aside className="contact-aside"><span className="eyebrow">Get in touch</span><h2>We'd love to hear from you.</h2><p>For anything you need, choose the category that fits best and send us a note.</p><a className="contact-email-card" href="mailto:solid.tv.100@gmail.com"><span className="icon-tile"><Mail size={20} /></span><span><small>Official support email</small><b>solid.tv.100@gmail.com</b></span><Mail size={16} className="email-arrow" /></a><div className="contact-assurance"><span><ShieldCheck size={17} /> Privacy questions welcome</span><span><Clock3 size={17} /> We'll get back when we can</span></div><div className="contact-category-list"><b>We can help with</b><span>General support</span><span>Bug reports</span><span>Feature suggestions</span><span>Privacy questions</span><span>Feedback</span></div></aside></div></section>
  </>
}
