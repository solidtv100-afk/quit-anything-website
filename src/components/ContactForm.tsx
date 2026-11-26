import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, MessageSquareText } from 'lucide-react'

const supportEmail = 'solid.tv.100@gmail.com'

export function ContactForm() {
  const [emailReady, setEmailReady] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `[Quit Anything] ${String(data.get('subject') || 'Support request')}`
    const body = `Name: ${data.get('name')}\nReply email: ${data.get('email')}\nCategory: ${data.get('category')}\n\n${data.get('message')}`
    setEmailReady(true)
    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span className="icon-tile"><MessageSquareText size={20} /></span><div><h2>Send us a message</h2><p>Your email app will open with your message ready to send.</p></div></div>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
    <div className="form-row"><label>Category<select name="category" defaultValue="General Support"><option>General Support</option><option>Bug Reports</option><option>Feature Suggestions</option><option>Privacy Questions</option><option>Feedback</option></select></label><label>Subject<input name="subject" required placeholder="How can we help?" /></label></div>
    <label>Message<textarea name="message" required rows={5} placeholder="Tell us a little more..." /></label>
    <button className="button" type="submit">Send Message <ArrowUpRight size={16} /></button>
    {emailReady && <p className="form-note" role="status">Your email application should open now. If it did not, email us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>}
    <p className="form-privacy"><Mail size={14} /> No form data is sent to this website. Your email application handles the message.</p>
  </form>
}
